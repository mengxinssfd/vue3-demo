// loading/index.js
import Vue, {createApp} from 'vue'
import LoadingComponent from './loading.vue'


let loading: boolean | undefined = undefined


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
  const app: any = createApp(LoadingComponent)
  const instance = app.mount(document.createElement('div'))
  parent.appendChild(instance.$el)
  // 显示loading
  instance.$nextTick(() => {
    console.log(app, instance)
    instance.switch()
    // instance.close();
  })
  // 将组件实例赋值给loading
  loading = instance
  return instance
}

export default Loading
