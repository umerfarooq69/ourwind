import React from "react";
import { Div } from "../../styled-components";

const LandingPage = () => {
    return (
        <Div classes={'display-[grid] grid-tc-[repeat(4,1fr)] gap-[20px]'} sm='grid-tc-[repeat(2,1fr)] row-gap-[20px] '>
            <Div classes='bg-[#fafafa] rounded-[10px] border-[1px_solid_#ddd] p-[20px] min-h-[100vh]' md='display-[none]' sm='min-h-[50vh]'>a</Div>
            <Div classes='bg-[#fafafa] rounded-[10px] border-[1px_solid_#ddd] p-[20px] min-h-[100vh] transition-[0.4s]' sm='min-h-[50vh]' hover={'bg-[#f5f5f5]'} > b</Div >
            <Div classes='bg-[#fafafa] rounded-[10px] border-[1px_solid_#ddd] p-[20px] min-h-[100vh]' sm='min-h-[50vh]' > c</Div >
            <Div classes='bg-[#fafafa] rounded-[10px] border-[1px_solid_#ddd] p-[20px] min-h-[100vh]' sm='min-h-[50vh]' > d</Div >
        </Div>
    );
};

export default LandingPage;
