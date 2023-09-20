"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[287],{"./packages/react/src/components/FileCard/FileCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Normal:()=>Normal,Secondary:()=>Secondary,Tertiary:()=>Tertiary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FileCard_stories});__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),File=__webpack_require__("./node_modules/@navikt/aksel-icons/dist/react/esm/File.js"),Download=__webpack_require__("./node_modules/@navikt/aksel-icons/dist/react/esm/Download.js"),esm=__webpack_require__("./node_modules/@digdir/design-system-react/dist/esm/index.js"),useDeviceBreakpoints=__webpack_require__("./packages/react/src/hooks/useDeviceBreakpoints.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),FileCard_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./packages/react/src/components/FileCard/FileCard.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(FileCard_module.Z,options);const FileCard_FileCard_module=FileCard_module.Z&&FileCard_module.Z.locals?FileCard_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FileCard=({icon,heading,description,filePath,brand="primary",...rest})=>{const{isMobile}=(0,useDeviceBreakpoints.Z)();return(0,jsx_runtime.jsxs)("a",{className:classnames_default()(FileCard_FileCard_module.fileCard,FileCard_FileCard_module[brand],isMobile&&FileCard_FileCard_module.isMobile),href:filePath,download:!0,...rest,children:[(0,jsx_runtime.jsx)("div",{className:classnames_default()(FileCard_FileCard_module.fileIcon),children:icon||(0,jsx_runtime.jsx)(File.Z,{})}),(0,jsx_runtime.jsxs)("div",{className:classnames_default()(FileCard_FileCard_module.fileText),children:[(0,jsx_runtime.jsx)(esm.X6,{size:"xxsmall",children:heading}),(0,jsx_runtime.jsx)(esm.nv,{size:"small",children:description})]}),(0,jsx_runtime.jsx)("div",{className:classnames_default()(FileCard_FileCard_module.fileDownload),children:(0,jsx_runtime.jsx)(Download.Z,{})})]})};FileCard.displayName="FileCard";try{FileCard.displayName="FileCard",FileCard.__docgenInfo={description:"Component that allows the user to download a file.",displayName:"FileCard",props:{heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},filePath:{defaultValue:null,description:"",name:"filePath",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},brand:{defaultValue:{value:"primary"},description:"",name:"brand",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/FileCard/FileCard.tsx#FileCard"]={docgenInfo:FileCard.__docgenInfo,name:"FileCard",path:"packages/react/src/components/FileCard/FileCard.tsx#FileCard"})}catch(__react_docgen_typescript_loader_error){}const FileCard_stories={title:"Components/FileCard",component:FileCard,tags:["autodocs"],argTypes:{brand:{control:{type:"radio",options:["primary","secondary","tertiary"]}}},parameters:{layout:"centered",backgrounds:{default:"Light",values:[{name:"Dark",value:"#1E2B3C"},{name:"Light",value:"#00000"}]}}},Normal={args:{heading:"Dette er en fil",description:"Dette er en filbeskrivelse",filePath:"/test"}},Secondary={args:{heading:"Dette er en fil",description:"Dette er en filbeskrivelse",brand:"secondary",filePath:"/test"}},Tertiary={args:{heading:"Dette er en fil",description:"Dette er en filbeskrivelse",brand:"tertiary",filePath:"/test"}};Normal.parameters={...Normal.parameters,docs:{...Normal.parameters?.docs,source:{originalSource:"{\n  args: {\n    heading: 'Dette er en fil',\n    description: 'Dette er en filbeskrivelse',\n    filePath: '/test'\n  }\n}",...Normal.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    heading: 'Dette er en fil',\n    description: 'Dette er en filbeskrivelse',\n    brand: 'secondary',\n    filePath: '/test'\n  }\n}",...Secondary.parameters?.docs?.source}}},Tertiary.parameters={...Tertiary.parameters,docs:{...Tertiary.parameters?.docs,source:{originalSource:"{\n  args: {\n    heading: 'Dette er en fil',\n    description: 'Dette er en filbeskrivelse',\n    brand: 'tertiary',\n    filePath: '/test'\n  }\n}",...Tertiary.parameters?.docs?.source}}};const __namedExportsOrder=["Normal","Secondary","Tertiary"]},"./packages/react/src/hooks/useDeviceBreakpoints.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(props={})=>{const{mobile,tablet}=props,mobileBreakpoint=mobile||425,tabletBreakpoint=tablet||768,[isMobile,setIsMobile]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[isTablet,setIsTablet]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);if(mobileBreakpoint>tabletBreakpoint)throw new Error(`Mobile breakpoint cannot be bigger than tablet breakpoint. Mobile: ${mobileBreakpoint}px, Tablet: ${tabletBreakpoint}px`);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const handleResize=()=>{window.innerWidth<=mobileBreakpoint?(setIsMobile(!0),setIsTablet(!1)):window.innerWidth<=tabletBreakpoint?(setIsMobile(!1),setIsTablet(!0)):(setIsMobile(!1),setIsTablet(!1))};return handleResize(),window.addEventListener("resize",handleResize),()=>{window.removeEventListener("resize",handleResize)}}),[mobileBreakpoint,tabletBreakpoint]),{isMobile,isTablet}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./packages/react/src/components/FileCard/FileCard.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".D44KRXFCoCf8rKqpOdfI {\n  display: grid;\n  grid-template-columns: var(--fds-spacing-18) 1fr var(--fds-spacing-18);\n  width: 100%;\n  outline: 1px solid var(--fds-semantic-border-neutral-default);\n  border-radius: 4px;\n  cursor: pointer;\n  color: var(--fds-semantic-text-neutral-default);\n  text-decoration: none;\n}\n\n.EX6yE6s_KtWMxs_qATKO {\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto 1fr;\n}\n\n.D44KRXFCoCf8rKqpOdfI:hover {\n  outline-width: 2px;\n  background-color: var(--color-200);\n}\n\n.D44KRXFCoCf8rKqpOdfI:focus {\n  outline-width: 3px;\n  background-color: var(--color-300);\n  box-shadow: 0 0 0 6px var(--fds-semantic-border-focus-outline);\n}\n\n.VDmVNrVj0nP0VyYSnutb {\n  --color-200: var(--fds-brand-primary-200);\n  --color-300: var(--fds-brand-primary-300);\n  --color-400: var(--fds-brand-primary-400);\n  --color-500: var(--fds-brand-primary-500);\n}\n\n.MrzBeROqtDIue7uKBbzk {\n  --color-200: var(--fds-brand-secondary-200);\n  --color-300: var(--fds-brand-secondary-300);\n  --color-400: var(--fds-brand-secondary-400);\n  --color-500: var(--fds-brand-secondary-500);\n}\n\n.yjjhgvXey109FrQVOnXj {\n  --color-200: var(--fds-brand-tertiary-200);\n  --color-300: var(--fds-brand-tertiary-300);\n  --color-400: var(--fds-brand-tertiary-400);\n  --color-500: var(--fds-brand-tertiary-500);\n}\n\n.nGmpkYJ_UuvXBatzDz7D {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  background-color: var(--color-300);\n  font-size: 2rem;\n}\n\n.EX6yE6s_KtWMxs_qATKO .nGmpkYJ_UuvXBatzDz7D {\n  justify-content: flex-start;\n  padding: var(--fds-spacing-3) var(--fds-spacing-6);\n}\n\n.D44KRXFCoCf8rKqpOdfI:hover .nGmpkYJ_UuvXBatzDz7D {\n  background-color: var(--color-400);\n}\n\n.D44KRXFCoCf8rKqpOdfI:focus .nGmpkYJ_UuvXBatzDz7D {\n  background-color: var(--color-500);\n}\n\n.PUgXA1DxwrDuYNSrGnda {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: var(--fds-spacing-4) var(--fds-spacing-6);\n  flex: 1;\n  gap: 4px;\n}\n\n.EX6yE6s_KtWMxs_qATKO .PUgXA1DxwrDuYNSrGnda {\n  padding: 24px;\n  grid-column: 1 / 3;\n}\n\n._ceYjFu2cSODWvKSmVG9 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  font-size: 2rem;\n}\n\n.EX6yE6s_KtWMxs_qATKO ._ceYjFu2cSODWvKSmVG9 {\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  justify-content: flex-end;\n  background-color: var(--color-300);\n  padding: var(--fds-spacing-3) var(--fds-spacing-7);\n}\n\n.EX6yE6s_KtWMxs_qATKO:hover ._ceYjFu2cSODWvKSmVG9 {\n  background-color: var(--color-400);\n}\n\n.EX6yE6s_KtWMxs_qATKO:focus ._ceYjFu2cSODWvKSmVG9 {\n  background-color: var(--color-500);\n}\n","",{version:3,sources:["webpack://./packages/react/src/components/FileCard/FileCard.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,sEAAsE;EACtE,WAAW;EACX,6DAA6D;EAC7D,kBAAkB;EAClB,eAAe;EACf,+CAA+C;EAC/C,qBAAqB;AACvB;;AAEA;EACE,8BAA8B;EAC9B,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,kCAAkC;EAClC,8DAA8D;AAChE;;AAEA;EACE,yCAAyC;EACzC,yCAAyC;EACzC,yCAAyC;EACzC,yCAAyC;AAC3C;;AAEA;EACE,2CAA2C;EAC3C,2CAA2C;EAC3C,2CAA2C;EAC3C,2CAA2C;AAC7C;;AAEA;EACE,0CAA0C;EAC1C,0CAA0C;EAC1C,0CAA0C;EAC1C,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,kCAAkC;EAClC,eAAe;AACjB;;AAEA;EACE,2BAA2B;EAC3B,kDAAkD;AACpD;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kDAAkD;EAClD,OAAO;EACP,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,yBAAyB;EACzB,kCAAkC;EAClC,kDAAkD;AACpD;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;AACpC",sourcesContent:[".fileCard {\n  display: grid;\n  grid-template-columns: var(--fds-spacing-18) 1fr var(--fds-spacing-18);\n  width: 100%;\n  outline: 1px solid var(--fds-semantic-border-neutral-default);\n  border-radius: 4px;\n  cursor: pointer;\n  color: var(--fds-semantic-text-neutral-default);\n  text-decoration: none;\n}\n\n.isMobile {\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto 1fr;\n}\n\n.fileCard:hover {\n  outline-width: 2px;\n  background-color: var(--color-200);\n}\n\n.fileCard:focus {\n  outline-width: 3px;\n  background-color: var(--color-300);\n  box-shadow: 0 0 0 6px var(--fds-semantic-border-focus-outline);\n}\n\n.primary {\n  --color-200: var(--fds-brand-primary-200);\n  --color-300: var(--fds-brand-primary-300);\n  --color-400: var(--fds-brand-primary-400);\n  --color-500: var(--fds-brand-primary-500);\n}\n\n.secondary {\n  --color-200: var(--fds-brand-secondary-200);\n  --color-300: var(--fds-brand-secondary-300);\n  --color-400: var(--fds-brand-secondary-400);\n  --color-500: var(--fds-brand-secondary-500);\n}\n\n.tertiary {\n  --color-200: var(--fds-brand-tertiary-200);\n  --color-300: var(--fds-brand-tertiary-300);\n  --color-400: var(--fds-brand-tertiary-400);\n  --color-500: var(--fds-brand-tertiary-500);\n}\n\n.fileIcon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  background-color: var(--color-300);\n  font-size: 2rem;\n}\n\n.isMobile .fileIcon {\n  justify-content: flex-start;\n  padding: var(--fds-spacing-3) var(--fds-spacing-6);\n}\n\n.fileCard:hover .fileIcon {\n  background-color: var(--color-400);\n}\n\n.fileCard:focus .fileIcon {\n  background-color: var(--color-500);\n}\n\n.fileText {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: var(--fds-spacing-4) var(--fds-spacing-6);\n  flex: 1;\n  gap: 4px;\n}\n\n.isMobile .fileText {\n  padding: 24px;\n  grid-column: 1 / 3;\n}\n\n.fileDownload {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  font-size: 2rem;\n}\n\n.isMobile .fileDownload {\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  justify-content: flex-end;\n  background-color: var(--color-300);\n  padding: var(--fds-spacing-3) var(--fds-spacing-7);\n}\n\n.isMobile:hover .fileDownload {\n  background-color: var(--color-400);\n}\n\n.isMobile:focus .fileDownload {\n  background-color: var(--color-500);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={fileCard:"D44KRXFCoCf8rKqpOdfI",isMobile:"EX6yE6s_KtWMxs_qATKO",primary:"VDmVNrVj0nP0VyYSnutb",secondary:"MrzBeROqtDIue7uKBbzk",tertiary:"yjjhgvXey109FrQVOnXj",fileIcon:"nGmpkYJ_UuvXBatzDz7D",fileText:"PUgXA1DxwrDuYNSrGnda",fileDownload:"_ceYjFu2cSODWvKSmVG9"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);