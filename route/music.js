var request = require('request')

module.exports = (app) =>{
  /**
   * 音乐电台接口
   */
  app.get('/musicBroadcasting', (req, res) => {
    request('https://api.apiopen.top/musicBroadcasting', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body)
      }
    })
  })

  /**
   * 音乐电台详情接口
   * @param channelname string
   */
  app.get('/musicBroadcastingDetails', (req, res) => {
    request(`https://api.apiopen.top${req.url}`, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body)
      }
    })
  })
  
  /**
   * 音乐排行榜接口
   */
  app.get('/musicRankings', (req, res) => {
    request('https://api.apiopen.top/musicRankings', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body)
      }
    })
  })

  /**
   * 音乐搜索接口
   * @param name string
   */
  app.get('/searchMusic', (req, res) => {
    request(`https://api.apiopen.top${req.url}`, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body)
      }
    })
  })

  /**
   * 音乐详情接口
   * @param id number
   */
  app.get('/musicDetails', (req, res) => {
    request(`https://api.apiopen.top${req.url}`, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body)
      }
    })
  })
}
