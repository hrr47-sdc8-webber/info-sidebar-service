import 'regenerator-runtime/runtime';

const request = require('supertest');
const app = require('../server/index.js');
const seedOne = require('../seedOneData.js');
const db = require('../database-mysql/index.js');

let dbTestId;

// eslint-disable-next-line arrow-body-style
beforeAll(() => {
  return Promise.resolve(seedOne.seedOne())
    .then(() => db.returnsLength())
    .then((length) => {
      dbTestId = length[0]['MAX(Restaurant_ID)'];
    });
});

afterAll(() => seedOne.deleteTestData(dbTestId));

describe('Gets the test endpoint', () =>
  test('It returns the GET method on root path', () =>
    request(app)
      .get(`/${dbTestId}/restaurants/${dbTestId}`)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body[0][0].Restaurant_Name).toBe('Test Company');
      })));
