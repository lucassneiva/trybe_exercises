const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

test('testando se a callback é chamada', done => {
  function callback(data) {
    expect(data).toBe('JAH');
    done();
  }

  uppercase('jah', callback);
});