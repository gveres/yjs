/* @flow */
/*eslint-env browser,jasmine,console */

describe("Operation Buffer", function() {
  var OB = new OperationBuffer();

  it("contains spec with an expectation", function(done) {
    setTimeout(function(){
      done();
    }, 1000);
    expect(OB.i).toBe(4);
  });
});