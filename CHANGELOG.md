
## `0.0.14`

- [34](https://github.com/dvajs/dva/pull/34) - Support dynamic load

## `0.0.13`

- **Break Change:** [32](https://github.com/dvajs/dva/pull/32) - Improve subscription, with api break change 
- [33](https://github.com/dvajs/dva/pull/33) - Change plugin from singleton to class, so won't break with multiple dva instance

## `0.0.12`

- [31](https://github.com/dvajs/dva/pull/31), Add onReducer hook to support reducer enhancer

## `0.0.11`

- Fix fetch and router don't work

## `0.0.10`

- [28](https://github.com/dvajs/dva/pull/28), Support plugin with `app.use` 
- Export api from react-router-redux, so we can use actions like `push`, `go`, `replace`, ...
- Use whatwg-fetch instead of isomorphic-fetch

## `0.0.9`

- app.start: Return react component so that can be rendered by ReactDOM

## `0.0.8`

- [12](https://github.com/sorrycc/dva/pull/12) - Fix effects can't pass arguments

## `0.0.7`

- [7](https://github.com/sorrycc/dva/pull/7) - API Improvement 

详见：[API 设计](https://github.com/sorrycc/dva/issues/7)

## `0.0.6`

- Change `app.start(elementId)` to `app.start(domElement)`

## `0.0.5`

- [5](https://github.com/sorrycc/dva/pull/5) - Prepare umd build before publish, then we can make demo on jsfiddle and jsbin more easily

## `0.0.4`

- Change router format from jsx element to component function
- Export render from app.start, so we can apply hmr to routes and components, [HMR Example](https://github.com/sorrycc/dva/blob/master/examples/user-dashboard/src/entries/index.js)

### Why

先说 Router 。之前是这样的：

```javascript
app.router(
  <Route path="/" component={App} />
);
```

这有几个问题：

1. 不支持 [Dynamic Routing](https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md)
1. 有多个路由配置时，由于 jsx 的限制，必须有一个额外的 element 把它们包含起来。比如：`<div><Route path="/a" /><Route path="/b" /></div>`
1. HMR 支持问题。`<Router>` 不放外面传入会触发 react-router 的 rerender，而 react-router 不允许 rerender

另外，`app.start` return render 方法纯粹是为了支持 components 和 routes 的 HMR，之后如果找到更好的方法，会去掉。

## `0.0.3`

- [4](https://github.com/sorrycc/dva/issues/4) - Extend effects, support takeLatest and takeEvery

## `0.0.2`

- Add fetch, so we can `import fetch from 'dva/fetch'`

## `0.0.1`

- First version
