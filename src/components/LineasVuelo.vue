<template>
    <div>
        <h2>Lineas de vuelos</h2>
        <b-breadcrumb :items="items"></b-breadcrumb>
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
                    to: "Vuelos-disponibles",
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