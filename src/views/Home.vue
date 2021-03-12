<template>
  <app-page title="Список заявок">
    <template #header>
      <button class="btn primary" @click="modal=true">Создать</button>
    </template>
    <request-table :requests="[]"></request-table>

    <teleport to="body">
      <app-modal v-if="modal" title="Создать заявку" @close="modal =false">
        <request-modal></request-modal>
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import {ref} from "vue"
import AppModal from "@/components/ui/AppModal";
import AppPage from "@/components/ui/AppPage";
import RequestTable from "@/components/request/RequestTable";
import RequestModal from "@/components/request/RequestModal";

export default {

  setup() {

    const modal = ref(false)

    return {
      modal,

    }

  },

  components: {
    AppPage,
    RequestTable,
    AppModal,
    RequestModal

  }
}
</script>
