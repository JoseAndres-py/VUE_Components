<template>
  <div id="app">
    <!-- Header -->
    <top-banner></top-banner>
    
    <!-- Section Api -->
      <div class="text-center p-3 mb-2 bg-green text-dark title-section justify-content-center">
            <h2>Ultimas Noticias</h2>
      </div>
    <section-api></section-api>
    
    <!-- members -->
    <div class="container-fluid">
      <div class="text-center p-3 mb-2 bg-green text-dark title-section justify-content-center">
            <h2>Equipo de Desarrollo</h2>
      </div>
      <div class="row justify-content-center mb-3 mb-5">
        <div class="col mt-3"  v-for="(item, index) in team" :key="index" >
          <team-card v-bind:member="item"> </team-card>
        </div>
      </div>
    </div>


    <!-- Footer -->
    <page-footer></page-footer>
  </div>
</template>

<script>

import TeamCard from './components/TeamCard.vue'
import SectionApi from './components/SectionApi.vue'
import PageFooter from './components/PageFooter.vue'
import TopBanner from './components/TopBanner.vue'

export default {
  name: 'App',
  components : {
    TeamCard,
    SectionApi,
    PageFooter,
    TopBanner,
  },
  data() {
    return {
      team: [
        {
          codigo: 1,
          nombre: 'Luisa Fernanda Castellanos Rosales',
          descripcion: 'Ingeniera de Petróleos / Entrenadora de Baloncesto. Edad 28 años. Pasatiempo Montar Bicicleta.',
          rol: 'Universidad Industrial de Santander / Tunja / Boyacá',
          image: './img/member1.jpeg'
        },
        {
          codigo: 2,
          nombre: 'Maria Fernanda Florez Rodríguez',
          descripcion: 'Estudiante de Bioingenieria / Edad 23 años. Interes en Diversos Lenguajes Java, C, C++, Matlab y R.',
          rol: 'Universidad de Antioquia / Medellín / Antioquia',
          image: './img/member2.jpeg'
        },
        {
          codigo: 3,
          nombre: 'Alberto Salazar Mayorga',
          descripcion: 'Ingeniero Industrial / Esp. en Dirección de Proyectos / MBA. Edad 31 Años. Pasatiempos Fútbol / Motociclismo.',
          rol: 'Universidad Sergio Arboleda / Bogotá D.C. / Cundinamarca',
          image: './img/member3.jpg'
        },
        {
          codigo: 4,
          nombre: 'Jose Andres Lopez Muñoz',
          descripcion: 'Estudiante de Ingeniería Electrónica / Edad 22 Años. Apasionado por la I.A. Machine Learning y Cloud Computing.',
          rol: 'Universidad Santo Tomas / Bogotá D.C. / Cundinamarca',
          image: './img/member4.jpeg'
        },
        {
          codigo: 5,
          nombre: 'Henry Alejandro Cáceres Téllez',
          descripcion: 'Ingeniero De Sistemas / Edad 28 Años. Pasatiempos Fútbol, Baloncesto, Ciclismo, Videojuegos y Anime.',
          rol: 'Universidad del Tolima / Ibagué / Tolima',
          image: './img/member5.jpeg'
        }
      ],
    }
  }
}
</script>

