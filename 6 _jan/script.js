let obj = {
    title: "The Hobbit" ,
    author: "J.R.R Tolkien",
    year: 1937
   
}

for (let key in obj){
    console.log(`${key}:${obj[key]}`)
}