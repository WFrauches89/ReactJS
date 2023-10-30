import React, { useState } from 'react';

const ContatoForm = ({ onSalvar }) => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [temWhatsapp, setTemWhatsapp] = useState(false);
  const [observacoes, setObservacoes] = useState('');

  const handleSalvar = () => {
    // Validar e processar os dados, e chamar a função onSalvar
    const novoContato = {
      nome,
      telefone,
      temWhatsapp,
      observacoes,
    };

    onSalvar(novoContato);

    // Limpar o formulário
    setNome('');
    setTelefone('');
    setTemWhatsapp(false);
    setObservacoes('');
  };

  return (
    <div>

      <label>Nome:</label>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      <label>Telefone:</label>
      <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
      <label>Tem Whatsapp:</label>
      <input
        type="checkbox"
        checked={temWhatsapp}
        onChange={(e) => setTemWhatsapp(e.target.checked)}
      />
      <label>Observações:</label>
      <textarea value={observacoes} onChange={(e) => setObservacoes(e.target.value)} />
      <button onClick={handleSalvar}>Salvar</button>
    </div>
  );
};

export default ContatoForm;