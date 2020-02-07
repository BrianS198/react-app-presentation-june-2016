const AppDispatcher = require('app_dispatcher');
const EventEmitter = require('events').EventEmitter;
const Immutable = require('immutable');
const {ACTION_TOGGLE_SELECTED_WEAPON, SELECTED_SIZE_LIMIT} = require('constants/ui');

const CHANGE_EVENT = 'change';
const ACTION_MAP = {};
ACTION_MAP[ACTION_TOGGLE_SELECTED_WEAPON] = 'toggleSelectedWeaponById';

let selectedWeaponIds = Immutable.List();

function selectWeaponById(weaponId) {
  selectedWeaponIds = selectedWeaponIds.push(weaponId);
}

function deselectWeaponById(weaponId) {
  selectedWeaponIds = selectedWeaponIds.filter(selectedWeaponId => {
    return selectedWeaponId !== weaponId;
  });
}

const UiStore = Object.assign({}, EventEmitter.prototype, {

  getSelectedWeaponIds: function() {
    return selectedWeaponIds;
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
  toggleSelectedWeaponById: function({weaponId}) {
    if (selectedWeaponIds.includes(weaponId)) {
      deselectWeaponById(weaponId);
      return UiStore.emitChange();
    }

    if (selectedWeaponIds.size === SELECTED_SIZE_LIMIT) return;

    selectWeaponById(weaponId);
    UiStore.emitChange();
  }
}


AppDispatcher.register(action => {
  const handlerMethod = ACTION_MAP[action.actionType];

  if (!ActionHandlers[handlerMethod]) return;

  ActionHandlers[handlerMethod](action);
});

module.exports = UiStore;
