function split(wholeArray) {
    // console.log(wholeArray)
    if(wholeArray.length===1) return wholeArray
    /* your code here to define the firstHalf and secondHalf arrays */
    const half=wholeArray.length/2
    const firstHalf=wholeArray.slice(0,half)
    const secondHalf=wholeArray.slice(half,wholeArray.length)
    console.log('firsthalf', firstHalf)
    console.log('secondhalf',secondHalf)
    return [firstHalf, secondHalf];
  }
function mergeSort(array) {
    /* your code here */
    const arr = split(array)
    const left = arr[0]
    const right = arr[1]
    const left_sorted=mergeSort(left)
    const right_sorted=mergeSort(right)
    return merge(left_sorted,right_sorted)

}
function merge(arr1,arr2){
    let p1=0;
    let p2=0;
    let resultArr=[]
    while(p1<arr1.length && p2<arr2.length){
        if(arr1[p1]>=arr2[p2]){
            resultArr.push(arr2[p2])
            p2++
        }else{
            resultArr.push(arr1[p1])
            p1++
        }
    }
    if(p1===arr1.length){
        const temp = arr2.slice(p2,arr2.length)
        resultArr=resultArr.concat(temp)
    }else{
        const temp = arr1.slice(p1,arr1.length)
        resultArr=resultArr.concat(temp)
    }
    return resultArr
}