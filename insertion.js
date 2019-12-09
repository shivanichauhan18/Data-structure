function insertionSort(arr,n){
    for (var i=0; i<n; i++){
        key=arr[i]
        for(var j=i-1; j>=0 && key<arr[j]; j--){
            arr[j+1]=arr[j]
        }arr[j+1]=key
    }return arr
}

var arr=[12,11,13,5,6,8]
var  len=arr.length
console.log(insertionSort(arr,len))

