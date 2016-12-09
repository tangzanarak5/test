<template lang="html">
  <div class="">
    <input type="text" v-model = "firstName">
    <input type="text" v-model = "lastName">
    <button @click = "addData">ตกลง</button>
  </div>
</template>

<script>
export default {
  props: ['insert'],
  data () {
    return {
      firstName: '',
      lastName: ''
    }
  },
  methods: {
    addData () {
      this.insert(this.firstName, this.lastName)
      this.firstName = ''
      this.lastName = ''
    }
  }
}
</script>

<style lang="css">
</style>
