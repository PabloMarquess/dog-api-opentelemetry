const express = require('express');
const axios = require('axios');

const app = express();
const port = 8080;

const indexPage = `
<h3>RANDOM API</h3>

<p>O que você gostaria de ver?</p>

<ul>
    <li>Random dogs? <a href="/dogs">Clique</li>
</ul>
`;

app.get('/' , (req, res) => res.send(indexPage));
app.get('/healthcheck', (req,res) => {

    try {
        res.sendStatus(204);
    } catch (error) {
        res.sendStatus(500);
    }
})

app.get('/dogs', async (req, res) => {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        
        console.log(JSON.stringify(response.data));

        const { message: dogImage } = response.data;
        res.send(`<img src="${dogImage}" alt="random dog" style="max-width: 500px"/>`);

    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(500);
        res.send(error.message);
    }
    
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});