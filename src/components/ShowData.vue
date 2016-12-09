<template lang="html">
  <div class="">
    <show-one v-for = "list in lists" :list = "list" :delete-data = "deleteData" :update = "update"></show-one>
  </div>
</template>

<script>
import ShowOne from './ShowOne'
export default {
  props: ['lists', 'deleteData', 'update'],
  data () {
    return {
    }
  },
  components: {
    ShowOne
  }
}
</script>

<style lang="css">
</style>
