const { describe } = require("mocha")
var MyClass = require("../src/myClass.js")
var myObj = new MyClass()
var chai = require ("chai")
const assert = require('chai').assert;
var expect = chai.expect

describe ("function isOddNumber()", function() {
    it('should be true if 3', () => {
        var result = myObj.isOddNumber(3);
        expect(result).to.be.true;
    })

    it('should be true if 2', () => {
        const result = myObj.isOddNumber(2);
        expect(result).to.be.false;
    })
})

describe('function countEventNumbers()', () => {
    it('should equal 0 if null', () => {
        const result = myObj.countEventNumbers(null);
        expect(result).to.equal(0);
    });

    it('should equal 0 if []', () => {
        const result = myObj.countEventNumbers([]);
        expect(result).to.equal(0);
    });

    it('should equal 1 if [1, 2, 3]', () => {
        const result = myObj.countEventNumbers([1, 2, 3]);
        expect(result).to.equal(1);
    });

    it('should equal 2 if [1, 2, 3, 4]', () => {
        const result = myObj.countEventNumbers([1, 2, 3, 4]);
        expect(result).to.equal(3);
    });
});

//tam giác
describe('triangle area', () => {
    it('should equal 6 if 1,2,3', () => {
        const result = myObj.triangleArea(3, 4, 5);
        expect(result).to.equal(6)
    })

    it('should be false if an edge is 0', () => {
        const result = myObj.triangleArea(0, 4, 5);
        expect(result).to.equal(false)
    })

    it('should return type number', () => {
        const result = myObj.triangleArea(1, 2, 3);
        assert.typeOf(result, 'number')
    })
});


//năm nhuận 
describe('kiểm tra năm nhuận', () => {
    it('should be true if 2016', () => {
        const result = myObj.leapYear(2016);
        expect(result).to.be.true
    })

    it('should be false if 2023', () => {
        const result = myObj.leapYear(2023);
        expect(result).to.be.false
    })

});


//phương trình bậc 2
describe('phương trình bậc 2', () => {
    it('should be false if string', () => {
        const result = myObj.giaiPTBacHai('ca', 3);
        expect(result).to.be.false
    })

    it('should be false if 6,5', () => {
        const result = myObj.giaiPTBacHai( 6, 5);
        expect(result).to.equal(false)
    })

    it('should be false if   x = 0', () => {
        const result = myObj.giaiPTBacHai(0, 6, 5);
        expect(result).to.equal(-5/6)
    })

});


