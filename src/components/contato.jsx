import React from 'react';

const Contato = ({ contato, onEditar, onExcluir }) => {
  return (
    <ul>
      <strong>Nome:</strong> {contato.nome}<br />
      <strong>Telefone:</strong> {contato.telefone}<br />
      <strong>Tem Whatsapp:</strong> {contato.temWhatsapp ? 'Sim' : 'Não'}<br />
      <strong>Observações:</strong> {contato.observacoes}<br />
      <button onClick={onEditar}>Editar</button>
      <button onClick={onExcluir}>Excluir</button>
    </ul>
  );
};

export default Contato;