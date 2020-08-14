import 'regenerator-runtime/runtime';

const request = require('supertest');
const app = require('../server/index.js');
const seedOne = require('../seedOneData.js');

// /* consider adding beforeall and after all */

describe('Gets the test endpoint', () => {
  beforeEach(seedOne.seedOne);
  afterEach(seedOne.deleteTestData);

  test('It returns the GET method on root path', () =>
    request(app)
      .get('/')
      .then((response) => expect(response.statusCode).toBe(200)));
});
