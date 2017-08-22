process.env.NODE_ENV = 'test';
var base = process.env.PWD;
var config = require('C:/Users/Nuruzzaman/Documents/NodeJS/NodeBoilerplate/config');
var logger = require('mocha-logger');
var mongoose  = require('mongoose');
var should = require('should');
var testUtils = require('C:/Users/Nuruzzaman/Documents/NodeJS/NodeBoilerplate/Test/utils');
var dummyController = require('C:/Users/Nuruzzaman/Documents/NodeJS/NodeBoilerplate/app/controllers/dummyController');
describe('BOILERPLATE TESTING', () => {
    before((done) => {
        mongoose.connect(config.database.dbTest, (err, user) => {
            if(err) { logger.log('Error in connecting database: ' + err) }
            else { done(); }
        });
    });
    describe('TESTING DUMMY ROUTE', () => {
        it('should get a success message', (done) => {
            var req = {};
            var res = testUtils.responseValidatorAsync(200, (user) => {
                user.should.have.property('success');
                user.success.should.equal(true);
                done();
            });
            dummyController.dummyRoute(req, res);
        });
    });

    after((done) => {
        mongoose.disconnect(done);
    });
});