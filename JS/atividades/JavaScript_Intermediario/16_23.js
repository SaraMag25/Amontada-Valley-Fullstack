let itens = [10, 20, 30, 40, 50];
console.log(itens.length); 

console.log(itens[0], itens[itens.length - 1]); 

itens.unshift(0);
itens.push(60); 

itens.shift();
itens.pop(); 

console.log(itens.indexOf(30)); 

itens.splice(1, 1);

console.log(itens.includes(20)); 

const misto = ["Texto", 100, true]; 
console.log(misto[0], misto[1], misto[2]); 