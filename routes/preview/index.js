const express = require("express");
const getMeatadata = require('./getMetadata');
const { makeResponse } = require('../../utills');

const previewRouter = express.Router();

previewRouter.get('/', async (req, res, next) => {
    let { url } = req.query;
    if (!url) {
        return next(new Error("You did not specify a URL."));
    }
    url = url.indexOf('://') === -1 ? 'http://' + url : url;
    const data = await getMeatadata(url);
    res.send(makeResponse({ data }));
});

module.exports = previewRouter;