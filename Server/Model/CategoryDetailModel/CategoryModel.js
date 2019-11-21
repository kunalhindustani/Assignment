var CategoryDetailModel = {};
//This function create the query and return the query result.
CategoryDetailModel.getAllCategoryDetail = () => {
  return new Promise(async function(resolve, reject) {
    try {
      let query, queryResult;
      query = `SELECT count(p.c_id) as product_count, c.c_name
                    FROM products p
                    JOIN category c on c.c_id = p.c_id
                    GROUP BY p.c_id ORDER BY c.c_name ASC`;
      queryResult = await executePromisified(query, []);
      return resolve(queryResult);
    } catch (error) {
      return reject(error);
    }
  });


}

module.exports = CategoryDetailModel;
