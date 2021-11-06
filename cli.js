#!/usr/bin/env node
//porta de entrada para nossa aplicação

const chalk = require('chalk');
const pegaArquivo = require("./index");
const validaURLs = require('./http-validacao');

const caminho = process.argv; // metodo do js

async function processaTexto(caminhoDeArquivo){
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    if(caminho[3] === 'validar'){
        console.log(chalk.yellow('lista validados'), await validaURLs(resultado));
    }else{
        console.log(chalk.yellow('lista de links'),resultado);
    }
}

processaTexto(caminho);