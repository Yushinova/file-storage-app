"use client";
import { Nav } from "../../../components/nav";
import { Files } from "../../../components/files";
export default function Documents(){
    return(
        <div>
            <Nav/>
           <h2>Documents</h2> 
           <Files type="doc"/>
        </div>
    );
}