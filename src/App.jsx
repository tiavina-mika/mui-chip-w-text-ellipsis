import { makeStyles, Typography } from "@material-ui/core";
import "./styles.css";
import Chips from "./Chips";

const useStyles = makeStyles((theme) => ({
  appRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexWrap: "wrap",
    // padding: theme.spacing(0.5),
    minHeight: "100vh"
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#151515",
    height: 120
  },
  link: {
    textDecoration: "none",
    color: "#fff"
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.appRoot}>
      <Chips />
      <div className={classes.footer}>
        <a
          className={classes.link}
          href="https://tiavina-michael-ralainirina.herokuapp.com/"
        >
          <Typography>Tiavina Michael Ralainirina</Typography>
        </a>
      </div>
    </div>
  );
};

export default App;
