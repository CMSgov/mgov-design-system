import React from "react";
import ReactDOM from "react-dom";
import GlobalHeader from "@src/components/GlobalHeader";

ReactDOM.render(
  <div style={{ height: "200px" }}>
    <GlobalHeader
      actions={[
        {
          text: "Action1",
          callback: (): void => {
            alert("Action1 pressed");
          },
          props: {},
        },
        {
          text: "Action2",
          callback: (): void => {
            alert("Action2 pressed");
          },
          props: {},
        },
      ]}
    />
  </div>,
  document.getElementById("js-example")
);
