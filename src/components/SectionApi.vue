<template>
    <!-- news -->
    <div class="container-fluid" id="news">
      <div class="text-center p-3 mb-2 bg-green text-dark title-section justify-content-center">
            <h2>Ultimas Noticias</h2>
      </div>
        <div class="row mt-md-3 mt-sm-3 mt-xs-3  mb-5 " >
            <div class="col-lg-6 col-xs-12 p-3" v-for="(item, index) in news" :key="index">
                <div class="row d-flex justify-content-center align-items-center news-item p-2 pt-4 pb-4 text-justify card-news bg-light">

                    <div class="col-7 p-3">
                        <img v-bind:src= "item.urlToImage" v-bind:alt= "item.source.name" style="width:100%">
                    </div>

                    <div class="col-5 p-2">
                        <h5>{{item.title}}</h5>
                        <p>{{item.description}}</p>
                    </div>

                </div>
                <div class="d-flex container-fluid justify-content-end pb-2 mt-3 news-source">
                    <a v-bind:href= "item.url"
                            class="btn btn-green btn-lg btn-block">Más información</a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'SectionApi',
    data() {
        return{
            news: null
        }
    },
    mounted(){
        // fetch('http://newsapi.org/v2/top-headlines?country=co&apiKey=be8576944a3f40ba9dc84ddf78fa8d67', {method: 'GET'})
        // .then(response => {
        //     (this.movies = response.json())
        //     console.log(this.movies)
        // })

        axios
        .get('http://newsapi.org/v2/top-headlines?country=co&apiKey=be8576944a3f40ba9dc84ddf78fa8d67')
        .then(response => {
            // Update News
            this.news = response.data.articles.slice(0,4);
            console.log(this.news);
        })
    }
}
</script>

<style scoped>

.news-item{
    height: 88%;
}

.news-source{
    padding: 0%;
}

.card-news{
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    margin: 0.1em;
}

</style>