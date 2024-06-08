/* *
*   React
* */

/* *
 * 
 *  JSX 
 *  
 *  FB对JSX的定位： javascript的扩展
 * 
 *  JSX会被Babel编译成React.createElement()
 * 
 *  Babel是工具链，主要用于将ecmascript2015版本的代码转化为向后兼容的js语法，以便运行在当前和旧版本的浏览器中
 * 
 *  JSX是React.createElement()的语法糖
 * 
 *  JSX渲染为真实dom的过程：JSX代码 -> Babel - 编译 -> React.createElement调用 -> ReactElement调用 -> 虚拟dom -> 作为参数传入ReactDom.render -> 渲染处理 -> 真实dom
 * 
 * */


/* *
*  
*   React生命周期
*   
*   设计思想：
*   
*       虚拟dom：diff算法核心
*       
*           组件初始化 -> render方法 -> 虚拟dom -> ReactDOM.render方法 -> 真实dom
*           
*           组件更新 -> render方法 -> 虚拟dom -> diff算法 -> 定位出dom的差异
*
*       组件化：工程化思想在框架中的落地
*           
*           封闭：针对渲染工作流，每个组件只处理它内部的渲染逻辑
*   
*           开放：针对组件间通信，react允许开发者基于单向数据流原则，完成组件间通信。组件间通信又会影响组件内部的状态，从而影响组件的渲染。
*
*      
*       react15生命周期流程
*           
*           mounting阶段：组件的初始化渲染（挂载）
*               constructor() -> componentWillMount() -> render() // 不会操作dom -> componentDidMount() // 真实dom操作完毕
*           
*           更新
*               父组件更新引起的更新            
*                   componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
*                   componentWillReceiveProps // 父组件重新渲染触发，并不是props重新渲染导致子组件重新渲染
*               自身内部状态更新引起的更新    
*                   shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
*               
*           卸载
*               componentWillUnmount
*               触发条件：1.组件在父组件中被重新移除了 2.组件设置了key属性，父组件发现key值发生变化
*
*
*       react 16.3生命周期
*           对比react15将componentWillMount（废弃）， componentWillReceiveProps 换成getDerivedStateFromProps（新增）
*           getDerivedStateFromProps在挂在和更新都会出现 // 静态方法，不依赖组件实例存在
*           react15只能返回单个元素，单react16允许返回字符串
*           
* */


