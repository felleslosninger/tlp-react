/*! For license information please see components-Typography-Heading-Heading-stories.e0134c3a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_digdir_tlp_react=self.webpackChunk_digdir_tlp_react||[]).push([[532],{"./src/components/Typography/Heading/Heading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Heading_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),StringHelper=__webpack_require__("./src/utils/StringHelper.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Heading_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Typography/Heading/Heading.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Heading_module.Z,options);const Heading_Heading_module=Heading_module.Z&&Heading_module.Z.locals?Heading_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Heading=({level=1,size="xlarge",color="black",children,margin=!1,...rest})=>{const Heading=({...props})=>react.createElement(`h${level}`,props,children),HeadingStyle={color};return(0,jsx_runtime.jsx)(Heading,{...rest,style:HeadingStyle,className:classnames_default()([Heading_Heading_module.heading],{[Heading_Heading_module.headingMargin]:margin},Heading_Heading_module[`heading${(0,StringHelper.O)(size)}`]),children})};Heading.displayName="Heading";try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},size:{defaultValue:{value:"xlarge"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xlarge"'},{value:'"xxlarge"'},{value:'"large"'},{value:'"medium"'},{value:'"small"'},{value:'"xsmall"'},{value:'"xxsmall"'}]}},color:{defaultValue:{value:"black"},description:"",name:"color",required:!1,type:{name:"string"}},margin:{defaultValue:{value:"false"},description:"",name:"margin",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Heading/Heading.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/components/Typography/Heading/Heading.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}const Heading_stories={title:"Components/Typography/Heading",component:Heading,tags:["autodocs"],argTypes:{},parameters:{layout:"centered",backgrounds:{default:"Light",values:[{name:"Dark",value:"#1E2B3C"},{name:"Light",value:"#00000"}]}}},Default={args:{children:"Heading",level:1,size:"large"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Heading',\n    level: 1,\n    size: 'large'\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/utils/StringHelper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>capitalizeString});const isValidUrl=urlString=>!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(urlString),capitalizeString=string=>string.charAt(0).toUpperCase()+string.slice(1);try{isValidUrl.displayName="isValidUrl",isValidUrl.__docgenInfo={description:"",displayName:"isValidUrl",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/StringHelper.tsx#isValidUrl"]={docgenInfo:isValidUrl.__docgenInfo,name:"isValidUrl",path:"src/utils/StringHelper.tsx#isValidUrl"})}catch(__react_docgen_typescript_loader_error){}try{capitalizeString.displayName="capitalizeString",capitalizeString.__docgenInfo={description:"",displayName:"capitalizeString",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/StringHelper.tsx#capitalizeString"]={docgenInfo:capitalizeString.__docgenInfo,name:"capitalizeString",path:"src/utils/StringHelper.tsx#capitalizeString"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Typography/Heading/Heading.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".dSPuuaMbO9nx5fIXUVAs {\n  margin: 0;\n  color: #1e2b3c;\n}\n\n.i7ucwGnsJuP12JmGC9Xe {\n  margin-bottom: 24px;\n}\n\n.Hcz4uqtOzOY7NxtktXgd {\n  font-size: 44px;\n}\n\n.b5LBoMsZFmoSUMOwZul0 {\n  font-size: 36px;\n}\n\n.V4E6q0m9k2hZ3kEox8Op {\n  font-size: 32px;\n}\n\n.yl9xPDeGMPDXCt35Gnbn {\n  font-size: 28px;\n}\n\n.wft4czSzQKuHC9MLyNqh {\n  font-size: 24px;\n}\n\n.G1yj8nW3iKIkgZyLj5KU {\n  font-size: 20px;\n}\n\n.KFAjCTazVXUNsKxhkyHg {\n  font-size: 18px;\n}\n","",{version:3,sources:["webpack://./src/components/Typography/Heading/Heading.module.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,cAAc;AAChB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB",sourcesContent:[".heading {\n  margin: 0;\n  color: #1e2b3c;\n}\n\n.headingMargin {\n  margin-bottom: 24px;\n}\n\n.headingXxlarge {\n  font-size: 44px;\n}\n\n.headingXlarge {\n  font-size: 36px;\n}\n\n.headingLarge {\n  font-size: 32px;\n}\n\n.headingMedium {\n  font-size: 28px;\n}\n\n.headingSmall {\n  font-size: 24px;\n}\n\n.headingXsmall {\n  font-size: 20px;\n}\n\n.headingXxsmall {\n  font-size: 18px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={heading:"dSPuuaMbO9nx5fIXUVAs",headingMargin:"i7ucwGnsJuP12JmGC9Xe",headingXxlarge:"Hcz4uqtOzOY7NxtktXgd",headingXlarge:"b5LBoMsZFmoSUMOwZul0",headingLarge:"V4E6q0m9k2hZ3kEox8Op",headingMedium:"yl9xPDeGMPDXCt35Gnbn",headingSmall:"wft4czSzQKuHC9MLyNqh",headingXsmall:"G1yj8nW3iKIkgZyLj5KU",headingXxsmall:"KFAjCTazVXUNsKxhkyHg"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);