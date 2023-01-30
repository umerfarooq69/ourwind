// ****************************************
// -THERE ARE THREE IF() CHECK IN DrawCssObject()
// 1) FIRST CHECK IS CHECKING IF CLASS EXISTS
// 2) SECOND CHECK IS CHECKING FOR CORRECT SYNTAX
// 3) THIRD CHECK IS CHECKING FOR IF THERE IS ANY SPACE DECLARE IN CSS VALUE USING (_) AND THEN IT WIL REPLACE WITH SPACE
// ****************************************

// ****************************************
// -THERE ARE THREE MAPS FUNCTION USING IN DrawCssObject(). FIRST TWO MAPS FUCNTION ARE NESTED
// 1) FIRST MAP GETTING ALL CLASSES
// 2) SECOND MAP IS CREATING A (CSS) OBJECT ARRAY
// 3) THE THIRD MAP IS DESTRUCTURE ALL THE OBJECTS FROM THE ARRAY
// ****************************************

import { cssProperties } from "../css-properties.js"

export const DrawCssObject = (cssFor, props) => {
    // Variables Decleration
    let css = null;
    let cssObject = [];

    // If Props exist
    const classes = props && props[cssFor] ? props[cssFor] : null;

    // Check If Classes Exist
    if (classes) {

        // Spliting all classes
        const get_all_classes = classes ? classes.split(' ') : [];

        // Map for Classes
        get_all_classes && get_all_classes.length > 0 && get_all_classes.map((items) => {

            // Check if there is syntax error : syntax = cssPropertyName[css_property_values]
            if (items && items.includes('[') && items.includes('[') && items.includes(']')) {

                let css_property_names = items.split('[')[0]; // CSS Property Example(Css Porperty: cssValue === margin: 10px)
                let css_property_values = items.split('[')[1].replace(']', ''); // CSS Property Value Example(CssPorperty: cssValue === margin: 10px)

                // Adding spaces in css values
                if (css_property_values.includes('_')) { css_property_values = css_property_values.replace(/_/g, ' '); }

                // Checking valid Css Properties
                cssProperties.map((item) => {
                    return css_property_names === item.key ?
                        cssObject.push({ [item.property]: css_property_values })
                        :
                        null
                });

            } else {
                // if (!props[cssFor].search('  ')) {
                //     console.log(`Syntax Error: (Element: ${props.displayName}), (Attribute: ${cssFor}), (Css Property: ${items})`);
                // }
                return null
            }

            return null;
        });

        // Putting the css object into main object
        cssObject.map((item) => {
            css = { ...css, ...item };
            return null;
        });
    }

    return css;
}
