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
