export let cssProperties = [
    // Dimension Properties
    { key: 'w', property: 'width' },
    { key: 'min-w', property: 'min-width' },
    { key: 'max-w', property: 'max-width' },
    { key: 'h', property: 'height' },
    { key: 'min-h', property: 'min-height' },
    { key: 'max-h', property: 'max-height' },

    // Flexible Box Layout
    { key: 'display', property: 'display' },
    { key: 'grid-tc', property: 'grid-template-columns' },
    { key: 'gap', property: 'gap' },
    { key: 'row-gap', property: 'row-gap' },
    { key: 'align-i', property: 'align-items' },
    { key: 'align-c', property: 'align-content' },
    { key: 'align-s', property: 'align-self' },
    { key: 'justify-c', property: 'justify-content' },

    // Flex
    { key: 'f-basis', property: 'flex-basis' },
    { key: 'f-direction', property: 'flex-direction' },
    { key: 'f-flow', property: 'flex-flow' },
    { key: 'f-grow', property: 'flex-grow' },
    { key: 'f-shrink', property: 'flex-shrink' },
    { key: 'f-wrap', property: 'flex-wrap' },
    { key: 'order', property: 'order' },

    // Background Properties
    { key: 'bg', property: 'background' },
    { key: 'bg-attachment', property: 'background-attachment' },
    { key: 'bg-clip', property: 'background-clip' },
    { key: 'bg-color', property: 'background-color' },
    { key: 'bg-image', property: 'background-image' },
    { key: 'bg-origin', property: 'background-origin' },
    { key: 'bg-position', property: 'background-position' },
    { key: 'bg-repeat', property: 'background-repeat' },
    { key: 'bg-size', property: 'background-size' },
    { key: 'color', property: 'color' },

    // Border Properties
    { key: 'border', property: 'border' },
    { key: 'border-l', property: 'border-left' },
    { key: 'border-r', property: 'border-right' },
    { key: 'border-t', property: 'border-top' },
    { key: 'border-b', property: 'border-bottom' },
    { key: 'rounded', property: 'border-radius' },

    // Overflow
    { key: 'overflow', property: 'overflow' },
    { key: 'overflow-y', property: 'overflow-y' },
    { key: 'overflow-x', property: 'overflow-x' },

    // Padding & Margin
    { key: 'm', property: 'margin' },
    { key: 'p', property: 'padding' },

    // Postions
    { key: 'position', property: 'position' },
    { key: 'left', property: 'left' },
    { key: 'top', property: 'top' },
    { key: 'bottom', property: 'bottom' },
    { key: 'right', property: 'right' },

    // Text & Fonts
    { key: 'fz', property: 'font-size' },
    { key: 'fw', property: 'font-weight' },
    { key: 'ta', property: 'text-align' },
    { key: 'tt', property: 'text-transform' },
    { key: 'ff', property: 'font-family' },

    // Box-shadow
    { key: 'box-s', property: 'box-shadow' },

    // Outline Properties
    { key: 'ol', property: 'outline' },
    { key: 'ol-c', property: 'outline-color' },
    { key: 'ol-o', property: 'outline-offset' },
    { key: 'ol-s', property: 'outline-style' },
    { key: 'ol-w', property: 'outline-width' },

    // Transitions
    { key: 'transition', property: 'transition' },
    { key: 'transition-d', property: 'transition' },
    { key: 'transition-duration', property: 'transition' },
    { key: 'transition-p', property: 'transition' },
    { key: 'transition-t-f', property: 'transition' },

    // After & Before
    { key: 'content', property: 'content' },

]
