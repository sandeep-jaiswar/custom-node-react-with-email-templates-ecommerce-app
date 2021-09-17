import WebRoutes from "./WebRoutes";
import MobileRoutes from "./MobileRoutes";

var routes = [];

if(window.isMobile){
  routes = MobileRoutes;
}else{
  routes = WebRoutes;
}

export default routes;