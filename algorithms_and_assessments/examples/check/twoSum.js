function twoSum(nums, target) {
    const seenIndices = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in seenIndices) {
            return [seenIndices[complement], i];
        }
        seenIndices[nums[i]] = i;
    }

    return null;  // Or some other indicator that a solution wasn't found
};

twoSum([1,2,3,4,5], 6)
