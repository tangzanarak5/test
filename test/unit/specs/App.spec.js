// import Vue from 'vue'
// import MyComponent from 'src/App'
//
// describe('App.vue', () => {
//   it('ทดสอบฟังค์ชั่นการเพิ่มข้อมูล', () => {
//     // const vm = new Vue({
//     //   el: document.createElement('div'),
//     //   render: (h) => h(MyComponents)
//     // })
//     const Ctor = Vue.extend(MyComponent)
//     const vm = new Ctor().$mount()
//     vm.insert('eiei', 'eieiei')
//     expect(vm.lists[0].firstName).to.eql('eiei')
//     expect(vm.lists[0].lastName).to.eql('eieiei')
//     // expect(vm.$el.querySelector('.hello h1').textContent)
//     //   .to.equal('Welcome to Your Vue.js App')
//   })
//   it('ทดสอบฟังค์ชั่นการลบข้อมูล', () => {
//     const Ctor = Vue.extend(MyComponent)
//     const vm = new Ctor().$mount()
//     vm.insert('eiei', 'eieiei')
//     expect(vm.lists[0].firstName).to.eql('eiei')
//     expect(vm.lists[0].lastName).to.eql('eieiei')
//     vm.deleteData(vm.lists[0].id)
//     expect(vm.lists).to.eql([])
//     // expect(vm.$el.querySelector('.hello h1').textContent)
//     //   .to.equal('Welcome to Your Vue.js App')
//   })
//   it('ทดสอบฟังค์ชั่นการแก้ไขข้อมูล', () => {
//     const Ctor = Vue.extend(MyComponent)
//     const vm = new Ctor().$mount()
//     vm.insert('eiei', 'eieiei')
//     expect(vm.lists[0].firstName).to.eql('eiei')
//     expect(vm.lists[0].lastName).to.eql('eieiei')
//     vm.update(vm.lists[0].id, 'ohno', '555555')
//     expect(vm.lists[0].firstName).to.eql('ohno')
//     expect(vm.lists[0].lastName).to.eql('555555')
//     // expect(vm.$el.querySelector('.hello h1').textContent)
//     //   .to.equal('Welcome to Your Vue.js App')
//   })
// })
