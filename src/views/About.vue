<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{homeinfo}}</h2>
  </div>
</template>
<script>
export default {
   serverRequest(store){
    return store.dispatch('getHome')
  },
  computed:{
    homeinfo(){
        return this.$store.state.home
    }
  },
  mounted(){
     this.$store.dispatch('getHome')
  },
  created(){

  }
}
</script>
