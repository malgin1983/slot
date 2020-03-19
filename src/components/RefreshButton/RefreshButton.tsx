import React from "react";
import Button from "@material-ui/core/Button";
import RefreshIcon from "@material-ui/icons/Refresh";
import { withStyles } from "@material-ui/core/styles";

interface RefreshButtonProps {
  color: string;
  buttonText: string;
  onHeandelClick?: () => void;
}

const RefreshButton: React.FC<RefreshButtonProps> = props => {
  const { color, buttonText } = props;
  const RefreshButton = withStyles({
    root: {
      color: color,
      padding: "9px 36px 9px 13px",
    },
  })(Button);
  const onHeandelClick = () => {
    console.log("Click");
  };
  return (
    <div>
      <RefreshButton
        variant="outlined"
        startIcon={<RefreshIcon />}
        onClick={onHeandelClick}
      >
        {buttonText}
      </RefreshButton>
    </div>
  );
};

export default RefreshButton;
