const Weapons = require('fixtures/weapons');

const Api = {
  getWeapons: function(callback) {
    callback(null, Weapons);
  }
};

module.exports = Api;
