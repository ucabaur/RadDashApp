/**
 * Created by BlackLinden on 20/07/2016.
 */
module.exports = {
  find: function (req, res) {
    User.find({}).populate('role').exec(function (error, users) {
      if (error) {
        res.negotiate(error);
        res.send();
      }
      res.status(200);
      res.type('application/json');
      var usersParsed = users.map(function(user){
        return {
          name: user.name,
          roleId: user.role.id,
          roleName: user.role.description,
          userId: user.id
        };
      });
      return res.send(JSON.stringify(usersParsed, null, 2));
    });
  },

  info: function (req, res) {
    var userId = req.info.userId;
    User.findOne({id: userId}).populate('role').exec(function (error, user) {
      if (error) {
        res.negotiate(error);
        res.send();
      }
      res.status(200);
      res.type('application/json');

      console.log(user);
      var loggedInUser = {
        name: user.name,
        roleId: user.role.id,
        userId: user.id,
        roleName: user.role.description
      };
      return res.send(JSON.stringify(loggedInUser, null, 2));
    });
  }
}


