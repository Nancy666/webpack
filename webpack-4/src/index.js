var str = require("./a.js")
require("./index.css")
require("./index.less")
require('@babel/polyfill')
console.log(str)
const fn = () => {
    console.log("hello world")
}
fn()


class A {
    a = 1
}
let a = new A()
console.log(a.a)


@log
class B {
    a = 1
}
function log(target) {
    console.log(target)
}

function * gen(){
    yield 2
}
console.log(gen().next())

console.log("aaa".includes("a"))
