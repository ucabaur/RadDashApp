/**
 * Created by BlackLinden on 10/08/2016.
 */
module.exports = function canUpdateDefaultDashboard (req, res, next) {
  var userId = req.info.userId;
  var permissionId = RolePermission.constants.CAN_CREATE_DEFAULT_DASHBOARD;
  PermissionChecker.hasUserPermission(userId, permissionId, res, next);
};
