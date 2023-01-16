import styled from "styled-components";
import { blockAndInlineElementsProperties } from "./properties";

export const Div = styled.div`
       ${props => blockAndInlineElementsProperties('classes', props)}

       &:hover{
               ${props => blockAndInlineElementsProperties('hover', props)}
       }

       &:focus{
               ${props => blockAndInlineElementsProperties('focus', props)}
       }

       &:active{
               ${props => blockAndInlineElementsProperties('active', props)}
       }

       &:after{
               ${props => blockAndInlineElementsProperties('after', props)}
       }

       &:before{
               ${props => blockAndInlineElementsProperties('before', props)}
       }

       @media screen {
            @media (min-width: 767px) and (max-width: 1200px) {

                ${props => blockAndInlineElementsProperties('md', props)}

                &:hover{
                    ${props => blockAndInlineElementsProperties('md-hover', props)}
                }

                &:focus{
                    ${props => blockAndInlineElementsProperties('md-focus', props)}
                }

                &:active{
                    ${props => blockAndInlineElementsProperties('md-active', props)}
                }

                &:after{
                    ${props => blockAndInlineElementsProperties('md-after', props)}
                }

                &:before{
                    ${props => blockAndInlineElementsProperties('md-before', props)}
                }
            }
        }

        @media screen {
            @media (min-width: 320px) and (max-width: 767px) {

                ${props => blockAndInlineElementsProperties('sm', props)}

                &:hover{
                    ${props => blockAndInlineElementsProperties('sm-hover', props)}
                }

                &:focus{
                    ${props => blockAndInlineElementsProperties('sm-focus', props)}
                }

                &:active{
                    ${props => blockAndInlineElementsProperties('sm-active', props)}
                }

                &:after{
                    ${props => blockAndInlineElementsProperties('sm-after', props)}
                }

                &:before{
                    ${props => blockAndInlineElementsProperties('sm-before', props)}
                }
            }
        }
`;
