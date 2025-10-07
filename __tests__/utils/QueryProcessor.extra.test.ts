import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor extra cases", () => {
  test('addition: 72 plus 84', () => {
    const query = "What is 72 plus 84?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("156");
  });

  test('largest: 68, 20, 51', () => {
    const query = "Which of the following numbers is the largest: 68, 20, 51?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("68");
  });
});
