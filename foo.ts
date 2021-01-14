function foo(bar?: number[],custom:'car'|'bus'| number ) {
    return "hello " + bar;
}
let baz = [1,2,3];
console.log(foo(baz,'car'));
