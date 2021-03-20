<template>
  <app-page title="Помощь">
  <question-item
      v-for="q in question"
      :key="q.title"
      :question="q"

  ></question-item>

  </app-page>
</template>

<script>
import AppPage from "@/components/ui/AppPage";
import QuestionItem from "@/components/question/QuestionItem";

export default {
  setup() {
    const question = [
      {
        title: 'Что есть в данной системе?',
        text: 'Тут есть все, для того, чтобы смотреть, какие заявки добавил человек'
      },
      {title: 'Как тут работает авторизация', text: 'Все работает через Firebase'}
    ]
  return {
      question
  }

  },
  components: {
    QuestionItem,
    AppPage
  }
}
</script>