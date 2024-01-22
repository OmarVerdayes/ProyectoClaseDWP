<template>
    <div>
        <h2>Reserva de vuelos</h2>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <b-link :to="{ name: 'Asientos-vuelos' }"> Siguiente</b-link>
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
                    text: "Reservas vuelos",
                    href: "#",
                },
            ],
        };
    },
};
</script>
  
<style></style>