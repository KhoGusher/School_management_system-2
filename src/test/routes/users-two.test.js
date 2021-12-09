const request = require('supertest');
const UserRepo = require('../../repository/user-repo');
const pool = require('../../pool');

const buildApp = require('../../App');

const Context = require('../context');

let context;
beforeAll(async () => {
   context = await Context.build();
});

afterAll( ()=> {
    return context.close();
});

it('create a user', async () => {
 
    const startingCount = await UserRepo.count();

  //    expect(startingCount).toEqual(0);

  await request( buildApp())
  .post('/users')
  .send({ username: 'ttkk', bio: 'atthig'})
  .expect(200);

 const finishCount = await UserRepo.count();

 expect(finishCount - startingCount).toEqual(1);

});

