const React = require('react');
const ImmutablePropTypes = require('react-immutable-proptypes');
const UiActions = require('actions/ui');
const __styles = require('./weapon_list.scss');

const NAV_TITLE = 'Lazer Dragon Brawlers'

const WeaponList = React.createClass({
  propTypes: {
    selectedWeapons: ImmutablePropTypes.list.isRequired,
    weaponList: ImmutablePropTypes.list.isRequired
  },

  render: function() {
    const {weaponList, selectedWeapon} = this.props;

    return (
      <nav className='weapon-list-container'>
        <h2 className='weapon-list-header'>{NAV_TITLE}</h2>
        <ul className='weapon-list'>
          {
            weaponList.map(weapon => {
              const weaponId = weapon.get('id');

              return (
                <li
                  key={weaponId}
                  className={this._getWeaponClassName(weaponId)}
                  onClick={() => this._toggleWeaponSelect(weaponId)}>
                  {weapon.get('name')}
                </li>
              );
            })
          }
        </ul>
      </nav>
    );
  },

  _getWeaponClassName: function(weaponId) {
    if(this.props.selectedWeapons.includes(weaponId)) {
      return 'active';
    }

    return null;
  },

  _toggleWeaponSelect: (weaponId) => {
    UiActions.toggleSelectedWeapon(weaponId);
  }
});

module.exports = WeaponList;
