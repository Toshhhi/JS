fetch('https://api.github.com/users/Toshhhi')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=> console.log(error));
