const AppDispatcher = require('app_dispatcher');
const EventEmitter = require('events').EventEmitter;

const {List} = require('immutable');
const {ACTION_TOGGLE_SELECTED_WEAPON, SELECTED_SIZE_LIMIT} = require('constants/ui');

const CHANGE_EVENT = 'change';
const ACTION_MAP = {};
ACTION_MAP[ACTION_TOGGLE_SELECTED_WEAPON] = 'toggleSelectedWeapon';

let selectedWeapons = List();

function addWeaponToSelectedWeapons(weaponId) {
  selectedWeapons = selectedWeapons.push(weaponId);
}

function removeWeaponFromSelectedWeapons(weaponId) {
  selectedWeapons = selectedWeapons.filter(selectedWeaponId => {
    return selectedWeaponId !== weaponId;
  });
}

const UiStore = Object.assign({}, EventEmitter.prototype, {

  getSelectedWeapons: function() {
    return selectedWeapons;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

const ActionHandlers = {
  toggleSelectedWeapon: function({weaponId}) {
    if (selectedWeapons.includes(weaponId)) {
      removeWeaponFromSelectedWeapons(weaponId);
      return UiStore.emitChange();
    }

    if (selectedWeapons.size === SELECTED_SIZE_LIMIT) return;

    addWeaponToSelectedWeapons(weaponId);
    UiStore.emitChange();
  }
}


AppDispatcher.register(action => {
  const handlerMethod = ACTION_MAP[action.actionType];
  ActionHandlers[handlerMethod](action);
});

module.exports = UiStore;
