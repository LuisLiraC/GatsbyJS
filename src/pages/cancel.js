import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'

export default function cancel() {
    return (
        <div>
            <SEO title={'Compra Cancelada'} />
            <Purchase>
                <h2>Compra Cancelada <span role="img" aria-label='emoji'>☹️</span></h2>
                <p>Sentimos que no hayas comprado tu nuevo swag.</p>
                <p>Recuerda que aquí seguirá por si decides volver.</p>
                <p>¡Te esperamos de vuelta, nunca pares de aprender!</p>
                <span role="img" aria-label='emoji'>💚</span>
                <Link to="/"><Button>Volver al catálogo</Button></Link>
            </Purchase>
        </div>
    )
}
