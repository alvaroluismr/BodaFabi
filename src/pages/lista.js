import React from "react"
import Layout from "../components/layout"
import indicacionesStyle from "./indicaciones.module.css"
import timon from "../img/argentina.jpg"

export default () => (
    <Layout>
        <div style={{ margin: '3rem auto', /*maxWidth: '850px',*/ padding: '0 1rem' }}>
            <div className={indicacionesStyle.row}>
                <div className={indicacionesStyle.colum}>
                    <div className={indicacionesStyle.texto} >
                        
                        <p>Nuestro mayor regalo es vuestra presencia, pero si queréis ayudarnos a tener una inolvidable luna de miel:</p>
                        <h1 className={indicacionesStyle.minititulo}>ES26 0073 0100 5505 9851 1185</h1>
                    </div>
                    <div className={indicacionesStyle.marcofoto}>
                        <img className={indicacionesStyle.foto} src={timon} alt="Restaurante El Timón de Roche" />
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)
