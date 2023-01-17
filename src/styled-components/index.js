import styled from "styled-components";
import { pseudoClasses, pseudoElements } from "../staticData";
import { ElementsProeprties } from "./properties";

export const Div = styled.div`
       ${props => ElementsProeprties('classes', props)}

       &:hover{
            ${props => ElementsProeprties('hover', props)}
        }

       &:focus{
            ${props => ElementsProeprties('focus', props)}
       }

       &:active{
            ${props => ElementsProeprties('active', props)}
       }

       &:after{
            ${props => ElementsProeprties('after', props)}
       }

       &:before{
            ${props => ElementsProeprties('before', props)}
       }

       &::-webkit-scrollbar {
            ${props => ElementsProeprties('scrollbar', props)}
        }

       &::-webkit-scrollbar-track {
        ${props => ElementsProeprties('scrollbarTrack', props)}
       }

       &::-webkit-scrollbar-thumb {
        ${props => ElementsProeprties('scrollbarThumb', props)}
       }

       &::-webkit-scrollbar-thumb:hover {
        ${props => ElementsProeprties('scrollbarHover', props)}
       }

       @media screen {
            @media (min-width: 767px) and (max-width: 1200px) {

                ${props => ElementsProeprties('md', props)}

                &:hover{
                    ${props => ElementsProeprties('md-hover', props)}
                }

                &:focus{
                    ${props => ElementsProeprties('md-focus', props)}
                }

                &:active{
                    ${props => ElementsProeprties('md-active', props)}
                }

                &:after{
                    ${props => ElementsProeprties('md-after', props)}
                }

                &:before{
                    ${props => ElementsProeprties('md-before', props)}
                }
            }
        }

        @media screen {
            @media (min-width: 320px) and (max-width: 767px) {

                ${props => ElementsProeprties('sm', props)}

                &:hover{
                    ${props => ElementsProeprties('sm-hover', props)}
                }

                &:focus{
                    ${props => ElementsProeprties('sm-focus', props)}
                }

                &:active{
                    ${props => ElementsProeprties('sm-active', props)}
                }

                &:after{
                    ${props => ElementsProeprties('sm-after', props)}
                }

                &:before{
                    ${props => ElementsProeprties('sm-before', props)}
                }
            }
        }
`;

export const P = styled.p`
       ${props => ElementsProeprties('classes', props)}

       &:hover{
            ${props => ElementsProeprties('hover', props)}
        }

       &:focus{
            ${props => ElementsProeprties('focus', props)}
       }

       &:active{
            ${props => ElementsProeprties('active', props)}
       }

       &:after{
            ${props => ElementsProeprties('after', props)}
       }

       &:before{
            ${props => ElementsProeprties('before', props)}
       }

       &::-webkit-scrollbar {
            ${props => ElementsProeprties('scrollbar', props)}
        }

       &::-webkit-scrollbar-track {
        ${props => ElementsProeprties('scrollbarTrack', props)}
       }

       &::-webkit-scrollbar-thumb {
        ${props => ElementsProeprties('scrollbarThumb', props)}
       }

       &::-webkit-scrollbar-thumb:hover {
        ${props => ElementsProeprties('scrollbarHover', props)}
       }

       @media screen {
            @media (min-width: 767px) and (max-width: 1200px) {

                ${props => ElementsProeprties('md', props)}

                &:hover{
                    ${props => ElementsProeprties('md-hover', props)}
                }

                &:focus{
                    ${props => ElementsProeprties('md-focus', props)}
                }

                &:active{
                    ${props => ElementsProeprties('md-active', props)}
                }

                &:after{
                    ${props => ElementsProeprties('md-after', props)}
                }

                &:before{
                    ${props => ElementsProeprties('md-before', props)}
                }
            }
        }

        @media screen {
            @media (min-width: 320px) and (max-width: 767px) {

                ${props => ElementsProeprties('sm', props)}

                &:hover{
                    ${props => ElementsProeprties('sm-hover', props)}
                }

                &:focus{
                    ${props => ElementsProeprties('sm-focus', props)}
                }

                &:active{
                    ${props => ElementsProeprties('sm-active', props)}
                }

                &:after{
                    ${props => ElementsProeprties('sm-after', props)}
                }

                &:before{
                    ${props => ElementsProeprties('sm-before', props)}
                }
            }
        }
`;

export const H1 = styled.h1`
    ${props =>
        pseudoClasses.map((item) => {
            // console.log(item.name, ElementsProeprties(item.value, props))
            return props[item.value] ? ElementsProeprties(item.value, props) : null
        })
    }

    ${props =>
        pseudoElements.map((item) => {
            // console.log(item.name, ElementsProeprties(item.value, props))
            return props[item.value] ? ElementsProeprties(item.value, props) : null
        })
    }
`;
