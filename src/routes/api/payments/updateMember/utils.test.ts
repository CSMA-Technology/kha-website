import { test, describe, expect } from "vitest";
import { standardizeAddress } from "./utils";

describe("standardizeAddress", () => {
  const equivalentUserInputs = [
    "1234 SW 102nd Avenue Road",
    "1234 Southwest 102nd Avenue Road",
    "1234 South West 102nd Avenue Road",
    "1234 SW 102nd Ave Rd",
    "1234 SW 102 Ave Rd.",
    "1234 SW 102nd Avenue Rd.",
    "1234 102nd Ave Rd",
    "1234 102nd Ave Road",
  ];
  const expectedOutput = {
    houseNumber: "1234",
    streetName: "102 Avenue Road",
    direction: "SW",
  };
  test.for(equivalentUserInputs)("should standardize address %s", (input) => {
    expect(standardizeAddress(input)).toEqual(expectedOutput);
  });

  const equivalentUserInputs2 = [
    "1098 SW 109th Street",
    "1098 Southwest 109th Street",
    "1098 South West 109th Street",
    "1098 SW 109th St",
    "1098 SW 109 St",
    "1098 SW 109th St.",
    "1098 109th St",
    "1098 109th Street",
  ];
  const expectedOutput2 = {
    houseNumber: "1098",
    streetName: "109 Street",
    direction: "SW",
  };
  test.for(equivalentUserInputs2)("should standardize address %s", (input) => {
    expect(standardizeAddress(input)).toEqual(expectedOutput2);
  });
});
