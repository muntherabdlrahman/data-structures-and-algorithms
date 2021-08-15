let arr=[3,6,9,12,15]

function test(arr,num){
    let outputNumber;
    for(let el of arr){
        if (el==num) {
            outputNumber=arr.indexOf(el);
            break;
        }else{
                    outputNumber=-1;
                }
    }
    return outputNumber
}


console.log(test(arr,12));

