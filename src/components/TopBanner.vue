<template>
  <div>
    <top-menu></top-menu>

    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          class="active"
        ></li>
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="1"
          class=""
        ></li>
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="2"
          class=""
        ></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="/img/banner.jpg" alt="First slide" />
          <div class="carousel-caption d-none d-md-block texto-borde">
            <h5>Bienvenido</h5>
            <p>Es un placer para nosotros prestarle nuestros servicios</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="/img/banner2.jpg"
            alt="First slide"
          />
          <div class="carousel-caption d-none d-md-block texto-borde">
            <h5>Java y Phyton</h5>
            <p>Dos lenguajes más demandados en la industria</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="/img/banner3.jpg"
            alt="First slide"
          />
          <div class="carousel-caption d-none d-md-block texto-borde">
            <h5>Pagina Web alternativa</h5>
            <p>Que tu empresa muestre los productos y servicios que ofrece</p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
import TopMenu from "./TopMenu.vue";
export default {
  name: "TopBanner",
  components: {
    TopMenu,
  },
};
</script>

<style scoped>
</style>