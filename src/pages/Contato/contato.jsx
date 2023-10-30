import React from 'react';

const Contato = ({ contato, onEditar, onExcluir }) => {
  return (
    <li>
      <strong>Nome:</strong> {contato.nome}<br />
      <strong>Telefone:</strong> {contato.telefone}<br />
      <strong>Tem Whatsapp:</strong> {contato.temWhatsapp ? 'Sim' : 'Não'}<br />
      <strong>Observações:</strong> {contato.observacoes}<br />
      <button onClick={onEditar}>Editar</button>
      <button onClick={onExcluir}>Excluir</button>
    </li>
  );
};

export default Contato;