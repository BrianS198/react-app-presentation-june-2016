const AppDispatcher = require('app_dispatcher');
const {ACTION_TOGGLE_SELECTED_WEAPON} = require('constants/ui');

const UiActions = {
  toggleSelectedWeapon: function(weaponId) {
    AppDispatcher.dispatch({
      actionType: ACTION_TOGGLE_SELECTED_WEAPON,
      weaponId: weaponId
    });
  },
};

module.exports = UiActions;
