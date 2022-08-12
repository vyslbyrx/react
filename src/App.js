import { Link,Outlet} from "react-router-dom"
import './App.css';
import {useEffect, useState} from "react";

export function Home() {
    return(
        <div>
            <nav className={'navMenu'}>
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/contactus" >Contact</Link>
                <Link to="/about/history" >History</Link>
                <Link to="/form-validate" >Form Validate</Link>
                <div className="dot"></div>
            </nav>
            <h1>My Home</h1>
        </div>
    )
}

export function FormValidate() {
    let userName;
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [mail, setMail] = useState("");
    const [error, setError] = useState(false);
    const [welcome,setWelcome] = useState(false);

    const users = [
        {
            name: "Veysel BAYAR",
            user: "vysl",
            mail: "vysl@gmail.com",
            password: "12345"
        },
        {
            name: "Veysel2 BAYAR",
            user: "vysl2",
            mail: "vysl2@gmail.com",
            password: "12345"
        },
        {
            name: "Veysel4 BAYAR",
            user: "vysl4",
            mail: "vysl4@gmail.com",
            password: "12345"
        },
        {
            name: "Veysel5 BAYAR",
            user: "vysl5",
            mail: "vysl5@gmail.com",
            password: "12345"
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        const acceptUser = users.filter(x => x.user === user && x.mail === mail && x.password === password);
        userName = acceptUser[0];
        acceptUser.length === 0 && setError(true)
        acceptUser.length === 1 && setWelcome(true)
        acceptUser.length === 1 && setError(false)

    }

    return(
        <>
            {!welcome && <div>Example Users</div>}
            {!welcome && JSON.stringify(users)}
            {!welcome && <form className="form-validate" onSubmit={handleSubmit}>

                <label className="input">
                    <span className="input_label">User</span>
                    <input type="text" onChange={(e) => setUser(e.target.value)}/>
                </label>
                <label className="input">
                    <span className="input_label">Mail</span>
                    <input type="mail" onChange={(e) => setMail(e.target.value)}/>
                </label>
                <label className="input">
                    <span className="input_label">Password</span>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>

                </label>
                <div>
                    <button>Giriş</button>
                </div>

            </form>}
            {error && <div>There is an error somewhere</div>}
            {welcome && <h1>Welcome {user}</h1>}
        </>
    )



}

export function AddBasket() {

}

export function About() {
    useEffect(() => {
        const id = document.querySelector(".js--slider").dataset.id;
        console.log(id)
    }, []);

    return(
        <div>
            <nav className={'navMenu'}>
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/contactus" >Contact</Link>
                <Link to="/about/history" >History</Link>
                <div className="dot"></div>
            </nav>
            <Outlet />
            <h1 className="js--slider" data-id="thisId">About Us</h1>

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
            <nav className={'navMenu'}>
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/contactus" >Contact</Link>
                <Link to="/about/history" >History</Link>
                <div className="dot"></div>
            </nav>
            <h1>Contact Us</h1>
        </div>
    )
}

export function App() {
  return (
    <div className="App">
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/about/history" >History</Link>
            <h1>Merbaa Reizzz</h1>
    </div>
  );
}


