function foo(bar?: number[],custom:'car'|'bus'| number,wild:any , wild2:any ) {
    return "hello " + bar;
}
let baz = [1,2,3];
console.log(foo(baz,'car',true,'abc'));
