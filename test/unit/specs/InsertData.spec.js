import Vue from 'vue'
import MyComponent from 'src/components/InsertData'
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
    var vm = getRenderedText(MyComponent, { insert: vmApp.insert })
    vm.firstName = 'eiei'
    vm.lastName = 'eieiei'
    vm.addData()
    expect(vmApp.lists[0].firstName).to.eql('eiei')
    expect(vmApp.lists[0].lastName).to.eql('eieiei')
    // expect(vm.$el.querySelector('.hello h1').textContent)
    //   .to.equal('Welcome to Your Vue.js App')
  })
})
