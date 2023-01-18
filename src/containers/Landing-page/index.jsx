import React from "react";
import { Div, H1, Href, Img } from "../../styled-components";
import Image from '../../logo.svg'

const LandingPage = () => {
    return (
        <Div classes="display[flex] gap[15px] m[10px_0px]" after="content['']" >
            <H1 classes='color[#333] border[1px_solid_#ddd] rounded[10px] w[calc(100%/4)] min-h[200px] bg[#f5f5f5] text-a[center]'>a</H1>
            <H1 classes='color[#333] border[1px_solid_#ddd] rounded[10px] w[calc(100%/4)] min-h[200px] bg[#f5f5f5] text-a[center]'>a</H1>
            <H1 classes='color[#333] border[1px_solid_#ddd] rounded[10px] w[calc(100%/4)] min-h[200px] bg[#f5f5f5] text-a[center]'>a</H1>
            <H1 classes='color[#333] border[1px_solid_#ddd] rounded[10px] w[calc(100%/4)] min-h[200px] bg[#f5f5f5] text-a[center]'>
                <Img src={Image} classes="w[100%]" />
                <Href href='#' classes="text-d[none] font-s[16px]">Link</Href>
            </H1>
        </Div >
    );
};

export default LandingPage;
