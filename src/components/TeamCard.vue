<template>
    <div class="box card team-card text-black bg-light">
        <div class="d-flex justify-content-center p-2">
            <img v-bind:src= "member.image" v-bind:alt= "member.nombre" class="teamImg mt-3">
        </div>
        <div class="card-body text-center">
            <h5 class="card-title">{{member.nombre}}</h5>
            <p class="card-role text-center"><i>Desarrollador #{{member.codigo}}</i> </p>
            <p class="card-text">{{member.descripcion}}</p>
        </div>
        <div class="card-footer">
            <small class="text-black">{{member.rol}}</small>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TeamCard",
        props: {
            'member' : Object
        }
    }
</script>

<style scoped>

.card-body > p.card-role{
    padding: 0%;
    margin-bottom: 5px;
}

.card-body > .card-title{
    margin-bottom: 2px;
}

</style>
