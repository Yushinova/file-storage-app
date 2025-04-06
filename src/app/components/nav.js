"use client"
import Link from "next/link";
export function Nav() {
    return(
<ul className="nav justify-content-center fs-2">
  <li className="nav-item">
    <Link className="nav-link active" href="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active" href="/images">Images</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active" href="/documents">Documents</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active" href="/videos">Videos</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active" href="/all">All files</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active" href="/login">Login</Link>
  </li>
</ul>
    );
}