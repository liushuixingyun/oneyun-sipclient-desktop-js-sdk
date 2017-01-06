# JS SDK [![Version](https://img.shields.io/npm/v/oneyun-sipclient-desktop-js-sdk.svg)](https://www.npmjs.com/package/oneyun-sipclient-desktop-js-sdk)



SIP 客户端的 JS SDK



### 初始化



已用 [UMD](https://github.com/umdjs/umd#readme) 包装，因此它们可以直接用作 AMD 模块



AMD

```html
// 引入文件
<script src="./node_modules/oneyun-sipclient-desktop-js-sdk/dist/oneyun-client-js.js"> </script>

// 创建实例
var Client = new OneYunJsSipClient('ws://192.168.10.75:2000/')
```



CMD

```js
import JsClient from 'oneyun-sipclient-desktop-js-sdk'
let Client = new jsClient('ws://192.168.10.75:2000/')
```



### 应答



```js
// 调用
Client.answer()
```



### 挂断



```js
Client.hangup()
```



### 窗口最小化



```js
Client.minimize()
```



### 窗体最大化



```js
Client.show()
```


### 音量控制



| 方法                    | 参数           | 说明              |
| --------------------- | ------------ | --------------- |
| getCurrentVolume      | 无            | 获取当前振声器         |
| getCurrentMicroVolume | 无            | 获取当前麦克风         |
| setVolume             | {int} volume | 设置当前振声器音量 0-100 |
| setMicroVolume        | {Int} volume | 设置当前麦克风音量 0-100 |



用法



```js
Client.getCurrentVolume()
Client.setVolume(20)
```



### 响应



```js
// 成功返回
{"jsonrpc":"2.0","result":"","id":1}

// 失败返回
{"jsonrpc":"2.0","result":"失败原因","id":1}
```



需要注意的是，这里的结果返回是在`websocket` 回调中获取

```js
Client.ws.onmessage = function (result) {
  ...result
};
```



[查看案例](https://github.com/liushuixingyun/oneyun-sipclient-desktop-js-sdk/blob/master/example/index_jssdk.html)
