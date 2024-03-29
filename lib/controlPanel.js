"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@superset-ui/core");

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
var _default = {
  controlPanelSections: [{
    label: (0, _core.t)('Query'),
    expanded: true,
    controlSetRows: [['metrics'], ['adhoc_filters'], ['custom_filters'], ['groupby'], ['limit', 'timeseries_limit_metric'], [{
      name: 'order_desc',
      config: {
        type: 'CheckboxControl',
        label: (0, _core.t)('Sort Descending'),
        default: true,
        description: (0, _core.t)('Whether to sort descending or ascending')
      }
    }, {
      name: 'contribution',
      config: {
        type: 'CheckboxControl',
        label: (0, _core.t)('Contribution'),
        default: false,
        description: (0, _core.t)('Compute the contribution to the total')
      }
    }], ['row_limit', null]]
  }, {
    label: (0, _core.t)('Parameters'),
    expanded: false,
    controlSetRows: [[{
      name: 'significance_level',
      config: {
        type: 'TextControl',
        label: (0, _core.t)('Significance Level'),
        default: 0.05,
        description: (0, _core.t)('Threshold alpha level for determining significance')
      }
    }], [{
      name: 'pvalue_precision',
      config: {
        type: 'TextControl',
        label: (0, _core.t)('p-value precision'),
        default: 6,
        description: (0, _core.t)('Number of decimal places with which to display p-values')
      }
    }], [{
      name: 'liftvalue_precision',
      config: {
        type: 'TextControl',
        label: (0, _core.t)('Lift percent precision'),
        default: 4,
        description: (0, _core.t)('Number of decimal places with which to display lift values')
      }
    }]]
  }]
};
exports.default = _default;