const restAPIConstant = require("../src/common/restApiConstants");
const apiList = require("./api/index");

const apis = [
  { method: "get", apiName: "home" },
  { method: "get", apiName: "widgets" }
];

function routes(server) {
  /**
   * Upon page load, pulls in this data automatically
   * example: http://localhost:4001/widgets
   **/
  apis.forEach(api => {
    const urlName = api.dependency || api.apiName;
    const apiUrl = restAPIConstant[api.apiName].url;
    console.log(api.method.toUpperCase(), apiUrl);
    server[api.method](apiUrl, apiList[`${urlName}Api`]);
  });

  /**
   * returns root response
   * example: http://localhost:4001/
   **/

  /* eslint-disable-next-line no-unused-vars */
  server.use("/", function(req, res) {
    res.json({});
  });
}

module.exports = routes;
