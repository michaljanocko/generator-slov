let slovnik = [];

if (!localStorage['slovnik']) {
    fetch('/slovnik.txt').then(response => {
        slovnik = response.text();
    });
}