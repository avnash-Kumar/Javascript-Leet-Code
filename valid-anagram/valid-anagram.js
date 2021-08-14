/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let string1 ={};
    let string2 ={};
    if(s.length != t.length){
       return false;
    }
    for(let s1 of s){
        string1[s1] = (string1[s1] || 0) + 1;
    }
    for(let s2 of t){
        string2[s2] = (string2[s2] || 0) + 1;
    }
    for(let str1 in string1){
        if(!(str1 in string2)){
            return false;
        }
        if(string2[str1] != string1[str1]){
            return false
        }
    }

    return true;
};