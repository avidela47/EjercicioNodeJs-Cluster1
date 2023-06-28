const logginMdw = (req, res, next) => {
    console.log(`Call made to resource ${req.url} with method ${req.method}`);
    next();
};

module.exports = logginMdw;