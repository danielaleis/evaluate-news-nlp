
import { inputChecker } from "../src/client/js/inputChecker";

describe("Testing the inputChecker", () => {
    test('testing url', () => {
        const testInput = "http://www.example.com/news"
        const inputType = inputChecker(testInput)
        expect(inputType).toBe("url");
    });

    test('testing text', () => {
        const testInput = "this is some input"
        const inputType = inputChecker(testInput)
        expect(inputType).toBe("text");    });
});