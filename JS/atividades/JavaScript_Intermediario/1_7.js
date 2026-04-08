const user = {
  nome: "Sara",
  email: "Sara@gmail.com",
  idade: 22
};
console.log(user.nome, user.email, user.idade);

user.saudacao = function() {
  console.log(`Olá, meu nome é ${this.nome}`); 
};
user.saudacao();

user.email = "novoemail@exemplo.com"; 
console.log(user.email); 

console.log(user['nome']); 

const empresa = {
  nome: "Tech",
  endereco: { cidade: "Fortaleza", estado: "CE" } 
};
console.log(empresa.endereco.cidade); 

console.log(empresa.cliente?.nome); 

const telefone = user.telefone ?? "Telefone não cadastrado"; 
console.log(telefone); 