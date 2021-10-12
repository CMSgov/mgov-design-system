import { Tooltip } from '@design-system';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <>
    <div className="ds-u-display--flex ds-u-align-items--center ds-u-margin-y--2">
      <div className="ds-u-margin--0">
        {'Tooltip with '}
        <Tooltip
          className="ds-c-tooltip__trigger-link"
          component="a"
          title="Tooltip trigger uses <a> for the trigger, styled with dotted underline"
        >
          inline trigger
        </Tooltip>
      </div>
    </div>
    <div className="example--inverse example--wrapper">
      <div className="">
        <div className="ds-u-margin--0">
          {'Inverse tooltip with '}
          <Tooltip
            className="ds-c-tooltip__trigger-link"
            component="a"
            title="Tooltip trigger uses <a> for the trigger, styled with dotted underline"
            inversed
          >
            inline trigger
          </Tooltip>
        </div>
      </div>
    </div>
  </>,
  document.getElementById('js-example')
);
