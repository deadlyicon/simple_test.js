// Using V8 or Rhino
load('simple_test.js');

new SimpleTestSuite(function(test){

  test('the truth', function(){
    return true;
  });

  print(this.tests.passed+' out of '+this.tests.failed+' tests passed');
  for (var i=0; i < this.tests.length; i++) {
    print((this.tests[i][0] ? 'PASS' : 'FAIL')+': '+this.tests[i][1]);
  };
});