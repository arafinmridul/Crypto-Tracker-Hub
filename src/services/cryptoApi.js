const axios = require("axios");

const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/stats",
    params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
    },
    headers: {
        "X-RapidAPI-Key": "0a78628b36msh6c6ba2a1fa4ba9fp17344ejsnc4fc60aff51c",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
};

try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}
