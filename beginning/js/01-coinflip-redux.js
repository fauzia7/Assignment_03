let coinFlip ;
let i= Number(prompt("Enter the number of time you wish to execute the loop!!"));
for(j=1 ; j<=i ; j++ ) {
    coinFlip = Math.round(Math.random());
}
 if ( coinFlip==="0") {
     console.log("Head!!!!");
 } else  {
     console.log("Tail!!!!");
 }