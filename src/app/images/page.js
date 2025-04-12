"use client"
import { Nav } from "../../../components/nav";
import { Files } from "../../../components/files";
export default function Images(){
    return(
        <div>
            <Nav/>
           <h2>Images</h2>
           <Files type="image"/>
        </div>
    );
}