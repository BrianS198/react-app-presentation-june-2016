const React = require('react');
const ReactDOM = require('react-dom');
const WeaponViewer = require('components/weapon_viewer');
const MainStyles = require('theme/main.scss');

const appContainer = document.getElementById('app-container');

ReactDOM.render(<WeaponViewer />, appContainer);
