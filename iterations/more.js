const coding  = ["js" , "java" , "cpp"]
coding.forEach( function(item){ // inbuilt function for for loop in an array defined as array_name.forEach(function(any_name_for_index{ your function }))
})

coding.forEach( () => {} ) //arrow fucntion

//passing a fucntion 
function name (item){
     console.log(item);
}
coding.forEach(name)

coding.forEach((item, index, arr)=>{
    console.log(item, index, arr); //output : js 0 [ 'js', 'java', 'cpp' ]
})


// forEach loop in an array of objects
const newCoding = [
    {
        name : "toshika",
        age : "20"
    },
    {
        name : "maggi",
        age : "18"

    },
    {
        name : "siddy",
        age : "21"
    }
]

newCoding.forEach((item)=>{
    console.log(item.age);
})