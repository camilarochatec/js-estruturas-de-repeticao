# js-estruturas-de-repeticao
EXPLICAÇÃO DO INDEX.JS
loop-
Vamps fazer uma tividade para entender arrays e como se usa no loop.

ex.:
let alunos = ['Camila', 'Nayara', 'Jessica']; 

isso é uma array! aqui declarei uma varíavel let de alunos com vários elementos dentro[nomes dos alunos]. todas elas são strings. ⬆

//definição array- é uma variável especial que pode conter mais de um valor. A vantagem é que se você tiver uma lista de itens enormes, ou seja, vários valores podemos armazenar tudo isso em uma única variável.  o item dentro dele é encontrado pela posição. que começa do ponto 0 em diante.

alunos.push('João') 
// nomedoarray.push() é um método de inserir valores no final do array. 

let mesNascimento = [9, 4, 4];
mesNascimento.push(2);
let faculdade = [false, true, false];
ehEstudante.push(false);

Trabalhar com Arrays já nos lembra loopings. vemos a baixo um ex.:

// estrutura de repetição for(inicio, condição, incremento++ ou decremento--)

for(let i = 0; i < alunos.length; i++){
    mensagens.innerHTML += `<h1>Seja bem-vindo(a) ${alunos[i]}</h1>`;
}

//Quando trabalhar com loop seria bom deixar o autosave do vscode destivado e atualizar manualmente com ctrl+s.

# explicação datepicker