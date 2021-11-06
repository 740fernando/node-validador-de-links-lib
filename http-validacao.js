const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function manejaErros(erro){
    throw new Error(erro.message);
}

async function checaStatus(arrayURLs){
    //promise

    try{
        const arrayStatus = await Promise
        .all(arrayURLs
            .map(async url =>{
                const res = await fetch(url);
                return `${res.status} - ${res.statusText}`;
            }))
        return arrayStatus;
    }catch(erro){
        manejaErros(erro)
    }

}

function geraArrayURLs(arrayLinks){
    return arrayLinks
        .map(objetoLink => Object
            .values(objetoLink).join());
}

async function validaURLs(arrayLinks){
    const links = geraArrayURLs(arrayLinks);
    const statusLinks = await checaStatus(links);
    const resultados = arrayLinks
        .map((objeto,indice) =>({
            ...objeto, 
            status:statusLinks[indice]
    }))
    return resultados;
}
module.exports = validaURLs;