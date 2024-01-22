<template>
  <b-container fluid>

    <b-row>
      <b-col>
        <b-navbar toggleable="lg" type="light" variant="light" style="margin-left: -12px;">
          <b-navbar-brand href="#">Logo</b-navbar-brand>
          <b-navbar-toggle target="navbar-nav"></b-navbar-toggle>

          <b-collapse id="navbar-nav" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item :to="{ name: 'inicio' }">Inicio</b-nav-item>
              <b-nav-item :to="{ name: 'main' }">Main</b-nav-item>
              <b-nav-item :to="{ name: 'tercero' }">Tercero</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="3">
        <b-sidebar id="sidebar-variant" title="Sidebar" bg-variant="dark" text-variant="light" no-header shadow visible
          no-close-on-route-change no-header-close z-index='-1'>
          <div style="margin-top: 60px;">
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <div class="d-flex align-items-center justify-content-center">
              <b-img src="https://picsum.photos/500/500?image=54" thumbnail style="width: 300px;"></b-img>
            </div>
          </div>
        </b-sidebar>
      </b-col>
      <b-col cols="9" style="margin-left: 320px">
        <router-view />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {

};
</script>

<style></style>