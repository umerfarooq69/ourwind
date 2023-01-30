// Formating for CSS
export const objectChangeToCssFormate = (object) => {
    return object.replace(/"([^"]+)":"([^"]+)"/g, '$1:$2;').replace(/;,/g, ';').replace(/;}/g, '}')
}
