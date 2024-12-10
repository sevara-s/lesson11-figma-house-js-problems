var findAverage = function (nums) {
    let res=nums.reduce((sum,num)=>sum+num,0);
   return (res/nums.length);
 }