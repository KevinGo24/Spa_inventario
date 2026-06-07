export default function views_login() {
      return ` <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

        <div class="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-slate-800">
                    Sistema de Inventario
                </h1>

                <p class="text-gray-500 mt-2">
                    Inicia sesión para continuar
                </p>
            </div>

            <form id="formLogin" class="space-y-5">

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Usuario
                    </label>

                    <input
                        id="email"
                        type="text"
                        placeholder="Ingrese su usuario"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Contraseña
                    </label>

                    <input
                        id="pass"
                        type="password"
                        placeholder="Ingrese su contraseña"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                </div>

                <button
                    type="submit"
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                >
                    Ingresar
                </button>

            </form>

            <div class="mt-6 text-center text-sm text-gray-500">
                © 2026 Sistema de Inventario
            </div>

        </div>

    </div>`
}