function rotate(arr,n){
    if(n===0){

        return arr;
    }
    if(n>0){
    arr.push(arr[0])
    arr.shift()
    return rotate(arr,n-1)
}
        if(n<0){
        arr.unshift(arr[arr.length-1])
        arr.pop()
        return rotate(arr,n+1)

        }

}

console.log(rotate([1,2,3,4,5],-3))