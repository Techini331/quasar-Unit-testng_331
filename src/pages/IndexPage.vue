<template>
  <div class="htmlClass">
    <h1>{{ title }}</h1>
  </div>
  <InputPage />
  <FunctionPage />
</template>


<script>
export default {
  name: 'HtmlComponent',
  components:{
    InputPage,
    FunctionPage
  },
  data() {
    return {
      title: 'เตชินี ศรีหาวงษ์.',
    }
  },
}

import InputPage from './InputPage.vue';
import FunctionPage from './FunctionPage.vue'
</script>

<style scoped></style>
