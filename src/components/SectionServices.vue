<template>
    <div class="container-fluid" id="services">
        <div class="text-center p-3 mb-2 bg-green text-dark title-section justify-content-center">
            <h2>Servicios Prestados</h2>
        </div>
        <div class="row justify-content-center mb-5 ">

            <div class="col-sm-6 col-xs-12 col-lg-4 mt-3">
                <div class="card bg-light text-dark">
                    <div class="d-flex justify-content-center p-1">
                        <img v-bind:src= "'/img/Java_Development.png'" class="img-fluid img-circle">
                    </div>
                    <div class="d-flex flex-column card-body">
                        <h4 class="card-title text-center">Java</h4>
                        <p class="card-text text-justify">Es uno de los lenguajes más demandados en la industria, esta
                            basado en el paradigma orientado a objetos que nos ayuda a resolver problemas plasmándolos
                            en objetos para posteriormente llevarlos al código de una manera efectiva y rápida.</p>
                        <a href="https://developer.ibm.com/es/components/java-platform/"
                            class="btn btn-green btn-lg btn-block">Más información</a>
                    </div>
                </div>
            </div>

            <div class="col-sm-6 col-xs-12 col-lg-4 mt-3">
                <div class="card bg-light text-dark">
                    <div class="d-flex justify-content-center p-1">
                        <img v-bind:src= "'/img/Python_Develepment.png'" class="img-fluid img-circle">
                    </div>
                    <div class="d-flex flex-column card-body">
                        <h4 class="card-title text-center">Python</h4>
                        <p class="card-text text-justify">Es un lenguaje de programación multiplataforma de propósito
                            general; es interpretado, por lo que no hace falta compilación para poder usarse, algo que
                            resulta cómodo en el flujo de desarrollo y donde se promueve de manera activa la legibilidad
                            del código.</p>
                        <a href="https://developer.ibm.com/es/components/tensorflow/"
                            class="btn btn-green btn-lg btn-block">Más información</a>
                    </div>
                </div>
            </div>

            <div class="col-sm-6 col-xs-12 col-lg-4 mt-3">
                <div class="card bg-light text-dark">
                    <div class="d-flex justify-content-center p-2">
                        <img v-bind:src= "'/img/Web_Design.png'" class="img-fluid img-circle">
                    </div>
                    <div class="d-flex flex-column card-body">
                        <h4 class="card-title text-center">Página Web</h4>
                        <p class="card-text text-justify">Una página web altamente efectiva y visualmente atractiva le
                            permite a tu empresa dar a conocer los productos, trabajos, proyectos y servicios que
                            ofrece, cómo ubicarte y contactarte de la forma más fácil y rápida; el fin verdadero es
                            promocionar su negocio.</p>
                        <a href="https://developer.ibm.com/es/components/cloud-ibm/"
                            class="btn btn-green btn-lg btn-block">Más información</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'SectionServices',
}
</script>

<style scoped>

</style>