import { supabase } from "../utils/supabase";
//работа с корзиной
const BACKETNAME = 'file-storage-app-backet';
//доавление файла word exel не добавляет!
export async function UploadFile(file){
    try{
        const { data, error } = await supabase
       .storage
       .from(BACKETNAME)
       .upload(file.name, file)
      return error;
    }
    catch(err){
        console.log('err: '+err);
        return err;
    }
}
//get public url
export async function GetPublicUrl(fileName) {
    try{
        const { data } = supabase
        .storage
        .from(BACKETNAME)
        .getPublicUrl(fileName) 
       // console.log(data.publicUrl)
        return data.publicUrl
    }
    catch(err){
        console.log('err: '+err);
        return err.message;
    }
}

//удаление
export async function DeleteFromStorage(path){
    try{
        const { data, error } = await supabase
        .storage
        .from(BACKETNAME)
        .remove([path])
      return error;
    }
    catch(err){
        console.log('err: '+err);
        return err;
    }
}
//получаем blop файл и далее используем по назначению
//можно преобразовать файл и встроить в элемент страницы, задать img, фон и тд
export async function DownloadFromStorage(path){
    try{
        const { data, error } = await supabase
        .storage
        .from(BACKETNAME)
        .download(path);
        return data;
    }
    catch(err){
        console.log('err: '+err);
        return err;
    }
}
