/*
原理：合理增加模式串滑动的位数，减少无效对比
时间复杂度：最好的为O(n/m)，n是主串长度，m是模式串长度
遵循以下规则：
  1. 坏字符规则：模式串（匹配字符串）反向遍历字符并与主串（被匹配字符串）字符对比，遇到不能匹配的字符，则为坏字符
  2. 好后缀规则：
优化：使用散列表记录已经模式串中的字符串的位置，可快递定位坏字符串在模式串的位置下标
 */

class BM {
  constructor(a, n, b, m) {
    this.size = 256
    this.a = a
    this.n = n
    this.b = b
    this.m = m
    this.bc = new Array(this.size) // 记录模式串中每个字符最后出现的位置
    this.suffix = new Array(this.size) // 记录模式串的后缀字符串组合
    this.prefix = new Array(this.size) // 记录模式串中前、后缀字符串是否有公共子串
  }
  bm() {
    this.generateBC() // 构建坏字符哈希表
    this.generateGS()
    let i = 0
    while (i <= this.n - this.m) {
      let j
      for (j = this.m - 1; j >= 0; j--) {
        if (this.a[i + j] != this.b[j]) break
      }
      if (j < 0) {
        return i
      }
      let x = j - this.bc[this.getCharCode(this.a[i + j])]
      let y = 0
      if (j < m - 1) { // 如果有好后缀的话
        y = this.moveByGS(j)
      }
      i = i + Math.max(x, y)
    }
    return -1
  }
  getCharCode (character) {
    let initNum = 'a'.charCodeAt()
    let res = character.charCodeAt() - initNum
    return res
  }
  generateBC() {
    this.bc.fill(-1)
    for (let i = 0; i < this.m; i++) {
      // 计算b[i]的ASCII值，相同字符会替代成后面那个
      // 原理：
      // 如果坏字符在模式串里多处出现，那我们在计算 xi 的时候，选最靠后的那个
      // 因为这样不会让模式串滑动过多，导致本来可能匹配的情况被滑动略过
      let ascii = this.getCharCode(this.b[i])
      this.bc[ascii] = i
    }
  }
  generateGS() {
    this.suffix.fill(-1)
    this.prefix.fill(false)
    for (let i = 0; i < m - 1; i++) { // b[0, i]
      let j = i
      let k = 0 // 公共后缀子串长度
      while (j >= 0 && b[j] === b[m - 1 - k]) {
        j--
        ++k
        this.suffix[k] = j + 1 // j+1 表示公共后缀子串在 b[0, i] 中的起始下标
      }
      i
      if (j === -1) this.prefix[k] = true // 如果公共后缀子串也是模式串的前缀子串
    }
  }
  moveByGS(j) {
    let k = m - 1 - j // 好后缀长度
    if (this.suffix[k] != -1) return j - this.suffix[k] + 1
    for (let r = j + 2; r <= m - 1; r++) {
      if (this.prefix[m - r]) {
        return r
      }
    }
    return m
  }
}
const [a, b] = ['fhaasaslasljhfkajlshf', 'aslasl']
const [n, m] = [a.length, b.length]
let initBm = new BM(a, n, b, m)
console.log(initBm.bm());
