import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { makeAuthen } from "../../actions/app";

const mapStateToProps = ({ app }) => {
  return {
    isAuthen: app.isAuthen,
  };
};

const mapDispatchToProp = (dispatch) => {
  return bindActionCreators({ makeAuthen }, dispatch);
};

const AppStatusComponent = (props) => {
  const { isAuthen, makeAuthen } = props;

  useEffect(() => {
    makeAuthen();
  }, [makeAuthen]);

  console.count("render:");

  return (
    <div className="app-status">{isAuthen ? "Authen" : "Unautherize"}</div>
  );
};

AppStatusComponent.propTypes = {
  isAuthen: PropTypes.bool.isRequired,
  makeAuthen: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProp)(AppStatusComponent);
