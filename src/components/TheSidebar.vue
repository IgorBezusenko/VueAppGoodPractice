<template>
  <div v-if="sidebar" class="sidebar">
    <span class="sidebar-close" @click="close">&times;</span>

    <div class="sidebar-content">
      <p>Добро пожаловать в систему по учету заявок.</p>
    </div>

  </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";

export default {
  setup() {
    const store = useStore()
    const sidebar = computed(() => store.state.sidebar.sidebar)

    return {
      sidebar,
      close: () => store.commit('sidebar/closeSidebar')
    }
  }
}
</script>

<style scoped>

</style>