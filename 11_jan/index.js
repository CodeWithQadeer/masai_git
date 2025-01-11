//patern
let n=7
for (let i=0;i<n;i++){
    bag =""
    for (let j=0;j<n;j++){
      i==0||i==n-1 ? //for first and last line
      bag+="* ": j==0||j==n-1 ? // for parallel 
      bag+="* ":i+j==n-1 ? 
      bag+="* ":i==j ?
      bag+="* ":bag+="  "
    }
    console.log(bag)
}
