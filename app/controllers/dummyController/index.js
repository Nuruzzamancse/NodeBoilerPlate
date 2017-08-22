var base = process.env.PWD;
var dummyModel = require('C:/Users/Nuruzzaman/Documents/NodeJS/NodeBoilerplate/app/models/dummyModel');



var dummyRoute = (req, res) => {
    res.json(200, {
        success: true,
        message: 'Magic happens on port 3000'
    });
};

module.exports = {
    dummyRoute
}