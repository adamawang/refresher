// function* haiku(){
//   console.log('I kill an ant');
//   yield null; // the yield keyword requires a value, so I put null
//   console.log('and realize my three children');
//   yield null;
//   console.log('have been watching.');
//   yield null;
//   console.log('- Kato Shuson');
// }
//
// var g = haiku();
// function next(){
//   if (g.next().done) return;
//   setTimeout(next, 1000);
// }
// next();

var co = require('co');

co(function *(){
  // yield any promise
  var result = yield Promise.resolve(true);
}).catch(onerror);

co(function *(){
  // resolve multiple promises in parallel
  var a = Promise.resolve(1);
  var b = Promise.resolve(2);
  var c = Promise.resolve(3);
  var res = yield [a, b, c];
  console.log(res);
  // => [1, 2, 3]
}).catch(onerror);

// errors can be try/catched
co(function *(){
  try {
    yield Promise.reject(new Error('boom'));
  } catch (err) {
    console.error(err.message); // "boom"
 }
}).catch(onerror);

// error handler
function onerror(err) {
  console.error(err.stack);
}
