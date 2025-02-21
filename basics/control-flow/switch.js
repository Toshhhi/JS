//switch case 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 5;
switch (month) {
    case 1:
        console.log("jan");
        break; 
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
        
    default:
        console.log("no month");
    
        break;
}


// truthy falsy 

const usermail = "@gmail.com"
if (usermail) { // by deafult it is assumed to be true 
    console.log("got user mail");
} else {
    console.log("no email found");
}

//fasly values : false, 0, -0, BigInt 0n, "", null, undefined, NaN
// INKE ALAWA SAB TRUTHY VALS ASSUME HOTE HAI 

// truthy value : "0" (string with a 0), 'false', " " (string with a space), {}, [], function(){} (empty function)

//nullish coalescing operator (??) : null  , undefined 
let val1;
val1 = 5 ?? 10 // will give 5
val1 = null ?? 10 // will give 10 , null value hai toh check krle if nhi work krega w null else other option jo given hai vo 
val1 = undefined ?? 15 
val1 = null ?? 10 ?? 20 // jo first milegi vo hi assign hoga 20 nahi hoga 
console.log(val1); // will give 15

//TERNIARY operator 
// condition ? true : false
//eg: 
const price = 100
price == 100 ? console.log("is 100") : console.log("is not 100");


// note: the ?? used in nullish coalescing operator and TERNIARY operator  are two different


