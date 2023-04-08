/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogames, conn } = require('../../src/db.js');

const agent = session(app);

describe('Detail videogame routes', () => {
  describe('GET /videogames/detail', () => {
    it('should get 200', () =>
      agent.get('/videogames/detail?id=3498&db=false').expect(200)
    )
    it('should get 404', () =>
        agent.get('/videogames/detail?id=3498&db=true').expect(404)
   
    )
  });

});
