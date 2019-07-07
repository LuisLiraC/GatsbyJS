import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'

export default function thanks() {
    return (
        <div>
            <SEO title={'Compra Exitosa'} />
            <Purchase>
                <h2>Compra Exitosa <span role="img" aria-label='emoji'>😃</span></h2>
                <p>Espero que disfrutes tu swag, lúcelo con orgullo</p>
                <p>¡Te esperamos de vuelta, nunca pares de aprender!</p>
                <span role="img" aria-label='emoji'>💚</span>
                <Link to="/"><Button>Volver al catálogo</Button></Link>
            </Purchase>
        </div>
    )
}