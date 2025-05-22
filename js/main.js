document.getElementById('journalForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const event = document.getElementById('event').value;
      const timestamp = document.getElementById('timestamp').value;
      const li = document.createElement('li');
      li.textContent = timestamp + ' : ' + event;
      document.getElementById('journalList').appendChild(li);
      this.reset();
    });

const zone = document.getElementById('notification');
const date = new Date().toLocaleString();
zone.textContent = '📅 Aujourd’hui : ' + date;