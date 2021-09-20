import loadable from '@loadable/component';
const Home = loadable(() => import('../pages/web/home'));
const Orders = loadable(()=> import('../pages/web/orders'));
const Cart = loadable(()=>import('../pages/web/cart'));

const routes = [
  {
    component : Home,
    path : '/',
    exact : true
  },
  {
    component : Orders,
    path : '/orders',
    exact : true
  },
  {
    component : Cart,
    path : '/cart',
    exact : true
  }
];

export default routes;