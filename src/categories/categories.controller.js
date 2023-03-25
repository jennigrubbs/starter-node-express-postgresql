const categoriesService = require("./categories.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
  try {
    const data = await categoriesService.list();
    res.json({ data });
  } catch (error) {
    next(error);
  }
}

/*
async function list(req, res) {
  const data = await categoriesService.list();
  res.json({ data });
}
*/

/* above - changing it to async/await for 39.7
function list(req, res, next) {
  categoriesService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}
*/

module.exports = {
  list: asyncErrorBoundary(list),
};