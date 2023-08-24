const posts = [];

function createPost(post){
   return  new Promise((resolve,reject) =>{
        setTimeout(()=>{
            posts.push(post)
            resolve();
        },1000)
    })
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const d = new Date();
            let time = d.getTime();
            resolve(time);

        }, 1000);
    })
    
}

function deletepost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length){
                popele = posts.pop()
               resolve(popele)
            }else{
                reject("ERROR")
            }
        },1000)
    })
}

createPost({title:'POST1'}).then(()=>{
    updateLastUserActivityTime().then((msg)=>{
        console.log(msg);
        console.log(posts)
        createPost({title:'POST2'}).then(()=>{
            updateLastUserActivityTime().then((msg)=>{
                console.log(msg);
                console.log(posts)
                deletepost().then((msg)=>{
                    console.log(msg.title)
                    console.log("remaining posts after deletion are" ,posts)
                }).catch(err => console.log(err))
            })
        })
    })
})