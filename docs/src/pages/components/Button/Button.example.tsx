import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { Button } from "@cmsgov/design-system";

const ButtonExample: FunctionComponent = () => {
  return (
    <div className="button-example">
      <table cellSpacing={0}>
        <thead>
          <tr>
            <th colSpan={4}>Primary AKA Big buttons</th>
          </tr>
        </thead>
        <tr>
          <th></th>
          <th>Sketch Name</th>
          <th>Design System Name</th>
          <th>Attributes</th>
        </tr>
        <tr>
          <td>
            <Button className="ds-c-button--primary" size="big">
              Button
            </Button>
          </td>
          <td>Primary Teal</td>
          <td>Primary Button, Big Size</td>
          <td>
            <code>
              className=&quot;ds-c-button--primary&quot; size=&quot;big&quot;
            </code>
          </td>
        </tr>
        <tr>
          <td>
            <Button className="ds-c-button--primary-alt" size="big">
              Button
            </Button>
          </td>
          <td>Primary Blue</td>
          <td>Primary Alt Button, Big Size</td>
          <td>
            <code>
              className=&quot;ds-c-button--primary-alt&quot;
              size=&quot;big&quot;
            </code>
          </td>
        </tr>
        <tr className="ds-base--inverse">
          <td>
            <Button size="big">Button</Button>
          </td>
          <td>Primary White</td>
          <td>Default Button, Big Size</td>
          <td>
            <code>size=&quot;big&quot;</code>
          </td>
        </tr>
        <tr>
          <td>
            <Button size="big" disabled>
              Button
            </Button>
          </td>
          <td>Disabled</td>
          <td>Any disabled big button</td>
          <td>
            <code>size=&quot;big&quot; disabled=true</code>
          </td>
        </tr>
      </table>

      <table cellSpacing={0}>
        <thead>
          <tr>
            <th colSpan={4}>Secondary Buttons</th>
          </tr>
        </thead>
        <tr>
          <th></th>
          <th>Sketch Name</th>
          <th>Design System Name</th>
          <th>Attributes</th>
        </tr>
        <tr>
          <td>
            <Button className="ds-c-button--primary">Button</Button>
          </td>
          <td>Secondary Teal</td>
          <td>Primary Button</td>
          <td>
            <code>className=&quot;ds-c-button--primary&quot;</code>
          </td>
        </tr>
        <tr>
          <td>
            <Button className="ds-c-button--primary-alt">Button</Button>
          </td>
          <td>Secondary Blue</td>
          <td>Primary Alt Button</td>
          <td>
            <code>className=&quot;ds-c-button--primary-alt&quot;</code>
          </td>
        </tr>
        <tr>
          <td>
            <Button className="ds-c-button--primary-outline">Button</Button>
          </td>
          <td>Secondary Teal outline</td>
          <td>Primary Outline Button</td>
          <td>
            <code>className=&quot;ds-c-button--primary-outline&quot;</code>
          </td>
        </tr>
        <tr>
          <td>
            <Button className="ds-c-button--primary-alt-outline">Button</Button>
          </td>
          <td>Secondary Blue outline</td>
          <td>Primary Alt Outline Button</td>
          <td>
            <code>className=&quot;ds-c-button--primary-alt-outline&quot;</code>
          </td>
        </tr>
        <tr className="ds-base--inverse">
          <td>
            <Button>Button</Button>
          </td>
          <td>Secondary White</td>
          <td>Default Button</td>
          <td>none</td>
        </tr>
        <tr>
          <td>
            <Button disabled>Button</Button>
          </td>
          <td>Disabled</td>
          <td>Any disabled button</td>
          <td>
            <code>disabled=true</code>
          </td>
        </tr>
      </table>

      <table cellSpacing={0}>
        <thead>
          <tr>
            <th colSpan={4}>Link Buttons</th>
          </tr>
        </thead>
        <tr>
          <th></th>
          <th>Sketch Name</th>
          <th>Design System Name</th>
          <th>Attributes</th>
        </tr>
        <tr>
          <td>
            <Button className="ds-c-button--primary ds-c-button--transparent">
              Button
            </Button>
          </td>
          <td>Teal link</td>
          <td>Primary Transparent Button</td>
          <td>
            <code>
              className=&quot;ds-c-button--primary
              ds-c-button--transparent&quot;
            </code>
          </td>
        </tr>
        <tr>
          <td>
            <Button className="ds-c-button--primary-alt ds-c-button--transparent">
              Button
            </Button>
          </td>
          <td>Blue link</td>
          <td>Primary Alt Transparent Button</td>
          <td>
            <code>
              className=&quot;ds-c-button--primary-alt
              ds-c-button--transparent&quot;
            </code>
          </td>
        </tr>
        <tr className="ds-base--inverse">
          <td>
            <Button className="ds-c-button--inverse ds-c-button--transparent">
              Button
            </Button>
          </td>
          <td>Link on dark background</td>
          <td>Inverse Transparent Button</td>
          <td>
            <code>
              className=&quot;ds-c-button--inverse
              ds-c-button--transparent&quot;
            </code>
          </td>
        </tr>
      </table>
    </div>
  );
};

ReactDOM.render(<ButtonExample />, document.getElementById("js-example"));
