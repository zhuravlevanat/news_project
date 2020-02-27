import { Box } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import React from "react";

const Spinner = () => (
    <Box  height='100vh' pb={25} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <LinearProgress color="primary"/>
        <LinearProgress color="primary"/>
    </Box>
);

export default  Spinner;