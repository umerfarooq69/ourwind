import styled from "styled-components";
import { pseudoClasses } from "../staticData";
import { ElementsProeprties, objectChangeToCssFormate, parentChangeChildCss, setAttributes } from "./properties";

// BLOCK ELEMENTS
export let Div = styled.div.attrs(props => ({ as: "div", displayName: 'Div', ...setAttributes(props) }))`
    ${props =>
        pseudoClasses.map((item) => {
            return props[item.desktop] ?
                item.desktop === 'child-hover' ?
                    parentChangeChildCss(item, props)
                    :
                    `${item.name} ${ElementsProeprties(item.desktop, props)}`
                : null
        })
    }

    @media screen and (min-width: 767px) and (max-width: 1200px) {
            ${props =>
        pseudoClasses.map((item) => {
            return props[item.md] ?
                `${item.name} ${objectChangeToCssFormate(JSON.stringify(ElementsProeprties(item.md, props)))}`
                : null
        })
    }
    }

    @media screen and (min-width: 1px) and (max-width: 767px) {
            ${props =>
        pseudoClasses.map((item) => {
            return props[item.sm] ?
                `${item.name} ${objectChangeToCssFormate(JSON.stringify(ElementsProeprties(item.sm, props)))}`
                : null
        })
    }
    }
`;

export const Main = styled(Div).attrs({ as: "main", displayName: 'Main' })``;

export const Nav = styled(Div).attrs({ as: "nav", displayName: 'Nav' })``;

export const P = styled(Div).attrs({ as: "p", displayName: 'P' })``;

export const H1 = styled(Div).attrs({ as: "h1", displayName: 'H1' })``;

export const H2 = styled(Div).attrs({ as: "h2", displayName: 'H2' })``;

export const H3 = styled(Div).attrs({ as: "h3", displayName: 'H3' })``;

export const H4 = styled(Div).attrs({ as: "h4", displayName: 'H4' })``;

export const H5 = styled(Div).attrs({ as: "h5", displayName: 'H5' })``;

export const H6 = styled(Div).attrs({ as: "h6", displayName: 'H6' })``;

export const Section = styled(Div).attrs({ as: "section", displayName: 'Section' })``;

export const Artical = styled(Div).attrs({ as: "artical", displayName: 'Artical' })``;

// INLINE ELEMENTS
export const Label = styled(Div).attrs({ as: "label", displayName: 'Label' })``;

export const Span = styled(Div).attrs({ as: "span", displayName: 'Span' })``;

export const I = styled(Div).attrs({ as: "i", displayName: 'I' })``;

export const B = styled(Div).attrs({ as: "b", displayName: 'B' })``;

export const Img = styled(Div).attrs({ as: "img", displayName: 'Img' })``;

export const Href = styled(Div).attrs({ as: "a", displayName: 'A' })``;

export const Button = styled(Div).attrs({ as: "button", displayName: 'Button' })``;

// INPUT FORM ELEMENTS
export const Form = styled(Div).attrs({ as: "form", displayName: 'Form' })``;

export const Input = styled(Div).attrs({ as: "input", displayName: 'Input' })``;

export const Select = styled(Div).attrs({ as: "select", displayName: 'Select' })``;

export const Options = styled(Div).attrs({ as: "options", displayName: 'Options' })``;

export const Textarea = styled(Div).attrs({ as: "textarea", displayName: 'Textarea' })``;

export const Legend = styled(Div).attrs({ as: "legend", displayName: 'Legend' })``;

export const Fieldset = styled(Div).attrs({ as: "fieldset", displayName: 'Fieldset' })``;
