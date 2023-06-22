// insertion sort 
  function insertionSort(arr){

for (var x = 1; x < arr.length; x++){
    let temp = arr[x]
    for (var y=x -1; y >= 0; y--){
        if (arr[y] > temp){
            arr[y+1] = arr[y]
            if (y==0){
                arr[y] = temp
            } else {arr[y+1] = temp}
            break
        }
    }
}
return arr

  }
  insertionSort([3,5,2,1,0])
  insertionSort([3,0])
  insertionSort([0])
  insertionSort([])
  insertionSort([0,1,2,3,5])
  insertionSort([5,4,3,2,1])
  insertionSort([5,4,0,2,1])
 