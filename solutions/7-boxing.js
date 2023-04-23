// BEGIN
const magic = (...args) => {
    let sum = args.reduce((acc, item) => acc + item, 0);
    const anotherFunc = (...anotherArgs) => magic(sum, ...anotherArgs);
    anotherFunc.valueOf = () => sum;
    return anotherFunc; 
}

export default magic;
// END
