
import { inputChecker } from "../src/client/js/inputChecker";

describe("Testing the inputChecker", () => {
    test('testing url', () => {
        const testInput = "http://www.example.com/news"
        const inputType = inputChecker(testInput)
        expect(inputType).toBe("url");
    });

    test('testing text', () => {
        const testInput = "dalia ist suss"
        const inputType = inputChecker(testInput)
        expect(inputType).toBe("text");    });
});

// import {checkForName} from '../src/client/js/nameChecker'

// describe("Testing to make sure input is url",()=>{
//     test("Testing the checkForName() function", ()=>{
//        expect(checkForName("hello")).toBe(false);
//         })})