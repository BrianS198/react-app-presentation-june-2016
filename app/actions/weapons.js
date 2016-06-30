const Immutable = require('immutable');
const AppDispatcher = require('app_dispatcher');
const Api = require('utils/api');
const {ACTION_SET_WEAPONS, STAT_NAMES_BY_KEY} = require('constants/weapons');

function formatResponse(response) {
  return Immutable.fromJS(response)
    .map(weapon => {
      return weapon.update('stats', stats => {
        return stats.map((value, key) => {
          return Immutable.Map({
            label: STAT_NAMES_BY_KEY[key],
            value: value
          });
        });
      });
    });
};

const WeaponsActions = {
  fetchWeapons: function() {
    Api.getWeapons((err, response) => {
      AppDispatcher.dispatch({
        actionType: ACTION_SET_WEAPONS,
        weapons: formatResponse(response)
      });
    });
  },
};

module.exports = WeaponsActions;
