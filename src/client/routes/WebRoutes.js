import loadable from '@loadable/component';
const LandingPage = loadable(() => import('../pages/web/landing-page/LandingPage'));

const routes = [
  {
    component : LandingPage,
    path : '/',
    exact : true
  }
];

export default routes;