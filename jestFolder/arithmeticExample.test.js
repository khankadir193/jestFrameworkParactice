
const {add,sub,mul,div} = require('./arithmeticExample');


describe('arithmetic calculation checking :',()=>{
    test('Number should be add :', () => { 
        expect(add(45,15)).toBe(60);
    });

    test.skip('Number should be subtract :', () => { 
        expect(sub(45,15)).toBe(30);
    });

    xtest('Number should be multiply :', () => { 
        expect(mul(45,15)).toBe(675);
    });

    test.skip('Number should be divide :', () => { 
        expect(div(45,15)).toBe(3);
    });
})