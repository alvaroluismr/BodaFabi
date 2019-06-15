import React from "react"
import Layout from "../components/layout"
import Confirmaform from "../components/confirmaform"

export default () => (
    <Layout>
        <div style={{ margin: '3rem auto', maxWidth: 650, padding: '0 1rem' }}>
            {/*<h1>Formulario de confirmación</h1>*/}
            <Confirmaform />
        </div>
    </Layout>
)
