var maxArea = function(height) {
    let maxwater = 0;
    let left = 0;
    let right = height.length-1
    
    while(left < right){
        let minHeight = Math.min(height[left], height[right])
        let width = right-left
        let totalwater = width * minHeight
        maxwater = Math.max(totalwater, maxwater)

        if(height[left] > height[right]){
            right--
        }else{
            left++
        }
    }
    return maxwater
};
maxArea([1,8,6,2,5,4,8,3,7])