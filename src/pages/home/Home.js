import Card from 'src/components/home/Card'
import './Home.css'

export default function Home () {
    return (
        <div>
            <div>
                Inicio
            </div>
            <Card fecha={new Date()}>
                <p>Me gusta React</p>
            </Card>
        </div>
    )
}