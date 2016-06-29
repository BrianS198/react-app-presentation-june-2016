const React = require('react');
const ReactDOM = require('react-dom');
const Root = require('components/root');
const __styles = require('theme/main.scss');

const appContainer = document.getElementById('app');

ReactDOM.render(<Root />, appContainer);
