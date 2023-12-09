function sum(x,y) {
    const res = x + y;
    return res;
}

function sub(x,y) {
    const res = x - y;
    return res;
}

// Testing callback
function math(x,y,fun) {
    return fun(x,y);
}

// Printing result
// Change the third argument with different function name
const ans = math(13,7,sub);
console.log(ans);