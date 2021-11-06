const pegaArquivo = require("../index");

const arrayResult = [
    {
      FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]
describe('pegaArquivo::',()=>{
  it('deve ser uma funcao', () => {
    expect(typeof pegaArquivo).toBe('function');
  })
  it('deve retornar array com resultados',async()=>{
    const resultado = await pegaArquivo('C:/Users/fsouviei/ws-javascript/node-criando-a-primeira-biblioteca/test/arquivos/texto1.md')
    expect(resultado).toEqual(arrayResult)
  })
  it('deve retornar mensagem "não há links"',async ()=>{
    const resultado = await pegaArquivo('C:/Users/fsouviei/ws-javascript/node-criando-a-primeira-biblioteca/test/arquivos/texto1_semlink.md');
    expect(resultado).toBe('nao ha links');
  })
  it('deve lançar um erro na falta de arquivo', ()=>{
    async function capturaErro(){
      await pegaArquivo('C:/Users/fsouviei/ws-javascript/node-criando-a-primeira-biblioteca/test/arquivos')
      expect(capturaErro).toThrowError(/não há um arquivo no caminho/)
    }
  })
})
