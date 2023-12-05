import sendResponse from "../../src/utils/sendResponse";


describe("sendResponse", () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
  });

  test("should send a success response with default status 200", () => {
    const testData = { key: "value" };
    sendResponse({ data: testData }, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.send).toHaveBeenCalledWith({
      code: 200,
      message: "Success",
      result: testData,
    });
  });

  test("should send a response with custom status 201", () => {
    const testData = { key: "value" };
    sendResponse({ data: testData, status: 201 }, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.send).toHaveBeenCalledWith({
      code: 201,
      message: "Created",
      result: testData,
    });
  });

  test("should send a response with custom message", () => {
    const testData = { key: "value" };
    sendResponse({ data: testData, message: "Custom Message" }, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.send).toHaveBeenCalledWith({
      code: 200,
      message: "Custom Message",
      result: testData,
    });
  });

  test("should be error status must be a number", () => {
    const testData = { key: "value" };
    const status = "string";
    function responeErrorStatus() {
      sendResponse({ data: testData, status: status }, mockResponse);
    }

    expect(responeErrorStatus).toThrow(/status/);
  });
});
