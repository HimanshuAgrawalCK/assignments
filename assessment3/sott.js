function sort()
{
    var arr = [7,3,1,6,8,31,2,5,92,11];
    var n = arr.length;
    for (var i = 0; i < n - 1; i++)
    {
        for (var j=0;j<n-1;j++)
        {
            if(arr[j] > arr[j+1])
            {
                var temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    console.log(arr);
}
sort();