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
  { key: 'font-s', property: 'font-size' },
  { key: 'font-w', property: 'font-weight' },
  { key: 'font-f', property: 'font-family' },
  { key: 'text-a', property: 'text-align' },
  { key: 'text-d', property: 'text-decoration' },
  { key: 'text-t', property: 'text-transform' },
  { key: 'leading', property: 'line-height' },
  { key: 'letter-s', property: 'letter-spacing' },

  // Box-shadow
  { key: 'box-s', property: 'box-shadow' },

  // Outline Properties
  { key: 'outline', property: 'outline' },
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

  // Image Properties
  { key: 'object-f', property: 'object-fit' },

]

// Pseudo Elements
export let pseudoElements = [
  { name: '&::after', desktop: 'after', md: 'md-after', sm: 'sm-after' },
  { name: '&::before', desktop: 'before', md: 'md-before', sm: 'sm-before' },
  { name: '&::first-line ', desktop: 'firstLine', md: 'md-firstLine', sm: 'sm-firstLine' },
  { name: '&::first-letter', desktop: 'firstLetter', md: 'md-firstLetter', sm: 'sm-firstLetter' },
  { name: '&::backdrop', desktop: 'backdrop', md: 'md-backdrop', sm: 'sm-backdrop' },
  { name: '&::file-selector-button', desktop: 'fileSelectorButton', md: 'md-fileSelectorButton', sm: 'sm-fileSelectorButton' },
  { name: '&::grammar-error', desktop: 'grammarError', md: 'md-grammarError', sm: 'sm-grammarError' },
  { name: '&::marker', desktop: 'marker', md: 'md-marker', sm: 'sm-marker' },
  { name: '&::placeholder', desktop: 'place-holder', md: 'md-placeholder', sm: 'sm-placeholder' },
  { name: '&::selection', desktop: 'selection', md: 'md-selection', sm: 'sm-selection' },
  { name: '&::target-text', desktop: 'targetText', md: 'md-targetText', sm: 'sm-targetText' },
  { name: '&::-webkit-scrollbar', desktop: 'scrollbar', md: 'md-scrollbar', sm: 'sm-scrollbar' },
  { name: '&::-webkit-scrollbar-track', desktop: 'scrollbarTrack', md: 'md-scrollbarTrack', sm: 'sm-scrollbarTrack' },
  { name: '&::-webkit-scrollbar-thumb', desktop: 'scrollbar-thumb', md: 'md-scrollbar-thumb', sm: 'sm-scrollbar-thumb' },
  { name: '&::-webkit-scrollbar-thumb:hover', desktop: 'scrollbarHover', md: 'md-scrollbarHover', sm: 'sm-scrollbarHover' },
]

// Pseudo Classes
export let pseudoClasses = [
  { name: '', desktop: 'className', md: 'md', sm: 'sm' },
  { name: '&:focus', desktop: 'focus', md: 'md-focus', sm: 'sm-focus' },
  { name: '&:hover', desktop: 'child-hover', md: 'md-child-hover', sm: 'sm-child-hover' },
  { name: '&:hover', desktop: 'hover', md: 'md-hover', sm: 'sm-hover' },
  { name: '&:link', desktop: 'link', md: 'md-link', sm: 'sm-link' },
  { name: '&:active', desktop: 'active', md: 'md-active', sm: 'sm-active' },
  { name: '&:visited', desktop: 'visited', md: 'md-visited', sm: 'sm-visited' },
  ...pseudoElements,
]

