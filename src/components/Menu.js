import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabPanel, TabContext } from "@mui/lab";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const Menu = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      
      <Box sx={{ width: "70%", typography: "body1" }}>
        
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
              centered
            >
              <Tab label="Home" value="1" />
              <Tab label="Problems" value="2" />
              <Tab label="LeaderBoard" value="3" />

              <Button
                onClick={() => {
                  navigate("/");
                }}
              >
                signIn
              </Button>
            </Tabs>
          </Box>
          <TabPanel value="1">
            <Home />
          </TabPanel>
          <TabPanel value="2">
            <Home />
          </TabPanel>
          <TabPanel value="3">
            <Home />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default Menu;
