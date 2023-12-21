const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};
const date = new Date().toLocaleDateString('de-DE', options);

const dateElement = document.getElementById("date");

dateElement.innerHTML = date;