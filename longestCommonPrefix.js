var longestCommonPrefix = function(strs) {
    let str = strs[0];
    let final=str.length;
    for(let i=1; i<strs.length; i++){
        let ans = 0;
        for(let j=0; j<strs[i].length; j++){
            if(str[j] === strs[i][j]){
                ans++;
            }else{
                break;
            }
        }
        if(ans < final){
            final = ans;
        }
    }
    if(final){
        console.log(str.slice(0,final))
        return ;
    }else{
        console.log("");
        return;
    }s
  };

  longestCommonPrefix(["ab","z"])