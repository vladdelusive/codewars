// https://www.codewars.com/kata/551dc350bf4e526099000ae5

function songDecoder(song) {
    let original = '';
    let parts = song.split("WUB");
    for (let i = 0; i < parts.length; i++) {
        if (parts[i] != '') {
            original = original + ' ' + parts[i];
        }
    }
    original = original.trim();
    return original;
}