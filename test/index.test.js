const assert = require("assert");
const { leapYearCalculator } = require("../src/leapYearCalculator/sample_code");

describe("Function name", () => {
    it("Function name is well written", () => {
        const providedName = leapYearCalculator.name;
        const expectedName = "leapYearCalculator";
        assert.ok(providedName, expectedName);
    })
})