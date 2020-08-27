import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import LayoutDashboard from './layouts/LayoutDashboard';


// Views 
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/DashView';
import DashboardUsuarios from './views/DashViewUsuarios';
import DashboardTurnos from './views/DashViewTurnos';
import DashboardRecetas from './views/DashViewRecetas';
import DashboardHistoriaClinica from './views/DashViewHistoria';
import DashboardNovedades from './views/DashViewNovedades';
import DashboardNotificaciones from './views/DashViewNotificaciones';
import DashboardPerfil from './views/DashViewPerfil';


// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  var profile = localStorage.getItem("userProfile");
  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/Login" component={Login} />
          <AppRoute exact path="/SingUp" component={Register} />
          <AppRoute exact path="/Dashboard" component={profile === 'Paciente' ? DashboardNovedades : Dashboard} layout={LayoutDashboard}/>
          <AppRoute exact path="/Dashboard/users" component={DashboardUsuarios} layout={LayoutDashboard}/>
          <AppRoute exact path="/Dashboard/perfil" component={DashboardPerfil} layout={LayoutDashboard}/>
          <AppRoute exact path="/Dashboard/turnos" component={DashboardTurnos} layout={LayoutDashboard}/>
          <AppRoute exact path="/Dashboard/recetas" component={DashboardRecetas} layout={LayoutDashboard}/>
          <AppRoute exact path="/Dashboard/historia_clinica" component={DashboardHistoriaClinica} layout={LayoutDashboard}/>
          <AppRoute exact path="/Dashboard/novedades" component={DashboardNovedades} layout={LayoutDashboard}/>
          <AppRoute exact path="/Dashboard/notificaciones" component={DashboardNotificaciones} layout={LayoutDashboard}/>
        </Switch>
      )} />
  );
}

export default App;