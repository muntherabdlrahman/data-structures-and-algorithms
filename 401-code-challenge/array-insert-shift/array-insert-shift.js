let array=[1,2,3,4]

function pushinside(arr,number){
    let newArray=[];
    let theOldArray=Math.round(arr.length/2);
    arr.forEach((element,item)=>{
        if(item!== theOldArray){
            newArray.push(element)
        }else{
            newArray.push(number)
            newArray.push(element)
        }

    })
    return newArray
};

console.log(pushinside(array,3.5))

