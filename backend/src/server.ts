const sutubMongoDbCOnnection =  require("./untils/mongoDBconection");
(async function () {
  await sutubMongoDbCOnnection()
  require("./app");
})();
