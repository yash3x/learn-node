function doStuff(data){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(typeof data == 'number'){
                resolve(data * data);
            } else {
                reject("An error occurred");
            }
        }, 1000)
    });
}
doStuff(2).then(a =>{
    console.log((a));
    return doStuff(a);
}).then(b=>{
    console.log(b);
    return doStuff('a');
}).then(c=>{
    console.log((c));
}).catch((error => {
    console.log((error));
}))
