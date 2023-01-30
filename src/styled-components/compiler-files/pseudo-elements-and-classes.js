import { ElementsProeprties } from "./compile";

// When focus Or hover on parent and change child css
export const parentChangeChildCss = (screen, props) => {
    let { children } = props

    if (props && props['child-hover'] && children && (children || children.length > 0)) {
        let getChildHoverName = props['child-hover'].split(' ');
        let css = ''

        // IF THERE IS MULTIPLE CHILDREN
        if (children && children.length > 1) {

            for (let i = 0; i < getChildHoverName.length; i++) {
                for (let v = 0; v < children.length; v++) {
                    if (children[v].props[getChildHoverName[i]]) {
                        css += ` ${screen.name} { .${getChildHoverName[i]} ${ElementsProeprties(getChildHoverName[i], children[v].props)} }`;
                    }
                }
            }

            return css;
        } else {
            for (let i = 0; i < getChildHoverName.length; i++) {
                if (children.props[getChildHoverName[i]]) {
                    css = `${screen.name} { .${getChildHoverName[i]} ${ElementsProeprties(getChildHoverName[i], children.props)}  }`;
                }
            }

            return css;
        }
    }
}