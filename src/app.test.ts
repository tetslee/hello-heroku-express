import request from 'supertest';
import app from './app';

test('should return Hello World!', done => {
  request(app)
    .get('/')
    .expect(200, 'Hello World 1!')
    .end(err => {
      if (err) {
        return done(err);
      }
      done();
    });
});
