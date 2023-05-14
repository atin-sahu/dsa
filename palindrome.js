var isPalindrome = function(x) {

    let str = x.toString();
    let s = 0;
    let e = str.length-1;
    let flag = true;
    for(s; s<=Math.floor(str.length-1/2); s++){
        if(str[s] === str[e]){
            e--;
        }else{
            console.log(false);
            return
        }
    }
    console.log(flag);
};

isPalindrome(121);