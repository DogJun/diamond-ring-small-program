import wepy from 'wepy'
import tip from './tip'

const wxRequest = async(params = {}, url) => {
  tip.loading()
  let data = params.query || {}
  let res
  try {
    res = await wepy.request({
      url: url,
      method: params.method || 'POST',
      data: data,
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
  } catch (err) {
    tip.loaded()
    tip.error(err.errMsg)
  }
  tip.loaded()
  return res
}

module.exports = {
  wxRequest
}
