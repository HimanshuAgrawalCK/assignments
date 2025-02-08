function doubleValues(arr)
{
    arr= arr.map((x)=>{
        return x*2;
    })
    return arr;
}


arrr= [1,2,3,4,5];
console.log(doubleValues(arrr));