function runningSum(nums) {
    for (let i = 1; i < nums.length; i++) {
      nums[i] = nums[i - 1] + nums[i];
    }
    return nums;
  }
  const result = runningSum([1, 2, 3, 4]);
  console.log(result);