import React from 'react';

import Contato from '../components/contato';

const ListaContatos = ({ contatos, onEditar, onExcluir }) => {
  return (
    <div>
      <h2>Lista de Contatos</h2>
      <ul>
        {contatos.map((contato, index) => (
          <Contato
            key={index}
            contato={contato}
            onEditar={() => onEditar(contato)}
            onExcluir={() => onExcluir(contato)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListaContatos;