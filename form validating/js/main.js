
var mainForm = document.querySelector('#formOne');

function mainFormClick(e) {

    let input1 = document.querySelector('#inlineFormInputGroup').value;
    let input2 = document.querySelector('#inlineFormInputGroupTwo').value;
    let text1 = document.querySelector('#textOne');
    let text2 = document.querySelector('#textFour');

    afterClickInput1(input1, text1, e);
    afterClickInput2(input2, text2, e);
}

function afterClickInput1(input1, text1, e) {

    if (input1 == '') {
        e.preventDefault();
        text1.innerHTML = 'enter your name';
        document.querySelector('.input-group').style.border = '5px solid red';
        document.querySelector('.input-group').style.borderRadius = '10px';
    } else {
        text1.innerText = 'input ok!';
        document.querySelector('.input-group').style.border = '5px solid lightgreen';
        document.querySelector('.input-group').style.borderRadius = '10px';
    }
};


function afterClickInput2(input2, text2, e) {

    if (input2 == '') {
        e.preventDefault();
        text2.innerHTML = 'enter your Password';
        document.querySelector('#inputGroup2').style.border = '5px solid red';
        document.querySelector('#inputGroup2').style.borderRadius = '10px';
    } else {
        text2.innerHTML = 'input okk!';
        document.querySelector('#inputGroup2').style.border = '5px solid lightgreen';
        document.querySelector('#inputGroup2').style.borderRadius = '10px';
    }
};


mainForm.addEventListener('submit', mainFormClick);






/*
function* genarator(param) {
    yield 1;
    yield 2;
    yield 3;
    return 'i am finised'
    yield 4;
    yield 5;
}


const iterator = genarator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());



let object = {
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4,
    value5: 5,
}


function* genarator(obj) {
    const entry = Object.entries(obj);
    for (let elem of entry) {
        yield elem[1];
    }
}

const iterator = genarator(object);

for (let element of iterator) {
    console.log(element);
}

console.log(...iterator);

function* range(start, end, step) {
    let current = start;
    while (current < end) {
        yield current;
        current = current + step;
    }
}

let iterator = range(1, 20, 2);

console.log(...iterator);



function* genarator(a, b,) {
    let k = yield a + b;
    let m = yield a + b + k;
    yield a + b + k + m;
}

var gen = genarator(10, 20);

console.log(gen.next());
console.log(gen.next(50));
console.log(gen.next(100));




const takeOrder = (customer) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`order takern from ${customer}`);
        }, 3000);
    });
};
const processOrder = (customer) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`order process for ${customer}`);
        }, 2000);
    });
};

const completeOrder = (customer) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`order completed for ${customer}`);
        }, 1000);
    });
};

async function* solution(customer) {
    yield await takeOrder(customer);
    yield await processOrder(customer);
    yield await completeOrder(customer);
};

const gen = solution('karim')


gen.next().then(({ value }) => {
  console.log(value);
});
gen.next().then(({ value }) => {
console.log(value);
});
gen.next().then(({ value }) => {
 console.log(value);
});
gen.next().then(({ value }) => {
console.log('No more order');
});




const promise = [gen.next(), gen.next(), gen.next()];
(async function (param) {
    for await (let element of promise) {
        console.log(element);
    }
})();

*/