import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home, FormValidate, AllExamples, Counter, CheckBoxControl, Rating} from "./App"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/allExamples" element={<AllExamples />} >
                <Route path="form-validate" element={<FormValidate />} />
                <Route path="counter" element={<Counter />} />
                <Route path="checkbox" element={<CheckBoxControl />} />
                <Route path="rating" element={<Rating />} />
            </Route>

        </Routes>
    </BrowserRouter>

);

