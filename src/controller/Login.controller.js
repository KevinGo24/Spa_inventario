import renderisado from "../router/router"

export default function login(){
      // ---> capturamos el id de <form id="form"></form>
      const formulario = document.getElementById("formLogin")
      // escuchamos los eventos del submit
      formulario.addEventListener("submit", async (e)=>{
            e.preventDefault()
            // obtemos el dom del formualrio del login ( pass y email)
            const email = document.getElementById("email").value.trim()
            const pass = document.getElementById("pass").value
            // miramos que no haiga ningun camapo vacio
            if (!email || !pass) {
                  alert("por favor, los campos son obligatorio")
                  console.log("por favor, los campos son obligatorio")
                  return
            }
            const users = await validateLogin(email,pass)
            console.log("Email:", email);
            console.log("Pass:", pass);
            console.log("Resultado:", users);
            // validar credenciales 
            if (!users.length) {
                  alert("crdenciales invalidas")
                  return
            }
            // ---> guardamos en el localstroge
            localStorage.setItem(
                  "user",
                  JSON.stringify(users[0])
            );
            window.history.pushState({}, "", "/dashboard");
            renderisado();
      })
      async function validateLogin(email, pass) {

            const request = await fetch("http://localhost:3000/users");
            const users = await request.json();

            return users.filter(user =>
                  user.email === email &&
                  user.password === pass
            );
      }
}