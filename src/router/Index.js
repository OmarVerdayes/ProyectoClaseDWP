import VueRouter from "vue-router";

import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    
    {
        path: "*",
        component: () => import("../views/ErrorPages/Error404.vue"),
    },
    {
        path: "/",
        component: () => import("../components/ContenidoInicio.vue"),
        children: [
            {
                path: "/inicio",
                name: "inicio",
                component: () => import("../components/Inicio.vue")
            },
            {
                path: "/main",
                name: "main",
                component: () => import("../components/Main.vue")
            },{
                path: "/formulario",
                name: "formulario",
                component: () => import("../components/Formulario.vue")
            },
            {
                path: "/tercero",
                name: "tercero",
                component: () => import("../components/Tercero.vue")
            },
            {
                path: "/Reservas-vuelos",
                name: "Reservas-vuelos",
                component: () => import("../components/ReservasVuelos.vue")
            },
            {
                path: "/Asientos-vuelos",
                name: "Asientos-vuelos",
                component: () => import("../components/AsientosVuelos.vue")
            },
            {
                path: "/Vuelos-disponibles",
                name: "Vuelos-disponibles",
                component: () => import("../components/VuelosDisponibles.vue")
            },
            {
                path: "/Lineas-vuelos",
                name: "Lineas-vuelos",
                component: () => import("../components/LineasVuelo.vue")
            },
            {
                path: "/Vuelos-cancelados",
                name: "Vuelos-cancelados",
                component: () => import("../components/VuelosCancelados.vue")
            },
            {
                path: "/Proximos-vuelos",
                name: "Proximos-vuelos",
                component: () => import("../components/Proximos-vuelos.vue")
            },
        ]
    },

]

const router = new VueRouter({ routes })
export default router;

