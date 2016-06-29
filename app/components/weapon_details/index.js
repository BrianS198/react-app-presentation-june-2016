const React = require('react');
const ImmutablePropTypes = require('react-immutable-proptypes');
const __styles = require('./weapon_details.scss');

const WeaponDetails = React.createClass({
  propTypes: {
    weapon: ImmutablePropTypes.mapContains({
      attacks: ImmutablePropTypes.listOf(
        ImmutablePropTypes.mapContains({
          range: React.PropTypes.number,
          name: React.PropTypes.string,
          damage: React.PropTypes.number,
          description: React.PropTypes.string
        })
      ),
      name: React.PropTypes.string,
      description: React.PropTypes.string,
      strengthRequired: React.PropTypes.number,
      rarity: React.PropTypes.string
    })
  },

  render: function() {
    return <div className='weapon-details'></div>;
  }
});

module.exports = WeaponDetails;
