'use strict';
const supergoose = require('@code-fellows/supergoose');
const { app } = require('../src/server');
const mockRequest = supergoose(app);

describe('API SERVER clothes APIs', () => {
  let id;
  it('can create a new clothes', async () => {
    let clothesObj = { name: 'test', type: 'test' };
    const res = await mockRequest.post('/api/v1/clothes').send(clothesObj);
    id = res.body._id;
    expect(res.body.name).toBe(clothesObj.name);
    expect(res.body.type).toBe(clothesObj.type);
  });
  it('can get a clothes after creation', async () => {
    let clothesObj = { name: 'test', type: 'test' };
    const res = await mockRequest.get('/api/v1/clothes');

    expect(res.body[0].name).toBe(clothesObj.name);
    expect(res.body[0].type).toBe(clothesObj.type);
    expect(res.body.length).toBe(1);
  });
  it('can get one clothes ', async () => {
    const res = await mockRequest.get('/api/v1/clothes/' + id);
    let clothesObj = { name: 'test', type: 'test' };
    expect(res.body[0].name).toBe(clothesObj.name);
    expect(res.body[0].type).toBe(clothesObj.type);
    expect(res.status).toBe(200);
  });
  it('PUT: can update one clothes', async () => {
    let foodObj = { name: 'test2', type: 'test2' };
    const res = await mockRequest.put(`/api/v1/clothes/${id}`).send(foodObj);
    expect(res.status).toEqual(200);
    expect(res.body.name).toEqual(foodObj.name);
  });

  it('DELETE clothes', async () => {
    const res = await mockRequest.delete(`/api/v1/clothes/${id}`);
    expect(res.status).toEqual(200);
    expect(res.body.length).toEqual[0];
  });
});

describe('API SERVER food APIs', () => {
  let id;
  it('can create a new food', async () => {
    let foodObj = { name: 'test', type: 'test' };
    const res = await mockRequest.post('/api/v1/food').send(foodObj);
    id = res.body._id;
    expect(res.body.name).toBe(foodObj.name);
    expect(res.body.type).toBe(foodObj.type);
  });
  it('can get a food after creation', async () => {
    let foodObj = { name: 'test', type: 'test' };
    const res = await mockRequest.get('/api/v1/food');

    expect(res.body[0].name).toBe(foodObj.name);
    expect(res.body[0].type).toBe(foodObj.type);
    expect(res.body.length).toBe(1);
  });

  it('GET one', async () => {
    let foodObj = { name: 'test', type: 'test' };
    const res = await mockRequest.get(`/api/v1/food/${id}`);
    expect(res.status).toEqual(200);
    expect(res.body[0].name).toEqual(foodObj.name);
  });
  it('PUT: can update one food', async () => {
    let foodObj = { name: 'test2', type: 'test2' };
    const res = await mockRequest.put(`/api/v1/food/${id}`).send(foodObj);
    expect(res.status).toEqual(200);
    expect(res.body.name).toEqual(foodObj.name);
  });

  it('DELETE food', async () => {
    const res = await mockRequest.delete(`/api/v1/food/${id}`);
    expect(res.status).toEqual(200);
    expect(res.body.length).toEqual[0];
  });
});
