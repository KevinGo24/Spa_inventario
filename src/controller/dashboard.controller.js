export default function dashboard() {
      const cerrar_seccion = document.getElementById("logout")
      cerrar_seccion?.addEventListener("click",( )=>{
            localStorage.removeItem("users")
            window.history.pushState({}, "", "/login");
            location.reload();
      })
}