const formatQuery = (req, res, next) => {
  const query = { ...req.query };
  const fields = ["order", "fields", "title"];

  fields.forEach((field) => {
    delete query[field];
  });

  req.formattedQuery = query;

  next();
};

export default formatQuery;
