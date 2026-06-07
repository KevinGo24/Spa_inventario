export default function viws_dashboard() {
      return`<div class="min-h-screen flex bg-gray-100">

    <!-- Sidebar -->
    <aside class="w-64 bg-slate-900 text-white">
        <div class="p-6">
            <h1 class="text-2xl font-bold">
                Inventario SPA
            </h1>
        </div>

        <nav class="mt-6">
            <a href="/dashboard" class="block px-6 py-3 hover:bg-slate-800">
                Dashboard
            </a>

            <a href="/productos" class="block px-6 py-3 hover:bg-slate-800">
                Productos
            </a>

            <a href="/entradas" class="block px-6 py-3 hover:bg-slate-800">
                Entradas
            </a>

            <a href="/salidas" class="block px-6 py-3 hover:bg-slate-800">
                Salidas
            </a>

            <a href="/usuarios" class="block px-6 py-3 hover:bg-slate-800">
                Usuarios
            </a>
        </nav>
    </aside>

    <!-- Contenido -->
    <main class="flex-1">

        <!-- Header -->
        <header class="bg-white shadow p-5 flex justify-between items-center">
            <h2 class="text-2xl font-bold">
                Dashboard
            </h2>

            <button
                id="logout"
                class="bg-red-500 text-white px-4 py-2 rounded"
            >
                Cerrar sesión
            </button>
        </header>

        <!-- Estadísticas -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">

            <div class="bg-white rounded-lg shadow p-5">
                <h3 class="text-gray-500">
                    Productos
                </h3>

                <p class="text-4xl font-bold mt-3">
                    120
                </p>
            </div>

            <div class="bg-white rounded-lg shadow p-5">
                <h3 class="text-gray-500">
                    Stock Total
                </h3>

                <p class="text-4xl font-bold mt-3">
                    2450
                </p>
            </div>

            <div class="bg-white rounded-lg shadow p-5">
                <h3 class="text-gray-500">
                    Valor Inventario
                </h3>

                <p class="text-4xl font-bold mt-3">
                    $45.800
                </p>
            </div>

        </section>

        <!-- Tabla -->
        <section class="p-6">
            <div class="bg-white rounded-lg shadow">

                <div class="p-4 border-b">
                    <h3 class="font-semibold">
                        Productos recientes
                    </h3>
                </div>

                <table class="w-full">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="text-left p-4">ID</th>
                            <th class="text-left p-4">Producto</th>
                            <th class="text-left p-4">Stock</th>
                            <th class="text-left p-4">Precio</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr class="border-t">
                            <td class="p-4">1</td>
                            <td class="p-4">Laptop HP</td>
                            <td class="p-4">15</td>
                            <td class="p-4">$2.500</td>
                        </tr>

                        <tr class="border-t">
                            <td class="p-4">2</td>
                            <td class="p-4">Mouse Logitech</td>
                            <td class="p-4">40</td>
                            <td class="p-4">$80</td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </section>

    </main>

</div>`
}