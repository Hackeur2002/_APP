import React from 'react';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Card } from 'flowbite-react';
import { Organisation } from '../../../NoSQL';
import orga from '../Images/orga.png'

function Description() {
    const [activeTab, setActiveTab] = React.useState("aide");
    const [value, setValue] = React.useState("");
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <div className='max-xl:px-14 px-20 mx-auto max-w-screen-xl text-center py-24 lg:py-15 sm:py-15'>
                <Tabs value={activeTab} className='z-0'>
                    <TabsHeader
                        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                        indicatorProps={{
                            className:
                                "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                        }}
                    >
                        <Tab
                            value="aide"
                            onClick={() => setActiveTab(value)}
                            className={activeTab === value ? "text-gray-900" : ""}
                        >
                            Qui peut m'aider
                        </Tab>
                        <Tab
                            value="affiche"
                            onClick={() => setActiveTab(value)}
                            className={activeTab === value ? "text-gray-900" : ""}
                        >
                            Tout afficher
                        </Tab>
                    </TabsHeader>
                    <TabsBody>
                        <TabPanel value="aide">
                            <div>
                                <div className="lg:grid lg:grid-cols-4 lg:gap-4 sm:flex sm:flex-col py-6">
                                    <div className="sm:pb-6 sm:w-full">
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Besoins en services</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Age"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </div>
                                    <div className="sm:pb-6 sm:w-full">
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Secteurs</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Age"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </div>
                                    <div className="sm:pb-6 sm:w-full">
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Phase du projet</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Age"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </div>
                                    <div className="sm:pb-6 sm:w-full">
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Phase du projet</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Age"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </div>
                                </div>
                            </div>
                            
                        </TabPanel>
                        <TabPanel value="affiche">
                            <div className='px-20 mx-auto max-w-screen-xl text-center py-24 lg:py-15 sm:py-15'>
                                <div class="grid grid-cols-3 gap-4">
                                    {Organisation.map((o)=>(
                                        <Card
                                            className="max-w-sm z-auto text-left"
                                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                                            imgSrc={orga}
                                            key={o.id}
                                        >
                                            <h5 className="text-lg font-bold tracking-tight text-black dark:text-white">
                                                {o.nom}
                                            </h5>
                                            <p className="font-normal text-sm text-justify text-black dark:text-black">
                                                {o.description}
                                            </p>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </TabPanel>
                    </TabsBody>
                </Tabs>
                
            </div>
        </>
    );
}

export default Description;