/*! For license information please see react-src-components-Footer-Footer-stories.8647e231.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkroot=self.webpackChunkroot||[]).push([[612],{"./packages/react/src/components/Footer/Footer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Footer_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Container=__webpack_require__("./packages/react/src/components/Container/Container.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Footer_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./packages/react/src/components/Footer/Footer.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Footer_module.Z,options);const Footer_Footer_module=Footer_module.Z&&Footer_module.Z.locals?Footer_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Footer=({children,className,...rest})=>(0,jsx_runtime.jsx)("footer",{className:classnames_default()(Footer_Footer_module.footer,className),...rest,children:(0,jsx_runtime.jsxs)(Container.W,{children:[(0,jsx_runtime.jsx)(Container.W,{className:Footer_Footer_module.topContainer,children:(0,jsx_runtime.jsx)("div",{className:classnames_default()(Footer_Footer_module.topContent,(children=>{let count=0;return react.Children.forEach(children,(child=>{child&&child.type===Footer.Column&&count++})),count})(children)>2?null:Footer_Footer_module.fewChilds),children:react.Children.map(children,(child=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:child&&child.type===Footer.Column?child:""})))})}),(0,jsx_runtime.jsx)(Container.W,{className:Footer_Footer_module.bottomContainer,children:(0,jsx_runtime.jsx)("div",{className:Footer_Footer_module.bottomContent,children:react.Children.map(children,(child=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:child.type===Footer.Bottom?child:""})))})})]})});Footer.displayName="Footer";const FooterBottom=({children})=>(0,jsx_runtime.jsx)("div",{className:Footer_Footer_module.bottom2,children});FooterBottom.displayName="FooterBottom";const FooterColumn=({children})=>(0,jsx_runtime.jsx)("div",{className:Footer_Footer_module.column,children});FooterColumn.displayName="FooterColumn",FooterColumn.displayName="Footer.Column",Footer.Column=FooterColumn,FooterBottom.displayName="Footer.Bottom",Footer.Bottom=FooterBottom;try{Footer.Column.displayName="Footer.Column",Footer.Column.__docgenInfo={description:"",displayName:"Footer.Column",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Footer/Footer.tsx#Footer.Column"]={docgenInfo:Footer.Column.__docgenInfo,name:"Footer.Column",path:"packages/react/src/components/Footer/Footer.tsx#Footer.Column"})}catch(__react_docgen_typescript_loader_error){}const Children=[(0,jsx_runtime.jsxs)(Footer.Column,{children:[(0,jsx_runtime.jsx)("h2",{children:"Åpningstider"}),(0,jsx_runtime.jsx)("p",{children:"test"}),(0,jsx_runtime.jsx)("p",{children:"test"}),(0,jsx_runtime.jsx)("p",{children:"testdewdewewdewdewdewdew dewdfewfwef fwewf "})]}),(0,jsx_runtime.jsxs)(Footer.Column,{children:[(0,jsx_runtime.jsx)("h2",{children:"E-post"}),(0,jsx_runtime.jsx)("p",{children:"test"}),(0,jsx_runtime.jsx)("p",{children:"test"}),(0,jsx_runtime.jsx)("p",{children:"test"}),(0,jsx_runtime.jsx)("p",{children:"test"}),(0,jsx_runtime.jsx)("p",{children:"test"})]}),(0,jsx_runtime.jsxs)(Footer.Column,{children:[(0,jsx_runtime.jsx)("h2",{children:"Viktige lenker"}),(0,jsx_runtime.jsx)("p",{children:"test"})]}),(0,jsx_runtime.jsx)(Footer.Bottom,{children:"Tjenesten er levert av Digitaliseringsdirektoratet"})],ChildrenSec=[(0,jsx_runtime.jsxs)(Footer.Column,{children:[(0,jsx_runtime.jsx)("h2",{children:"Åpningstider"}),(0,jsx_runtime.jsx)("p",{children:"test"}),(0,jsx_runtime.jsx)("p",{children:"test"}),(0,jsx_runtime.jsx)("p",{children:"test test test test"})]}),(0,jsx_runtime.jsxs)(Footer.Column,{children:[(0,jsx_runtime.jsx)("h2",{children:"E-post"}),(0,jsx_runtime.jsx)("p",{children:"test"}),(0,jsx_runtime.jsx)("p",{children:"test"}),(0,jsx_runtime.jsx)("p",{children:"test"}),(0,jsx_runtime.jsx)("p",{children:"test"}),(0,jsx_runtime.jsx)("p",{children:"test"})]}),(0,jsx_runtime.jsx)(Footer.Bottom,{children:"Tjenesten er levert av Digitaliseringsdirektoratet"})],Footer_stories={title:"Components/Footer",component:Footer,tags:["autodocs"],parameters:{layout:"fullscreen"}},Primary={args:{children:Children}},Secondary={args:{children:ChildrenSec}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: Children\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: ChildrenSec\n  }\n}",...Secondary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary"]},"./packages/react/src/components/Container/Container.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>Container});__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Container_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./packages/react/src/components/Container/Container.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Container_module.Z,options);const Container_Container_module=Container_module.Z&&Container_module.Z.locals?Container_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Container=({children,className,...props})=>(0,jsx_runtime.jsx)("div",{...props,className:classnames_default()(className,Container_Container_module.container),children});Container.displayName="Container";try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Container/Container.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"packages/react/src/components/Container/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./packages/react/src/components/Container/Container.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".M9wLLnTx7yzyQI0rhEiP {\n  max-width: var(--grid-max-width);\n  width: 100%;\n  margin: 0 auto;\n  padding-left: var(--grid-padding);\n  padding-right: var(--grid-padding);\n}\n","",{version:3,sources:["webpack://./packages/react/src/components/Container/Container.module.css"],names:[],mappings:"AAAA;EACE,gCAAgC;EAChC,WAAW;EACX,cAAc;EACd,iCAAiC;EACjC,kCAAkC;AACpC",sourcesContent:[".container {\n  max-width: var(--grid-max-width);\n  width: 100%;\n  margin: 0 auto;\n  padding-left: var(--grid-padding);\n  padding-right: var(--grid-padding);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={container:"M9wLLnTx7yzyQI0rhEiP"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./packages/react/src/components/Footer/Footer.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".o8AcS3o_QMWPlx9dURSB {\n  background-color: #111e3c;\n  color: rgb(220 220 220);\n}\n\n.sJzIAe8OYpDAV0cKKK9O {\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.VkQ9m_KqquB2OjlzIyBy {\n  padding: 0;\n}\n\n.R8SUI7j0aB6a2zTjKbje {\n  padding: 48px 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.sLFO4PjzgR_P5t4HJCAY {\n  justify-content: flex-start;\n  gap: 25%;\n}\n\n.LBte4F4HZa0GPEPqjkAf {\n  max-width: 33.3333%;\n  flex: 0 0 auto;\n  min-width: 270px;\n}\n\n.E5G_nQ5xSIFjsLNcXKBq {\n  border-top: 1px solid rgb(57 61 94);\n  padding: 24px 0;\n}\n","",{version:3,sources:["webpack://./packages/react/src/components/Footer/Footer.module.css"],names:[],mappings:"AAAA;EACE,yBAAyB;EACzB,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,2BAA2B;EAC3B,QAAQ;AACV;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,mCAAmC;EACnC,eAAe;AACjB",sourcesContent:[".footer {\n  background-color: #111e3c;\n  color: rgb(220 220 220);\n}\n\n.topContainer {\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.bottomContainer {\n  padding: 0;\n}\n\n.topContent {\n  padding: 48px 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.fewChilds {\n  justify-content: flex-start;\n  gap: 25%;\n}\n\n.column {\n  max-width: 33.3333%;\n  flex: 0 0 auto;\n  min-width: 270px;\n}\n\n.bottomContent {\n  border-top: 1px solid rgb(57 61 94);\n  padding: 24px 0;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={footer:"o8AcS3o_QMWPlx9dURSB",topContainer:"sJzIAe8OYpDAV0cKKK9O",bottomContainer:"VkQ9m_KqquB2OjlzIyBy",topContent:"R8SUI7j0aB6a2zTjKbje",fewChilds:"sLFO4PjzgR_P5t4HJCAY",column:"LBte4F4HZa0GPEPqjkAf",bottomContent:"E5G_nQ5xSIFjsLNcXKBq"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);