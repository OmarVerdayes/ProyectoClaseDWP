<template>
    <div>
        <h2>Vuelos disponibles</h2>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <b-link :to="{ name: 'Lineas-vuelos' }"> Siguiente</b-link>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            items: [
                {
                    text: "Inicio",
                    href: "#",
                    to: "inicio",
                },
                {
                    text: "Vuelos disponibles",
                    href: "#",
                },
            ],
        };
    },
};
</script>
  
<style></style>