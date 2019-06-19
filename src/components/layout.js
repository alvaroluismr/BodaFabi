import React from "react"
import layoutStyle from "./layout.module.css"
import { Link } from "gatsby"

const ListLink = props => (
    /*<li className={layoutStyle.listItem}>*/
        <Link className={layoutStyle.links} to={props.to}>{props.children}</Link>
    /*</li>*/
)

export default ({ children }) => (
    <div className={layoutStyle.todo}>
        <nav className={layoutStyle.menu}>
            {/*<ul className={layoutStyle.listmenu}>*/}
                <ListLink to="/">Bienvenidos</ListLink>
                <ListLink to="/confirmacion/">Confirmación</ListLink>
                <ListLink to="/indicaciones/">Indicaciones</ListLink>
                <ListLink to="/sugerencias/">Sugerencias</ListLink>
            {/*</ul>*/}
        </nav>
        <header>
        <div className={layoutStyle.cabecera}>
            <div className={layoutStyle.titulohead}>
                <div className={layoutStyle.lazo}>
                <h1>¡NOS CASAMOS!</h1>
                </div>
            </div>
            <div className={layoutStyle.titulohead}>
                <div className={layoutStyle.lazo}>
                <h1>¡06/09/2019!</h1>
                </div>
            </div>
        </div>
        
        </header>
        <div className={layoutStyle.contenido}>
        {children}
        </div>
        <footer className={layoutStyle.pie}>
            <div className={layoutStyle.contacto}>
                <p>Información de contacto:</p>
                <p>Dani - 600 245 658</p>
                <p>Fabi - 627 775 509 </p>
            </div>
            <div className={layoutStyle.autor}>
                <p>Autor:</p>
                <p>Alvaro Luis Martínez Romero (alvaroluismr@gmail.com)</p>
            </div>
        </footer>
    </div>
)