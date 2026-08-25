const reservationForm = document.querySelector('#reservation-form');
const dateInput = document.querySelector('#event-date');
const cafeSelect = document.querySelector('#event-cafe');

const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString()
  .split('T')[0];
dateInput.min = localToday;

reservationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!reservationForm.reportValidity()) return;

  const selectedDate = new Date(`${dateInput.value}T12:00:00`).toLocaleDateString('en-PK', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const selectedCafe = cafeSelect.value;
  const subject = `Strangers Circle reservation — ${selectedDate}`;
  const body = [
    'Hello Strangers Circle,',
    '',
    'I would like to reserve a spot for the next circle.',
    '',
    `Selected date: ${selectedDate}`,
    `Selected café: ${selectedCafe}`,
    'Time: 4:00 — 7:00 PM',
    '',
    'Please confirm my reservation.',
    '',
    'Thank you.'
  ].join('\n');

  window.location.href = `mailto:strangerscircle@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
