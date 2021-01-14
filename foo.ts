function foo(bar?: number[]) {
    return "hello " + bar;
}
let baz = "ABC";
console.log(foo(baz));
