import React from 'react';
import { useState } from 'react';
import ContatoForm from './components/contatoForm'
import ListaContatos from './components/listaContatos';

function App() {
  const [contatos, setContatos] = useState([]);
  const [contatoEmEdicao, setContatoEmEdicao] = useState(null);
  const [modoEdicao, setModoEdicao] = useState(false);

  const adicionarContato = (novoContato) => {
    setContatos([...contatos, novoContato]); //Criando uma nova array
  };

  const editarContato = (contato) => {
    setContatoEmEdicao(contato);
    setModoEdicao(true); // Ative o modo de edição
  };

  const atualizarContato = (contatoAtualizado) => {
    const contatosAtualizados = contatos.map((contato) =>
      contato === contatoEmEdicao ? contatoAtualizado : contato
    );
    setContatos(contatosAtualizados);
    setContatoEmEdicao(null);
    setModoEdicao(false); // Desativar o modo de edição após a atualização
  };
  const cancelarEdicao = () => {
    setModoEdicao(false); // Desativar o modo de edição
  };



  const excluirContato = (contato) => {
    const contatosAtualizados = contatos.filter((c) => c !== contato);
    setContatos(contatosAtualizados);
  };

  return (
    <div>
      <h1>Lista de Contatos</h1>
      <h2>{modoEdicao ? 'Editar Contato' : 'Adicionar Contato'}</h2> {/* Cabeçalho condicional */}
      {modoEdicao ? (
        <>
        <ContatoForm
          contatoEmEdicao={contatoEmEdicao}
          onSalvar={atualizarContato}
        />
        <button onClick={cancelarEdicao}>Cancelar</button>
        </>
      ) : (
        <ContatoForm onSalvar={adicionarContato} />
      )}
      <ListaContatos
        contatos={contatos}
        onEditar={editarContato}
        onExcluir={excluirContato}
      />
    </div>
  );
}


export default App;