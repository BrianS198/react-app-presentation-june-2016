const React = require('react');
const ImmutablePropTypes = require('react-immutable-proptypes');
const WeaponDetails = require('components/weapon_details');
const __styles = require('./weapon_canvas.scss');

const NO_WEAPONS_MESSAGE = 'No weapons added yet. Click on a weapon to view its details.'

const WeaponCanvas = React.createClass({
  propTypes: {
    weapons: ImmutablePropTypes.list.isRequired
  },

  render: function() {
    const {weapons} = this.props;
    const renderFn = weapons.isEmpty() ? this._renderNoWeapons : this._renderWeapons;

    return <div className='weapon-canvas'>{renderFn(weapons)}</div>;
  },

  _renderNoWeapons: function() {
    return <h2 className='no-weapons-found-message'>{NO_WEAPONS_MESSAGE}</h2>;
  },

  _renderWeapons: function(weapons) {
    return weapons.map(weapon => <WeaponDetails key={weapon.get('id')} weapon={weapon} />);
  }

});

module.exports = WeaponCanvas;
