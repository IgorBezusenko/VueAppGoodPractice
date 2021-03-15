<template>
  <div class="filter">
    <div class="form-control">
      <input v-model="name" type="text" placeholder="Начни вводить...">
    </div>

    <div class="form-control">
      <select v-model="status">
        <option disabled selected>Выбирите фильтр</option>
        <option value="active">Активен</option>
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>
    <button class="btn warning" v-if="isActive" @click="reset">Очистить</button>
  </div>

</template>

<script>
import {computed, ref, watch} from "vue";

export default {
  emits: ['update:modelValue'],
  props: ['modelValue'],

  setup(_, {emit}) {
    const name = ref('')
    const status = ref('')

    watch([name, status], value => {
      emit('update:modelValue', {
        name: value[0],
        status: value[1]
      })
    })

    const isActive = computed(() => name.value || status.value)

    return {
      name,
      status,
      isActive,
      reset: () => {
        name.value = ''
        status.value = ''

      }
    }
  }
}
</script>

<style scoped>

</style>