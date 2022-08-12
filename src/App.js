import { Link,Outlet} from "react-router-dom"

import './App.css';


export function Home() {
    return(
        <div>
            <Link to="/about" >About</Link>
            <Link to="/contactus" >Contact</Link>
            <Link to="/about/history" >History</Link>
            <h1>My Home</h1>
        </div>
    )
}

export function About() {
    return(
        <div>
            <Link to="/" >Home</Link>
            <Link to="/contactus" >Contact</Link>
            <Link to="/about/history" >History</Link>
            <Outlet />
            <h1>About Us</h1>

        </div>
    )
}

export function History() {
    return(
        <div>
            <h1>Geçmişimiz sayfası Hakkımızda Sayfasının bir alt sayfasıdır</h1>
        </div>
    )
}

export function Contact() {
    return(
        <div>
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/about/history" >History</Link>
            <h1>Contact Us</h1>
        </div>
    )
}

export function App() {


  return (
    <div className="App">
        <Link to="/home" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/about/history" >History</Link>
<h1>Merbaa Reizzz</h1>
    </div>
  );
}


