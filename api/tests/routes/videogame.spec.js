/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogames, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
  description: 'This is a test',
  released: '1996-07-15',
  img: 'test.jpg',
  rating: '4'
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogames.sync({ force: true })
    .then(() => Videogames.create(videogame)));
  describe('GET /videogames', () => {
    it('should get status 200!', (done) =>{
        agent.get('/videogames').expect(200);

        done();
        
      });
     
    }
    )
  });

