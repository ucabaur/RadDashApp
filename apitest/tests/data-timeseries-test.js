'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var request = require('request');

chai.should();

describe('/data/timeseries', function() {
  describe('post', function() {
    it('should respond with 200 Metric computed for the...', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "array",
        "items": {
          "$ref": "#/definitions/MetricData"
        }
      };

      /*eslint-enable*/
      request({
        url: 'http://localhost:1337/data/timeseries',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        json: {
          body: 'DATA GOES HERE'
        }
      },
      function(error, res, body) {
        if (error) return done(error);

        res.statusCode.should.equal(200);

        validator.validate(body, schema).should.be.true;
        done();
      });
    });

  });

});