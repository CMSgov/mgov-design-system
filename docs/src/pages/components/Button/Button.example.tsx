import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { Button } from "@cmsgov/design-system";

const ButtonExample: FunctionComponent = () => {
  return (
    <div className="button-example">
      <span className="ds-u-margin-right--1">
        <Button className="ds-c-button--primary">Primary</Button>
      </span>
      <span className="ds-u-margin-right--1">
        <Button className="ds-c-button--primary-alt">Secondary</Button>
      </span>
      <span className="ds-u-margin-right--1">
        <Button>Tertiary</Button>
      </span>
    </div>
  );
};

ReactDOM.render(<ButtonExample />, document.getElementById("js-example"));
