// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-undef
/*const  app = new Vue({
    el: '#app',
    data: {
        
        regiones: [],
        pokemon: ''
    },
    methods:{

        buscarPokemon(){

        }
    }
})*/
/*
new Vue({
    el: '#app',
    data () {
      return {
        regiones: [],
        nombrePokemon: ''
        
      }
    },
    mounted () {

      if (this.nombrePokemon != null){

        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${this.nombrePokemon}/encounters`)
        .then(response => (this.regiones = response))
        
      }
    },

    methods:{

        buscarPokemon(){
            this.regiones.push({
              nombre: this.nombrePokemon
            })
        }
    }
  })*/

  new Vue({
    el: '#app',
    data () {
      return {
        info: null,
        loading: true,
        errored: false
      }
    },
    filters: {
      currencydecimal (value) {
        return value.toFixed(2)
      }
    },
    mounted () {
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => {
          this.info = response.data.bpi
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    }
  })
