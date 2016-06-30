const React = require('react');
const {List, fromJS} = require('immutable');
const UiStore = require('stores/ui');
const WeaponList = require('components/weapon_list');
const WeaponCanvas = require('components/weapon_canvas');
const __styles = require('./root.scss');

const DUMMY_WEAPONS = fromJS([
  {
    id: '0',
    name: 'The Destroyer'
  },
  {
    id: '1',
    name: 'Trump\'s Hair Dryer'
  },
  {
    id: '2',
    name: 'Cancer Stick'
  },
  {
    id: '3',
    name: 'Family Man'
  },
  {
    id: '5',
    name: 'Skeletor'
  },
  {
    id: '9',
    name: 'Leftovers'
  }
]);

function getStoreValues() {
  return {
    selectedWeapons: UiStore.getSelectedWeapons()
  };
}

const Root = React.createClass({
  getInitialState: function() {
    return getStoreValues();
  },

  componentDidMount: function() {
    UiStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    UiStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return(
      <div className='app-container'>
        <WeaponList
          selectedWeapons={this.state.selectedWeapons}
          weaponList={DUMMY_WEAPONS} />
        <WeaponCanvas weapons={List()}/>
      </div>
    );
  },

  _onChange: function() {
    this.setState(getStoreValues());
  }
});

module.exports = Root;
