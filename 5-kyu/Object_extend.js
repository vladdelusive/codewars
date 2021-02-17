// https://www.codewars.com/kata/51f9d3a6e5a42591ae0001eb

const extend = (...args) => {
    return args.reduce((a, obj) => {
        if (typeof obj === 'object' && obj !== null) {
            const properties = Object.keys(obj).filter(key => !a.hasOwnProperty(key));
            properties.forEach(prop => {
                a[prop] = obj[prop];
            })
            return a;
        } else {
            return a;
        };
    }, {});
};