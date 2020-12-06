<template>
  <div id="app">
    <top-banner></top-banner>
    <page-footer></page-footer>
  </div>
</template>

<script>

import PageFooter from './components/PageFooter.vue'
import TopBanner from './components/TopBanner.vue'

export default {
  name: 'App',
  components:{
    PageFooter,
    TopBanner,
  },
}
</script>

