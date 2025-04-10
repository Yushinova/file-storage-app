"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Loading} from "./loading";
import { useEffect, useRef, useState } from 'react';
import { supabase } from "../utils/supabase"
import { UploadFile, GetPublicUrl } from '../api/storage';
import { PostFile } from '../api/files';
//upload 
export function Download() {
  let [fileInput, setFile] = useState(null)
  let [result, setResult] = useState('')
  const [loading, setLoading] = useState(false);
  //достаем данные из input
 async function handleChange (event) {
console.log("file:"+event.target.files)
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0])
    }
  };
  //очистить данные input
function handleCklick(){
  document.getElementById('inputGroupFile02').value = ''
}
//загрузка файла и добавление его в базу данных
async function onFormSubmit (event) {
    event.preventDefault();
    setResult("");
    setLoading(true);
   try{
    //загрузка файла в storage
    let err = await UploadFile(fileInput)
    if(err!=null){
      setResult(err.message);
      return
    }
    setResult("The file was added successfully")
    //получить активную ссылку для просмотра файла
   let url = await GetPublicUrl(fileInput.name)
   let user = localStorage.getItem('login');
   let type = fileInput.name.split('.').pop();
     //добавление файла в базу данных 
   await PostFile(user, fileInput.name, url, type)
   }
   catch(err){
    setResult(err)
    return
   }
   finally{
    setLoading(false);
   }
  };
    return(
<div className="downloadDiv" onSubmit={onFormSubmit}>
   <form className="downloadForm" >
     <div className="input-group mb-3">
        <input type="file" className="form-control" id="inputGroupFile02" 
         onChange={handleChange}/>
        <button className="btn btn-outline-secondary" type="button" id="button-addon2"
        onClick={handleCklick}>Clear</button>
       </div>
       <button type="submit" className="btn btn-secondary downloadBtn">Download</button>
    </form> 
    <Loading isloading={loading}/>
    <h3>{result}</h3>
</div>
    );
}