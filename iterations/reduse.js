   const myNums = [1,2,3]

// const mytotal  =  myNums.reduce(function(acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)
 
//console.log(mytotal);



const mytotal = myNums.reduce((acc, curr) => acc+curr,0)
console.log(mytotal);



const shppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
     {
        itemName: "python",
        price: 4999
    },
     {
        itemName: "mob dev",
        price: 5999
    },
     {
        itemName: "M L",
        price: 7999
    }
]
      const priceTopay  =  shppingCart.reduce((acc, item) => acc + item.price, 0)
       
      console.log(priceTopay);
      

      