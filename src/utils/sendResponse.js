const MessageCode = {
  200: "Success",
  201: "Created",
  202: "Accept",
  204: "No Content",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payemnt Req",
  403: "Forbidden",
  404: "Not Found",
  405: "Method not Allowed",
  500: "Server Error",
};

/**
 * Response API helper
 *
 * Note Http code status
 * - 200 : Success [‘GET’]
 * - 201 : Created [‘POST’, ‘PUT’, ‘PATCH’]
 * - 202 : Accept [‘POST’, ‘PUT’, ‘PATCH’]
 * - 204 : No Content
 * - 400 : Bad Request
 * - 401 : Unauthorized
 * - 402 : Payemnt Req
 * - 403 : Forbidden
 * - 404 : Not Found
 * - 405 : Method not Allowed
 * - 500 : Server Error
 */
function sendResponse({ data, status = 200, message }, response) {
  if (typeof status !== "number") throw new Error("status must be a number");

  return response.status(status).send({
    code: status,
    message: message || MessageCode[status],
    result: data,
  });
}

export default sendResponse;
