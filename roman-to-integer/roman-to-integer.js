/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   let inputString = s.split('');
   let result = 0;
   let mapString = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
        
   };
    
    for(let i=0;i<inputString.length;i++){
        if(inputString[i]=='I' && (inputString[i+1]=='V' || inputString[i+1]=='X') ){
           result = result- mapString[inputString[i]]  ;
         }
        else if(inputString[i]=='X' && (inputString[i+1]=='L' || inputString[i+1]=='C') ){
           result = result- mapString[inputString[i]]   ;
         }
        else if(inputString[i]=='C' && (inputString[i+1]=='D' || inputString[i+1]=='M') ){
           result = result- mapString[inputString[i]]   ;
         }
        else {
              result = result + mapString[inputString[i]];
         }
       
    }
    
    return result;
    
};