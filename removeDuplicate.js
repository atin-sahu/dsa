    
    function rmDuplicate(nums){
        let i = 0;
        for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
        }
        console.log("i", i + 1);
    }

    rmDuplicate([1,1,2]);