import loadable from '@loadable/component';
const Home = loadable(() => import('../pages/web/home'));
const Orders = loadable(()=> import('../pages/web/orders'));
const Cart = loadable(()=>import('../pages/web/cart'));
const Listing = loadable(()=>import('../pages/web/listing'));

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
  },
  {
    component : Listing,
    path : '/products',
    exact : true
  },
  {
    component : Listing,
    path : '/products/cid/:id',
    exact : true
  },
  {
    component : Listing,
    path : '/products/pid/:id',
    exact : true
  }
];

export default routes;