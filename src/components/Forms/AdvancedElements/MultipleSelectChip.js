import React,{useEffect} from "react";
import Card from "@mui/material/Card";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import assignee from "../../../data/fetch_assignee";
import axios from 'axios';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 175.5,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, assigneeInfo, theme,assignee,value) {
  return {
    fontWeight:
    assigneeInfo.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip({value}) {
  const theme = useTheme();
  const [assigneeInfo, setAssigneeInfo] = React.useState([]);
  const [assignee, setAssignee] =  React.useState([]);
  const [personName, setPersonName] = React.useState([]);
  useEffect(() => {
    const header= {
      "headers": {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      mode: 'no-cors'
    }

   axios.get("http://crm.softvalley.sveducrm.com/api/admin/base/assignee",header)

    .then(response => {       
        setAssignee(response.data);
        console.log({assignee})
    })
    .catch(err => {
        console.log(err);
    })
  },[])

 
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setAssigneeInfo(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          // borderRadius: "10px",
          p: "5px",
          mb: "5px",
          minWidth: 175.5 
          
        }}
      >
        <FormControl sx={{  minWidth: 175.5 }} size="small">
          <InputLabel id="demo-multiple-chip-label">{value}</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label={value} />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Card>
    </>
  );
}
