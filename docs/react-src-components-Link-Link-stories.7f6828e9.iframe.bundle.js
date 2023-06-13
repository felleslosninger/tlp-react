/*! For license information please see react-src-components-Link-Link-stories.7f6828e9.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkroot=self.webpackChunkroot||[]).push([[251],{"./node_modules/@navikt/aksel-icons/dist/react/esm/util/useId.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>useId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let globalId=0;const maybeReactUseId=react__WEBPACK_IMPORTED_MODULE_0__.useId;function useId(idOverride){var _a;if(void 0!==maybeReactUseId){const reactId=maybeReactUseId();return null!=idOverride?idOverride:reactId.replace(/(:)/g,"")}return null!==(_a=function useGlobalId(idOverride){const[defaultId,setDefaultId]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(idOverride),id=idOverride||defaultId;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{null==defaultId&&(globalId+=1,setDefaultId(`aksel-icon-${globalId}`))}),[defaultId]),id}(idOverride))&&void 0!==_a?_a:""}},"./packages/react/src/components/Link/Link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Inverted:()=>Inverted,Normal:()=>Normal,WithIconAfter:()=>WithIconAfter,WithIconBefore:()=>WithIconBefore,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Link_stories});var react=__webpack_require__("./node_modules/react/index.js"),useId=__webpack_require__("./node_modules/@navikt/aksel-icons/dist/react/esm/util/useId.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const MagnifyingGlass=(0,react.forwardRef)(((_a,ref)=>{var{title,titleId:_titleId}=_a,props=__rest(_a,["title","titleId"]);let titleId=(0,useId.M)();return titleId=title?_titleId||"title-"+titleId:void 0,react.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0Zm5.75-7.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25Z",fill:"currentColor"}))}));var Link=__webpack_require__("./packages/react/src/components/Link/Link.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Link_stories={title:"Components/Link",component:Link.r,tags:["autodocs"],argTypes:{inverted:{control:"boolean"}},parameters:{layout:"centered",backgrounds:{default:"Light",values:[{name:"Dark",value:"#1E2B3C"},{name:"Light",value:"#00000"}]}}},Normal={args:{children:"Link"},parameters:{layout:"centered"}},WithIconBefore={args:{iconBefore:(0,jsx_runtime.jsx)(MagnifyingGlass,{}),children:"Link"},parameters:{layout:"centered"}},WithIconAfter={args:{iconAfter:(0,jsx_runtime.jsx)(MagnifyingGlass,{}),children:"Link"},parameters:{layout:"centered"}},Inverted={args:{inverted:!0,children:"Link"},parameters:{layout:"centered",backgrounds:{default:"Dark"}}};Normal.parameters={...Normal.parameters,docs:{...Normal.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Link'\n  },\n  parameters: {\n    layout: 'centered'\n  }\n}",...Normal.parameters?.docs?.source}}},WithIconBefore.parameters={...WithIconBefore.parameters,docs:{...WithIconBefore.parameters?.docs,source:{originalSource:"{\n  args: {\n    iconBefore: <MagnifyingGlassIcon />,\n    children: 'Link'\n  },\n  parameters: {\n    layout: 'centered'\n  }\n}",...WithIconBefore.parameters?.docs?.source}}},WithIconAfter.parameters={...WithIconAfter.parameters,docs:{...WithIconAfter.parameters?.docs,source:{originalSource:"{\n  args: {\n    iconAfter: <MagnifyingGlassIcon />,\n    children: 'Link'\n  },\n  parameters: {\n    layout: 'centered'\n  }\n}",...WithIconAfter.parameters?.docs?.source}}},Inverted.parameters={...Inverted.parameters,docs:{...Inverted.parameters?.docs,source:{originalSource:"{\n  args: {\n    inverted: true,\n    children: 'Link'\n  },\n  parameters: {\n    layout: 'centered',\n    backgrounds: {\n      default: 'Dark'\n    }\n  }\n}",...Inverted.parameters?.docs?.source}}};const __namedExportsOrder=["Normal","WithIconBefore","WithIconAfter","Inverted"]},"./packages/react/src/components/Link/Link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>Link});__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Link_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./packages/react/src/components/Link/Link.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Link_module.Z,options);const Link_Link_module=Link_module.Z&&Link_module.Z.locals?Link_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Link=({inverted,children,href="#",className,iconBefore,iconAfter,as,...rest})=>{const Component=as||"a";return(0,jsx_runtime.jsxs)(Component,{className:classnames_default()(Link_Link_module.link,inverted?Link_Link_module.inverted:Link_Link_module.normal,className),href,...rest,children:[iconBefore&&(0,jsx_runtime.jsx)("span",{className:Link_Link_module.iconBefore,children:iconBefore}),(0,jsx_runtime.jsx)("span",{className:classnames_default()(Link_Link_module.linkInner,inverted?Link_Link_module.invertedInner:Link_Link_module.normalInner,className),children}),iconAfter&&(0,jsx_runtime.jsx)("span",{className:Link_Link_module.iconAfter,children:iconAfter})]})};Link.displayName="Link";try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{inverted:{defaultValue:null,description:"",name:"inverted",required:!1,type:{name:"boolean"}},href:{defaultValue:{value:"#"},description:"",name:"href",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},iconBefore:{defaultValue:null,description:"",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:null,description:"",name:"iconAfter",required:!1,type:{name:"ReactNode"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"keyof IntrinsicElements | ComponentType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Link/Link.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"packages/react/src/components/Link/Link.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./packages/react/src/components/Link/Link.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".gB_3bXYUBfcBgh3c7JQj {\n  --color-blue-link: rgba(0 98 186 / 1);\n  --color-blue-link-hover: rgba(0 78 149 / 1);\n  --color-neutral-white: rgba(255 255 255 / 1);\n\n  text-decoration: none;\n}\n\n.F0f7r6BwPW8_lykooiCp {\n  color: var(--color-blue-link);\n}\n\n.F0f7r6BwPW8_lykooiCp:hover {\n  color: var(--color-blue-link-hover);\n}\n\n.DaYwF23vekB8BqyyRtd5 {\n  color: var(--color-neutral-white);\n}\n\n.DaYwF23vekB8BqyyRtd5:hover {\n  color: var(--color-neutral-white);\n}\n\n.Cu3byAJbThkMefuZXp6N {\n  border-bottom: 1px solid var(--color-blue-link);\n}\n\n.PjPHt7rHRoWbFCtgNQNQ {\n  border-bottom: 1px solid var(--color-neutral-white);\n}\n\n.PjPHt7rHRoWbFCtgNQNQ:hover {\n  border-bottom: none;\n}\n\n.JS6Fp0LF97OSotpR7Gfw {\n  margin-right: 9px;\n}\n\n.zjNN2WZXkZXWZqudfgMp {\n  margin-left: 9px;\n}\n","",{version:3,sources:["webpack://./packages/react/src/components/Link/Link.module.css"],names:[],mappings:"AAAA;EACE,qCAAqC;EACrC,2CAA2C;EAC3C,4CAA4C;;EAE5C,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,mDAAmD;AACrD;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB",sourcesContent:[".link {\n  --color-blue-link: rgba(0 98 186 / 1);\n  --color-blue-link-hover: rgba(0 78 149 / 1);\n  --color-neutral-white: rgba(255 255 255 / 1);\n\n  text-decoration: none;\n}\n\n.normal {\n  color: var(--color-blue-link);\n}\n\n.normal:hover {\n  color: var(--color-blue-link-hover);\n}\n\n.inverted {\n  color: var(--color-neutral-white);\n}\n\n.inverted:hover {\n  color: var(--color-neutral-white);\n}\n\n.normalInner {\n  border-bottom: 1px solid var(--color-blue-link);\n}\n\n.invertedInner {\n  border-bottom: 1px solid var(--color-neutral-white);\n}\n\n.invertedInner:hover {\n  border-bottom: none;\n}\n\n.iconBefore {\n  margin-right: 9px;\n}\n\n.iconAfter {\n  margin-left: 9px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={link:"gB_3bXYUBfcBgh3c7JQj",normal:"F0f7r6BwPW8_lykooiCp",inverted:"DaYwF23vekB8BqyyRtd5",normalInner:"Cu3byAJbThkMefuZXp6N",invertedInner:"PjPHt7rHRoWbFCtgNQNQ",iconBefore:"JS6Fp0LF97OSotpR7Gfw",iconAfter:"zjNN2WZXkZXWZqudfgMp"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);