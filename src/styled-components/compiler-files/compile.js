import { DrawCssObject } from './creating-css'
import { objectChangeToCssFormate } from './helpers';

// Main Function
export const ElementsProeprties = (cssFor, props) => {
    return objectChangeToCssFormate(JSON.stringify(props[cssFor] && DrawCssObject(cssFor, props)));
}
