"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "../components/nav";
import { GetFiles, DelFile, SetFilesOnType } from "../api/files";
import { DeleteFromStorage, DownloadFromStorage } from '../api/storage';
import { useEffect, useState } from "react";

 export function Files(props){
 let type = props.type;
   //инициализация массива файлов пользователя
  let  [files, setFiles] = useState([])

  //отменяем переход по ссылке и создаем новое окно для просмотра файла
  function handleClick(event){
   event.preventDefault()
   const anchor = event.target.closest("a");   // Find closest Anchor (or self)
  if (!anchor) return;                        // Not found. Exit here.
  window.open(anchor.getAttribute('href'));
  }

  //удвление файла из базы данных и из ведерка
  async function handleDel(event) {
    let name = event.target.getAttribute('id');
    console.log("name:"+name)
    let ansver = await DelFile(name);
    if(ansver==null){
     // удаляем из ведерка файл по названию
     ansver = await DeleteFromStorage(name);
    }
    //переустановить map
    await setAll();
  }
  //download
  async function handleDownload(event){
    let name = event.target.getAttribute('id');
    //получаем blop
    let file = await DownloadFromStorage(name);
    console.log(file);
  }
  //получаем все файла авторизованного пользователя
  async function setAll() {
    let user = localStorage.getItem('login');
    setFiles(await SetFilesOnType(user, type));
  }
 useEffect(() => {
   setAll();
    }, []);

    return (
           <div className='allFiles'>
           {files.map((element)=>(
            <div key={element.id} className='fileElement'>
               <a onClick={handleClick} href={element.url}>{element.name}</a>
               <button type='button' className='btn btn-primary buttonElement' id={element.name} onClick={handleDownload}>Download</button>
               <button type='button' className='btn btn-secondary buttonElement' id={element.name} onClick={handleDel}>Delete</button>
            </div>
           ))}
           </div>
    );
 }