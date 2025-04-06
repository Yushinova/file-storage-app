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
        console.log(data.publicUrl)
        return data.publicUrl
    }
    catch(err){
        console.log('err: '+err);
        return err.message;
    }
}

//удаление
