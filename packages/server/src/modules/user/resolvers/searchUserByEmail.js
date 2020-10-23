const { ApolloError } = require("apollo-server-express");
const User = require("../../../models/user");

const searchUserByEmail = async (_, {email}) => {
  const user = await User.findOne({ email }, function(err, arr) {
    return arr
  });


  return user;
};

module.exports = searchUserByEmail;
