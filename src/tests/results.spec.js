import chai from 'chai';
import chaiHttp from 'chai-http';
import app from  '../index';
import { describe, it } from 'mocha';
import userData from './mockData/userData'
import generateToken from '../helpers/generateToken';
import strings from '../Utils/strings'

chai.should();
chai.use(chaiHttp);
let user=userData.validUser
const adminToken = generateToken(userData.adminData);
const aunothorizedToken = generateToken(userData.validUser);
const invalidToken ='bvnvnvnvnvnv';

describe('admin Test',()=>{
it('user should view all results', done => {
    chai.request(app)
      .get('/api/v1/results/')
      // .set('Authorization', `Bearer ${adminToken}`)
      .end((error, res) => {
         res.should.have.property('status').eql(200);
        done();
});
});

it('Admin should save results', done => {
  chai.request(app)
    .post('/api/v1/admin/users')
    // .set('Authorization', `Bearer ${adminToken}`)
    .send(userData.User1)
    .end((error, res) => {
       res.should.have.property('status').eql(201);
      done();
});
});
i
});