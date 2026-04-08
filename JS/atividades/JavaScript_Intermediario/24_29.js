for(let i = 0; i <= 10; i++) {
  console.log(i); 
}

for(let i = 0; i <= 10; i++) {
  if(i % 2 === 0) console.log(i); 
}

let c = 1;
while(c <= 5) {
  console.log(c); 
  c++;
}

let j = 0;
do {
  console.log("Executou"); 
} while(j > 0); 

for(let i = 0; i < 10; i++) {
  if(i === 5) break; 
  console.log(i);
}

for(let i = 1; i <= 5; i++) {
  if(i === 3) continue; 
  console.log(i); 
}