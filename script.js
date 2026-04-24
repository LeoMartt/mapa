(function () {
  const WHATSAPP_NUMBER = "5519997394543";
  const WHATSAPP_MESSAGE = "Eu li tudo... vamos conversar?";

  const stages = [
    {
      type: "photo",
      side: "left",
      title: "Mini cardio",
      image: "images/WhatsApp Image 2026-04-24 at 11.53.42.jpeg",
      alt: "Nossa foto juntos",
      description: "Primeira bike juntos aprendi a andar na bicicleta e que dói a bunda"
    },
    {
      type: "message",
      side: "right",
      title: "Eu entendo seus medos",
      text: "Eu entendo seus medos, é claro. Mas deixa eu te mostrar que as pessoas mudam por quem elas amam."
    },
    {
      type: "photo",
      side: "center",
      title: "Beijinho um dia fofo",
      image: "images/WhatsApp Image 2026-04-24 at 11.51.39.jpeg",
      alt: "Nossa foto juntos",
      description: "Primeira festa junina e dancinha juntos"
    },
    {
      type: "message",
      side: "left",
      title: "Ainda dá para reconstruir",
      text: "Dá para reconstruir um relacionamento depois de vários desgastes e várias brigas acumuladas? Sim, claro. Não existe um relacionamento que você não passe por vários erros e vários desgastes acumulados, até porque um relacionamento é uma construção. Às vezes rola uma ansiedade muito grande em querer uma perfeição dentro de um relacionamento, mas ninguém consegue ser perfeito o tempo todo. Então não, não é impossível fazer dar certo. O impossível é passar por um relacionamento sem erros, porque são os erros que constroem o casal e viram pilares para a construção do relacionamento."
    },
    {
      type: "photo",
      side: "right",
      title: "Fitness",
      image: "images/WhatsApp Image 2026-04-24 at 11.51.57.jpeg",
      alt: "Nossa foto juntos",
      description: "Tinha começado o foco nas costinhas"
    },
    {
      type: "message",
      side: "center",
      title: "Você é minha parte boa",
      text: "Você é a única coisa que é boa na minha vida agora. A única. A coisa que mais me traz felicidade. E agora, se você se for, eu vou voltar para minha realidade onde você não existe, sabendo como é ter você na minha vida e você não estando lá mais."
    },
    {
      type: "photo",
      side: "left",
      title: "Foi de dormes",
      image: "images/WhatsApp Image 2026-04-24 at 11.51.04.jpeg",
      alt: "Nossa foto juntos",
      description: "Nessa veio pra tirar um cochilo bem fofinha"
    },
    {
      type: "message",
      side: "right",
      title: "Eu não quero outro começo",
      text: "Eu não quero recomeçar com alguém novo. Eu quero que Deus cure o que nos separou e nos una de novo."
    },
    {
      type: "photo",
      side: "center",
      title: "Foi de dormes pt 2",
      image: "images/WhatsApp Image 2026-04-24 at 11.52.29.jpeg",
      alt: "Nossa foto juntos",
      description: "Tava roncando muito nessa"
    },
    {
      type: "message",
      side: "left",
      title: "Era com você",
      text: "Se ainda não for suficiente nada do que eu disser aqui, eu espero que algum dia aleatório você consiga ver que, mesmo com essas minhas falhas, era com você que eu queria passar minha vida. E só você."
    },
    {
      type: "photo",
      side: "right",
      title: "Tirou voce mesma",
      image: "images/WhatsApp Image 2026-04-24 at 11.54.02.jpeg",
      alt: "Nossa foto juntos",
      description: "NUNCA será apagada"
    },
    {
      type: "message",
      side: "center",
      title: "Pode ser melhor",
      text: "Nada voltará a ser como antes, mas tudo pode ser melhor como nunca foi."
    },
    {
      type: "photo",
      side: "right",
      title: "Duplinha feliz",
      image: "images/WhatsApp Image 2026-04-24 at 13.10.30.jpeg",
      alt: "Nossa foto juntos",
      description: "Treino rendeu nesse dia (contém ironia)"
    },
    {
      type: "message",
      side: "right",
      title: "Vamos mudar para dar certo",
      text: "Vamos recomeçar quantas vezes forem necessárias, mas vamos mudar todas essas vezes para dar certo. A vida é uma só, Brenda, e amanhã pode ser tarde demais."
    },
    {
      type: "photo",
      side: "center",
      title: "O MELHOR",
      image: "images/WhatsApp Image 2026-04-24 at 13.09.26.jpeg",
      alt: "Nossa foto juntos",
      description: "Foi acho que o melhor dia da minha vida, diversão sem parar com a mulher da minha vida muita risada e não precisou ter nada a mais do que sua presença do meu lado pra ser tudo isso"
    },
    {
      type: "message",
      side: "left",
      title: "A primeira vez",
      text: "Eu posso esquecer de tudo, mas nunca vou esquecer o dia em que cheguei em casa depois de ter saído com você pela primeira vez, sem saber que eu ia te amar o tanto que eu te amo agora."
    }
  ];

  const PLACEHOLDER_SVG =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E" +
    "%3Crect width='400' height='300' fill='%23ead1bd'/%3E" +
    "%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' " +
    "font-family='sans-serif' font-size='14' fill='%239f6b4a'%3Esua foto aqui%3C/text%3E" +
    "%3C/svg%3E";

  function createPin(index) {
    const pin = document.createElement("div");
    pin.className = "map-pin";
    pin.setAttribute("aria-hidden", "true");
    pin.textContent = index + 1;
    return pin;
  }

  function createPhotoStage(stage, index) {
    const card = document.createElement("div");
    card.className = "stage-card";

    const photoWrap = document.createElement("div");
    photoWrap.className = "photo-wrap";

    const img = document.createElement("img");
    img.src = stage.image;
    img.alt = stage.alt || "Nossa foto";
    img.width = 940;
    img.height = 705;

    img.addEventListener("error", function onError() {
      img.removeEventListener("error", onError);
      img.src = PLACEHOLDER_SVG;
    });

    photoWrap.appendChild(img);

    const caption = document.createElement("div");
    caption.className = "caption";

    const title = document.createElement("h2");
    title.textContent = stage.title;

    const description = document.createElement("p");
    description.textContent = stage.description || "Escreva aqui a descrição dessa foto.";

    caption.appendChild(title);
    caption.appendChild(description);

    card.appendChild(photoWrap);
    card.appendChild(caption);

    return card;
  }

  function createMessageStage(stage) {
    const card = document.createElement("div");
    card.className = "message-card";

    const title = document.createElement("h2");
    title.textContent = stage.title;

    const text = document.createElement("p");
    text.textContent = stage.text;

    card.appendChild(title);
    card.appendChild(text);

    return card;
  }

  function createStage(stage, index) {
    const article = document.createElement("article");
    article.className = `stage ${stage.side || "center"}`;

    const pin = createPin(index);
    const content = stage.type === "message"
      ? createMessageStage(stage)
      : createPhotoStage(stage, index);

    article.appendChild(pin);
    article.appendChild(content);

    return article;
  }

  const stagesContainer = document.getElementById("stagesContainer");

  stages.forEach(function (stage, index) {
    stagesContainer.appendChild(createStage(stage, index));
  });

  const answerModal = new bootstrap.Modal(document.getElementById("answerModal"));
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");
  const whatsappLink = document.getElementById("whatsappLink");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  function buildWhatsAppURL() {
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);
  }

  function showModal(type) {
    whatsappLink.href = buildWhatsAppURL();

    const modalElement = document.getElementById("answerModal");

    modalElement.classList.remove("modal-yes", "modal-no");

    if (type === "yes") {
      modalElement.classList.add("modal-yes");

      modalTitle.innerHTML = `
        <span class="modal-icon">💛</span>
        Eu sabia que ainda existia um caminho
      `;

      modalText.textContent =
        "Clica aqui e me chama. Eu quero conversar com calma, com carinho e com verdade.";

      whatsappLink.textContent = "Abrir conversa no WhatsApp";
    } else {
      modalElement.classList.add("modal-no");

      modalTitle.innerHTML = `
        <span class="modal-icon">😅</span>
        Esse foi um “não” barrado
      `;

      modalText.textContent =
        "Você até tentou clicar no não, mas aqui ele vira um sim também. Agora vem falar comigo.";

      whatsappLink.textContent = "Tá bom, vou chamar no WhatsApp";
    }

    answerModal.show();
  }

  yesBtn.addEventListener("click", function () {
    showModal("yes");
  });

  function moveNoButton() {
    noBtn.classList.add("runaway");

    const margin = 24;
    const btnW = noBtn.offsetWidth || 100;
    const btnH = noBtn.offsetHeight || 48;
    const maxLeft = window.innerWidth - btnW - margin;
    const maxTop = window.innerHeight - btnH - margin;
    const randomLeft = Math.max(margin, Math.random() * maxLeft);
    const randomTop = Math.max(margin, Math.random() * maxTop);
    const randomRot = Math.floor(Math.random() * 31) - 15;

    noBtn.style.left = randomLeft + "px";
    noBtn.style.top = randomTop + "px";
    noBtn.style.transform = "rotate(" + randomRot + "deg)";
  }

  noBtn.addEventListener("mouseenter", moveNoButton);
  noBtn.addEventListener("focus", moveNoButton);
  noBtn.addEventListener("touchstart", function (e) {
    e.preventDefault();
    moveNoButton();
  }, { passive: false });
  noBtn.addEventListener("click", function () {
    showModal("no");
  });

  let activeHearts = 0;
  let heartInterval = null;
  const MAX_HEARTS = 12;

  function createFloatingHeart() {
    if (activeHearts >= MAX_HEARTS) return;

    activeHearts++;

    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.5 ? "♡" : "✦";
    heart.setAttribute("aria-hidden", "true");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (7 + Math.random() * 6) + "s";
    heart.style.fontSize = (1.1 + Math.random() * 1.8) + "rem";

    document.body.appendChild(heart);

    setTimeout(function () {
      heart.remove();
      activeHearts--;
    }, 13000);
  }

  function startHearts() {
    if (!heartInterval) {
      heartInterval = setInterval(createFloatingHeart, 900);
    }
  }

  function stopHearts() {
    clearInterval(heartInterval);
    heartInterval = null;
  }

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      stopHearts();
    } else {
      startHearts();
    }
  });

  startHearts();
})();
