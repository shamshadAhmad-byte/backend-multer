const printReq = (req, res, next) => {
  const timeStamp = new Date().toISOString();
  const agent = req.get("User-Agent");
  const method = req.method;
  const url = req.url;
  console.log(`${timeStamp} - ${agent} - ${method} - ${url}`);
  next();
};
export default printReq;
