<template>
    <div>
        <h2>Vuelos cancelados</h2>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <b-link :to="{ name: 'Proximos-vuelos' }"> Siguiente</b-link>
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
                    text: "Vuelos cancelados",
                    href: "#",
                },
            ],
        };
    },
};
</script>
  
<style></style>