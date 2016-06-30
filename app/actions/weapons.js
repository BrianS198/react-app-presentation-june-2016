const Immutable = require('immutable');
const AppDispatcher = require('app_dispatcher');
const Api = require('utils/api');
const {
  ACTION_SET_WEAPONS,
  STAT_NAMES_BY_KEY,
  ATTACK_NAMES_BY_KEY
} = require('constants/weapons');

function formatCollectionForKeyValueTable(collection, labelMap) {
  return collection.map ((value, key) => {
    return Immutable.Map({
      label: labelMap[key],
      value: value
    });
  });
}

function formatResponse(response) {
  return Immutable.fromJS(response)
    .map(weapon => {
      return weapon
        .update('stats', stats => formatCollectionForKeyValueTable(stats, STAT_NAMES_BY_KEY))
        .update('attacks', attacks => {
          return attacks.map(attack => formatCollectionForKeyValueTable(attack, ATTACK_NAMES_BY_KEY));
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
