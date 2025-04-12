import { supabase } from "../../../utils/supabase";
//доавление юзера
export async function PostUser(login, password){
    try{
        //пытаемся получить юзера из базы по логину
        const {data} = await supabase.from('users').select('*').eq('login', login);
        if(data==''){
            //добавляем нового юзера
            const { error} = await supabase.from('users').insert({login: login, password: password});
            return '';
        }
        return 'Such a login exists!';
    }
    catch(err){
        console.log('err: '+err);
        return err;
    }
}
//получение юзера по логину
export async function GetUser(login, password){
  try{
    //пытаемся получить юзера из базы по логину
    const { data, error } = await supabase.from('users').select('*').eq('login', login);
    if(error!=null){
        return null;
    }
    //парсим юзера из data
    let user = JSON.stringify(data.at(0));
    user = JSON.parse(user);
    console.log('id: '+ user.id+' login: '+user.login+' password: '+user.password);
    if(user.password!==password){
       return null;
    }
    return user;
    
  }
  catch(err){
    console.log('err: '+err);
    return null;
  }
}