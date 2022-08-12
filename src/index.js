import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {About,Contact,Home,History,App} from "./App"

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <BrowserRouter>
        <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
            <Route path="history" element={<History/>}/>
            </Route>
            <Route path="/contactus" element={<Contact />} />

        </Routes>
    </BrowserRouter>

);

