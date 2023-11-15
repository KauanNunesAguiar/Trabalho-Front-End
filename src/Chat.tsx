import React, { useState, useEffect, useRef } from 'react';
import './style.css';

const Chat = ({ username }) => {
  const [mensagem, setMensagem] = useState('');
  const [mensagensDoChat, setMensagensDoChat] = useState([]);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);
  const ultimaMensagemRef = useRef(null);

  const enviarMensagem = (event) => {
    event.preventDefault();
    if (mensagem.trim() !== '') {
      const novaMensagemUsuario = {
        texto: mensagem,
        usuario: username || 'Usuário',
        timestamp: new Date().toLocaleString(),
      };
      const respostaAutomatica = {
        texto: 'Obrigado por sua mensagem!',
        usuario: 'Bot',
        timestamp: new Date().toLocaleString(),
      };
      setMensagensDoChat([
        ...mensagensDoChat,
        novaMensagemUsuario,
        respostaAutomatica,
      ]);
      setMensagem('');
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    if (ultimaMensagemRef.current) {
      ultimaMensagemRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [mensagensDoChat]);

  return (
    <div className="container">
      <div ref={chatContainerRef} className="chat-container">
        <div className="mensagens-container">
          {mensagensDoChat.map((msg, index) => (
            <div
              key={index}
              ref={
                index === mensagensDoChat.length - 1 ? ultimaMensagemRef : null
              }
              className={`mensagem ${
                msg.usuario === 'Bot'
                  ? 'mensagem-do-bot'
                  : 'mensagem-do-usuario'
              }`}
            >
              <p>
                <strong>{msg.usuario}:</strong> {msg.texto}
              </p>
              <p className="timestamp">{msg.timestamp}</p>
            </div>
          ))}
        </div>
        <form onSubmit={enviarMensagem}>
          <input
            ref={inputRef}
            className="text_input_default"
            type="text"
            id="entrada-do-usuario"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Digite sua mensagem..."
          />
          <button className="button_default" type="submit" id="enviar-mensagem">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
