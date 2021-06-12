/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let numToStr = x.toString();
    let strToArr = numToStr.split('');
    let revNum = '';
    let maxRange = 2147483648 -1;
    let minRange = -2147483648;
    for(let i=strToArr.length-1;i>=0;i--){
        if(strToArr[i]=='-'){
            return false;
        } else {
             revNum = revNum + strToArr[i]  
        }
    }
    let result = revNum;  
    if(result==numToStr){
         return true;
     } else {
         return false;
     }
 
  
};