const React = require('react');
const {List, fromJS} = require('immutable');
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

const Root = React.createClass({
  render: function() {
    return(
      <div className='app-container'>
        <WeaponList
          selectedWeapon='1'
          weaponList={DUMMY_WEAPONS} />
        <WeaponCanvas weapons={List()}/>
      </div>
    );
  }
});

module.exports = Root;
