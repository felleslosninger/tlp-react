"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[921],{"./packages/react/src/components/LinkList/LinkList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Inverted:()=>Inverted,Normal:()=>Normal,WithoutTitle:()=>WithoutTitle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LinkList_stories});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@digdir/design-system-react/dist/esm/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),ThrowMessageHelper=__webpack_require__("./packages/react/src/utils/helperFunctions/ThrowMessageHelper.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LinkList_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./packages/react/src/components/LinkList/LinkList.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LinkList_module.Z,options);const LinkList_LinkList_module=LinkList_module.Z&&LinkList_module.Z.locals?LinkList_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const LinkList=({inverted=!1,linkTitle=!1,headingLevel="h3",title,titleUrl,children})=>{const linkElements=react.Children.map(children,((child,index)=>react.isValidElement(child)&&child.type===esm.rU?(0,jsx_runtime.jsx)("li",{children:react.cloneElement(child,{...child.props,inverted})},index):((0,ThrowMessageHelper.N)("Only use Link components as children"),null))),[heading,setHeading]=(0,react.useState)(null);return(0,react.useEffect)((()=>{linkTitle?linkTitle?void 0===titleUrl||""===titleUrl?(0,ThrowMessageHelper.N)("Enter a valid url in the titleUrl prop"):setHeading((0,react.createElement)(headingLevel,{className:classnames_default()(LinkList_LinkList_module.heading)},(0,react.createElement)("a",{href:titleUrl,className:classnames_default()(inverted?LinkList_LinkList_module.inverted:LinkList_LinkList_module.linkTitle)},(0,react.createElement)("span",{className:classnames_default()(inverted?LinkList_LinkList_module.invertedSpan:LinkList_LinkList_module.insideLinkTxt)},title)))):setHeading(null):setHeading((0,react.createElement)(headingLevel,{className:classnames_default()(LinkList_LinkList_module.heading,LinkList_LinkList_module.regularTitle,inverted?LinkList_LinkList_module.invertedTitle:null)},title))}),[headingLevel,setHeading,linkTitle,title,titleUrl,inverted]),(0,jsx_runtime.jsxs)("div",{className:LinkList_LinkList_module.wrapper,children:[heading,(0,jsx_runtime.jsx)("ul",{className:classnames_default()(LinkList_LinkList_module.linkList),children:linkElements})]})};LinkList.displayName="LinkList";try{LinkList.displayName="LinkList",LinkList.__docgenInfo={description:"",displayName:"LinkList",props:{inverted:{defaultValue:{value:"false"},description:"",name:"inverted",required:!1,type:{name:"boolean"}},linkTitle:{defaultValue:{value:"false"},description:"",name:"linkTitle",required:!1,type:{name:"boolean"}},headingLevel:{defaultValue:{value:"h3"},description:"",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},titleUrl:{defaultValue:null,description:"",name:"titleUrl",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/LinkList/LinkList.tsx#LinkList"]={docgenInfo:LinkList.__docgenInfo,name:"LinkList",path:"packages/react/src/components/LinkList/LinkList.tsx#LinkList"})}catch(__react_docgen_typescript_loader_error){}const CHILDREN=[(0,jsx_runtime.jsx)(esm.rU,{href:"https://www.digdir.no/",children:"Arkitekturprinsipper"},1),(0,jsx_runtime.jsx)(esm.rU,{href:"https://www.digdir.no/",children:"Deling av data"},2),(0,jsx_runtime.jsx)(esm.rU,{href:"https://www.digdir.no/",children:"Informasjonsforvaltning"},3),(0,jsx_runtime.jsx)(esm.rU,{href:"https://www.digdir.no/",children:"Design"},4),(0,jsx_runtime.jsx)(esm.rU,{href:"https://www.digdir.no/",children:"Interne applikasjoner"},5)],LinkList_stories={title:"Components/LinkList",component:LinkList,tags:["autodocs"],argTypes:{inverted:{control:"boolean"},title:{control:"text"}},parameters:{layout:"centered",backgrounds:{default:"Light",values:[{name:"Dark",value:"#1E2B3C"},{name:"Light",value:"#00000"}]}}},Normal={args:{inverted:!1,title:"Tittel",linkTitle:!0,titleUrl:"#",children:CHILDREN},parameters:{layout:"centered"}},WithoutTitle={args:{children:CHILDREN},parameters:{layout:"centered"}},Inverted={args:{inverted:!0,title:"Inverted list",children:CHILDREN},parameters:{backgrounds:{default:"Dark"}}};Normal.parameters={...Normal.parameters,docs:{...Normal.parameters?.docs,source:{originalSource:"{\n  args: {\n    inverted: false,\n    title: 'Tittel',\n    linkTitle: true,\n    titleUrl: '#',\n    children: CHILDREN\n  },\n  parameters: {\n    layout: 'centered'\n  }\n}",...Normal.parameters?.docs?.source}}},WithoutTitle.parameters={...WithoutTitle.parameters,docs:{...WithoutTitle.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: CHILDREN\n  },\n  parameters: {\n    layout: 'centered'\n  }\n}",...WithoutTitle.parameters?.docs?.source}}},Inverted.parameters={...Inverted.parameters,docs:{...Inverted.parameters?.docs,source:{originalSource:"{\n  args: {\n    inverted: true,\n    title: 'Inverted list',\n    children: CHILDREN\n  },\n  parameters: {\n    backgrounds: {\n      default: 'Dark'\n    }\n  }\n}",...Inverted.parameters?.docs?.source}}};const __namedExportsOrder=["Normal","WithoutTitle","Inverted"]},"./packages/react/src/utils/helperFunctions/ThrowMessageHelper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>errorMessage});const errorMessage=message=>{throw Error(message)};try{errorMessage.displayName="errorMessage",errorMessage.__docgenInfo={description:"",displayName:"errorMessage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/utils/helperFunctions/ThrowMessageHelper.tsx#errorMessage"]={docgenInfo:errorMessage.__docgenInfo,name:"errorMessage",path:"packages/react/src/utils/helperFunctions/ThrowMessageHelper.tsx#errorMessage"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./packages/react/src/components/LinkList/LinkList.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".niIIUUNxO5w6wjzP1Urj {\n  --color-blue-link: rgba(0 98 186 / 1);\n  --color-blue-link-hover: rgba(0 78 149 / 1);\n  --color-neutral-white: rgba(255 255 255 / 1);\n  --color-neutral-grey: rgba(30 43 60 / 1);\n  --heading-font-size: 18px;\n}\n\n.uXBrlKr1Fi_fYD9o6ObL {\n  font-size: var(--heading-font-size);\n  font-weight: 500;\n  line-height: 130%;\n  margin: 0;\n}\n\n.GzEMirZmBsIhnHk2Chhr {\n  color: var(--color-blue-link);\n  text-decoration: none;\n  font-size: var(--heading-font-size);\n}\n\n.GzEMirZmBsIhnHk2Chhr:hover {\n  color: var(--color-blue-link-hover);\n}\n\n.bXjg9mpMrgwohVLXKDt5 {\n  border-bottom: 1px solid var(--color-blue-link);\n}\n\n.bXjg9mpMrgwohVLXKDt5:hover {\n  border-bottom: 1px solid var(--color-blue-link-hover);\n}\n\n.EsBbKqvb_VCllIxVHnR8 {\n  color: var(--color-neutral-white);\n  border-bottom: 1px solid var(--color-neutral-white);\n  font-size: var(--heading-font-size);\n}\n\n.EsBbKqvb_VCllIxVHnR8:hover {\n  border-bottom: none;\n}\n\n.xZig2ufTeftXVWWp25Gb {\n  font-size: var(--heading-font-size);\n  color: var(--color-neutral-grey);\n}\n\n.wi03Rc2QyBnmwMA7dubs {\n  margin-top: 17px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0;\n  gap: 16px;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  list-style: none;\n}\n\n.anqQovK5UkSznRlOuHuc {\n  color: var(--color-neutral-white);\n  text-decoration: none;\n}\n\n.Ip1hDlhS9uKZ9mGUaksk {\n  color: var(--color-neutral-white);\n}\n","",{version:3,sources:["webpack://./packages/react/src/components/LinkList/LinkList.module.css"],names:[],mappings:"AAAA;EACE,qCAAqC;EACrC,2CAA2C;EAC3C,4CAA4C;EAC5C,wCAAwC;EACxC,yBAAyB;AAC3B;;AAEA;EACE,mCAAmC;EACnC,gBAAgB;EAChB,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,6BAA6B;EAC7B,qBAAqB;EACrB,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,qDAAqD;AACvD;;AAEA;EACE,iCAAiC;EACjC,mDAAmD;EACnD,mCAAmC;AACrC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;EACnC,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,UAAU;EACV,SAAS;EACT,UAAU;EACV,QAAQ;EACR,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,iCAAiC;EACjC,qBAAqB;AACvB;;AAEA;EACE,iCAAiC;AACnC",sourcesContent:[".wrapper {\n  --color-blue-link: rgba(0 98 186 / 1);\n  --color-blue-link-hover: rgba(0 78 149 / 1);\n  --color-neutral-white: rgba(255 255 255 / 1);\n  --color-neutral-grey: rgba(30 43 60 / 1);\n  --heading-font-size: 18px;\n}\n\n.heading {\n  font-size: var(--heading-font-size);\n  font-weight: 500;\n  line-height: 130%;\n  margin: 0;\n}\n\n.linkTitle {\n  color: var(--color-blue-link);\n  text-decoration: none;\n  font-size: var(--heading-font-size);\n}\n\n.linkTitle:hover {\n  color: var(--color-blue-link-hover);\n}\n\n.insideLinkTxt {\n  border-bottom: 1px solid var(--color-blue-link);\n}\n\n.insideLinkTxt:hover {\n  border-bottom: 1px solid var(--color-blue-link-hover);\n}\n\n.invertedSpan {\n  color: var(--color-neutral-white);\n  border-bottom: 1px solid var(--color-neutral-white);\n  font-size: var(--heading-font-size);\n}\n\n.invertedSpan:hover {\n  border-bottom: none;\n}\n\n.regularTitle {\n  font-size: var(--heading-font-size);\n  color: var(--color-neutral-grey);\n}\n\n.linkList {\n  margin-top: 17px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0;\n  gap: 16px;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  list-style: none;\n}\n\n.inverted {\n  color: var(--color-neutral-white);\n  text-decoration: none;\n}\n\n.invertedTitle {\n  color: var(--color-neutral-white);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrapper:"niIIUUNxO5w6wjzP1Urj",heading:"uXBrlKr1Fi_fYD9o6ObL",linkTitle:"GzEMirZmBsIhnHk2Chhr",insideLinkTxt:"bXjg9mpMrgwohVLXKDt5",invertedSpan:"EsBbKqvb_VCllIxVHnR8",regularTitle:"xZig2ufTeftXVWWp25Gb",linkList:"wi03Rc2QyBnmwMA7dubs",inverted:"anqQovK5UkSznRlOuHuc",invertedTitle:"Ip1hDlhS9uKZ9mGUaksk"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);