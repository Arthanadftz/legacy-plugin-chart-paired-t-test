"use strict";

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _TTestTable = _interopRequireWildcard(require("./TTestTable"));

require("./PairedTTest.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable react/no-array-index-key */
const propTypes = {
  alpha: _propTypes.default.number,
  className: _propTypes.default.string,
  data: _propTypes.default.objectOf(_TTestTable.dataPropType).isRequired,
  groups: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  liftValPrec: _propTypes.default.number,
  metrics: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  pValPrec: _propTypes.default.number
};
const defaultProps = {
  alpha: 0.05,
  className: '',
  liftValPrec: 4,
  pValPrec: 6
};

class PairedTTest extends _react.default.PureComponent {
  render() {
    const {
      className,
      metrics,
      groups,
      data,
      alpha,
      pValPrec,
      liftValPrec
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: `superset-legacy-chart-paired-t-test ${className}`
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "paired-ttest-table scrollbar-container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "scrollbar-content"
    }, metrics.map((metric, i) => /*#__PURE__*/_react.default.createElement(_TTestTable.default, {
      key: i,
      metric: metric,
      groups: groups,
      data: data[metric],
      alpha: alpha,
      pValPrec: Math.min(pValPrec, 32),
      liftValPrec: Math.min(liftValPrec, 32)
    })))));
  }

}

PairedTTest.propTypes = propTypes;
PairedTTest.defaultProps = defaultProps;
var _default = PairedTTest;
exports.default = _default;