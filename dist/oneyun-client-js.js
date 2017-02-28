/*!
 * oneyun-client-js v0.1.4
 * https://github.com/liushuixingyun/oneyun-server-api-nodejs
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.OneyunJSClient = factory());
}(this, (function () { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};









var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var Initrailler = function () {
  function Initrailler(sipAddr) {
    classCallCheck(this, Initrailler);

    this.sipAddr = sipAddr;
    this._createWS(this.sipAddr);
  }

  Initrailler.prototype._createWS = function _createWS(sipAddr) {
    var wsImpl = window.WebSocket || window.MozWebSocket;
    this.ws = new wsImpl(sipAddr);
  };

  Initrailler.prototype._send = function _send(method, params) {
    this.ws.send(JSON.stringify({
      method: method,
      params: params ? [].concat(params) : [],
      id: method
    })
    // console.log('method：', method, 'params: ', params)
    );
  };

  Initrailler.prototype.getAccount = function getAccount() {
    this._send('getAccount');
  };

  Initrailler.prototype.answer = function answer() {
    this._send('answer');
  };

  Initrailler.prototype.show = function show() {
    this._send('show');
  };

  Initrailler.prototype.hide = function hide() {
    this._send('hide');
  };

  Initrailler.prototype.hangup = function hangup() {
    this._send('hangup');
  };

  Initrailler.prototype.getCurrentVolume = function getCurrentVolume() {
    this._send('getCurrentVolume');
  };

  Initrailler.prototype.getCurrentMicroVolume = function getCurrentMicroVolume() {
    this._send('getCurrentMicroVolume');
  };

  Initrailler.prototype.setVolume = function setVolume(number) {
    this._send('setVolume', number);
  };

  Initrailler.prototype.setMicroVolume = function setMicroVolume(number) {
    this._send('setMicroVolume', number);
  };

  Initrailler.prototype.minimize = function minimize() {
    this._send('minimize');
  };

  Initrailler.prototype.show = function show() {
    this._send('show');
  };

  Initrailler.prototype.setAccount = function setAccount(user, password, domain, timeout) {
    var params = [user, password, domain, timeout];
    this._send('setAccount', params);
  };

  return Initrailler;
}();

return Initrailler;

})));
