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
                <b-form-datepicker id="fechaN" v-model="form.fechaN" placeholder="27/04/2003" :editable="true"
                    @input="validateDate"></b-form-datepicker>
                <small class="text-danger">{{ dateError }}</small>
            </b-form-group>
            <b-form-group id="input-group-7" label="Ingresa tu numero telefonico:" label-for="numeroT">
                <b-form-input id="numeroT" v-model="form.numeroT" placeholder="7777951328" type="tel"
                    @input="validatePhoneNumber"></b-form-input>
                <small class="text-danger">{{ phoneError }}</small>
            </b-form-group>
            <b-form-group id="input-group-8" label="Selecciona un archivo:" label-for="archivo">
                <b-form-file id="archivo" v-model="form.archivo" :state="fileIsValid() ? null : false"
                    :max-size="3 * 1024 * 1024" accept=".png"></b-form-file>
                <small class="text-danger">{{ fileError }}</small>
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
            event.preventDefault();
            if (!this.dateIsValid()) {
                this.dateError = 'La fecha no cumple con los requisitos de edad mínima y máxima.';
                return;
            } else {
                this.dateError = '';
            }

            if (!this.phoneIsValid()) {
                this.phoneError = 'El número de teléfono debe tener exactamente 10 dígitos.';
                return;
            } else {
                this.phoneError = '';
            }

            if (!this.fileIsValid()) {
                this.fileError = 'El tamaño del archivo no puede ser mayor a 3MB.';
                return;
            } else {
                this.fileError = '';
            }

            alert(JSON.stringify(this.form));
        },
        onReset(event) {
            event.preventDefault();
            // Reset our form values
            this.form.email = '';
            this.form.name = '';
            // Trick to reset/clear native browser form validation state
            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
        },
        validateDate() {
            if (!this.dateIsValid()) {
                this.dateError = 'La fecha no cumple con los requisitos de edad mínima y máxima.';
            } else {
                this.dateError = '';
            }
        },
        validatePhoneNumber() {
            if (!this.phoneIsValid()) {
                this.phoneError = 'El número de teléfono debe tener exactamente 10 dígitos.';
            } else {
                this.phoneError = '';
            }
        },
        fileIsValid() {
            // Validar que el tamaño del archivo no sea mayor a 3MB
            if (!this.form.archivo) {
                return false;
            }

            return this.form.archivo.size <= 3 * 1024 * 1024; // 3MB
        },
        dateIsValid() {
            // Validar que la fecha cumple con los requisitos de edad mínima (18 años)
            if (!this.form.fechaN) {
                return false;
            }

            const currentDate = new Date();
            const selectedDate = new Date(this.form.fechaN);

            // Calcular la edad mínima permitida (18 años)
            const minDate = new Date();
            minDate.setFullYear(currentDate.getFullYear() - 18);

            return selectedDate <= currentDate && selectedDate >= minDate;
        },
        phoneIsValid() {
            // Validar que el número de teléfono tenga exactamente 10 dígitos
            const phoneNumber = this.form.numeroT.replace(/\D/g, ''); // Eliminar caracteres no numéricos
            return phoneNumber.length === 10;
        }
    }
};
</script>
  
<style></style>