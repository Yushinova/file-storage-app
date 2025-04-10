"use client";
import { Nav } from "../components/nav";
import { Files } from "../components/files";
export default function Audio(){
    return(
        <div>
            <Nav/>
           <h2>Audio</h2>
           <Files type="audio"/>
        </div>
    );
}