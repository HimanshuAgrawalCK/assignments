function sum(...arr)
{
    let su=0;
    for(var i=0;i<arr.length;i++)
    {
        su=su+arr[i];
        // console.log(su);
    }
    return su;
    
}

// const summ=(a,b) => a+b;


arrr = [1,2,3,4,5,6,7,8];
console.log(sum(...arrr))