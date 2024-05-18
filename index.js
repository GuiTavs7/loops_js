// 1) FOR - for()              for(inicializador; condição; incremento) {
                    //          bloco de códigos - declarações
                    //      }

// Variável inicializadora pode ser criada dentro ou fora do "for"

// Condição - enquanto for TRUE o laço é executado

// Incremento da variável para chegar até onde se deseja - número determinado de vezes

for(let i = 0; i < 5; i++){
    console.log(i);
}

// 2) WHILE - while()          while(condição){
                        //      <bloco de execução></bloco>
                        //    }

let a = 10;
let b = 15;

while (a < b){
    console.log("Incrementando a variável 'a' " + a);
    a++; // a++ = a = a + 1; 
}

// 3) DO WHILE - do while()          do{
                                         // <bloco de execucao></bloco>
                                    //}while(condicao)

var i = 10;

do{
    console.log("entrou " + i);
    i ++;
}while(i<=15)