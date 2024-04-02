const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 5555;

app.get("/", async(req, res) => {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
            country: "in",
            apikey: "695e07af402f4b119f0703e9b19f4683",
            category: "sports"
        }
    });

    const headlines = response.data.articles.map(article => article.title);

    let htmlContent = '<h1>Top Headlines in India</h1>';
    htmlContent += '<ul>';
    headlines.forEach(headline => {
        htmlContent += `<li>${headline}</li>`;
    });
    htmlContent += '</ul>';

    res.send(htmlContent);
})

app.listen(PORT, () => {
    console.log("Sever started at :",PORT);
})
