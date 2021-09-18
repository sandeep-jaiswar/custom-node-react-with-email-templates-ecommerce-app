import loadable from '@loadable/component';
const Home = loadable(() => import('../pages/web/home'));

const routes = [
  {
    component : Home,
    path : '/',
    exact : true
  }
];

export default routes;