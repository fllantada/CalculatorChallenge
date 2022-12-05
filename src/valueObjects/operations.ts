type operation = "plus" | "minus" | "times" | "divided_by";

type digitsAlowed =
  | "zero"
  | "one"
  | "two"
  | "three"
  | "four"
  | "five"
  | "six"
  | "seven"
  | "eight"
  | "nine";

const Dicc = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
export function operatorCreater(
  operation: operation,
  digit1: digitsAlowed,
  digit2: digitsAlowed
) {
  return `${digit1}.${operation}.${digit2}`;
}

export class Calculator {
  parse(operationString: string) {
    const operation = this.getOperation(operationString);
    const digit1 = this.getDigit1(operationString);
    const digit2 = this.getDigit2(operationString);

    const result = this.calculate(operation, digit1, digit2);

    return result;

    console.log(operation);
  }
  private getOperation(operation: string): operation {
    return operation.split(".")[1] as operation;
  }
  private getDigit1(operation: string): digitsAlowed {
    return operation.split(".")[0] as digitsAlowed; // esl as me hace ruido ver dsp
  }
  private getDigit2(operation: string): digitsAlowed {
    return operation.split(".")[2] as digitsAlowed;
  }
  private calculate(
    operation: operation,
    digit1: digitsAlowed,
    digit2: digitsAlowed
  ): number | Error {
    if (!this.isValid(operation, digit1, digit2)) {
      throw new Error("invalid operation");
    }

    //continue operation

    switch (operation) {
      case "plus":
        return this.plus(digit1, digit2);
      case "minus":
        return this.minus(digit1, digit2);
      case "times":
        return this.times(digit1, digit2);
      case "divided_by":
        return this.divided_by(digit1, digit2);
    }
  }

  private plus(digit1: digitsAlowed, digit2: digitsAlowed): number {
    return Dicc[digit1] + Dicc[digit2];
  }
  private minus(digit1: digitsAlowed, digit2: digitsAlowed): number {
    return Dicc[digit1] - Dicc[digit2];
  }

  private times(digit1: digitsAlowed, digit2: digitsAlowed): number {
    return Dicc[digit1] * Dicc[digit2];
  }

  private divided_by(digit1: digitsAlowed, digit2: digitsAlowed): number {
    if (!digit1 || !digit2) {
      return 0;
    } //error
    console.log("desde divided_by method:", Dicc[digit1], Dicc[digit2]);
    const result = Dicc[digit1] / Dicc[digit2];
    console.log("Widhout rounding method:", result);
    const retultRounded = this.round(result);
    console.log("Widhout rounding method:", retultRounded);

    return retultRounded;
  }

  private round(number: number): number {
    console.log("desde round method:", number);
    const number2 = number * 10;

    return Math.round(number2) / 10;
  }

  private isValid(
    operation: operation,
    digit1: digitsAlowed,
    digit2: digitsAlowed
  ): boolean {
    if (operation === "divided_by" && digit2 === "zero") return false;

    return true;
  }
}
