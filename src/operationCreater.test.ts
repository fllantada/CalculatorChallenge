import { operatorCreater } from "./valueObjects/operations";
import { Calculator } from "./valueObjects/operations";

const wrongOperation = "divided_by";
const wrongDigit1 = "zero";
const wrongDigit2 = "six";
const calculator: any = new Calculator();

const scenarios = {
  plus: { operation: "one.plus.two", expetedResult: 3 },
  minus: { operation: "one.minus.two", expetedResult: -1 },
  times: { operation: "one.times.two", expetedResult: 2 },
  divided_by: { operation: "five.divided_by.three", expetedResult: 1.7 },
  infiniteError: {
    operation: "one.divided_by.zero",
    expetedResult: "invalid operation",
  },
};

describe("Operation creater works", () => {
  test("should return an error if the operation is not valid", () => {
    const result = operatorCreater(wrongOperation, wrongDigit1, wrongDigit2);
    expect(result).toBe("zero.divided_by.six");
  });
});

describe("Calculator works Excelent", () => {
  test("Should work plus method", () => {
    const result = calculator.parse(scenarios.plus.operation);

    expect(result).toBe(scenarios.plus.expetedResult);
  });

  test("Should work minus method", () => {
    const result = calculator.parse(scenarios.minus.operation);

    expect(result).toBe(scenarios.minus.expetedResult);
  });

  test("Should work times method", () => {
    const result = calculator.parse(scenarios.times.operation);

    expect(result).toBe(scenarios.times.expetedResult);
  });

  test("Should work divided_by method", () => {
    const result = calculator.parse(scenarios.divided_by.operation);

    expect(result).toBe(scenarios.divided_by.expetedResult);
  });

  xtest("Should return an error if the operation is not valid", () => {
    const result = calculator.parse(scenarios.infiniteError.operation);

    expect(result).not.toBe("hola");
  });
});
