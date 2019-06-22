import React from "react"
import Layout from "../components/layout"
import Canciform from "../components/canciform"
import notas from "../img/notas.jpg"
import SugerenciasStyle from "./cuerpo.module.css"

export default () => (
    <Layout>
        <div className={ SugerenciasStyle.contenedortexto }>
            <form name="sugerencias" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="sugerencias" />
            <div className={ SugerenciasStyle.texto }>
                <p>
                    ¿Tienes alguna idea o sugerencia para la celebración? No dudes en hacernosla saber, estaremos encantados de escucharlas.
                </p>
                <textarea name="mensaje" className={SugerenciasStyle.entradas} rows="5" cols="30">
                </textarea>
                <div><input type="submit" value="Enviar"></input></div>
            </div>
            </form>
        </div>
        <Canciform />
        <div style={{ margin: '3rem auto', maxWidth: 650, padding: '0 1rem', textAlign: 'center' }}>
            <figure style={{ marginTop: '1rem' }}>
                <img className={SugerenciasStyle.foto} src={notas} alt="notas"/>
            </figure>
        </div>
    </Layout>
)
