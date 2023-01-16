import { cssProperties } from "../staticData.js"

const extractCss = (cssFor, props) => {
    // If Props exist
    const classes = props && props[cssFor] ? props[cssFor] : null

    // Spliting all classes
    const classesArray = classes ? classes.split(' ') : []

    // Variables Decleration
    let css = null
    let cssObject = []

    // Map for Classes
    classesArray && classesArray.length > 0 && classesArray.map((items) => {

        // Check if there is syntax error
        if (items && items.includes('-[') && items.includes('[') && items.includes(']')) {

            let cssObjectKey = items.split('-[')[0]
            let cssValue = items.split('[')[1].replace(']', '')

            // Adding spaces in css values
            if (cssValue.includes('_')) { cssValue = cssValue.replace(/_/g, ' '); }

            // Checking valid Css Properties
            cssProperties.map((item) => {
                return cssObjectKey === item.key ?
                    cssObject.push({ [item.property]: cssValue })
                    :
                    null
            })

        } else { return null }

        return null;
    })

    // Putting the css object into main object
    cssObject.map((item) => {
        css = { ...css, ...item };
        return null;
    });

    return css;
}

// Main Function
export const blockAndInlineElementsProperties = (cssFor, props) => {
    return { ...extractCss(cssFor, props) };
}
