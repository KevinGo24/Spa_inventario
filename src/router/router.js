// ----------  importaciones ----------------
import views_login from "../views/login";
import login from "../controller/Login.controller"
import dashboard from "../controller/dashboard.controller";
import viws_dashboard from "../views/dashboard";
import { views_home } from "../views/home";
// ---> vista de error 404
import notfound from "../views/404";
//-----------------------------------------

//---> variable de enrutamiento

const router = {
      "/": {
            view: views_home
      },
      "/login": {
            view: views_login,
            controller: login
      },
      "/dashboard":{
            view: viws_dashboard,
            controller: dashboard
            
      }
}

export default function renderisado(){
      // se captura el  id del index.html con el id donde se mostrara todas las interface a realizar
      const master = document.getElementById("app")
      // guardamos cada interacion del usario en el local stroge
      const user = JSON.parse(localStorage.getItem("user"))
      // obtemos el path
      const path = window.location.pathname
      const rout = router[path] || ""
      // EN CASO QUE NO ENCUNETRE LA PAGINA MANDAR LA VISTA DE 404.JS
      if (!rout) {
            master.innerHTML = notfound()
            return
      }
      // mostar el contenido en html en el navegador
      master.innerHTML = rout.view()
      rout.controller?.()
}