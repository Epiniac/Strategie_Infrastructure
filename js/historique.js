const form = document.getElementById('journal-form');
    const entries = document.getElementById('journal-entries');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const time = document.getElementById('timestamp').value;
      const event = document.getElementById('event').value;
      const li = document.createElement('li');
      li.textContent = `${time} — ${event}`;
      entries.appendChild(li);
      form.reset();
    });