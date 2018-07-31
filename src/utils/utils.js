/**
 * 格式化金额 99999 => 99,999.00
 * @param {数字} s
 * @param {小数位} n
 */
export const fmoney = (s, n) => {
  if (!s) return 0.00
  n = n > 0 && n <= 20 ? n : 2
  s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + ''
  let l = s.split('.')[0].split('').reverse()
  let r = s.split('.')[1]
  var t = ''
  for (var i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '')
  }
  return t.split('').reverse().join('') + '.' + r
}
