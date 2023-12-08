import { NavLink } from "react-router-dom";
import './NavigationBar.css';
import logoImage from './logo-light-new.png';
import { withTranslation } from "react-i18next";

function NavigationBar({ t, i18n }) {

    const iconStyle = {
        marginRight: "5px",
        width: "25%", 
        height: "25%",
        
    };

    return (
        <div className="NavBar">
            <NavLink to="/">{t('global.inicio')}</NavLink>
            <NavLink to="/history">{t('global.historia')}</NavLink>
            <img src={logoImage} alt="Logo" style={iconStyle} />
            <NavLink to="/wine">{t('global.vinos')}</NavLink>
            <NavLink to="/contact">{t('global.contacto')}</NavLink>
        </div>
    )
}
export default withTranslation('home')(NavigationBar);