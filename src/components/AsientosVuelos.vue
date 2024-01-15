<template>
    <div>
        <h2>Asientos de vuelos</h2>
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
                    text: "Reservas vuelos",
                    href: "#",
                    to: "Reservas-vuelos",
                },
                {
                    text: "Asientos de vuelos",
                    href: "#",
                },
            ],
        };
    },
};
</script>
  
<style></style>