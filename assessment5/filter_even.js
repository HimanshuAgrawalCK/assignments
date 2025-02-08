

function filterEven(arr){
    
    arr = arr.filter((x)=>{
        if(x%2==0){
            return true;
        }
        return false;
    });
    return arr;
}

arr = [1,2,3,4,5,6,7,8]
console.log(filterEven(arr));