# React Lifecycle Wrap Addon

[![NPM version](https://img.shields.io/npm/v/react-lifecycle-wrap-addon.svg?style=flat)](https://npmjs.org/package/react-lifecycle-wrap-addon)
[![NPM downloads](http://img.shields.io/npm/dm/react-lifecycle-wrap-addon.svg?style=flat)](https://npmjs.org/package/react-lifecycle-wrap-addon)

Easy to write stateless components without using Class. Enjoy functional programming.

----

#### Usage: 

```javascript

// one day, you are happliy coding ^__^
// writing stateless component, do functional programming
const Users = (props) => <div>
  <ul>
    {
      props.list.map(user=><li>{user}</li>)
    } 
  </ul>
</div>

// and then, need do something in react component's lifecycle, but pure.

// change to class
// not happy ~__~
import { Component } from React;
class Users extends Component {
  componentDidMount() {
    this.props.dispatch({
        type: 'add/user', 
    }); 
  }
  render() {
    return  <div>
        <ul>
            {
                this.props.list.map(user=><li>{user}</li>)
            } 
        </ul>
    </div>
  }
}

// or you can
// using react-lifecycle-wrap-addon, happy coding ^__^
import lifecycle from 'react-lifecycle-wrap-addon';
let Users = (props) => <div>
  <ul>
    {
      props.list.map(user=><li>{user}</li>)
    } 
  </ul>
</div>

Users = lifecycle(Users, {
  componentDidMount(props) {
    props.dispatch({
      type: 'add/user', 
    });
  }
});
```

```javascript

// you can do any lifecycle functional with react-lifecycle-wrap-addon

Users = lifecycle(Users, {
    constructor(props) {
        // ...do something 
    },
    componentDidMount(props) {
        props.dispatch({
            type: 'add/user', 
        });
    },
    componentWillReceiveProps(nextProps, props) {
        // ...do something 
    }
});

```

#### Best Practice

```javascript

// wrong
// effects side
Users = lifecycle(Users, {
  constructor(props) {
    this.state = {
      name: 'niko', 
    } 
  },
  componentDidMount(props) {
    props.dispatch({
      type: 'get/users',
      payload: this.state.name,
    })     
  },
});

// right
Users = lifecycle(Users, {
  componentDidMount(props) {
    props.dispatch({
      type: 'get/users',
      payload: props.name,
    })     
  },
});
```
