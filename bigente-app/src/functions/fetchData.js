const sourceListChile = require('../data/sourceList-chile');
const sourceListCrossfit = require('../data/sourceList-crossfit');
const sourceListEnergy = require('../data/sourceList-energy');

async function fetchDataReddit(idSource) {
    const apiUrl = idSource.link + '.json';
    const rawData = [];

    try {
        const fetch = await import('node-fetch');
        const response = await fetch.default(apiUrl);
        const apiData = await response.json();
        rawData.push(apiData.data.children);
        //console.log(rawData[0]);
        
    } catch (error) {
        console.log('Error de codigo');
    }
    const prettyData = rawData[0].map(post => ({
        title: post.data.title,
        score: post.data.score,
        subreddit: post.data.subreddit,
        text: post.data.selftext,
        link: post.data.permalink,
        date: post.data.created,
    }));
    return(prettyData)
}

async function main() {
    const data = await fetchDataReddit(sourceListChile['2002']);
    console.log(data);
}

main();


