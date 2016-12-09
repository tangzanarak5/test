<template lang="html">
  <div class="">
    <div>
      {{list}}
      <div v-show = "checkEdit">
      <input type="text" v-model = "firstName">
      <input type="text" v-model = "lastName">
      <button type="button" @click="submitUpdate">ยืนยัน</button>
    </div>
      <button v-show = "!checkEdit" type="button" @click="updateOne">แก้ไข</button><button v-show="!checkEdit" type="button" @click="deleteData(list.id)">X</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list', 'deleteData', 'update'],
  data () {
    return {
      firstName: '',
      lastName: '',
      checkEdit: false
    }
  },
  methods: {
    updateOne () {
      this.checkEdit = true
      this.firstName = this.list.firstName
      this.lastName = this.list.lastName
    },
    submitUpdate () {
      this.update(this.list.id, this.firstName, this.lastName)
      this.checkEdit = false
    }
  }
}
</script>

<style lang="css">
</style>
