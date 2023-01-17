import styled from "styled-components";
import { pseudoClasses } from "../staticData";
import { ElementsProeprties, objectChangeToCssFormate } from "./properties";

export const Div = styled.div`
    ${props =>
        pseudoClasses.map((item) => {
            return props[item.desktop] ?
                `${item.name} ${objectChangeToCssFormate(JSON.stringify(ElementsProeprties(item.desktop, props)))}`
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

export const P = styled.p`
 ${props =>
        pseudoClasses.map((item) => {
            return props[item.desktop] ?
                `${item.name} ${objectChangeToCssFormate(JSON.stringify(ElementsProeprties(item.desktop, props)))}`
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

export const Label = styled.label`
 ${props =>
        pseudoClasses.map((item) => {
            return props[item.desktop] ?
                `${item.name} ${objectChangeToCssFormate(JSON.stringify(ElementsProeprties(item.desktop, props)))}`
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

export const Span = styled.span`
 ${props =>
        pseudoClasses.map((item) => {
            return props[item.desktop] ?
                `${item.name} ${objectChangeToCssFormate(JSON.stringify(ElementsProeprties(item.desktop, props)))}`
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

export const I = styled.i`
 ${props =>
        pseudoClasses.map((item) => {
            return props[item.desktop] ?
                `${item.name} ${objectChangeToCssFormate(JSON.stringify(ElementsProeprties(item.desktop, props)))}`
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

export const H1 = styled.h1`
    ${props =>
        pseudoClasses.map((item) => {
            return props[item.desktop] ?
                `${item.name} ${objectChangeToCssFormate(JSON.stringify(ElementsProeprties(item.desktop, props)))}`
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

export const H2 = styled.h2`
    ${props =>
        pseudoClasses.map((item) => {
            return props[item.desktop] ?
                `${item.name} ${objectChangeToCssFormate(JSON.stringify(ElementsProeprties(item.desktop, props)))}`
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

export const H3 = styled.h3`
    ${props =>
        pseudoClasses.map((item) => {
            return props[item.desktop] ?
                `${item.name} ${objectChangeToCssFormate(JSON.stringify(ElementsProeprties(item.desktop, props)))}`
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

export const H4 = styled.h4`
    ${props =>
        pseudoClasses.map((item) => {
            return props[item.desktop] ?
                `${item.name} ${objectChangeToCssFormate(JSON.stringify(ElementsProeprties(item.desktop, props)))}`
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

export const H5 = styled.h5`
    ${props =>
        pseudoClasses.map((item) => {
            return props[item.desktop] ?
                `${item.name} ${objectChangeToCssFormate(JSON.stringify(ElementsProeprties(item.desktop, props)))}`
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

export const H6 = styled.h6`
    ${props =>
        pseudoClasses.map((item) => {
            return props[item.desktop] ?
                `${item.name} ${objectChangeToCssFormate(JSON.stringify(ElementsProeprties(item.desktop, props)))}`
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

export const Input = styled.input`
 ${props =>
        pseudoClasses.map((item) => {
            return props[item.desktop] ?
                `${item.name} ${objectChangeToCssFormate(JSON.stringify(ElementsProeprties(item.desktop, props)))}`
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

export const Img = styled.img`
 ${props =>
        pseudoClasses.map((item) => {
            return props[item.desktop] ?
                `${item.name} ${objectChangeToCssFormate(JSON.stringify(ElementsProeprties(item.desktop, props)))}`
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