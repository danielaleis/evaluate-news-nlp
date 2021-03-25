import {prepareContentUI} from '../src/client/js/formHandler';

describe("Testing the prepareContentUI", () => {
    test('testing with complete ApiResponse', () => {
        const testApiResponse = {irony:'NONIRONIC', confidence: '100', subjectivity:'OBJECTIVE'};
        const result = prepareContentUI(testApiResponse)
        expect(result).toBe('{"confidence": "Confidence in the text is 100%", "irony": "This text is NONIRONIC", "subjectivity": "This text is OBJECTIVE"}');
    });
    test('testing with incomplete ApiResponse', () => {
        const testApiResponse = {irony:'NONIRONIC', subjectivity:'OBJECTIVE'};
        const result = prepareContentUI(testApiResponse)
        expect(result).toBe(false);
    });
});