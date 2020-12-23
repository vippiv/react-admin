概念
    1、展示组件和容器组件
        展示组件一般只包含标签和样式，数据来自props，不需要state，就算有state通常也只是关心UI状态
        容器组件不包含标签和样式，只负责处理数据
    2、我们应当将AJAX 请求放到 componentDidMount 函数中执行，主要原因有下：
        a、React 下一代调和算法 Fiber 会通过开始或停止渲染的方式优化应用性能，其会影响到 componenТWillMount 的触发次数。对于 componenТWillMount 这个生命周期函数的调用次数会变得不确定，React 可能会多次频繁调用 componenТWillMount。如果我们将 AJAX 请求放到 componenТWillMount 函数中，那么显而易见其会被触发多次，自然也就不是好的选择。
        b、如果我们将 AJAX 请求放置在生命周期的其他函数中，我们并不能保证请求仅在组件挂载完毕后才会要求响应。如果我们的数据请求在组件挂载之前就完成，并且调用了setState函数将数据添加到组件状态中，对于未挂载的组件则会报错。而在 componentDidMount 函数中进行 AJAX 请求则能有效避免这个问题。
        c、在componentDidMount()函数中发送ajax请求，拿到数据，通过setState()保存在state中，供给组件使用。当组件要卸载时，在componentWillUnmount()函数中，通过this.serverRequest.abort();将还没有完成的ajax请求停止。