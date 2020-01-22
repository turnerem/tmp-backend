process.env.NODE_ENV = 'test';

const request = require('supertest');
const {expect} = require('chai');
const connection = require('../db/connection');
const app = require('../app');

describe('/api/users', () => {
    beforeEach(() => {
        return connection.seed.run();
    })
    after(()=> {
        return connection.destroy();
    })
    it('GET: 200 returns all users', () => {
        return request(app)
        .get('/api/users')
        .expect(200)
        .then(({body}) => {
            expect(body.users.length).to.equal(4)
        });
    });
});

