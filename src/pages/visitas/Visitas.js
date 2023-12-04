import NavigationBar from "src/components/core/NavigationBar";
import "./Visitas.css";

export default function Visitas() {
  return (
    <div className="image-grid">
      <NavigationBar />
      <hr style={{ width: '100%', backgroundColor: 'white', height: '2px', border: 'none', marginTop: '40px' }} />
      <div>
        Visitas
      </div>
    </div>
  )
}