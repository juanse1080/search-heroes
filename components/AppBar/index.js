import MuiBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Image from "next/image";

const AppBar = () => {
  return (
    <MuiBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Image
          src="/MarvelLogo.svg"
          alt="marvel-icon"
          height="32"
          width="100%"
        />
      </Toolbar>
    </MuiBar>
  );
};

export default AppBar;
