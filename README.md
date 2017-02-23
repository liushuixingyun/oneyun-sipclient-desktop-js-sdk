# JS SDK [![Version](https://img.shields.io/npm/v/oneyun-sipclient-desktop-js-sdk.svg)](https://www.npmjs.com/package/oneyun-sipclient-desktop-js-sdk)

SIP 客户端的 JS SDK


## 准备


安装

```js
npm install oneyun-sipclient-desktop-js-sdk --save-dev
```

使用 CMD

```js
import JsClient from 'oneyun-sipclient-desktop-js-sdk'
let Client = new jsClient('ws://localhost:2000/')
```

已用 [UMD](https://github.com/umdjs/umd#readme) 包装，因此它们可以直接用作 AMD 模块

使用 AMD

```html
// 引入文件
<script src="./node_modules/oneyun-sipclient-desktop-js-sdk/dist/oneyun-client-js.js"> </script>

// 创建实例
var Client = new OneYunJsSipClient('ws://localhost:2000/')
```

## 接口

| 方法                  | 参数         | 说明                     |
|-----------------------|--------------|--------------------------|
| answer                | 无           | 应答                     |
| hangup                | 无           | 挂断                     |
| minimize              | 无           | 窗口最小化               |
| show                  | 无           | 窗口最大化               |
| getCurrentVolume      | 无           | 获取当前振声器           |
| getCurrentMicroVolume | 无           | 获取当前麦克风           |
| setVolume             | {int} volume | 设置当前振声器音量 0-100 |
| setMicroVolume        | {Int} volume | 设置当前麦克风音量 0-100 |
| setAccount            | {string} user, {string} password, {string} domain, {unit} timeout | 设置 SIP 账户信息|

用法

```js
Client.answer()
Client.hangup()
Client.getCurrentVolume()
Client.setVolume(20)
Client.setAccount('100001888888','123456','sip.oneyun.com',300);
```

## 响应 & 事件

```js
// 成功返回
{"jsonrpc":"2.0","result":"","id":1}
// 收到事件
{"jsonrpc":"2.0","result": {"events": "hangup"},"id":1}

// 失败返回
{"jsonrpc":"2.0","result":"失败原因","id":1}
```

事件列表

| 事件      | 说明       |
|-----------|------------|
| "hangup"  | 挂断事件   |
| "answer"  | 来电事件   |
| "calling" | 通话中事件 |

需要注意的是，这里的结果返回是在`websocket` 回调中获取

```js
Client.ws.onmessage = function (callback) {
  ...callback
};
```

[查看案例](https://github.com/liushuixingyun/oneyun-sipclient-desktop-js-sdk/blob/master/example/index_jssdk.html)
