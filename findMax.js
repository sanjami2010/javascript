function findMax(arr){
 var findMax = arr[0];
 for(var i=1; i<arr.length; i++){
   if(arr[i] > findMax){
     findMax = arr[i];   
   }
  }
return findMax;
}

findMax([4,12,3,8,0,22,56]); 