import React from "react";
import { Divider } from "antd";

const Item = (props) => {
  const { history, match } = props;
  const { id } = match.params;

  return (
    <div>
      <input name="id" value={id} disabled />
      <Divider />
      Item Page
      <Divider type="vertical" />
      <span onClick={() => history.push("/home")}>go to home</span>
    </div>
  );
};

export default Item;
