"use client";
import { Main } from "../../components/main";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
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
   console.log('login: '+login)
    }, []);
      return (
        <Main data={login}/>
      );
}
