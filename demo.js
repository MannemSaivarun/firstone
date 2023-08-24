console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const addButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 3000);
  });
  const getColdDrinks = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve('ColdDrinks')
    },3000)
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  console.log(`got the ${ticket}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "i am hungry"`);
  
  let popcorn = await getPopcorn;
  console.log(`Husband: here is ${popcorn}`);
	console.log(`Husband:we should go in now`);
  console.log(`Wife: "I dont like popcorn without butter!"`);
  
  let butter = await addButter;
  console.log(`added ${butter}`);
   
  console.log(`Husband:Anything else darling`);
  let ColdDrinks = await getColdDrinks;
  console.log(`Husband: here is ${ColdDrinks}`);
  console.log(`Wife: lets go we are going to miss the preivew`);
  console.log(`Husband: thanks for the reminder *grin*`);
  
  return ticket;
  
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');




//Createposts and deleteposts using async and await 

posts=[];
let createposts = async ()=>{
    const addpost = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({title:'POST1'})
            posts.push({title:'POST2'})
            posts.push({title:'POST3'})
            posts.push({title:'POST4'})
            posts.push({title:'POST5'})
            resolve(posts)
        },10000 )
    })

    const delpost = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let popele = posts.pop()
            resolve(popele);
        },10000)
    })
    let pushpost = await addpost;
    console.log(`here are the posts created${pushpost}`);



    let poppost;
    try {
        poppost = await delpost;
        
    } catch (e) {
        poppost = "ERROR";
    }

    console.log(`here is the deleted post ${poppost.title}`)



    

    return posts

}

createposts().then((msg)=>console.log(msg));