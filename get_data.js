var wget = require('wget-improved');
url = 'https://gist.githubusercontent.com/wprimett/8c69fb3b014d21672f4086e64d66ddcf/raw/ea75d68566e8938abacea42b41e58beb2764eef3/map.geojson';
dest = 'public/data/sound_circuts_programme.js';

const options = {
    // see options below
};

let download = wget.download(url, dest, options);
download.on('error', function(err) {
    console.log(err);
});
download.on('start', function(fileSize) {
    console.log(fileSize);
});
download.on('end', function(output) {
    console.log(output);
});
download.on('progress', function(progress) {
    typeof progress === 'number'
    // code to show progress bar
});

console.log('wget ' + url + ' ' + dest);
