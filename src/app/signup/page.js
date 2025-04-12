"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import { PostUser } from '../../../api/users';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function Signup(){
  const router = useRouter();
    let lRef = useRef(null);
    let pRef = useRef(null);
    let [result, setResult] = useState("");

    async function postUser() {
         let ansver = await PostUser(lRef.current.value, pRef.current.value);
         setResult(ansver);
         if(ansver==''){
          localStorage.clear();
          localStorage.setItem('login', lRef.current.value);
          router.push('/');
        }
      }
         // обработчик отправки формы
         function onFormSubmit(event) {
            setResult("")
            event.preventDefault();
            postUser();
         }
    return(
        <form onSubmit= {onFormSubmit}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card">
                <div className="card-body p-5 text-center gradient-custom2">
      
                  <div className="mb-md-5 mt-md-4 pb-5">
      
                    <h2 className="fw-bold mb-2 text-uppercase">Регистрация</h2>
      
                    <div className="form-outline form-white mb-4">
                      <input type="email" id="typeEmailX" className="form-control form-control-lg" required ref={lRef}/>
                      <label className="form-label" htmlFor="typeEmailX">Email</label>
                    </div>
      
                    <div className="form-outline form-white mb-4">
                      <input type="password" id="typePasswordX" className="form-control form-control-lg" required ref={pRef}/>
                      <label className="form-label" htmlFor="typePasswordX">Password</label>
                    </div>
      
                    <button className="btn btn-secondary" type="submit" id="loginSubmit">Создать</button>
                  </div>
                  <h3>{ result }</h3>
                  <div>
                    <p className="mb-0">Уже есть аккаунт? <Link href="/login">Login</Link> </p>
                  </div>
      
                </div>
              </div>
            </div>
          </div>
        </div>
    </form>
    );
}