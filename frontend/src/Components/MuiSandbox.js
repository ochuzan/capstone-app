import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Articles from "./Articles"
import Videos from './Videos';
import { yellow } from '@mui/material/colors';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: "white" }}>
          <TabList onChange={handleChange} centered aria-label="lab API tabs example">
            <Tab label="Educational Articles" value="1" />
            <Tab label="Educational Videos" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><Articles /></TabPanel>
        <TabPanel value="2"><Videos /></TabPanel>
      </TabContext>
    </Box>
  );
}
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

// export default function CenteredTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
//       <Tabs value={value} onChange={handleChange} centered>
//         <Tab label="Item One" />
//         <Tab label="Item Two" />
//         <Tab label="Item Three" />
//       </Tabs>
//     </Box>
//   );
// }
