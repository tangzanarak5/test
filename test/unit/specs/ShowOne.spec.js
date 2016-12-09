import Vue from 'vue'
import MyComponent from 'src/components/ShowOne'
import ShowData from 'src/components/ShowData'
import App from 'src/App'

function getRenderedText (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm
}
describe('App.vue', () => {
  it('ทดสอบฟังค์ชั่นการเพิ่มข้อมูล', () => {
    // const vm = new Vue({
    //   el: document.createElement('div'),
    //   render: (h) => h(MyComponents)
    // })
    const Ctor = Vue.extend(App)
    const vmApp = new Ctor().$mount()
    vmApp.insert('eiei', 'eieiei')
    var vmShowData = getRenderedText(ShowData, { lists: vmApp.lists, deleteData: vmApp.deleteData, update: vmApp.update })
    var vm = getRenderedText(MyComponent, { list: vmShowData.lists[0], deleteData: vmShowData.deleteData, update: vmShowData.update })
    vm.updateOne()
    vm.firstName = '123'
    vm.submitUpdate()
    expect(vmApp.lists[0].firstName).to.eql('123')
    expect(vmApp.lists[0].lastName).to.eql('eieiei')
    vm.deleteData(vm.list.id)
    expect(vmApp.lists).to.eql([])
    // expect(vm.$el.querySelector('.hello h1').textContent)
    //   .to.equal('Welcome to Your Vue.js App')
  })
})
