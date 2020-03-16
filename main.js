const loading = document.getElementById('loading'),
    word = document.getElementById('word'),
    button = document.getElementById('generate');
let dict;

const getWord = () => {
    word.textContent = dict[Math.floor(
        Math.random() * dict.length
    )];
};

(async () => {
    if (!localStorage['dict']) {
        await fetch('/dict.txt').then(response => {
            return response.text();
        }).then(text => {
            localStorage['dict'] = text;
        });
    }
})().then(() => {
    dict = localStorage['dict'].split('\n');
    button.onclick = getWord;
    document.onkeydown = event => {
        switch (event.code) {
            case 'Enter':
            case 'Space':
                getWord();
        }
    }
    getWord();
});