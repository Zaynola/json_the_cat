const request = require('request');
const breedName = process.argv[2];
const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

request(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        process.exit(1);
    }

    if (response.statusCode !== 200) {
        console.error(`HTTP request failed with status code ${response.statusCode}`);
        process.exit(1);
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
        console.log(`Breed '${breedName}' not found.`);
    } else {
        //console.log(data);
        //console.log(typeof data);
        const firstEntry = data[0];
        console.log(firstEntry.description);
    }
});