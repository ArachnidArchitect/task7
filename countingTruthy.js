let myArray = [true,true,false, true]

count =0
i = 0
function truthyCount(array) {
    if (i == array.length) {
       return
    }else{
        if(array[i]){
            count++
            i++
            console.log(count)
            truthyCount(array)
        }else{
            i++
            truthyCount(array)
        }
    }
    console.log(count)
}

truthyCount(myArray)