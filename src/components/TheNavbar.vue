<template>
  <div class="navbar">
    <h3>Online Bank</h3>

    <ul class="navbar-menu">
      <li>
        <router-link to="/">Заявки</router-link>
      </li>
      <li>
        <router-link to="/">Помощь</router-link>
      </li>
      <li>
        <router-link to="/">Сообщения</router-link>
      </li>
      <li>
        <router-link to="/" @click="logout">Выход</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'

export default {
  setup() {
    const router = useRouter()
    const store = useStore()

    return {
      logout: () => {
        store.commit('auth/logout')
        router.push('/auth')
      }
    }
  }

}
</script>

<style scoped>

</style>