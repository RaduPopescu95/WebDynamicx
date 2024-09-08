"use client";

import React, { useState } from "react";
import Chat, { Bubble, useMessages } from "@chatui/core";
import "@chatui/core/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

// Configurare localizare în română
const enLocale = {
  send: "Trimite", // Textul pentru butonul de trimitere
  placeholder: "Scrie un mesaj...", // Textul placeholder-ului
};

const ChatComponent = () => {
  const { messages, appendMsg, setTyping } = useMessages([]);
  const [isOpen, setIsOpen] = useState(false); // Stare pentru a controla vizibilitatea chat-ului
  const [showBubble, setShowBubble] = useState(true); // Stare pentru a controla vizibilitatea bubble-ului

  // Funcție pentru a gestiona trimiterea mesajului
  function handleSend(type, val) {
    if (type === "text" && val.trim()) {
      appendMsg({
        type: "text",
        content: { text: val },
        position: "right",
      });

      setTyping(true);

      setTimeout(() => {
        appendMsg({
          type: "text",
          content: { text: "This is an automated response." },
        });
        setTyping(false);
      }, 1000);
    }
  }

  // Funcție pentru a gestiona închiderea chat-ului
  const handleClose = () => {
    setIsOpen(false);
  };

  // Funcție pentru a deschide chat-ul
  const handleOpen = () => {
    setIsOpen(true);
    setShowBubble(false); // Ascunde bubble-ul când chat-ul este deschis
  };

  // Renderizarea conținutului mesajelor
  function renderMessageContent(msg) {
    const { content } = msg;
    return <Bubble content={content.text} />;
  }

  return (
    <>
      {/* Iconul și mesajul bubble */}
      {!isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: "1000",
          }}
        >
          {/* Bubble-ul deasupra iconului */}
          {showBubble && (
            <div
              style={{
                backgroundColor: "#f5f5f5",
                color: "#333",
                padding: "10px",
                borderRadius: "8px",
                position: "absolute",
                bottom: "85px", // Plasat deasupra iconiței
                right: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                fontSize: "14px",
                width: "250px",
              }}
            >
              Ai nevoie de o oferta? Ia legatura cu noi
              <div
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  right: "20px",
                  width: "0",
                  height: "0",
                  borderLeft: "10px solid transparent",
                  borderRight: "10px solid transparent",
                  borderTop: "10px solid #48494e", // Săgeata bubble-ului
                }}
              ></div>
            </div>
          )}

          {/* Iconul de deschidere a chatului */}
          <div
            style={{
              backgroundColor: "#007bff",
              color: "white",
              borderRadius: "50%",
              padding: "20px", // Crește padding-ul pentru a face iconița mai mare
              cursor: "pointer",
              position: "relative",
            }}
            onClick={handleOpen} // Deschide fereastra de chat când se apasă butonul
          >
            <FontAwesomeIcon icon={faCommentDots} size="2x" />{" "}
            {/* Iconița mărită */}
          </div>
        </div>
      )}

      {/* Fereastra de chat */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "8%",
            right: "10px",
            width: "350px",
            height: "400px",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "10px",
            zIndex: "1000",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Iconița de închidere */}
          <div style={{ textAlign: "right", padding: "10px" }}>
            <button
              onClick={handleClose}
              style={{
                background: "none",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              ✖️ {/* Iconița de închidere */}
            </button>
          </div>

          {/* Componenta de Chat */}
          <Chat
            locale={enLocale} // Aplicăm localizarea
            navbar={{ title: "Asistent" }}
            messages={messages}
            renderMessageContent={renderMessageContent}
            onSend={handleSend}
            placeholder="Scrie un mesaj..."
          />
        </div>
      )}
    </>
  );
};

export default ChatComponent;
