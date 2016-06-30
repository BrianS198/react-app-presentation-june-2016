const React = require('react');
const ImmutablePropTypes = require('react-immutable-proptypes');
const UiActions = require('actions/ui');
const {SELECTED_SIZE_LIMIT} = require('constants/ui');
const __styles = require('./weapon_list.scss');

const NAV_TITLE = 'Lazer Dragon Brawlers'

const WeaponList = React.createClass({
  propTypes: {
    selectedWeaponIds: ImmutablePropTypes.list.isRequired,
    weapons: ImmutablePropTypes.list.isRequired
  },

  render: function() {
    const {weapons, selectedWeapon} = this.props;

    return (
      <nav className='weapon-list-container'>
        <h2 className='weapon-list-header'>{NAV_TITLE}</h2>
        <ul className='weapon-list'>
          {
            weapons.map(weapon => {
              const weaponId = weapon.get('id');

              return (
                <li
                  key={weaponId}
                  className={this._getWeaponClassName(weaponId)}
                  onClick={() => this._handleWeaponClick(weaponId)}>
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
    if(this.props.selectedWeaponIds.includes(weaponId)) {
      return 'active';
    }

    if(this.props.selectedWeaponIds.size === SELECTED_SIZE_LIMIT) {
      return 'disabled';
    }

    return null;
  },

  _handleWeaponClick: (weaponId) => {
    UiActions.toggleSelectedWeaponById(weaponId);
  }
});

module.exports = WeaponList;
