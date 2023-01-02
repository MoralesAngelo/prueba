import React from "react"
import  ReactDOM from "react-dom/client"
import {BrowserRouter as Router} from "react-router-dom"
import { HomePage } from "./feature/pages/homePage";
import { Footer } from "./infrastructure/components/footer/footer";
import { Header } from "./infrastructure/components/header/header";
import "./index.css"
import  Style  from "./infrastructure/components/header/header.module.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
    <Router>
        <Header/>
       <main><HomePage/></main>
        <Footer/>
    </Router>
    </React.StrictMode>

);


