"use client";
import { Main } from "./components/main";
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
    let user = localStorage.getItem('login');
    setLogin(localStorage.getItem('login'));
   if(user===''){
    router.push('/login');
   }
   console.log('login: '+login)
    }, []);
      return (
        <Main data={login}/>
      );
}
