<template>

  <!--  <router-view/>-->
<!--  <main-layout></main-layout>-->
<!--  <auth-layout></auth-layout>-->

  <component :is=" layout+'-layout'" v-if="layout"/>

</template>

<script>
import {computed} from "vue"
import {useRoute} from "vue-router"
import MainLayout from "@/layout/MainLayout";
import AuthLayout from "@/layout/AuthLayout";

export default {
  setup() {
    const route = useRoute()


    return{
      layout: computed(()=>route.meta.layout)
    }
  },
  components: {
    MainLayout, AuthLayout
  }

}

</script>