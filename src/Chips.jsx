import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(0.5)
  },
  chip: {
    margin: theme.spacing(0.5)
  },
  closeIcon: {
    width: 13.5,
    height: 13.5,
    color: "rgba(0, 0, 0, 0.54)",
    marginLeft: 6
  }
}));

const StyledChip = withStyles({
  root: {
    maxWidth: 127,
    height: 32,
    background: "#F6F6F6",
    borderRadius: 4,
    padding: "0px 6px",
    fontWeight: 500,
    fontSize: 12,
    letterSpacing: 0.15
  },
  label: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
})(Chip);

const Chips = () => {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    {
      key: 2,
      label: "Long text here"
    },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" }
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <Paper className={classes.root}>
      {chipData.map((data) => {
        return (
          <Tooltip title={data.label}>
            <StyledChip
              size="small"
              key={data.key}
              label={data.label}
              onDelete={handleDelete(data)}
              className={classes.chip}
              deleteIcon={<CloseIcon className={classes.closeIcon} />}
            />
          </Tooltip>
        );
      })}
    </Paper>
  );
};

export default Chips;
