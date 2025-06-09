"use client";
import { Main } from "../../components/main";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Home() {
  const router = useRouter();
 // const searchParams = useSearchParams();
  let [login, setLogin] = useState('');
  useEffect(() => {
    //localStorage.clear();
    let login = localStorage.getItem('login');
    setLogin(login);
   if(login==null){
    router.push('/login');
   }
   //console.log('login: '+login)
    }, []);
      return (
        <Main data={login}/>
      );
}
