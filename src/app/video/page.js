"use client";
import { Nav } from "../../../components/nav";
import { Files } from "../../../components/files";
export default function Video(){
    return(
        <div>
            <Nav/>
           <h2>Video</h2>
           <Files type="video"/>
        </div>

    );
}