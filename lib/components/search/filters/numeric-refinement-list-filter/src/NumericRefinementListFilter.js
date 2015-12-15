var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var _ = require("lodash");
var classNames = require('classnames');
require("../styles/index.scss");
var core_1 = require("../../../../../core");
var NumericRefinementListFilter = (function (_super) {
    __extends(NumericRefinementListFilter, _super);
    function NumericRefinementListFilter() {
        _super.apply(this, arguments);
    }
    NumericRefinementListFilter.prototype.shouldCreateNewSearcher = function () {
        return true;
    };
    NumericRefinementListFilter.prototype.defineAccessor = function () {
        return new core_1.NumericOptionsAccessor(this.props.id, { id: this.props.id, field: this.props.field, options: this.props.options, title: this.props.title });
    };
    NumericRefinementListFilter.prototype.addFilter = function (option) {
        this.accessor.state = this.accessor.state.setValue(option);
        this.searchkit.performSearch();
    };
    NumericRefinementListFilter.prototype.isSelected = function (option) {
        var val = this.accessor.state.getValue();
        return val && val.key == option.key;
    };
    NumericRefinementListFilter.prototype.renderOption = function (option) {
        var optionClassName = classNames({
            "menu-list-options__item": true,
            "menu-list-option": true,
            "menu-list-option--checked": this.isSelected(option)
        });
        return (React.createElement(core_1.FastClick, {"handler": this.addFilter.bind(this, option), "key": option.key}, React.createElement("div", {"className": optionClassName}, React.createElement("div", {"className": "menu-list-option__text"}, this.translate(option.key)), React.createElement("div", {"className": "menu-list-option__count"}, option.doc_count))));
    };
    NumericRefinementListFilter.prototype.render = function () {
        var className = classNames((_a = {
                "menu-list": true
            },
            _a["filter--" + this.props.id] = true,
            _a
        ));
        return (React.createElement("div", {"className": className}, React.createElement("div", {"className": "menu-list__header"}, this.props.title), React.createElement("div", {"className": "menu-list-options"}, _.map(this.accessor.getBuckets(), this.renderOption.bind(this)))));
        var _a;
    };
    return NumericRefinementListFilter;
})(core_1.SearchkitComponent);
exports.NumericRefinementListFilter = NumericRefinementListFilter;
//# sourceMappingURL=NumericRefinementListFilter.js.map