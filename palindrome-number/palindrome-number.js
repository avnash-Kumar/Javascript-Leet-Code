/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let numToStr = x.toString();
    let strToArr = numToStr.split('');
    let revNum = '';
    for(let i=strToArr.length-1;i>=0;i--){
        if(strToArr[i]=='-'){
            return false;
        } else {
             revNum = revNum + strToArr[i]  
        }
    }
    let result = revNum;  
    if(revNum==numToStr){
         return true;
     } else {
         return false;
     }
 
  
};