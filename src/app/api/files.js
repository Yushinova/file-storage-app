import { supabase } from "../../../utils/supabase";
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
//удаление файла
export async function DelFile(name) {
  try{
    const response = await supabase.from('files').delete().eq('name', name);
    return null;
}
catch(err){
    console.log('err: '+err);
    return err;
}
}
//установка файлов по props
const typeImage = ["jpg", "jpeg", "png", "tif", "gif"];
const typeVideo = ["mp4", "avi", "mov", "wmv"]
const typeAudio = ["mp3", "wav", "ogg"]
export async function SetFilesOnType(user, type) {
  let files = await GetFiles(user);
  let sortFies = [];
 switch (type) {
  case "all":
    return files;
    break;
 case "image":
  files.forEach(file=>{
    if(typeImage.find(type=>type==file.type)){
      sortFies.push(file);
    }
  })
  return sortFies;
  break;
  case "video":
    files.forEach(file=>{
      if(typeVideo.find(type=>type==file.type)){
        sortFies.push(file);
      }
    })
    return sortFies;
    break;
    case "audio":
      files.forEach(file=>{
        if(typeAudio.find(type=>type==file.type)){
          sortFies.push(file);
        }
      })
      return sortFies;
      break;
      case "doc":
        files.forEach(file=>{
          if(typeAudio.find(type=>type==file.type)==undefined
             && typeVideo.find(type=>type==file.type)==undefined
             && typeImage.find(type=>type==file.type)==undefined){
            sortFies.push(file);
          }
        })
        return sortFies;
        break;
  default:
    break;
 }
}