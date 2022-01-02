const express = require("express");
const getMeatadata = require('./getMetadata');

const previewRouter = express.Router();

previewRouter.get('/', async (req, res, next) => {
    let { url } = req.query;
    if (!url) {
        return next(new Error("no url"));
    }
    url = url.indexOf('://') === -1 ? 'http://' + url : url;
    const data = await getMeatadata(url);
    res.send(data);
});

module.exports = previewRouter;