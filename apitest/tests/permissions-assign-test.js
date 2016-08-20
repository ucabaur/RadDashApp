'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var request = require('request');

var testHelper = require('../testHelper.js');
testHelper.prepareForTest(ZSchema, validator);

chai.should();

describe('/permissions/assign', function() {
  describe('put', function() {
    it('should respond with 205 The update was successful...', function(done) {
      request({
        url: 'http://localhost:1338/permissions/assign',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        json: {
          body: 'DATA GOES HERE'
        }
      },
      function(error, res, body) {
        if (error) return done(error);

        res.statusCode.should.equal(205);

        body.should.equal(null); // non-json response or no schema
        done();
      });
    });

    it('should respond with 401 The user is not authorised...', function(done) {
      /*eslint-disable*/
      var schema = {
        "$ref": "REFERENCE#ß/definitions/Error"
      };

      /*eslint-enable*/
      request({
        url: 'http://localhost:1338/permissions/assign',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        json: {
          body: 'DATA GOES HERE'
        }
      },
      function(error, res, body) {
        if (error) return done(error);

        res.statusCode.should.equal(401);

        validator.validate(JSON.parse(body), schema).should.be.true;
        done();
      });
    });

  });

});
