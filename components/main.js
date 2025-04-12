"use client";
import styles from "../src/app/page.module.css";
import { Nav } from "./nav";
import { Download } from "./download";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Main(props){
 
    return(
       
        <div className={styles.bodyMain}>
           <h1 className="fw-bold">File storage</h1>
        {props.data=='' ||
               <h3 className="fw-bold">{props.data}</h3>
        }
           <Nav/>
           <Download/>
        </div>
    );
}