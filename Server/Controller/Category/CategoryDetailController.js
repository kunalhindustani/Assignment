var Response = require('./../../Response/ResponseController');
var CategoryDetailModel = require('./../../Model/CategoryDetailModel/CategoryModel');

var CategoryDetailController = {};

//This function call the category detail from database and send the response.
CategoryDetailController.fetchAllCategories = async (req, res) => {
    let resultData
    try {
      resultData = await CategoryDetailModel.getAllCategoryDetail();
      return Response.sendSuccessResponse(req, res, "Successfully fetch data", resultData, 200);
    } catch(error) {
      return  Response.sendErrorResponse(req, res, resultData, [], 500);
    }
}

module.exports = CategoryDetailController;
