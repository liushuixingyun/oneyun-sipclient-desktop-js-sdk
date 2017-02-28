export default class Initrailler {
  constructor(sipAddr) {
    this.sipAddr = sipAddr
    this._createWS(this.sipAddr)
  }

  _createWS(sipAddr) {
    const wsImpl = window.WebSocket || window.MozWebSocket
    this.ws = new wsImpl(sipAddr);
  }

  _send(method, params){
    this.ws.send(

      JSON.stringify({
        method: method,
        params: params ? [].concat(params) : [],
        id: method
      })
      // console.log('method：', method, 'params: ', params)
    )
  }

  getAccount() {
    this._send('getAccount')
  }

  answer() {
    this._send('answer')
  }

  show() {
    this._send('show')
  }

  hide() {
    this._send('hide')
  }

  hangup() {
    this._send('hangup')
  }

  getCurrentVolume() {
    this._send('getCurrentVolume')
  }

  getCurrentMicroVolume() {
    this._send('getCurrentMicroVolume')
  }

  setVolume(number) {
    this._send('setVolume', number)
  }

  setMicroVolume(number) {
    this._send('setMicroVolume', number)
  }

  minimize() {
    this._send('minimize')
  }

  show() {
    this._send('show')
  }

  setAccount(user, password, domain, timeout){
    var params = [user,password,domain,timeout];
    this._send('setAccount', params)
  }

}
