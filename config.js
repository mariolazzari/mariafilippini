// express configurarion
const port = 3002;
const url = `http://localhost:${port}`;

// mongo configuration
const mongoURI = "mongodb://localhost:27017/mariafilippini";
const mongoOptions = { useNewUrlParser: true };

// export configurations
module.exports = {
  port,
  url,
  mongoURI,
  mongoOptions
};
