<template>
  <div>
    Esto es MAIN
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
          to: "Inicio",
        },
        {
          text: "Main",
          href: "#",
        },
      ],
    };
  },
};
</script>

<style>
</style>