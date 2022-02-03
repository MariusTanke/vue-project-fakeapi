<template>

    <div>

        <tabla-usuarios :usuarios="usuarios" @eliminar-usuario="deleteUsuario" @actualizar-usuario="putUsuario" />                  

    </div>

</template>

<script>
    
    import TablaUsuarios from '../components/tabla.vue';
    
    export default {

        name: "vista-tabla",

        data() {
            return {
                usuarios: [],
            }
        },

        components:{
            TablaUsuarios
        },

        methods: {
            async getUsuarios() {

                try {
                    const response = await fetch('https://my-json-server.typicode.com/MariusTanke/demo/usuario');
                    this.usuarios = await response.json();
                              
                } catch ( error ) {
                    console.error( error );
                }
            
            },

            async putUsuario( usuario ) {

                try {
                    const response = await fetch(`https://my-json-server.typicode.com/MariusTanke/demo/usuario/${usuario.id}`, {
                    method: 'PUT',
                    body: JSON.stringify( usuario ),
                    headers: { 'Content-type' : 'application/json; charset=UTF-8' },

                });

                const usuarioActualizado = await response.json();
                this.usuarios = this.usuarios.mao(u => (u.id === usuario.id ? usuarioActualizado : u));
                        
                } catch ( error ){
                    console.error( error );
                } 
            },

            async deleteUsuario( usuario ) {

                try {
                        await fetch(`'https://my-json-server.typicode.com/MariusTanke/demo/usuario/${usuario.id}`, {
                            method: 'DELETE'
                        });

                        this.usuarios = this.usuarios.filter(u => u.id !== usuario.id)

                } catch ( error ) {
                        console.error( error );
                }

            },

        },

        mounted() {
            this.getUsuarios();
        }

    }

</script>