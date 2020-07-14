import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import omit from "lodash/omit";

import "./index.css";

const requiredMark = (isRequired) => {
  return isRequired ? <span id="required-mark">&nbsp;*</span> : null;
};

const InputComponents = (props) => {
  const { label, required } = props;
  return (
    <div className="rc-input">
      <label>
        {label}
        {requiredMark(required)}
      </label>
      <Input {...omit(props, "label", "required")} />
    </div>
  );
};

InputComponents.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
};

export default InputComponents;
