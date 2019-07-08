/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let alpha = []
    if (s.length != t.length) return false
    for (let i = 0; i < s.length; i++) {
        alpha[s.charAt(i) - 'a'] ++;
        alpha[t.charAt(i) - 'a'] --;
    }
    return alpha.every(item => !item)
};
//total_testcases:34
//total_correct:16
//input_formatted:"a", "b"
//expected_output:false
//code_output:true
