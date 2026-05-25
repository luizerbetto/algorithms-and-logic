function finabocci(n) {
    let a =0, b = 1;
     for (let i = 0; i < n; i++) {
        console.log(a);
        let temp = a;
        a = b;
        b = temp + b;
     }
}

finabocci(10);