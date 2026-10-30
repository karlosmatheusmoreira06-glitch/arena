import { useState } from 'react';
import './CadastroForm.css';

export function CadastroForm() {
  // Estado para armazenar os valores dos campos do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    modalidade: ''
  });

  // Estado para armazenar a resposta visual (sucesso, erro ou null)
  const [mensagem, setMensagem] = useState(null);

  // Função para atualizar o estado conforme o utilizador digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Função para tratar o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o comportamento padrão de recarregar a página

    // Validação dos campos obrigatórios
    if (!formData.nome || !formData.email || !formData.telefone || !formData.modalidade) {
      setMensagem('erro');
      return;
    }

    // Sucesso no cadastro
    setMensagem('sucesso');

    // Limpa os campos do formulário após o sucesso
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      modalidade: ''
    });
  };

  return (
    <div className="cadastro-section">
      <div className="cadastro-header">
        <span className="tagline-cadastro">CADASTRO</span>
        <h2 className="titulo-cadastro">Cadastre-se para jogar conosco</h2>
      </div>

      {/* Cartão Principal do Formulário */}
      <div className="form-card">
        <form onSubmit={handleSubmit} className="form-content">
          {/* Campo Nome Completo */}
          <div className="form-group full-width">
            <label htmlFor="nome">Nome completo</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              value={formData.nome}
              onChange={handleChange}
            />
          </div>

          {/* Linha com E-mail e Telefone */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="voce@exemplo.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="(00) 00000-0000"
                value={formData.telefone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Campo Modalidade de Interesse */}
          <div className="form-group full-width">
            <label htmlFor="modalidade">Modalidade de interesse</label>
            <select
              id="modalidade"
              name="modalidade"
              value={formData.modalidade}
              onChange={handleChange}
            >
              <option value="">Selecione uma modalidade</option>
              <option value="Beach Tennis">Beach Tennis</option>
              <option value="Vôlei de Praia">Vôlei de Praia</option>
              <option value="Futevôlei">Futevôlei</option>
            </select>
          </div>

          {/* Botão de Envio */}
          <button type="submit" className="btn-submit">
            Realizar Cadastro
          </button>
        </form>
      </div>

      {/* Caixa de Feedback Visual */}
      {mensagem === 'sucesso' && (
        <div className="feedback-card feedback-sucesso">
          <span className="feedback-icon">✓</span>
          <span>Cadastro realizado com sucesso!</span>
        </div>
      )}

      {mensagem === 'erro' && (
        <div className="feedback-card feedback-erro">
          <span className="feedback-icon">⚠️</span>
          <span>Preencha todos os campos.</span>
        </div>
      )}

      {/* Rodapé Interno */}
      <footer className="cadastro-footer">
        <span>Arena Sand & Sun</span>
        <span>Projeto acadêmico em React</span>
      </footer>
    </div>
  );
}

export default CadastroForm;