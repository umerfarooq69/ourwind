// 1) CSS
// 2) Hover
// 3) Focus
// 4) Hover parent and change child css
// 5) Focus parent and change child css


// =================================================================
// ==========================ADD CSS================================

// SIMPLE CSS JUST USE (className="Your CSS")
// <Div className="bg[#333] color[#fff] border[1px_solid_#fff]"></Div>


// =================================================================
// ==========================PARENT TO CHILD HOVER EFFECTS==========

// FOR HOVER JUST USE (hover="Hover Css")
// <Div className='bg[#fff] color[#000] border[1px_solid_#ddd]' hover="bg[#333] color[#fff] border[1px_solid_#fff]"></Div>

// IF YOU WANT TO HOVER ON PARENT AND APPLY CSS ON CHILD USE THIS METHODS.
// <Div child-hover="child1-css child2-css"></Div>

// 1) ADD ATTRIBUTE ON PARENT (child-hover="anyName") IF THERE IS MULTIPLE CHILD AND YOU WANT TO ADD
// DIFFERENT CSS ON EACH CHILD USE space BETWEEN NAMES FOR EXAMPLE( child-hover="anyName1 anyName2 any-name3")

// 2) ADD (className) ON CHILD ELEMENT YOU WANT TO APPLY CSS WHEN HOVER ON PARENT.
// BUT THE (className) WILL BE THE SAME AS VALUES OF (child-hover) FOR EXAMPLE

// <Div child-hover="child1-css child2-css">
//     <P className='child1-css'></P>
//     <P className='child2-css'></P>
//     <P></P>
//     <P></P>
//     <P></P>
// </Div>

// 3) USE THE SAME NAMES AS A ATTRIBUTE ON CHILD ELEMENTS AND WRITE CSS IN IT. FOR EXAMPLE
// THAT IS THE COMPLETE EXAMPLE

// <Div child-hover="child1-css child2-css">
//     <P className='child1-css' child1-css="bg[#333] color[#fff]"></P>
//     <P className='child2-css' child1-css="bg[#333] color[#fff]"></P>
//     <P></P>
//     <P className='child1-css'></P>
//     <P></P>
// </DIV>


// =================================================================
// ===========================FOCUS EFFECTS=========================

//  FOR HOVER JUST USE (hover="Hover Css")
//  <Div child-focus="child1-css child2-css"></Div>

//  IF YOU WANT TO HOVER ON PARENT AND APPLY CSS ON CHILD USE THIS METHODS.

//  1) ADD ATTRIBUTE ON PARENT (child-focus="anyName") IF THERE IS MULTIPLE CHILD AND YOU WANT TO ADD
//  DIFFERENT CSS ON EACH CHILD USE space BETWEEN NAMES FOR EXAMPLE( child-focus="anyName1 anyName2 any-name3")

//  2) ADD (className) ON CHILD ELEMENT YOU WANT TO APPLY CSS WHEN HOVER ON PARENT.
//  BUT THE (className) WILL BE THE SAME AS VALUES OF (child-focus) FOR EXAMPLE

//  <Div child-focus="child1-css child2-css">
//      <P className='child1-css'></P>
//      <P className='child2-css'></P>
//      <P></P>
//      <P></P>
//      <P></P>
//  </Div>

// 3) USE THE SAME NAMES AS A ATTRIBUTE ON CHILD ELEMENTS AND WRITE CSS IN IT. FOR EXAMPLE
// THAT IS THE COMPLETE EXAMPLE

// <Div child-focus="child1-css child2-css">
//     <P className='child1-css' child1-css="bg[#333] color[#fff]"></P>
//     <P className='child2-css' child1-css="bg[#333] color[#fff]"></P>
//     <P></P>
//     <P className='child1-css'></P>
//     <P></P>
// </DIV>
