"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "../components/nav";
import { GetFiles } from "../api/files";
import { useEffect, useState } from "react";

 export default function All(){
   //инициализация массива файлов пользователя
  let  [files, setFiles] = useState([])
  //отменяем переход по ссылке и создаем новое окно для просмотра файла
  function handleClick(event){
   event.preventDefault()
   const anchor = event.target.closest("a");   // Find closest Anchor (or self)
  if (!anchor) return;                        // Not found. Exit here.
  window.open(anchor.getAttribute('href'));
  }
  //получаем все файла авторизованного пользователя
  async function setAll() {
    let user = localStorage.getItem('login');
    setFiles(await GetFiles(user));
  }
 useEffect(() => {
   setAll();
    }, []);

    return (
        <div>
            <Nav/>
           <h2>All files</h2>
           <div className='allFiles'>
           {files.map((element)=>(
            <div key={element.id} className='fileElement'>
               <a onClick={handleClick} href={element.url}>{element.name}</a>
               <button type='button' className='btn btn-primary buttonElement'>Download</button>
               <button type='button' className='btn btn-secondary buttonElement'>Delete</button>
            </div>
           ))}
           </div>
        </div>
    );
 }