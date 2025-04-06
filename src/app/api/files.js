import { supabase } from "../utils/supabase";
//доавление файла в ведерко
export async function PostFile(login, fileName, url, type){
    try{
       
        const { error} = await supabase.from('files').insert({name: fileName, url: url, user_login: login, type: type});
        if(error!=null){
        console.log("add file error:"+error.message)
      }
    }
    catch(err){
        console.log('err: '+err);
        return err;
    }
}
//получение файлов по логину юзера
export async function GetFiles(login){
  try{
    //пытаемся получить файлы из базы по логину юзера
    const { data, error } = await supabase.from('files').select('*').eq('user_login', login);
    if(error!=null){
        console.log(error.message)
        return null;
    }
    //парсим юзера из data
    let files = []
    files = Array.from(data)
    console.table(files);
    return files;
  }
  catch(err){
    console.log('err: '+err);
    return null;
  }
}