function identity(x) {
    return x;
}

function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

function identityf(x) {
    return function() {
        return identity(x);
    };
}

function addf(x) {
    return function(y) {
        return add(x,y);
    };
}

function applyf(f) {
    return function(x) {
        return function(y) {
            return f(x,y);
        };
    };
}

function curry(f, x) {
    return applyf(f)(x);
}



identity(5);
add(1,3);
mul(2,3);
identityf(5)();
addf(5)(6);

var app = applyf(add);
app(5)(6);

var f = curry(add, 1);
f(2)

console.log(identity(5));
console.log(add(1,3));
console.log(mul(2,3));
console.log(identityf(5)());
console.log(addf(5)(6));
console.log(app(5)(6));
console.log(f(2));

var a = [1,2,3,4,5,6,7,8,9,10];
a.forEach(function(x) {
    console.log(x*2);
});

var quad = a.map(function(x) {
    return x*x;
});

console.log(quad);

var impar = a.filter(function(x) {
    return x % 2 === 1;
});

console.log(impar);

var soma = a.reduce(function(anterior, atual) {
    return anterior + atual;
}, 0);

console.log(soma);

var somaPar = a
.filter(function(x) {
    return x % 2 === 0;
})
.reduce(function(anterior, atual) {
    return anterior + atual;
}, 0);

console.log(somaPar);