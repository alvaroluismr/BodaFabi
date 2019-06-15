import React from "react"
import Layout from "../components/layout"
import Rosas from "../img/rosas.jpg"
import SugerenciasStyle from "./cuerpo.module.css"

export default () => (
    <Layout>
        <div className={ SugerenciasStyle.contenedortexto }>
            <form method="post" action="mailto:estopato@gmail.com">
            <div className={ SugerenciasStyle.texto }>
                <p>
                    ¿Tienes alguna idea o sugerencia para la celebración? No dudes en hacernosla saber, estaremos encantados de escucharlas.
                </p>
                <textarea rows="5" cols="30">
                </textarea>
                <div><input type="submit" value="Enviar"></input></div>
            </div>
            </form>
        </div>
        <div style={{ margin: '3rem auto', maxWidth: 650, padding: '0 1rem', textAlign: 'center' }}>
            <figure style={{ marginTop: '1rem' }}>
                <img className={SugerenciasStyle.hobbiton} src={Rosas} alt="Rosas"/>
            </figure>
        </div>
    </Layout>
)
