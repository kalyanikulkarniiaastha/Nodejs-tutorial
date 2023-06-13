var threeSum = function(nums) { 
    const ans =[];

    if(nums.length<3) 
    return ans;
    
    sort((a,b)=>a-b); 
    for(let i=0;i<nums.length; i+=1) {
    
    if(nums[1]>0) break; 
    if(i>0 && nums [i]===nums[i-1]) continue;
    
     let start=i+1, end=nums.length-1;
     while(start<end) {

    
      const sum=nums[1]+nums [start]+nums[end]; 
      if(sum===0) {
    
      ans.push([nums[1], nums[start], nums[end]]);
    
    
      start+=1; end-=1;
    
      while(start<end && nums[start]===nums[start-1]) start+=1
    
      while(start<end && nums [end]===nums[end+1]) end-=1;
    

    
    }
 
    else if (sum<0) start+=1;
    
    else if (sum>0) end-=1;

    
    } 
 }
    
 return ans;
    
 };