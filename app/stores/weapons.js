const AppDispatcher = require('app_dispatcher');
const EventEmitter = require('events').EventEmitter;
const Immutable = require('immutable');
const {ACTION_SET_WEAPONS} = require('constants/weapons');

const CHANGE_EVENT = 'change';
const ACTION_MAP = {};
ACTION_MAP[ACTION_SET_WEAPONS] = 'setWeapons';

let weapons = Immutable.List();

function setWeapons(newWeapons) {
  weapons = Immutable.fromJS(newWeapons);
}

const WeaponsStore = Object.assign({}, EventEmitter.prototype, {

  getWeapons: function() {
    return weapons;
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
  setWeapons: function({weapons}) {
    setWeapons(weapons);
    WeaponsStore.emitChange();
  }
}


AppDispatcher.register(action => {
  const handlerMethod = ACTION_MAP[action.actionType];

  if (!ActionHandlers[handlerMethod]) return;

  ActionHandlers[handlerMethod](action);
});

module.exports = WeaponsStore;
