let arr = [1,3,4,3,4,5,3,1,2,4]


const againremovingdeuplicates = () =>{
    const newDuplicates = arr.filter((item,index,arr)=>{
        console.log(item,arr.indexOf(item),index)
        return arr.indexOf(item) === index
    })

    return newDuplicates
}


console.log("duplicates",againremovingdeuplicates(arr))
