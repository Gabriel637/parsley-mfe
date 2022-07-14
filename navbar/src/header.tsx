import * as React from "react";
import * as singleSpa from "single-spa";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import "./styles.css";

export default function Header() {
  const [value, setValue] = React.useState("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    switch (newValue) {
      case "0":
        singleSpa.navigateToUrl("/");
        break;
      case "1":
        singleSpa.navigateToUrl("/spotify");
        break;
      case "2":
        singleSpa.navigateToUrl("/app2");
        break;
      default:
        singleSpa.navigateToUrl("/");
        break;
    }
  };

  return (
    <Box className="container">
      LOGO
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="0" />
            <Tab label="Item Two" value="1" />
            <Tab label="Item Three" value="2" />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
