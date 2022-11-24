let a = 'rgba(0, 0, 0, 0)';
let b = a.replace(/[a-z ()]/g, '').split(',');
console.log(b);


let value = +b[3];
for (let i = 1; i <= 10; i++) {
    value = value === 0 ? 0.1 : Math.round((value + 0.1) * 100) / 100;
    console.log(value);
}

