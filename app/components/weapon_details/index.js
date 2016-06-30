const React = require('react');
const ImmutablePropTypes = require('react-immutable-proptypes');
const KeyValueTable = require('components/key_value_table');
const {COLUMN_NAMES_BY_KEY} = require('constants/weapons');
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
      id: React.PropTypes.string,
      imagePath: React.PropTypes.string,
      name: React.PropTypes.string,
      stats: ImmutablePropTypes.map
    })
  },

  render: function() {
    return (
      <section className='weapon-details-container'>
        <h1>{this.props.weapon.get('name')}</h1>
        <KeyValueTable data={this.props.weapon.get('stats')}/>
      </section>
    );
  },
});

module.exports = WeaponDetails;
