// Set classname for each element if there parent has child-hover attr
var getClassNameForHover = [];
export const setAttributes = (props) => {
    let setClassName;

    if (props['child-hover']) {
        getClassNameForHover = props['child-hover'].split(' ');
    }

    getClassNameForHover.map((item) => {
        if (props[item]) { setClassName = { className: item }; }
        return null;
    });

    return { ...setClassName };
}