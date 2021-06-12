/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let string = x.toString();
    let strToArr = string.split('');
    let revNum = ''
    let maxRange = 2147483648 -1;
    let minRange = -2147483648;
    for(let i=strToArr.length-1;i>=0;i--){
        if(strToArr[i]!='-'){
            revNum = revNum + strToArr[i]
        } else if(strToArr[i]=='-'){
             revNum = '-'+revNum;    
        }
    }
    let result = +revNum;
    
    if(result<minRange || result>maxRange){
       return 0
       } 
    else {
           return result;
       }
};