const React = require('react');
const ImmutablePropTypes = require('react-immutable-proptypes');
const KeyValueTable = require('components/key_value_table');
const __styles = require('./weapon_details.scss');

const ATTACK_TITLE = 'Attacks';

const WeaponDetails = React.createClass({
  propTypes: {
    weapon: ImmutablePropTypes.mapContains({
      attacks: ImmutablePropTypes.listOf(
        ImmutablePropTypes.mapContains({
          range: ImmutablePropTypes.map,
          name: ImmutablePropTypes.map,
          damage: ImmutablePropTypes.map,
          description: ImmutablePropTypes.map
        })
      ),
      id: React.PropTypes.string,
      imagePath: React.PropTypes.string,
      name: React.PropTypes.string,
      stats: ImmutablePropTypes.mapContains({
        description: ImmutablePropTypes.map,
        strengthRequired: ImmutablePropTypes.map
      })
    })
  },

  render: function() {
    return (
      <div className='weapon-details-container'>
        <div
          className='header-image'
          style={this._getHeaderImageInlineStyles()}/>
        <section className='content'>
          <h1 className='title'>{this.props.weapon.get('name')}</h1>
          <KeyValueTable data={this.props.weapon.get('stats')}/>
          <h2 className='subtitle'>{ATTACK_TITLE}</h2>
          {this._renderAttackTables()}
        </section>
      </div>
    );
  },

  _renderAttackTables: function() {
    return this.props.weapon.get('attacks')
      .map(attackData => {
        const key = attackData.getIn(['name','value']);
        return <KeyValueTable data={attackData} key={key}/>;
      });
  },

  _getHeaderImageInlineStyles: function() {
    return {
      backgroundImage: `url(${this.props.weapon.get('imagePath')})`
    };
  },
});

module.exports = WeaponDetails;
