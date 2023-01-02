import React from "react"
import  ReactDOM from "react-dom/client"
import {BrowserRouter as Router} from "react-router-dom"
import { HomePage } from "./feature/pages/homePage";
import { Header } from "./infrastructure/components/header/header";



const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
    <Router>
        <Header></Header>
        <HomePage></HomePage>
    </Router>
    </React.StrictMode>

)


