# JS SDK

SIP 客户端的 JS SDK



### 初始化



```js
// 创建实例
let Client = new OneYunJsSipClient('ws://192.168.10.75:2000/')
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
