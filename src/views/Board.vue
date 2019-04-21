<template>
  <div class="board">
    <p>Hi</p>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import Vue from "vue";

export default Vue.extend({
  computed: mapState([
    'board'
  ])
})
</script>

<style lang="css">
.task {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
}

.column {
  @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}

.board {
  @apply p-4 bg-teal-dark h-full overflow-auto;
}

.task-bg {
  @apply pin absolute;
  background: rgba(0,0,0,0.5);
}
</style>
