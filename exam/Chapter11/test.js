const outer = function () {
    let count = 1;
    return function () {
        console.log(count++);
    }
};

const james = outer();
james();
james();
james();
james();
james();
james();

outer()();
outer()();
outer()();
outer()();
outer()();
outer()();
outer()();