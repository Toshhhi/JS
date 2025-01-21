// 2>3 ,2<3 , 3<=5 , 4>=5 , 3==4 , 2!=1 

console.log("495" == 5) // automatically js converted string into number ; in order to compare the DT must be taken into notice 

console.log(null==0); // avoid these practices 
console.log(null>0);
console.log(null>=0); //converted null into 0 so gave true for some reason 

console.log(undefined==0); // avoid these practices 
console.log(undefined>0);
console.log(undefined<0);
console.log(undefined<=0);
console.log(undefined>=0); // all false because no value is defined yet so cannot say 


//strict check : ===  checks values with datatypes 

console.log("8" === 8 ); // will return false because of strict check and that the datatype is not same 



