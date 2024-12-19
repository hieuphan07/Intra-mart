const { run } = require("../../../src/js/apl102_error_summary_nw_04");

describe("Error Summary Tests", () => {
  test("Should return unique elements from arrays", () => {
    const input = {
      p_error: ["false", "false", "true"],
      p_partNum: ["D2951531", "D2951531", "D2951532"],
      p_modelUser: ["NSPC", "NSPC", "ASPC"],
      p_rank: ["1", "1", "2"],
      p_quantity: ["10", "10", "100"],
      p_salesPlan: ["Monthly", "Monthly", "Christmas Day"],
      p_boxStartDt: ["2024/12/05", "2024/12/05", "2024/12/06"],
      p_boxEndDt: ["2024/12/31", "2024/12/31", "2024/12/31"],
      p_boxType: ["調逵狿点", "調逵狿点", "調逵狿点"],
    };

    const result = run(input);

    expect(result.partNum).toEqual(["D2951531", "D2951532"]);
    expect(result.modelUser).toEqual(["NSPC", "ASPC"]);
    expect(result.rank).toEqual(["1", "2"]);
    expect(result.quantity).toEqual(["10", "100"]);
    expect(result.salesPlan).toEqual(["Monthly", "Christmas Day"]);
    expect(result.boxStartDt).toEqual(["2024/12/05", "2024/12/06"]);
    expect(result.boxEndDt).toEqual(["2024/12/31"]);
    expect(result.boxType).toEqual(["調逵狿点"]);
  });

  test("Should handle error flag correctly when true exists", () => {
    const input = {
      p_error: ["false", "true", "false"],
      p_partNum: [],
      p_modelUser: [],
      p_rank: [],
      p_quantity: [],
      p_salesPlan: [],
      p_boxStartDt: [],
      p_boxEndDt: [],
      p_boxType: [],
    };

    const result = run(input);
    expect(result.error).toEqual(["true"]);
  });

  test("Should handle error flag correctly when all false", () => {
    const input = {
      p_error: ["false", "false", "false"],
      p_partNum: [],
      p_modelUser: [],
      p_rank: [],
      p_quantity: [],
      p_salesPlan: [],
      p_boxStartDt: [],
      p_boxEndDt: [],
      p_boxType: [],
    };

    const result = run(input);
    expect(result.error).toEqual(["false"]);
  });

  test("Should handle empty arrays", () => {
    const input = {
      p_error: [],
      p_partNum: [],
      p_modelUser: [],
      p_rank: [],
      p_quantity: [],
      p_salesPlan: [],
      p_boxStartDt: [],
      p_boxEndDt: [],
      p_boxType: [],
    };

    const result = run(input);
    expect(result.error).toEqual(["false"]);
    expect(result.partNum).toEqual([]);
    expect(result.modelUser).toEqual([]);
    expect(result.rank).toEqual([]);
    expect(result.quantity).toEqual([]);
    expect(result.salesPlan).toEqual([]);
    expect(result.boxStartDt).toEqual([]);
    expect(result.boxEndDt).toEqual([]);
    expect(result.boxType).toEqual([]);
  });

  test("Should handle arrays with null values", () => {
    const input = {
      p_error: ["false", null, "false"],
      p_partNum: ["D2951531", null, "D2951532"],
      p_modelUser: ["NSPC", null, "ASPC"],
      p_rank: ["1", null, "2"],
      p_quantity: ["10", null, "100"],
      p_salesPlan: ["Monthly", null, "Christmas Day"],
      p_boxStartDt: ["2024/12/05", null, "2024/12/06"],
      p_boxEndDt: ["2024/12/31", null, "2024/12/31"],
      p_boxType: ["調逵狿点", null, "調逵狿点"],
    };

    const result = run(input);
    expect(result.partNum).toEqual(["D2951531", null, "D2951532"]);
    expect(result.modelUser).toEqual(["NSPC", null, "ASPC"]);
    expect(result.error).toEqual(["false"]);
  });
});
