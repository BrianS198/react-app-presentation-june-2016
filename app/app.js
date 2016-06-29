const React = require('react');
const ReactDOM = require('react-dom');
const WeaponViewer = require('components/weapon_viewer');
const __styles = require('theme/main.scss');

const appContainer = document.getElementById('app');

ReactDOM.render(<WeaponViewer />, appContainer);
