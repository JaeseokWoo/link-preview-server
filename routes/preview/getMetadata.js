const axios = require('axios');
const parse = require('node-html-parser');

const config = {
    headers: {
        'Accept-Encoding': 'gzip,deflate,br', 
    }
}

const getMetadata = async (url) => {
    try {
        const { data } = await axios.get(url, config);
        const html = parse(data);

        const title = getTitle(html);
        const description = getDescription(html);

        return { title, description };

    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports = getMetadata;