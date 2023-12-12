
import NavigationBar from "src/components/core/NavigationBar";
import 'src/pages/home/Home'; // Crearemos este archivo en el siguiente paso
import InfoTop from "src/components/info-top/InfoTop";
import Vinya from "src/components/viñas/Vinya";
import PackFotos from "src/components/packfotos/PackFotos";
import Weather from "src/components/weather/Weather";
import Infoenlaces from "src/components/infoenlaces/Infoenlaces";
import { withTranslation } from "react-i18next";
import { Grid, Paper, useMediaQuery } from '@mui/material';
import Cookies from "src/components/cookies/Cookies";
import "./Home.css";
import DrawerResponsive from "src/components/core/Drawer";
import theme from "src/services/theme";

const Home = ({ t, i18n }) => {

  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch)

  return (
    <>
      <Cookies />
      <Paper>
        <div className="image-grid">
          <InfoTop />
          {
            isMatch ? (
              <>
                <DrawerResponsive />
              </>
            ) : (
              <NavigationBar />
            )
          }
          <Grid sx={{ textAlign: 'center' }}>
            <h1 className="titulo">{t('present.titulo')}</h1>
            <h1 className="titulo2">{t('present.subtitulo')}</h1>
          </Grid>
        </div >
        <div>

          <Vinya />

        </div>
        <div>
          <PackFotos />
        </div>
        <div>
          <Weather />
        </div>
        <div>
          <Infoenlaces />
        </div>

      </Paper>
    </>
  );
};

export default withTranslation('home')(Home);