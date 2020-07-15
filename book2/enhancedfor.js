
const names = ['Sara', 'Jake', 'Pete', 'Mark', 'Jill'];

// normal for loop
for (let i = 0; i < names.length; i++) {
    console.log(names[i]); // accessing every element by index
}

// enhanced for loop
for (const name of names) {
    console.log(name);
}

// entries
for (const entry of names.entries()) {
    console.log(entry);
}

// extract index and value
for (const [index, name] of names.entries()) {
    console.log(index + '--' + name);
}

