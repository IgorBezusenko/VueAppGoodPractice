<template>
  <AppLoader v-if="loading"/>
  <app-page back title="Заявка" v-else-if="request">
    <p><strong>Имя владельца</strong>: {{request.fullName}}</p>
    <p><strong>Телефон</strong>: {{request.phone}}</p>
    <p><strong>Сумма</strong>: {{currency(request.amount)}}</p>
    <p><strong>Статус</strong>: <AppStatus :type="request.status"/></p>
  </app-page>
  <h3 v-else class="text-center text-white"> Заявки с id={{id}} нет.</h3>
</template>

<script>
import {onMounted, ref} from "vue"
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import AppPage from "@/components/ui/AppPage";
import AppLoader from "@/components/ui/AppLoader";
import AppStatus from "@/components/ui/AppStatus";
import {currency} from "@/utils/currency-formatter";

export default {

  setup() {
    const route = useRoute()
    const loading = ref(true)
    const store = useStore()
    const request = ref({})

    const id = route.params.id

    onMounted(async () => {
      loading.value = true
      request.value = await store.dispatch('request/loadById', id)
      loading.value = false

    })

    console.log(route.params.id)

    return {
      loading,
      request,
      id,
      currency
    }
  },

  components: {AppPage, AppLoader, AppStatus}
}
</script>

<style scoped>

</style>