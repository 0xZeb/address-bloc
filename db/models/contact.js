'use strict';
module.exports = (sequelize, DataTypes) => {
  var COntact = sequelize.define('COntact', {
    name: DataTypes.STRING
  }, {});
  COntact.associate = function(models) {
    // associations can be defined here
  };
  return COntact;
};