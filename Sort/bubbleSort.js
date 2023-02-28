// Bubble sort
function bubbleSort(arr) {
    let isDone = false;
    while (!isDone) {
        isDone = true;
        for (let i = 1; i < arr.length; i++) {
            if(arr[i-1]>arr[i]){
                isDone=false
                var temp=arr[i];
                arr[i]=arr[i-1];
                arr[i-1]=temp
            }
        }
    }
    return arr;
}
let arr2 = [12, 2, 3, 4, 12, 2, 1, 4, 5, 6, 5, 5];
console.log(bubbleSort(arr2));