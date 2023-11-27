import Card from 'src/components/home/Card'
import './Home.css'

export default function Home () {
    return (
        <div>
            <div>
                Inicio de nuestro proyecto
            </div>
            <Card fecha={new Date()}>
                <h1>Está será la LANDING PAGE de nuestro proyecto</h1>
            </Card>
        </div>
    )
}