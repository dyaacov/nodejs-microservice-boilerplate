var app = require('../server/app');

describe('Test server apis', function() {

  it('add an author', function (done){
  	done();
  });

  it('get all authors', function (done){
  	assert.equal(-1, 6);
  	done();
  });

  afterEach(function() {
    // runs after each test in this block
  });

  after(function() {
    // runs after all tests in this block
    process.exit(0);
  });

});