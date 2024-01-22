<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label="Ingresa tu email:" label-for="email">
                <b-form-input id="email" v-model="form.email" type="email" placeholder="ejemplo@email.com"
                    required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Ingresa tu nombre :" label-for="nombre">
                <b-form-input id="nombre" v-model="form.nombre" placeholder="Nombre" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Ingresa tu apellido paterno:" label-for="apellidoP">
                <b-form-input id="apellidoP" v-model="form.apellidoP" placeholder="Apellido Paterno"
                    required></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-4" label="Ingresa tu apellido materno :" label-for="apellidoM">
                <b-form-input id="apellidoM" v-model="form.apellidoM" placeholder="Apellido materno"></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-5" label="Ingresa tu Direccion:" label-for="apellidoM">
                <b-form-input id="apellidoM" v-model="form.direccion"
                    placeholder="Av. Universidad Tecnológica 1, Palo Escrito, 62765 Emiliano Zapata, Mor."
                    required></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-6" label="Ingresa tu fecha de nacimiento:" label-for="fechaN">
                <b-form-datepicker id="fechaN" v-model="form.fechaN" placeholder="27/04/2003"></b-form-datepicker>
            </b-form-group>
            <b-form-group id="input-group-7" label="Ingresa tu numero telefonico:" label-for="numeroT">
                <b-form-input id="numeroT" v-model="form.numeroT" placeholder="7777951328" type="number"></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-8" label="Selecciona un archivo:" label-for="archivo">
                <b-form-file id="archivo" v-model="form.archivo"></b-form-file>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            form: {

            },
            show: true
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.name = ''
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
}
</script>
  
<style></style>