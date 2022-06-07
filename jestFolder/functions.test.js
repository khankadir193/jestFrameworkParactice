//const { expect } = require("@jest/globals");
//const { expect } = require("@jest/globals");
const functions = require("./functions")

test('add the value :',()=>{
    expect(functions.add(2,4)).toBe(6);
});

test('subtract the value :',()=>{
    expect(functions.subtraction(2,4)).toBe(-2);
});

test('should be null :',()=>{
    expect(functions.isNull()).toBeNull();
});

test('check whether truthy or falsy', () => { 
    expect(functions.checkValue(null)).toBeFalsy();
    expect(functions.checkValue(0)).toBeFalsy();
    expect(functions.checkValue(undefined)).toBeFalsy();
    expect(functions.checkValue(NaN)).toBeFalsy();
});

test('should be object value :', () => { 
    expect(functions.createUser()).toEqual({
        firstName:"abdul",
        middleName:"kadir",
        lastName:"Khan"
    });
});

test('should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;

    // expect.assertions(1);
    expect(load1+load2).toBeLessThan(1600);
    expect(load1+load2).toBeGreaterThan(1499);
})