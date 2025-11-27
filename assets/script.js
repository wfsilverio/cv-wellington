async function loadData() {
  try {
    const response = await fetch("assets/data.json");
    const data = await response.json();

    renderSobre(data.sobre);
    renderContato(data.contato);
    renderSkills(data.skills);
    renderFormacao(data.formacao);
    renderIdiomas(data.idiomas);
    renderExperiencia(data.experiencia);

  } catch (error) {
    console.error("Erro ao carregar JSON:", error);
  }
}

/* ---------------------------
   SEÇÃO: SOBRE
----------------------------*/
function renderSobre(sobre) {
  document.getElementById("sobre-nome").textContent = sobre.nome;
  document.getElementById("sobre-titulo").textContent = sobre.titulo;
  document.getElementById("sobre-resumo").textContent = sobre.resumo;
}

/* ---------------------------
   SEÇÃO: CONTATO
----------------------------*/
function renderContato(contato) {
  document.getElementById("foto-perfil").src = contato.foto;
  document.getElementById("contato-whatsapp").textContent = contato.whatsapp;
  document.getElementById("contato-email").textContent = contato.email;
  document.getElementById("contato-email").href = "mailto:" + contato.email;
  document.getElementById("contato-linkedin").href = contato.linkedin;
  document.getElementById("contato-instagram").href = contato.instagram;
  document.getElementById("contato-localizacao").textContent = contato.localizacao;
}

/* ---------------------------
   SEÇÃO: SKILLS
----------------------------*/
function renderSkills(skills) {
  const container = document.getElementById("skills-list");

  skills.forEach(skill => {
    const pill = document.createElement("span");
    pill.className = "skill-pill";
    pill.textContent = skill;
    container.appendChild(pill);
  });
}

/* ---------------------------
   SEÇÃO: FORMAÇÃO
----------------------------*/
function renderFormacao(formacao) {
  const container = document.getElementById("formacao-box");

  formacao.forEach(item => {
    const div = document.createElement("div");
    div.className = "side-item";

    div.innerHTML = `
      <span class="side-label">${item.titulo}</span><br>
      ${item.descricao}
    `;

    container.appendChild(div);
  });
}

/* ---------------------------
   SEÇÃO: IDIOMAS
----------------------------*/
function renderIdiomas(idiomas) {
  const container = document.getElementById("idiomas-box");

  idiomas.forEach(lang => {
    const wrapper = document.createElement("div");
    wrapper.className = "language-bar";

    wrapper.innerHTML = `
      <div class="language-label">${lang.idioma}</div>
      <div class="bar-track">
        <div class="bar-fill ${lang.classe}" style="width:${lang.porcentagem}%"></div>
      </div>
      <div class="language-percent">${lang.nivel} · ${lang.porcentagem}%</div>
    `;

    container.appendChild(wrapper);
  });
}

/* ---------------------------
   SEÇÃO: EXPERIÊNCIA
----------------------------*/
function renderExperiencia(experiencias) {
  const container = document.getElementById("experiencia-box");

  experiencias.forEach(exp => {
    const job = document.createElement("div");
    job.className = "job";

    /* Lista das atividades */
    const atividadesList = exp.atividades
      .map(item => `<li>${item}</li>`)
      .join("");

    /* Lista das badges */
    const badgeList = exp.badges
      .map(tag => `<span class="badge">${tag}</span>`)
      .join("");

    job.innerHTML = `
      <div class="job-header">
        <span class="job-company">${exp.empresa}</span>
        <span class="job-period">${exp.periodo}</span>
      </div>

      <div class="job-role">${exp.cargo}</div>

      <ul>${atividadesList}</ul>

      <div class="badge-list">${badgeList}</div>
    `;

    container.appendChild(job);
  });
}

/* ---------------------------
   INICIALIZA
----------------------------*/
loadData();
