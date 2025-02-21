// for loop 
// for (let index = 0; index < array.length; index++) {
//    const element = array[index];

//eg:
// for (let index = 0; index < 10; index++) {
//     console.log(index);
// }

for (let i = 0; i <=3 ; i++) {
    console.log(`outer loop${i}`);
    for (let index = 0; index <=3; index++) {
        console.log(`inner loop ${index}`);
    }
}