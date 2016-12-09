<template>
  <div>
    <show-data :lists="lists" :delete-data = "deleteData" :update = "update"></show-data>
    <insert-data :insert="insert"></insert-data>
  </div>
</template>

<script>
import InsertData from './components/InsertData'
import ShowData from './components/ShowData'
export default {
  name: 'app',
  data () {
    return {
      lists: []
    }
  },
  components: {
    InsertData,
    ShowData
  },
  methods: {
    insert (firstName, lastName) {
      var data = {
        id: Date.now(),
        firstName: firstName,
        lastName: lastName
      }
      this.lists.push(data)
    },
    deleteData (id) {
      var index = this.lists.findIndex(item => item.id === id)
      this.lists.splice(index, 1)
    },
    update (id, firstName, lastName) {
      var index = this.lists.findIndex(item => item.id === id)
      this.lists[index].firstName = firstName
      this.lists[index].lastName = lastName
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
