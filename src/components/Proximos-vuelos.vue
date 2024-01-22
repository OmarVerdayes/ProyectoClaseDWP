<template>
    <div>
        <h2>Proximos vuelos</h2>
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
                    text: "Vuelos cancelados",
                    href: "#",
                    to: "Vuelos-cancelados",
                },
                {
                    text: "Proximos vuelos",
                    href: "#",
                },
            ],
        };
    },
};
</script>
  
<style></style>