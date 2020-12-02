// loading/index.js
import {createApp, ComponentPublicInstance} from 'vue'
import LoadingComponent from './loading.vue'


let loading: ComponentPublicInstance<typeof LoadingComponent> | undefined = undefined


const Loading = (options = {}) => {
  // 如果组件已渲染，则返回即可
  if (loading) {
    return loading
  }
  // 要挂载的元素
  const parent = document.body
  // 组件属性
  const opts = {
    text: '',
    visible: false,
    ...options
  }
  // 通过构造函数初始化组件 相当于 new Vue()
  const app = createApp(LoadingComponent)
  const el = document.createElement('div')
  const instance = app.mount(el) as ComponentPublicInstance<typeof LoadingComponent>
  parent.appendChild(instance.$el)
  // 显示loading
  instance.$nextTick(() => {
    console.log(app, instance.$el)
    instance.switch()
    // instance.close();
  })
  // 将组件实例赋值给loading
  loading = instance
  return {
    close() {
      app.unmount(el)
    }
  }
}

export default Loading
