<template>
  <the-navbar/>
  <the-sidebar/>
  <div class="container with-nav">
    <app-message/>
    <router-view/>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import AppMessage from "@/components/ui/AppMessage";
import TheSidebar from "@/components/TheSidebar";
export default {
components:{
  TheSidebar,
  AppMessage,
  TheNavbar
}
}
</script>

<style scoped>

</style>