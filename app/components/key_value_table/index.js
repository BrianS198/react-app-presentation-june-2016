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
      <div class='key-value-table'>
        {this._renderRows()}
      </div>
    );
  },

  _renderRows: function() {
    return this.props.data.map(item => {
      return ([
        <div class='column-label'>{item.get('label')}</div>,
        <div class='column-value'>{item.get('value')}</div>
      ]);
    }).toArray();
  }
});

module.exports = KeyValueTable;
