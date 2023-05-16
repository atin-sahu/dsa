var isValid = function(s) {

    const obj = {
        ")":"(",
        "}":"{",
        "]":"["
    }
    let stack = [];
    for(let i=0; i<s.length; i++){
        if(stack.length === 0){
            stack.push(s[i]);
        }else{
            if(s[i] === "(" || s[i] === "[" || s[i] === "{" ){
                 stack.push(s[i]);
            }else{
                if(obj[s[i]] === stack[stack.length-1]){
                    stack.pop();
                }else{
                    console.log("false")
                    return
                }
            }
        }
    }
   if(stack.length === 0){
    console.log("true")
   }else{
    console.log("false")
   }
    
};

isValid("()(())[]");