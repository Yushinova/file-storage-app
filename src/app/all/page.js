"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Files} from '../components/files';
import { Nav } from '../components/nav';
 export default function All(){
    return (
      <div>
        <Nav/>
        <h2>All files</h2>
       <Files type="all"/>
      </div>

    );
 }