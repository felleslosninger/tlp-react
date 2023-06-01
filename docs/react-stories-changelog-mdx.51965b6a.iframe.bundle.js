/*! For license information please see react-stories-changelog-mdx.51965b6a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[984],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/react/stories/changelog.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>changelog});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=(__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Changelog_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./docs-components/Changelog/Changelog.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Changelog_module.Z,options);const Changelog_Changelog_module=Changelog_module.Z&&Changelog_module.Z.locals?Changelog_module.Z.locals:void 0,Changelog=({markdown})=>((0,react.useEffect)((()=>{const bugFixesHeadings=window.document.querySelectorAll("#sb-changelog [id=bug-fixes]"),featuresHeadings=window.document.querySelectorAll("#sb-changelog [id=features]");if(null!==bugFixesHeadings)for(let i=0;i<bugFixesHeadings.length;i++)bugFixesHeadings[i].dataset.bug="";if(null!==featuresHeadings)for(let i=0;i<featuresHeadings.length;i++)featuresHeadings[i].dataset.feat=""}),[]),(0,jsx_runtime.jsx)("div",{className:Changelog_Changelog_module.changelog,id:"sb-changelog",children:(0,jsx_runtime.jsx)(dist.UG,{children:markdown})}));Changelog.displayName="Changelog";try{Changelog.displayName="Changelog",Changelog.__docgenInfo={description:"",displayName:"Changelog",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["docs-components/Changelog/Changelog.tsx#Changelog"]={docgenInfo:Changelog.__docgenInfo,name:"Changelog",path:"docs-components/Changelog/Changelog.tsx#Changelog"})}catch(__react_docgen_typescript_loader_error){}const CHANGELOG_namespaceObject="# Change Log\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [0.1.5](https://github.com/felleslosninger/tlp-react/compare/@digdir/tlp-react@0.1.4...@digdir/tlp-react@0.1.5) (2023-05-18)\n\n### Bug Fixes\n\n- added footer export ([ae636d9](https://github.com/felleslosninger/tlp-react/commit/ae636d9b26357210be333ef38b9ca204632d1302))\n\n## [0.1.4](https://github.com/felleslosninger/tlp-react/compare/@digdir/tlp-react@0.1.3...@digdir/tlp-react@0.1.4) (2023-05-18)\n\n### Bug Fixes\n\n- testing header and footer ([e87dd4b](https://github.com/felleslosninger/tlp-react/commit/e87dd4bfbe68e3bedfdce4ba29b12be7ae19f9af))\n\n## [0.1.3](https://github.com/felleslosninger/tlp-react/compare/@digdir/tlp-react@0.1.2...@digdir/tlp-react@0.1.3) (2023-05-11)\n\n### Bug Fixes\n\n- added tokens for react package ([fb37a40](https://github.com/felleslosninger/tlp-react/commit/fb37a40a88f0351a72c8f97309f27d3a0582894b))\n\n## [0.1.2](https://github.com/felleslosninger/tlp-react/compare/@digdir/tlp-react@0.1.1...@digdir/tlp-react@0.1.2) (2023-05-11)\n\n### Bug Fixes\n\n- added Breadcrumbs to export ([41390c3](https://github.com/felleslosninger/tlp-react/commit/41390c3e853a524cdfc12ef5bc4202cb720784f6))\n\n## [0.1.1](https://github.com/felleslosninger/tlp-react/compare/@digdir/tlp-react@0.1.0...@digdir/tlp-react@0.1.1) (2023-05-08)\n\n### Bug Fixes\n\n- added Link and Container to export ([bc29bdb](https://github.com/felleslosninger/tlp-react/commit/bc29bdb97546b6b68ef2c23105c3cba558612ff8))\n\n# [0.1.0](https://github.com/felleslosninger/tlp-react/compare/@digdir/tlp-react@0.0.1...@digdir/tlp-react@0.1.0) (2023-05-08)\n\n### Features\n\n- testing lerna versioning ([7886516](https://github.com/felleslosninger/tlp-react/commit/788651639e3baa2251b734c153865d7e91298ef3))\n\n## 0.0.1 (2023-05-08)\n\n**Note:** Version bump only for package @digdir/tlp-react\n";function _createMdxContent(props){const _components=Object.assign({h1:"h1",a:"a",img:"img",p:"p",strong:"strong",code:"code",hr:"hr"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Changelog/Components"}),"\n",(0,jsx_runtime.jsxs)(_components.h1,{id:"react-komponenter-",children:["React komponenter ",(0,jsx_runtime.jsx)(_components.a,{href:"https://www.npmjs.com/package/@digdir/tlp-react",target:"_blank",rel:"nofollow noopener noreferrer",children:(0,jsx_runtime.jsx)(_components.img,{src:"https://img.shields.io/npm/v/@digdir/tlp-react?label=latest%20release&color=0051be",alt:""})})]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Her finner du en automatisk generert endringslogg til pakken ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.code,{children:"@digdir/tlp-react"})}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsx)(Changelog,{markdown:CHANGELOG_namespaceObject})]})}const changelog=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./docs-components/Changelog/Changelog.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".WclZC5Hj2LEQGRHYZS1a {\n  margin-top: 40px;\n}\n\n.WclZC5Hj2LEQGRHYZS1a h1,\n.WclZC5Hj2LEQGRHYZS1a h2 {\n  border-bottom: 1px solid #e0e0e0;\n  margin-top: 36px !important;\n  padding-bottom: 10px;\n  margin-bottom: 24px;\n}\n\n.WclZC5Hj2LEQGRHYZS1a h1 {\n  border-bottom-width: 3px;\n}\n\n.WclZC5Hj2LEQGRHYZS1a h1::before,\n.WclZC5Hj2LEQGRHYZS1a h2::before {\n  content: 'Release ';\n}\n\n.WclZC5Hj2LEQGRHYZS1a h3::before {\n  /* content: \"🐛 ✨ 💣 \"; */\n}\n\n.WclZC5Hj2LEQGRHYZS1a > div h1:first-of-type,\n.WclZC5Hj2LEQGRHYZS1a > div p:first-of-type {\n  display: none;\n}\n\n.WclZC5Hj2LEQGRHYZS1a h2[data-bug]::before,\n.WclZC5Hj2LEQGRHYZS1a h3[data-bug]::before {\n  content: '🐛 ';\n}\n\n.WclZC5Hj2LEQGRHYZS1a h2[data-feat]::before,\n.WclZC5Hj2LEQGRHYZS1a h3[data-feat]::before {\n  content: '✨ ';\n}\n","",{version:3,sources:["webpack://./docs-components/Changelog/Changelog.module.css"],names:[],mappings:"AAAA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,gCAAgC;EAChC,2BAA2B;EAC3B,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;EAEE,aAAa;AACf;;AAEA;;EAEE,cAAc;AAChB;;AAEA;;EAEE,aAAa;AACf",sourcesContent:[".changelog {\n  margin-top: 40px;\n}\n\n.changelog h1,\n.changelog h2 {\n  border-bottom: 1px solid #e0e0e0;\n  margin-top: 36px !important;\n  padding-bottom: 10px;\n  margin-bottom: 24px;\n}\n\n.changelog h1 {\n  border-bottom-width: 3px;\n}\n\n.changelog h1::before,\n.changelog h2::before {\n  content: 'Release ';\n}\n\n.changelog h3::before {\n  /* content: \"🐛 ✨ 💣 \"; */\n}\n\n.changelog > div h1:first-of-type,\n.changelog > div p:first-of-type {\n  display: none;\n}\n\n.changelog h2[data-bug]::before,\n.changelog h3[data-bug]::before {\n  content: '🐛 ';\n}\n\n.changelog h2[data-feat]::before,\n.changelog h3[data-feat]::before {\n  content: '✨ ';\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={changelog:"WclZC5Hj2LEQGRHYZS1a"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);