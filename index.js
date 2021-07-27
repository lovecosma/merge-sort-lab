
function findMinAndRemoveSorted(array){
    let min = array[0]
    let min_index = 0

    
    for(let i = 0; i < array.length; i++){
        // debugger
        if(array[i] < min){
            min = array[i]
            min_index = i
        }
    }
    
    
    array.splice(min_index, 1)
    // debugger
    return min
}

function merge(array1, array2){
    let sorted = []
    // debugger

    while(array1.length != 0){
        // debugger
        let min1 = findMinAndRemoveSorted(array1)
        let min2 = findMinAndRemoveSorted(array2)
        if(min1 > min2){
            array1.push(min1)
            sorted.push(min2)
        } else {
            array2.push(min2)
            sorted.push(min1)
        }
    }
    
    if(array1[0] != null){
        sorted.push(array1[0])
    } else {
        sorted.push(array2[0])
    }
 return sorted
}

function mergeSort(unsorted){
    let sorted = []
    while(unsorted.length != 0){
        let min = findMinAndRemoveSorted(unsorted)
        sorted.push(min)
    }
    return sorted
}