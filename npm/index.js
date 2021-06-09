'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var Wrapper = function (props) {
    var name = props.name;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            "hi, ",
            name),
        props.children));
};

module.exports = Wrapper;
