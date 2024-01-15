<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <div>
      <p>
        <b-link :to="{ name: 'main' }"> Siguiente</b-link>
      </p>
      <p>
        <b-link :to="{ name: 'Reservas-vuelos' }"> Reservas vuelos</b-link>
      </p>
      <p>
        <b-link :to="{ name: 'Vuelos-disponibles' }"> Vuelos disponibles</b-link>
      </p>
      <p>
        <b-link :to="{ name: 'Vuelos-cancelados' }"> Vuelos cancelados </b-link>
      </p>

    </div>
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
          to: "tercero",
        },
      ],
    };
  },
};
</script>

<style></style>