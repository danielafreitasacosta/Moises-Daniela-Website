import { NavLink } from "react-router-dom";
import './NavigationBar.css';
import logoImage from './logo-light-new.png';
import { withTranslation } from "react-i18next";
import { CONTACTO_PATH, RoutesPath } from "src/services/router";

function NavigationBar({ t, i18n }) {

    //const isSmall = useMediaQuery(theme.breakpoints.down('md'));

    const iconStyle = {
        marginRight: "5px",
        width: "25%",
        height: "25%",

    };
    const containerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "200px",
    };
    const linkStyle = {
        margin: "0 10px",
        textDecoration: "none",
        color: "white",
    };

    return (

        <>

            <div className="NavBar" style={containerStyle}  >
                <NavLink to="/" style={linkStyle}>{t('global.inicio')}</NavLink>
                <NavLink to="/history" style={linkStyle}>{t('global.historia')}</NavLink>
                <img src={logoImage} alt="Logo" style={iconStyle} />
                <NavLink to={RoutesPath.WINE} style={linkStyle}>{t('global.vinos')}</NavLink>
                <NavLink to={RoutesPath.CONTACTO} style={linkStyle}>{t('global.contacto')}</NavLink>
            </div>
        </>


    )
}
export default withTranslation('home')(NavigationBar);