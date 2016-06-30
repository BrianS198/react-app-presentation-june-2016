const React = require('react');
const UiStore = require('stores/ui');
const WeaponsActions = require('actions/weapons');
const WeaponsStore = require('stores/weapons');
const WeaponList = require('components/weapon_list');
const WeaponCanvas = require('components/weapon_canvas');
const __styles = require('./root.scss');

function getStoreValues() {
  return {
    selectedWeaponIds: UiStore.getSelectedWeaponIds(),
    weapons: WeaponsStore.getWeapons()
  };
}

const Root = React.createClass({
  getInitialState: function() {
    return getStoreValues();
  },

  componentDidMount: function() {
    UiStore.addChangeListener(this._onChange);
    WeaponsStore.addChangeListener(this._onChange);
    WeaponsActions.fetchWeapons();
  },

  componentWillUnmount: function() {
    UiStore.removeChangeListener(this._onChange);
    WeaponsStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return(
      <div className='app-container'>
        <WeaponList
          selectedWeaponIds={this.state.selectedWeaponIds}
          weapons={this.state.weapons} />
        <WeaponCanvas weapons={this._getWeaponsBySelectedIds()}/>
      </div>
    );
  },

  _getWeaponsBySelectedIds: function() {
    return this.state.weapons
      .filter (weapon => this.state.selectedWeaponIds.includes(weapon.get('id')));
  },

  _onChange: function() {
    this.setState(getStoreValues());
  }
});

module.exports = Root;
