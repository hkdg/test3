var add = require('../lib/add')

describe('大数相加add方法', function () {
  it('字符串"42329"加上字符串"21532"等于"63861"', function () {
    add('42329', '21532')
      .should.equa
language: node_js
node_js:
- "4"
before_install:
-npm install -g mocha
l('63861')
    
  })
  
  it('"843529812342341234"加上"236124361425345435"等于"1079654173767686669"', function () {
    add('843529812342341234', '236124361425345435')
      .should.equal('1079654173767686669')
  })
})
