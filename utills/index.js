/**
 * 
 * @param {object} param
 * @param {object=} param.data
 * @param {number=} param.resultCode
 * @param {string=} param.resultMessage
 */
const makeResponse = ({ data, resultCode, resultMessage }) => {
    return {
        data,
        resultCode: resultCode || 0,
        resultMessage: resultMessage || '',
    };
}

module.exports = { makeResponse };