const texto = "JavaScript";
console.log(texto.toUpperCase()); 
console.log(texto.toLowerCase()); 

const senha = "123456";
console.log(senha.length >= 6);

const frase = "Estou aprendendo Java";
console.log(frase.replace("Java", "JavaScript")); 

console.log("Programação".slice(0, 5)); 

console.log("  texto com espaço  ".trim());

const listaPalavras = "Aprender e bom".split(" ");
console.log(listaPalavras); 

console.log(["arroz", "feijão"].join("-"));

const busca = "Estudo eng comp :(".toLowerCase();
console.log(busca.includes("eng")); 