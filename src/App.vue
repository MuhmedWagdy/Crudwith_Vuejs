<template>
  <todo-app>

  </todo-app>
 
</template>

<script>
import todoApp from './components/todoApp.vue'
export default (await import('vue')).defineComponent({

  name: 'App',
  components: {
    todoApp
  }
})
</script>

