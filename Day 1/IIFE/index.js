// Beginner Exercises
// 1. Simple IIFE
(function greeting() {
  const greet = "Hello World";
  console.log(greet);
})();

console.log(typeof greet);

// 2. Basic Counter with IIFE
const counter = (function counter() {
  let init = 0;
  return {
    getValue: function () {
      return init;
    },
    incrementValue: function () {
      return init++;
    },
  };
})();

// 3. Simple Configuration Object
const config = (function () {
  let defaultObj = { color: "blue", fontSize: "14px" };
  return {
    getConfig: function () {
      return defaultObj;
    },
  };
})();

// Advanced Exercises
// 1. Private Variable with IIFE
const module = (function () {
  let value = 0;
  return {
    getVar: function () {
      return value;
    },
    setVar: function (newValue) {
      value = newValue;
    },
  };
})();

// 2. Singleton Pattern with IIFE
// El objetivo del Patrón Singleton es asegurar
// que la clase tenga una instancia única.
// Puede darse el caso de utilizar
// un constructor, pero esto provocará
// que se generen n estancias nuevas. El patrón
// también es útil para evitar que otro código sobreescriba
// esta instancia.
const singleton = (function () {
  let instance;
  function createInstance() {
    const obj = {
      name: "Sebastian",
      age: 18,
    };
    return obj;
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// 3. Module Pattern
const myModule = (function () {
  let variableSecret = "secret";
  function methodPrivate() {
    return "Private method";
  }
  return {
    publicMethod: function () {
      console.log("Public method");
      methodPrivate();
      console.log(variableSecret);
    },
  };
})();

// 4. Lazy Initialization
const lazyInit = (function () {
  let init = false;
  return function () {
    if (init) {
      console.log("Already initialized");
    } else {
      init = true;
      console.log("Initializing");
    }
  };
})();

// 5. Configuration Module
const config_ = (function () {
  let objConfig = {};
  function get(key) {
    return objConfig[key];
  }
  function set(name, key) {
    objConfig[name] = key;
  }
  return {
    get: get,
    set: set,
  };
})();
