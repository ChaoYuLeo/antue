import Vue from 'vue/dist/vue.js'

export const creatComponentVm = (component, propsData, mount) => {
  const Constructor = Vue.extend(component)
  const vm = new Constructor({ propsData }).$mount()
  return vm
}

export const simulateEvent = (event) => {
  return new Event(event)
}

export const renderer = () => {
  const renderer = require('vue-server-renderer').createRenderer()
  return renderer
}

export const creatVueVm = (options) => {
  const vm = new Vue(options)
  return vm
}

export const nextTick = (callback) => {
  Vue.nextTick(() => {
    callback()
  })
}