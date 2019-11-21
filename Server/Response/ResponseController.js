//This function send the success response object.
var sendSuccessResponse = function(req, res, message, data, code) {
	let responseObj = {};
  responseObj.code = code ? code : 200;
  responseObj.message = message || ["Successful"];
  responseObj.data = data;
  res.send(responseObj);
}

//This function send the error response object.
var sendErrorResponse = function(req, res, errors, data, code) {
	let responseObj = {};
  responseObj.code = code ? code : 500;
  responseObj.error = errors || ["Error from backend"];
  responseObj.data = data || {};
  res.status(500).send(responseObj);
}

module.exports = {
  sendSuccessResponse: sendSuccessResponse,
  sendErrorResponse: sendErrorResponse
}
