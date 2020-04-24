function shift(arr,i=0){
    if(i==arr.length-1){
      arr.length=arr.length-1;
      return arr ;  
    }
  
  arr[i]=arr[i+1]
  return shift(arr,i+1)
}
console.log(shift([11,22,33,44,55,66]))