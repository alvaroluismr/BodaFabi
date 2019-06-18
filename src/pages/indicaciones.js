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
                            <li><span className={indicacionesStyle.tipoinfo}>Lugar:</span> El Timón de Roche</li>
                            <li><span className={indicacionesStyle.tipoinfo}>Hora:</span> 19:00</li>
                            <li><span className={indicacionesStyle.tipoinfo}>Direción:</span> urb. Roche, Av. Inglaterra, s/n, 11149 Conil de la Frontera, Cádiz</li>
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
                            <li><span className={indicacionesStyle.tipoinfo}>Lugar:</span> Hotel ilunion calas de Conil.</li>
                            <li><span className={indicacionesStyle.tipoinfo}>Dirección:</span> Urb. Cabo Roche, s/n, 11140 Conil de la Frontera (Cádiz)</li>
                            <li><a className={indicacionesStyle.links} href="https://www.ilunionhotels.com/hotel-ilunion-calas-de-conil-en-cadiz/" >Web</a></li>
                        </ul>
                        <ul>
                            <li><span className={indicacionesStyle.tipoinfo}>Lugar:</span> Royal hideaway sancti petri.</li>
                            <li><span className={indicacionesStyle.tipoinfo}>Dirección:</span> Urb Lomas de Sancti Petri, 11130 Chiclana dela Frontera (Cádiz) </li>
                            <li><a className={indicacionesStyle.links} href="https://www.barcelo.com/es/royal-hideaway/hoteles/espana/andalucia/cadiz/royal-hideaway-sancti-petri/" >Web</a></li>
                        </ul>
                        <ul>
                            <li><span className={indicacionesStyle.tipoinfo}>Lugar:</span> Hotel fuerte conil- costa luz.</li>
                            <li><span className={indicacionesStyle.tipoinfo}>Dirección:</span> Playa de la Fontanilla, s/n, 11140 Conil de la Frontera (Cádiz)</li>
                            <li><a className={indicacionesStyle.links} href="https://www.fuertehoteles.com/hotel/resort-fuerte-conil-costaluz/el-hotel/" >Web</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)
