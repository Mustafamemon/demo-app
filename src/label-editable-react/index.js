import React, { useState, useEffect, useRef } from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";

import style from "./css/editablelabel.module.css";

const renderTooltip = (props) => {
  return (
    <Tooltip id="button-tooltip" {...props}>
      Esc to Cancel
    </Tooltip>
  );
};
const EditableLabel = (props) => {
  const textInput = useRef(null);

  const [view, setView] = useState("label");
  const [value, setValue] = useState(props.initialValue);
  const [previous, setPrevious] = useState(props.initialoValue);
  const [hoverIcon, setHoverIcon] = useState(false);
  useEffect(() => {
    if (view === "text") {
      textInput.current.focus();
    }
  }, [view, textInput]);
  useEffect(() => {
    setValue(props.initialValue || "-");
  }, [props.initialValue]);
  const keyUp = (e) => {
    if (props.disableKeys === true) {
      return;
    }

    if (e.key === "Escape") {
      setValue(previous || "-");
      setView("label");
    } else if (e.key === "Enter") {
      setValue(e.target.value || "-");
      setPrevious(e.target.value || "-");
      setView("label");

      props.save(e.target.value);
    }
  };

  const renderLabel = () => {
    if (props.isWebsite)
      return (
        <a
          href="#d"
          onClick={(e) => {
            e.preventDefault();
            setView("text");
          }}
        >
          {value}
        </a>
      );
    else
      return (
        <span
          className={props.labelClass || ""}
          onClick={() => {
            setView("text");
          }}
        >
          {value}
        </span>
      );
  };

  const renderInput = () => {
    return (
      <div>
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <input
            type={props.inputType}
            value={value}
            ref={textInput}
            className={props.inputClass || ""}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onBlur={(e) => {
              console.log(view);
              setView("label");
              setPrevious(e.target.value);
              props.save(e.target.value);
            }}
            onKeyUp={keyUp}
          />
        </OverlayTrigger>
      </div>
    );
  };
  return (
    <div
      onMouseEnter={() => setHoverIcon(true)}
      onMouseLeave={() => setHoverIcon(false)}
    >
      <h5>
        {props.heading}
        <span className={cx(style.webicon, { "d-none": !props.isWebsite })}>
          <a href={value}>
            {
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                size="1x"
                className={style.fs10}
              />
            }
          </a>
        </span>

        <span
          className={cx(style.editicon, {
            [style.opacity0]: !hoverIcon,
            [style.opacity1]: hoverIcon,
            "d-none": !props.isEditIcon,
          })}
          onClick={() => {
            if (view === "label") {
              setView("text");
            }
          }}
        >
          {
            <FontAwesomeIcon
              icon={faPencilAlt}
              size="1x"
              className={style.fs10}
            />
          }
        </span>

        <div className={style.pt6}>
          <h6>{view === "label" ? renderLabel() : renderInput()}</h6>
        </div>
      </h5>
    </div>
  );
};

export default EditableLabel;

EditableLabel.propTypes = {
  initialValue: PropTypes.string.isRequired,
  save: PropTypes.func.isRequired,
  labelClass: PropTypes.string,
  inputClass: PropTypes.string,
  inputType: PropTypes.string,
  disableKeys: PropTypes.bool,
  heading: PropTypes.string,
  isWebsite: PropTypes.bool,
  isEditIcon: PropTypes.bool,
};
EditableLabel.defaultProps = {
  inputType: "text",
  disableKeys: false,
  heading: "",
  isWebsite: false,
  isEditIcon: true,
};
