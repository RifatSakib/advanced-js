const nums = [1,2,3,4,-5,-6,-7,8,5];
for (let i = 0; i < nums.length; i++) {
    if (nums[i]>6){

        break;

    }
    console.log (nums[i]);

    
}
console.log("")

for (let i = 0; i < nums.length; i++) {
    if (nums[i]<0){

        continue;

    }
    console.log (nums[i]);

    
}