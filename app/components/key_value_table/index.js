const React = require('react');
const ImmutablePropTypes = require('react-immutable-proptypes');
const __styles = require('./key_value_table.scss');

const KeyValueTable = React.createClass({
  propTypes: {
    data: ImmutablePropTypes.mapContains({
      label: React.PropTypes.string,
      value: React.PropTypes.string
    }).isRequired
  },

  render: function() {
    return (
      <div className='key-value-table'>
        {this._renderRows()}
      </div>
    );
  },

  _renderRows: function() {
    return this.props.data.map(item => {
      return (
        <div className='row'>
          <div className='label'>{item.get('label')}</div>
          <div className='value'>{item.get('value')}</div>
        </div>
      );
    }).toArray();
  }
});

module.exports = KeyValueTable;
