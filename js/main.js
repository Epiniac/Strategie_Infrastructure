document.addEventListener("DOMContentLoaded", function () {
  //Journal de bord
  const journalForm = document.getElementById('journalForm');
  if (journalForm) {
    journalForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const event = document.getElementById('event').value;
      const timestamp = document.getElementById('timestamp').value;
      const li = document.createElement('li');
      li.textContent = timestamp + ' : ' + event;
      document.getElementById('journalList').appendChild(li);
      this.reset();
    });
  }

  //Notification dynamique
  const zone = document.getElementById('notification');
  if (zone) {
    const date = new Date().toLocaleString();
    zone.textContent = '📅 Aujourd’hui : ' + date;
  }

  //  Bouton : Contraste
  const contrastBtn = document.getElementById("btn-contrast");
  if (contrastBtn) {
    contrastBtn.addEventListener("click", () => {
      document.body.classList.toggle("high-contrast");
      contrastBtn.setAttribute(
        "aria-pressed",
        document.body.classList.contains("high-contrast")
      );
    });
  }

  //  Bouton : Taille
  const textSizeBtn = document.getElementById("btn-text-size");
  if (textSizeBtn) {
    textSizeBtn.addEventListener("click", () => {
      document.body.classList.toggle("text-large");
      textSizeBtn.setAttribute(
        "aria-pressed",
        document.body.classList.contains("text-large")
      );
    });
  }
});
