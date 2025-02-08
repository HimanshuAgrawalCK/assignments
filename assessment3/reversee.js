function rev()
{
    var num = [1,2,3,4,5,6];
    var reversed = [];
    for(var i = num.length-1;i>=0;i--)
    {
        // console.log(num[i]);
        reversed.push(num[i]);
    }
    console.log(reversed);
}

rev()