import  Style from "./footer.module.css"

export function Footer () {
    return <footer className={Style.containerFooter}><nav className={Style.footerNav}><a href="#">Contactanos</a>
           <a href="#">Quienes Somos</a>
           <a href="#">Instagram</a>
           <a href="#">Suscribete</a></nav>
           </footer>
};