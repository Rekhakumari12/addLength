import {addLengths} from '../../src/addLength'
describe("addLength Test", () => {
    test("should return 1.3 meter if first-input = 1 meter, second-input = 30cm", () => {
        const expectedResult:number = 1.3
        expect(addLengths({value:1, unit: "metres"}, {value:30, unit: "cm"})).toBe(expectedResult)
    })

    test("should able to convert metre(M) to  centimetre(CM)", () => {
        const expectedResult:number = 130
        expect(addLengths({value:30, unit: "cm"}, {value:1, unit: "metres"})).toBe(expectedResult)
    })

    test("should able to convert millimetre(MM) to metre(M)", () => {
        const expectedResult:number = 2302
        expect(addLengths({value:2, unit: "mm"}, {value:2.3, unit: "metres"})).toBe(expectedResult)
    })

    test("should able to convert millimetre(MM) to centimetre(CM)", () => {
        const expectedResult:number = 260
        expect(addLengths({value:30, unit: "mm"}, {value:23, unit: "cm"})).toBe(expectedResult)
    })

})

