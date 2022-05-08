// importing the node_modules that are in the layer's node_modules folder
const moment = require('moment');

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(moment().format()),
    };
    return response;
};
