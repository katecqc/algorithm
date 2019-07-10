//设计一个支持以下两种操作的数据结构：
//
// void addWord(word)
//bool search(word)
//
//
// search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。 . 可以表示任何一个字母。
//
// 示例:
//
// addWord("bad")
//addWord("dad")
//addWord("mad")
//search("pad") -> false
//search("bad") -> true
//search(".ad") -> true
//search("b..") -> true
//
//
// 说明:
//
// 你可以假设所有单词都是由小写字母 a-z 组成的。
//

/**
 * Initialize your data structure here.
 */

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

class WordDictionary {
  constructor() {
    this.trie = {}
  }
  addWord(word) {
    let curr = this.trie
    word.split('').forEach(ch => {
      curr[ch] = curr[ch] || {}
      curr = curr[ch]
      return curr
    })
    curr.isWord = true
  }
  traverse (word) {
    let curr = this.trie
    for (let i = 0; i < word.length; i++) {
      if (!curr) return null
      if (word[i] === '.') {
        let initIndex = 'a'.charCodeAt()
        let step = 1
        for (let j = initIndex; j < initIndex + 26; j++) {
          let index = String.fromCharCode(j)
          if (curr[index]) {
            console.log(curr[index]);
            console.log('----------------------');
            curr = curr[index]
          }
          if (!curr[index] && step === 26) return null
          step++
        }
        console.log(curr);
        console.log('_______________________________________________');
      } else {
        curr = curr[word[i]]
        console.log(i, word[i], curr);
        console.log('-----------------------------------------------');
      }
    }
    return curr
  }
  search(word) {
    let node = this.traverse(word)
    return !!node && !!node.isWord
  }
}

let wordDictionary = new WordDictionary()
// wordDictionary.addWord("bad")
// wordDictionary.addWord("dad")
// wordDictionary.addWord("mad")
// console.log(wordDictionary.search("pad")); // false
// console.log(wordDictionary.search("bad")); // true
// console.log(wordDictionary.search(".ad")); // true
// console.log(wordDictionary.search("b..")); // true
const opera = ["addWord","addWord","addWord","addWord","search","search","addWord","search","search","search","search","search","search"]
const data = [["at"],["and"],["an"],["add"],["a"],[".at"],["bat"],[".at"],["an."],["a.d."],["b."],["a.d"],["."]]
for (let i = 0; i < opera.length; i++) {
  console.log(wordDictionary[opera[i]](data[i][0]))
}
