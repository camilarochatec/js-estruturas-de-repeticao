let alunos = ['Camila', 'Nayara', 'Jéssica']; // string
alunos.push('João');
let mesNascimento = [9, 3, 5]; //number
mesNascimento.push(2);
let faculdade = [false, true, false];//boleans
faculdade.push(false);

//ESTRUTURA LOOP
for(let i = 0; i <alunos.length; i++){
    mensagens.innerHTML += `<h1> Seja bem-vindo(a) ${alunos[i]}</h1>`;
}