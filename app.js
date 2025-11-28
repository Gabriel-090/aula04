const enderecoUsurio = {
   rua: document.querySelector('#rua'),
    bairro: document.querySelector('#bairro'),
    cidade: document.querySelector('#cidade'),
    uf: document.querySelector('#uf'),
    estado: document.querySelector('#estado'),
    regiao: document.querySelector('#regiao'),
    cep: "06361150"
}

async function consultaCep(cep) {
  const url = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const resposta = await url.json();
  //  Variável do tipo objeto para receber os dados do cep do usuário
const dadosCep = {
    rua: resposta.logradouro,
    bairro:resposta.bairro,
    cidade: resposta.localidade,
    uf:resposta.uf,
    estado:resposta.estado,
    regiao:resposta.regiao,
  }
inserirDados(dadosCep)


 
}
consultaCep(enderecoUsurio.cep)
//para ativar a 
// Função para inserir os dados do cep na tela
function inserirDados(dadosCep){    
enderecoUsurio.rua.innerText = dadosCep.rua
enderecoUsurio.bairro.innerText = dadosCep.bairro
enderecoUsurio.cidade.innerText = dadosCep.cidade
enderecoUsurio.uf.innerText = dadosCep.uf
enderecoUsurio.estado.innerText = dadosCep.estado
enderecoUsurio.regiao.innerText = dadosCep.regiao
}