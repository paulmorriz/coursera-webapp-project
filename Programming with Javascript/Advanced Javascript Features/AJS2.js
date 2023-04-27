//Template Literals

let noMultiLine = "No mult-line strings in ES5";
console.log("Did you know? " + noMultiLine);


//ES6 Multi-line template literals

let multiLine = `
    Using ES6
    backticks
    multi-line
    strings are
    possible!
`;

console.log (multiLine);

//ES 6 variable interpolation

let first = `He said, "Don't you know? ES6, it's got some great features!"`;
let second = `"Wouldn't you want to learn more?", he asked.`;
//by using template literals JS doesn't consider quotes as string delimiters
//they become regular characters inside `` 
console.log(`${first} - and I got curious. ${second}}`);
//curly braces precedeed by dollar symbols ini bisa dipakai
//untuk call variable names yang dituju

//with template literals you don't need to worry about the
//limitation of single and double quotes and this can make for
//a much better coding experience

