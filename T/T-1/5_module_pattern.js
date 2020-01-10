
// revealing module pattern
// Turn this object literal into a module that only exposes the render method

let myModule = (function(){
    let _data = [];
    let _render = function() {

    }

    let _add = function() {
        _data.push('addMe')

    }
    let _remove = function() {
        _data.pop();

    }
    return {
      render: _render // only expose ender
      //add: _add this will expose the add method
    }
})();

myModule.render();
myModule._data; // this will fail
myModule._add(); // this will fail



// let myModule = {
//   data: [],
//   render() {

//   },
//   add: () => {

//   },
//   remove: () => {

//   }
// };

// myModule.render();

