const { run } = require("../../src/ud/js/apl102_validation_check_nw_04");

describe("Validation Check Integration Tests", () => {
  test("Valid input should return no errors", () => {
    const input = {
      p_partNum: "D2951531",
      p_modelUser: "NSPC",
      p_rank: "1.00",
      p_quantity: "10.00",
      p_salesPlan: "Monthly",
      p_boxStartDt: "2024/12/05 00:00:00",
      p_boxEndDt: "2024/12/31 00:00:00",
      p_boxType: "調逵狿点",
    };

    const result = run(input);
    expect(result.error).toBe("false");
  });

  test("Invalid partNum should return error", () => {
    const input = {
      p_partNum: "D2951531@", // Invalid character
      p_modelUser: "NSPC",
      p_rank: "1",
      p_quantity: "10",
      p_salesPlan: "Monthly",
      p_boxStartDt: "2024/12/05 00:00:00",
      p_boxEndDt: "2024/12/31 00:00:00",
      p_boxType: "調逵狿点",
    };

    const result = run(input);
    expect(result.error).toBe("true");
    expect(result.partNum).toContain("only allow characters [A-Z],[a-z],[0-9]");
  });
});
