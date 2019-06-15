import React from "react"
import Layout from "../components/layout"
import indicacionesStyle from "./indicaciones.module.css"
import timon from "../img/timon.jpg"

export default () => (
    <Layout>
        <div style={{ margin: '3rem auto', /*maxWidth: '850px',*/ padding: '0 1rem' }}>
            <div className={indicacionesStyle.row}>
                <div className={indicacionesStyle.colum}>
                    <div className={indicacionesStyle.texto} >
                        <h1 className={indicacionesStyle.minititulo}>Ceremonia</h1>
                        <p>El sitio esta localizado en Roche, con fácil acceso y aparcamiento.</p>
                        <ul>
                            <li><spam className={indicacionesStyle.tipoinfo}>Lugar:</spam> El Timón de Roche</li>
                            <li><spam className={indicacionesStyle.tipoinfo}>Hora:</spam> 19:00</li>
                            <li><spam className={indicacionesStyle.tipoinfo}>Direción:</spam> urb. Roche, Av. Inglaterra, s/n, 11149 Conil de la Frontera, Cádiz</li>
                            <li><a className={indicacionesStyle.links} href="https://www.google.com/maps/place/El+Tim%C3%B3n+de+Roche/@36.311314,-6.1525753,15z/data=!4m5!3m4!1s0x0:0xd01da584c6cd3fe8!8m2!3d36.311314!4d-6.1525753">Mapa</a></li>
                        </ul>
                    </div>
                    <div className={indicacionesStyle.marcofoto}>
                        <img className={indicacionesStyle.foto} src={timon} alt="Restaurante El Timón de Roche" />
                    </div>
                </div>
                <div className={indicacionesStyle.colum}>
                    <div className={indicacionesStyle.texto} >
                        <h1 className={indicacionesStyle.minititulo}>Estancia</h1>
                        <p>Si quieres disfrutar del fin de semana completo, aqui te dejamos alguna sugerencias con los mejores hoteles de la zona.</p>
                        <ul>
                            <li><spam className={indicacionesStyle.tipoinfo}>Lugar:</spam> Hotel 1</li>
                            <li><spam className={indicacionesStyle.tipoinfo}>Dirección:</spam> Diseminado Barrio Nuevo, 553, 11149 (Cádiz)</li>
                            <li><a className={indicacionesStyle.links} href="https://www.google.com/maps/dir//Finca+Alborea',+Diseminado+Barrio+Nuevo,+553,+11149,+C%C3%A1diz/@36.3173999,-6.0791622,16.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0xd0c37ce34f873cf:0x258e47f1dbb5e922!2m2!1d-6.0796338!2d36.3174223!3e0" >Mapa</a></li>
                        </ul>
                        <ul>
                            <li><spam className={indicacionesStyle.tipoinfo}>Lugar:</spam> Hotel 1</li>
                            <li><spam className={indicacionesStyle.tipoinfo}>Dirección:</spam> Diseminado Barrio Nuevo, 553, 11149 (Cádiz)</li>
                            <li><a className={indicacionesStyle.links} href="https://www.google.com/maps/dir//Finca+Alborea',+Diseminado+Barrio+Nuevo,+553,+11149,+C%C3%A1diz/@36.3173999,-6.0791622,16.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0xd0c37ce34f873cf:0x258e47f1dbb5e922!2m2!1d-6.0796338!2d36.3174223!3e0" >Mapa</a></li>
                        </ul>
                        <ul>
                            <li><spam className={indicacionesStyle.tipoinfo}>Lugar:</spam> Hotel 1</li>
                            <li><spam className={indicacionesStyle.tipoinfo}>Dirección:</spam> Diseminado Barrio Nuevo, 553, 11149 (Cádiz)</li>
                            <li><a className={indicacionesStyle.links} href="https://www.google.com/maps/dir//Finca+Alborea',+Diseminado+Barrio+Nuevo,+553,+11149,+C%C3%A1diz/@36.3173999,-6.0791622,16.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0xd0c37ce34f873cf:0x258e47f1dbb5e922!2m2!1d-6.0796338!2d36.3174223!3e0" >Mapa</a></li>
                        </ul>
                        <ul>
                            <li><spam className={indicacionesStyle.tipoinfo}>Lugar:</spam> Hotel 1</li>
                            <li><spam className={indicacionesStyle.tipoinfo}>Dirección:</spam> Diseminado Barrio Nuevo, 553, 11149 (Cádiz)</li>
                            <li><a className={indicacionesStyle.links} href="https://www.google.com/maps/dir//Finca+Alborea',+Diseminado+Barrio+Nuevo,+553,+11149,+C%C3%A1diz/@36.3173999,-6.0791622,16.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0xd0c37ce34f873cf:0x258e47f1dbb5e922!2m2!1d-6.0796338!2d36.3174223!3e0" >Mapa</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)
