export default function Card ({ children, fecha }) {
    return (
        <div>
            <h1>
                Curs SOC 
            </h1>
            { children }

            Fecha: {fecha.toLocaleDateString()}
        </div>
    )
}