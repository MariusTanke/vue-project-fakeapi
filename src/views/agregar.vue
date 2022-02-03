<template>
    <div>
        <formulario-usuario @crear-usuario="postUsuario" />
    </div>
</template>

<script>

    import FormularioUsuario from '@/components/FormularioUsuario.vue';

    export default {

        name: "form",

        data() {
            return {
                usuarios: [],
            }
        },

        components: {
            FormularioUsuario,
        },

        methods: {

            async postUsuario( usuario ) {

                try {
                        const response = await fetch('https://my-json-server.typicode.com/MariusTanke/demo/usuario', {
                            method: `POST`,
                            body: JSON.stringify( usuario ),
                            headers: { 'Content-type': 'application/json; charset=UTF-8' },
                        });

                        const usuarioCreado = await response.json();
                        this.usuarios = [...this.usuarios, usuarioCreado];

                } catch ( error ) {
                        console.error( error );
                }
            },
        },
        
    }
</script>