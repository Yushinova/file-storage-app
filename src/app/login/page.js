"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState, useEffect } from "react";
import { GetUser } from '../../../api/users';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login(){
    const router = useRouter();
    let lRef = useRef(null);
    let pRef = useRef(null);
    let [result, setResult] = useState("");

    async function getUser() {
      let user = await GetUser(lRef.current.value, pRef.current.value);
      if(user==null){
        setResult("Login error")
        return
      }
        //добавление в 
        localStorage.clear();
        localStorage.setItem('login', lRef.current.value);
        //перенапраление на главную
        router.push('/');
    }

     // обработчик отправки формы
     function onFormSubmit(event) {
        setResult("")
        event.preventDefault();
        getUser();

}
    return(
        <form onSubmit= {onFormSubmit}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card">
                <div className="card-body p-5 text-center gradient-custom2">
      
                  <div className="mb-md-5 mt-md-4 pb-5">
      
                    <h2 className="fw-bold mb-2 text-uppercase">Вход</h2>
      
                    <div className="form-outline form-white mb-4">
                      <input type="email" id="typeEmailX" className="form-control form-control-lg" required ref={lRef}/>
                      <label className="form-label" htmlFor="typeEmailX">Email</label>
                    </div>
      
                    <div className="form-outline form-white mb-4">
                      <input type="password" id="typePasswordX" className="form-control form-control-lg" required ref={pRef}/>
                      <label className="form-label" htmlFor="typePasswordX">Password</label>
                    </div>
      
                    <button className="btn btn-secondary" type="submit" id="loginSubmit">Войти</button>
                  </div>
                  <h3>{ result }</h3>
                  <div>
                    <p className="mb-0">Еще нет аккаунта? <Link href="/signup">Signup</Link>
                    </p>
                  </div>
      
                </div>
              </div>
            </div>
          </div>
        </div>
    </form>
    );
}