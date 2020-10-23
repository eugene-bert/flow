const User = require("../../../models/user");

const searchUserById = async (_, {id}) => {
  const user = await User.findById({ _id: id }, function(err, arr) {
    return arr
  });


  return user;
};

module.exports = searchUserById;
