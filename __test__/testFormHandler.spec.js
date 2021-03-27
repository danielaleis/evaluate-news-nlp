import {prepareContentUI} from '../src/client/js/formHandler';

describe("Testing the prepareContentUI", () => {
    
    test('testing with complete ApiResponse', () => {
        const testApiResponse = {irony:'NONIRONIC', confidence: '100', subjectivity:'OBJECTIVE'};
        const result = prepareContentUI(testApiResponse)
        const expectedResult = {confidence: "Confidence in the text is 100 percent.", irony: "This text is nonironic.", subjectivity: "This text is objective."};
        expect(result).toStrictEqual(expectedResult);
    });

    test('testing with incomplete ApiResponse - missing confidence', () => {
        const testApiResponse = {irony:'NONIRONIC', subjectivity:'OBJECTIVE'};
        const result = prepareContentUI(testApiResponse)
        console.log(result);
        expect(result).toBe(false);
    });

    test('testing with incomplete ApiResponse - missing irony', () => {
        const testApiResponse = {confidence: '100', subjectivity:'OBJECTIVE'};
        const result = prepareContentUI(testApiResponse)
        console.log(result);
        expect(result).toBe(false);
    });

    test('testing with incomplete ApiResponse - missing subjectivity', () => {
        const testApiResponse = {irony:'NONIRONIC', confidence: '100'};
        const result = prepareContentUI(testApiResponse)
        console.log(result);
        expect(result).toBe(false);
    });

});