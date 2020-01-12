<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{data}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return{
      data:''
    }
  },
  created(){
    axios.get('http://localhost:3003/api').then((res) => { this.data = res.data })
  }
}
</script>
