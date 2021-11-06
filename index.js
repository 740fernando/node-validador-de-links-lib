const chalk= require("chalk");
const fs=require("fs");


function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados=[];
    let temp;
    while((temp = regex.exec(texto))!==null){
        arrayResultados.push({ [temp[1]]:temp[2]})
    }
    return arrayResultados.length === 0 ?'nao ha links':arrayResultados;
}

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'não há um arquivo no caminho'));
}

async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    try{
        const texto =await fs.promises.readFile(caminhoDoArquivo,encoding);
        return extraiLinks(texto);
    }catch(erro){
        trataErro(chalk.redBright(erro));
    }
    
}
 pegaArquivo('./arquivos/texto1.md');

 module.exports = pegaArquivo;

//usando then
// const chalk = require('chalk');//lib para alterar cores das msg
// const fs = require('fs'); //filesystem

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => chalk.green(console.log(texto)))
//     .catch((erro)=>trataErro(erro))
// }


//1 forma - antig

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.promises
//     .readFile(caminhoDoArquivo,encoding)//colocando o promisse na frente do readFile, estamos avisando para o fs que demora um tempo para realizar toda leitura do arquivo e o fs espera
//     .then((texto)=> (console.log(chalk.blueBright(texto))))
//     .catch((erro)=>trataErro(erro))
// }

// // function pegaArquivo(caminhoDoArquivo){
// //     const encoding= 'utf-8';
// //     fs.readFile(caminhoDoArquivo,encoding,(erro,texto)=>{
// //         if(erro){
// //             trataErro(erro);
// //         }
// //         console.log(chalk.blueBright(texto));
// //     })
// // }
