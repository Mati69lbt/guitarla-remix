var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-UBCVSBJB.css";

// app/components/header.jsx
var import_react3 = require("@remix-run/react");

// public/img/logo.svg
var logo_default = "/build/_assets/logo-YZ2KDQEU.svg";

// app/components/navegacion.jsx
var import_react2 = require("@remix-run/react");

// public/img/001 carrito.png
var carrito_default = "/build/_assets/001 carrito-2445OMQO.png";

// app/components/navegacion.jsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Navegacion() {
  let location = (0, import_react2.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("nav", { className: "navegacion", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { to: "/", className: location.pathname === "/" ? "active" : "", children: "Inicio" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react2.Link,
      {
        to: "/nosotros",
        className: location.pathname === "/nosotros" ? "active" : "",
        children: "Nosotros"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react2.Link,
      {
        to: "/guitarras",
        className: location.pathname === "/guitarras" ? "active" : "",
        children: "Tienda"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react2.Link,
      {
        to: "/posts",
        className: location.pathname === "/posts" ? "active" : "",
        children: "Blog"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { to: "/carrito", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: carrito_default, alt: "carrito" }) })
  ] });
}
var navegacion_default = Navegacion;

// app/components/header.jsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Header() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("header", { className: "header", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "contenedor barra", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { className: "logo", src: logo_default, alt: "logo" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(navegacion_default, {})
  ] }) });
}
var header_default = Header;

// app/components/footer.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("footer", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "contenedor contenido", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(navegacion_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { className: "copyright", children: [
      "\xA9 Todos los Derechos Reservados ",
      (/* @__PURE__ */ new Date()).getFullYear()
    ] })
  ] }) });
}
var footer_default = Footer;

// app/root.jsx
var import_react5 = require("react"), import_jsx_runtime5 = require("react/jsx-runtime");
function meta() {
  return [
    { charset: "utf-8" },
    { title: "GuitarLA - Remix" },
    { viewport: "width=device-width,initial-scale=1" }
  ];
}
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    },
    {
      rel: "stylesheet",
      href: styles_default
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
    }
  ];
}
function App() {
  let carritoLocalStorage = typeof window < "u" ? JSON.parse(localStorage.getItem("carrito")) ?? [] : null, [carrito, setCarrito] = (0, import_react5.useState)(carritoLocalStorage);
  return (0, import_react5.useEffect)(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Document, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_react4.Outlet,
    {
      context: {
        agregarCarrito: (guitarra) => {
          if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
            let carritoACtualizado = carrito.map((guitarraState) => (guitarraState.id === guitarra.id && (guitarraState.cantidad = guitarra.cantidad), guitarraState));
            setCarrito(carritoACtualizado);
          } else
            setCarrito([...carrito, guitarra]);
        },
        carrito,
        actualizarCantidad: (guitarra) => {
          let carritoACtualizado = carrito.map((guitarraState) => (guitarraState.id === guitarra.id && (guitarraState.cantidad = guitarra.cantidad), guitarraState));
          setCarrito(carritoACtualizado);
        },
        eliminarGuitarra: (id) => {
          let carritoACtualizado = carrito.filter(
            (guitarraState) => guitarraState.id !== id
          );
          setCarrito(carritoACtualizado);
        }
      }
    }
  ) });
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("html", { lang: "es", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(header_default, {}),
      children,
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(footer_default, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.LiveReload, {})
    ] })
  ] });
}
function ErrorBoundary() {
  let error = (0, import_react4.useRouteError)();
  if (console.log(...oo_oo("c6a73dda_0", error)), (0, import_react4.isRouteErrorResponse)(error))
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Document, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { className: "error", children: "Oops" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { className: "error", children: [
        "Status: ",
        error.status
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "error", children: error.statusText }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Link, { to: "/", className: "error-enlace", children: "Volver al Inicio" })
    ] });
  let errorMessage = error instanceof Error ? error.message : "Unknown error";
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { children: "Uh oh ..." }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "Something went wrong." }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("pre", { children: errorMessage })
  ] });
}
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x5b65ae=_0x1ad9;function _0x35db(){var _0x9ec155=['1056852fzppiF','location','reduceLimits','send','number','_connectAttemptCount','_setNodePermissions','url','autoExpandPreviousObjects','value','serialize','73244PdGshd','6DeuHKF','match','cappedElements','_allowedToSend','getOwnPropertySymbols','positiveInfinity','_hasSetOnItsPath','array','_cleanNode','reload','Error','substr','_attemptToReconnectShortly','pop','_setNodeLabel','_undefined','stringify','_setNodeQueryPath','_objectToString','timeEnd','argumentResolutionError','_disposeWebsocket','hrtime','negativeZero','442685StOQim','_consoleNinjaAllowedToStart','_addObjectProperty','_isMap','207fSpRtp','strLength','_socket','indexOf','disabledLog','__es'+'Module','HTMLAllCollection','push','create','replace','depth','','_treeNodePropertiesAfterFullValue','message','isExpressionToEvaluate','console','_p_name','getter',':logPointId:','[object\\x20Map]','_sortProps','_addLoadNode','test','expId','map','_processTreeNodeResult','7488128yEsYFT','node','pathToFileURL','process','\\x20browser','ws/index.js','disabledTrace','_addFunctionsNode','null','_allowedToConnectOnSend','readyState','_connecting','constructor','expressionsToEvaluate','Symbol','_maxConnectAttemptCount','funcName','3488715FjuFsI','data','onmessage','root_exp_id','unshift','bigint','remix','1.0.0','warn','performance','10203240hLdYuz','[object\\x20Set]','_regExpToString','autoExpandLimit','hostname','Set','_addProperty','String','index','global','WebSocket','includes','then','onclose','prototype','_getOwnPropertyDescriptor','enumerable','_connectToHostNow','NEGATIVE_INFINITY','hasOwnProperty','catch','_hasMapOnItsPath','sortProps','7IYRHke','stackTraceLimit','object','totalStrLength','_p_','_Symbol','34024fMIffX','_getOwnPropertySymbols','setter','_numberRegExp','string','noFunctions','boolean','resolveGetters','toString','nuxt','logger\\x20websocket\\x20error','_isNegativeZero','trace','capped','POSITIVE_INFINITY','_propertyAccessor','host','versions','concat','props','onopen','cappedProps','elements','undefined','function','valueOf','isArray','level','_keyStrRegExp','now','_setNodeExpressionPath','port','allStrLength','current','onerror','type','_sendErrorMessage','name','date','_property','split','_propertyName','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','default','[object\\x20Date]','[object\\x20BigInt]','\\x20server','Number','ws://','defineProperty','_treeNodePropertiesBeforeFullValue','next.js','forEach','unknown','_setNodeId','RegExp','_dateToString','sort','set','rootExpression','autoExpandMaxDepth','timeStamp','_p_length','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','Buffer','_quotedRegExp','...','count','_WebSocketClass','_console_ninja_session','getOwnPropertyNames','getWebSocketClass','_isPrimitiveWrapperType','parent','root_exp','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','time','_isPrimitiveType','autoExpandPropertyCount','toLowerCase','_reconnectTimeout','getPrototypeOf','Boolean','symbol','_WebSocket','length','call','path','negativeInfinity','nodeModules','slice','_inBrowser','_additionalMetadata','_hasSymbolPropertyOnItsPath','_type','_connected',"c:\\\\Users\\\\Matias\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.149\\\\node_modules",'_blacklistedProperty','autoExpand','close','_console_ninja','1686770273428','getOwnPropertyDescriptor','_ws','join','Map','perf_hooks','log','_capIfString','hits','unref','_getOwnPropertyNames','_isSet','_HTMLAllCollection'];_0x35db=function(){return _0x9ec155;};return _0x35db();}(function(_0x4a4af5,_0x491168){var _0x4196f5=_0x1ad9,_0x2d6157=_0x4a4af5();while(!![]){try{var _0x40eb03=parseInt(_0x4196f5(0x26e))/0x1+-parseInt(_0x4196f5(0x255))/0x2+-parseInt(_0x4196f5(0x272))/0x3*(-parseInt(_0x4196f5(0x2c4))/0x4)+parseInt(_0x4196f5(0x29d))/0x5*(-parseInt(_0x4196f5(0x256))/0x6)+-parseInt(_0x4196f5(0x2be))/0x7*(parseInt(_0x4196f5(0x28c))/0x8)+parseInt(_0x4196f5(0x24a))/0x9+parseInt(_0x4196f5(0x2a7))/0xa;if(_0x40eb03===_0x491168)break;else _0x2d6157['push'](_0x2d6157['shift']());}catch(_0x4bd6bc){_0x2d6157['push'](_0x2d6157['shift']());}}}(_0x35db,0x7954a));function _0x1ad9(_0x3f8695,_0xbc9cae){var _0x35dbdf=_0x35db();return _0x1ad9=function(_0x1ad960,_0xbdc8e9){_0x1ad960=_0x1ad960-0x1ef;var _0x426091=_0x35dbdf[_0x1ad960];return _0x426091;},_0x1ad9(_0x3f8695,_0xbc9cae);}var ue=Object[_0x5b65ae(0x27a)],te=Object[_0x5b65ae(0x209)],he=Object[_0x5b65ae(0x23e)],le=Object['getOwnPropertyNames'],fe=Object[_0x5b65ae(0x229)],_e=Object[_0x5b65ae(0x2b5)][_0x5b65ae(0x2ba)],pe=(_0x45a77d,_0x1966bc,_0x4c000d,_0x27cd0f)=>{var _0x470c51=_0x5b65ae;if(_0x1966bc&&typeof _0x1966bc=='object'||typeof _0x1966bc==_0x470c51(0x1f0)){for(let _0x5daa32 of le(_0x1966bc))!_e[_0x470c51(0x22e)](_0x45a77d,_0x5daa32)&&_0x5daa32!==_0x4c000d&&te(_0x45a77d,_0x5daa32,{'get':()=>_0x1966bc[_0x5daa32],'enumerable':!(_0x27cd0f=he(_0x1966bc,_0x5daa32))||_0x27cd0f[_0x470c51(0x2b7)]});}return _0x45a77d;},ne=(_0x19af4e,_0x43bc66,_0x3edec2)=>(_0x3edec2=_0x19af4e!=null?ue(fe(_0x19af4e)):{},pe(_0x43bc66||!_0x19af4e||!_0x19af4e[_0x5b65ae(0x277)]?te(_0x3edec2,_0x5b65ae(0x203),{'value':_0x19af4e,'enumerable':!0x0}):_0x3edec2,_0x19af4e)),Q=class{constructor(_0x1495c9,_0x10531c,_0x321856,_0x38a3d7){var _0x4405de=_0x5b65ae;this[_0x4405de(0x2b0)]=_0x1495c9,this[_0x4405de(0x2d4)]=_0x10531c,this[_0x4405de(0x1f7)]=_0x321856,this[_0x4405de(0x231)]=_0x38a3d7,this[_0x4405de(0x259)]=!0x0,this[_0x4405de(0x295)]=!0x0,this['_connected']=!0x1,this['_connecting']=!0x1,this[_0x4405de(0x233)]=!!this['global'][_0x4405de(0x2b1)],this[_0x4405de(0x21c)]=null,this['_connectAttemptCount']=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x4405de(0x1fc)]=this[_0x4405de(0x233)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help':'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help';}async[_0x5b65ae(0x21f)](){var _0x36aa5f=_0x5b65ae;if(this[_0x36aa5f(0x21c)])return this['_WebSocketClass'];let _0xb4cbc1;if(this[_0x36aa5f(0x233)])_0xb4cbc1=this['global'][_0x36aa5f(0x2b1)];else{if(this[_0x36aa5f(0x2b0)][_0x36aa5f(0x28f)]?.[_0x36aa5f(0x22c)])_0xb4cbc1=this[_0x36aa5f(0x2b0)][_0x36aa5f(0x28f)]?.[_0x36aa5f(0x22c)];else try{let _0x4c168b=await import('path');_0xb4cbc1=(await import((await import(_0x36aa5f(0x251)))[_0x36aa5f(0x28e)](_0x4c168b['join'](this[_0x36aa5f(0x231)],_0x36aa5f(0x291)))[_0x36aa5f(0x2cc)]()))[_0x36aa5f(0x203)];}catch{try{_0xb4cbc1=require(require(_0x36aa5f(0x22f))[_0x36aa5f(0x240)](this[_0x36aa5f(0x231)],'ws'));}catch{throw new Error(_0x36aa5f(0x202));}}}return this['_WebSocketClass']=_0xb4cbc1,_0xb4cbc1;}[_0x5b65ae(0x2b8)](){var _0x5ef851=_0x5b65ae;this[_0x5ef851(0x297)]||this[_0x5ef851(0x237)]||this['_connectAttemptCount']>=this[_0x5ef851(0x29b)]||(this[_0x5ef851(0x295)]=!0x1,this[_0x5ef851(0x297)]=!0x0,this[_0x5ef851(0x24f)]++,this[_0x5ef851(0x23f)]=new Promise((_0x55ab9d,_0x100b48)=>{var _0x35fd24=_0x5ef851;this[_0x35fd24(0x21f)]()[_0x35fd24(0x2b3)](_0x61115a=>{var _0xbb2ea6=_0x35fd24;let _0x33f163=new _0x61115a(_0xbb2ea6(0x208)+this[_0xbb2ea6(0x2d4)]+':'+this[_0xbb2ea6(0x1f7)]);_0x33f163[_0xbb2ea6(0x1fa)]=()=>{var _0x4ffe0=_0xbb2ea6;this[_0x4ffe0(0x259)]=!0x1,this['_disposeWebsocket'](_0x33f163),this[_0x4ffe0(0x262)](),_0x100b48(new Error(_0x4ffe0(0x2ce)));},_0x33f163[_0xbb2ea6(0x2d8)]=()=>{var _0x324533=_0xbb2ea6;this['_inBrowser']||_0x33f163[_0x324533(0x274)]&&_0x33f163[_0x324533(0x274)][_0x324533(0x246)]&&_0x33f163[_0x324533(0x274)][_0x324533(0x246)](),_0x55ab9d(_0x33f163);},_0x33f163[_0xbb2ea6(0x2b4)]=()=>{var _0x3fbf0a=_0xbb2ea6;this['_allowedToConnectOnSend']=!0x0,this[_0x3fbf0a(0x26b)](_0x33f163),this[_0x3fbf0a(0x262)]();},_0x33f163[_0xbb2ea6(0x29f)]=_0x134e50=>{var _0x5b715b=_0xbb2ea6;try{_0x134e50&&_0x134e50[_0x5b715b(0x29e)]&&this['_inBrowser']&&JSON['parse'](_0x134e50['data'])['method']===_0x5b715b(0x25f)&&this[_0x5b715b(0x2b0)]['location'][_0x5b715b(0x25f)]();}catch{}};})['then'](_0x447ef0=>(this[_0x35fd24(0x237)]=!0x0,this[_0x35fd24(0x297)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x35fd24(0x259)]=!0x0,this[_0x35fd24(0x24f)]=0x0,_0x447ef0))['catch'](_0x140c68=>(this[_0x35fd24(0x237)]=!0x1,this[_0x35fd24(0x297)]=!0x1,_0x100b48(new Error(_0x35fd24(0x223)+(_0x140c68&&_0x140c68['message'])))));}));}[_0x5b65ae(0x26b)](_0x2d7e66){var _0x343315=_0x5b65ae;this[_0x343315(0x237)]=!0x1,this['_connecting']=!0x1;try{_0x2d7e66[_0x343315(0x2b4)]=null,_0x2d7e66[_0x343315(0x1fa)]=null,_0x2d7e66[_0x343315(0x2d8)]=null;}catch{}try{_0x2d7e66[_0x343315(0x296)]<0x2&&_0x2d7e66[_0x343315(0x23b)]();}catch{}}[_0x5b65ae(0x262)](){var _0xca04b9=_0x5b65ae;clearTimeout(this[_0xca04b9(0x228)]),!(this['_connectAttemptCount']>=this[_0xca04b9(0x29b)])&&(this[_0xca04b9(0x228)]=setTimeout(()=>{var _0x44d343=_0xca04b9;this[_0x44d343(0x237)]||this[_0x44d343(0x297)]||(this[_0x44d343(0x2b8)](),this['_ws']?.[_0x44d343(0x2bb)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0xca04b9(0x228)][_0xca04b9(0x246)]&&this['_reconnectTimeout'][_0xca04b9(0x246)]());}async[_0x5b65ae(0x24d)](_0x1a44f3){var _0x1b8c99=_0x5b65ae;try{if(!this[_0x1b8c99(0x259)])return;this[_0x1b8c99(0x295)]&&this[_0x1b8c99(0x2b8)](),(await this['_ws'])[_0x1b8c99(0x24d)](JSON[_0x1b8c99(0x266)](_0x1a44f3));}catch(_0x3a3349){console[_0x1b8c99(0x2a5)](this[_0x1b8c99(0x1fc)]+':\\x20'+(_0x3a3349&&_0x3a3349[_0x1b8c99(0x27f)])),this[_0x1b8c99(0x259)]=!0x1,this[_0x1b8c99(0x262)]();}}};function V(_0x15b4d4,_0x22064a,_0x399d84,_0x4604df,_0x22d578){var _0x996d8e=_0x5b65ae;let _0x3ae9f3=_0x399d84[_0x996d8e(0x200)](',')[_0x996d8e(0x28a)](_0x578d67=>{var _0x46b6a5=_0x996d8e;try{_0x15b4d4[_0x46b6a5(0x21d)]||((_0x22d578===_0x46b6a5(0x20b)||_0x22d578===_0x46b6a5(0x2a3)||_0x22d578==='astro')&&(_0x22d578+=_0x15b4d4[_0x46b6a5(0x28f)]?.[_0x46b6a5(0x2d5)]?.[_0x46b6a5(0x28d)]?_0x46b6a5(0x206):_0x46b6a5(0x290)),_0x15b4d4[_0x46b6a5(0x21d)]={'id':+new Date(),'tool':_0x22d578});let _0x1d8538=new Q(_0x15b4d4,_0x22064a,_0x578d67,_0x4604df);return _0x1d8538[_0x46b6a5(0x24d)]['bind'](_0x1d8538);}catch(_0x34eab4){return console[_0x46b6a5(0x2a5)](_0x46b6a5(0x217),_0x34eab4&&_0x34eab4[_0x46b6a5(0x27f)]),()=>{};}});return _0x232254=>_0x3ae9f3[_0x996d8e(0x20c)](_0x2cb686=>_0x2cb686(_0x232254));}function H(_0x2302ab){var _0x18af7d=_0x5b65ae;let _0x30bd5c=function(_0x4701fa,_0x563823){return _0x563823-_0x4701fa;},_0x151b7b;if(_0x2302ab['performance'])_0x151b7b=function(){var _0x3386f4=_0x1ad9;return _0x2302ab[_0x3386f4(0x2a6)]['now']();};else{if(_0x2302ab[_0x18af7d(0x28f)]&&_0x2302ab[_0x18af7d(0x28f)][_0x18af7d(0x26c)])_0x151b7b=function(){var _0xada3ec=_0x18af7d;return _0x2302ab[_0xada3ec(0x28f)][_0xada3ec(0x26c)]();},_0x30bd5c=function(_0x2920f2,_0xd5e778){return 0x3e8*(_0xd5e778[0x0]-_0x2920f2[0x0])+(_0xd5e778[0x1]-_0x2920f2[0x1])/0xf4240;};else try{let {performance:_0x408f82}=require(_0x18af7d(0x242));_0x151b7b=function(){var _0x2fd3e4=_0x18af7d;return _0x408f82[_0x2fd3e4(0x1f5)]();};}catch{_0x151b7b=function(){return+new Date();};}}return{'elapsed':_0x30bd5c,'timeStamp':_0x151b7b,'now':()=>Date[_0x18af7d(0x1f5)]()};}function X(_0x291d7d,_0x5e65a1,_0x1ee7cb){var _0x13a7e1=_0x5b65ae;if(_0x291d7d[_0x13a7e1(0x26f)]!==void 0x0)return _0x291d7d[_0x13a7e1(0x26f)];let _0x5b9a62=_0x291d7d[_0x13a7e1(0x28f)]?.[_0x13a7e1(0x2d5)]?.[_0x13a7e1(0x28d)];return _0x5b9a62&&_0x1ee7cb===_0x13a7e1(0x2cd)?_0x291d7d['_consoleNinjaAllowedToStart']=!0x1:_0x291d7d[_0x13a7e1(0x26f)]=_0x5b9a62||!_0x5e65a1||_0x291d7d['location']?.[_0x13a7e1(0x2ab)]&&_0x5e65a1[_0x13a7e1(0x2b2)](_0x291d7d[_0x13a7e1(0x24b)][_0x13a7e1(0x2ab)]),_0x291d7d['_consoleNinjaAllowedToStart'];}((_0x372a2f,_0x3e0ff3,_0x47eb3d,_0x4a884e,_0x83d97b,_0x77ff4c,_0x4af6e9,_0x3a73ff,_0x5c9995)=>{var _0xc58029=_0x5b65ae;if(_0x372a2f[_0xc58029(0x23c)])return _0x372a2f[_0xc58029(0x23c)];if(!X(_0x372a2f,_0x3a73ff,_0x83d97b))return _0x372a2f['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x372a2f[_0xc58029(0x23c)];let _0x1e2060={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x3e3aee={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x14e96b=H(_0x372a2f),_0x3f16bf=_0x14e96b['elapsed'],_0x368491=_0x14e96b[_0xc58029(0x215)],_0x42f234=_0x14e96b[_0xc58029(0x1f5)],_0x793dfe={'hits':{},'ts':{}},_0x5898f6=_0xf8926c=>{_0x793dfe['ts'][_0xf8926c]=_0x368491();},_0x89ab22=(_0x2f4b4b,_0x5f972e)=>{var _0x1f19c3=_0xc58029;let _0x295b8e=_0x793dfe['ts'][_0x5f972e];if(delete _0x793dfe['ts'][_0x5f972e],_0x295b8e){let _0x2f0335=_0x3f16bf(_0x295b8e,_0x368491());_0x4f3dc7(_0x10cae1(_0x1f19c3(0x224),_0x2f4b4b,_0x42f234(),_0x4a85ec,[_0x2f0335],_0x5f972e));}},_0x39fbe0=_0x459d1d=>_0x5b0184=>{var _0x204665=_0xc58029;try{_0x5898f6(_0x5b0184),_0x459d1d(_0x5b0184);}finally{_0x372a2f[_0x204665(0x281)]['time']=_0x459d1d;}},_0x402ca8=_0x1b32d4=>_0x345b32=>{var _0x15a10c=_0xc58029;try{let [_0x3bc07e,_0x58d5a8]=_0x345b32[_0x15a10c(0x200)](_0x15a10c(0x284));_0x89ab22(_0x58d5a8,_0x3bc07e),_0x1b32d4(_0x3bc07e);}finally{_0x372a2f[_0x15a10c(0x281)][_0x15a10c(0x269)]=_0x1b32d4;}};_0x372a2f['_console_ninja']={'consoleLog':(_0x5ec685,_0x579967)=>{var _0x4db740=_0xc58029;_0x372a2f['console']['log']['name']!==_0x4db740(0x276)&&_0x4f3dc7(_0x10cae1(_0x4db740(0x243),_0x5ec685,_0x42f234(),_0x4a85ec,_0x579967));},'consoleTrace':(_0x35562d,_0x423ebd)=>{var _0x25ff11=_0xc58029;_0x372a2f[_0x25ff11(0x281)][_0x25ff11(0x243)]['name']!==_0x25ff11(0x292)&&_0x4f3dc7(_0x10cae1(_0x25ff11(0x2d0),_0x35562d,_0x42f234(),_0x4a85ec,_0x423ebd));},'consoleTime':()=>{var _0x128ffe=_0xc58029;_0x372a2f[_0x128ffe(0x281)][_0x128ffe(0x224)]=_0x39fbe0(_0x372a2f[_0x128ffe(0x281)][_0x128ffe(0x224)]);},'consoleTimeEnd':()=>{var _0x4eee35=_0xc58029;_0x372a2f['console'][_0x4eee35(0x269)]=_0x402ca8(_0x372a2f[_0x4eee35(0x281)][_0x4eee35(0x269)]);},'autoLog':(_0x4d3610,_0x4878ea)=>{var _0x1a9d18=_0xc58029;_0x4f3dc7(_0x10cae1(_0x1a9d18(0x243),_0x4878ea,_0x42f234(),_0x4a85ec,[_0x4d3610]));},'autoTrace':(_0x4a2be8,_0x246f59)=>{var _0x464f6a=_0xc58029;_0x4f3dc7(_0x10cae1(_0x464f6a(0x2d0),_0x246f59,_0x42f234(),_0x4a85ec,[_0x4a2be8]));},'autoTime':(_0x5b0d58,_0xaf5b7,_0x55e460)=>{_0x5898f6(_0x55e460);},'autoTimeEnd':(_0x1feb53,_0x130a7b,_0x5c9012)=>{_0x89ab22(_0x130a7b,_0x5c9012);}};let _0x4f3dc7=V(_0x372a2f,_0x3e0ff3,_0x47eb3d,_0x4a884e,_0x83d97b),_0x4a85ec=_0x372a2f[_0xc58029(0x21d)];class _0x1ae7d4{constructor(){var _0x1486f4=_0xc58029;this[_0x1486f4(0x1f4)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x1486f4(0x2c7)]=/^(0|[1-9][0-9]*)$/,this[_0x1486f4(0x219)]=/'([^\\\\']|\\\\')*'/,this[_0x1486f4(0x265)]=_0x372a2f['undefined'],this['_HTMLAllCollection']=_0x372a2f['HTMLAllCollection'],this[_0x1486f4(0x2b6)]=Object[_0x1486f4(0x23e)],this[_0x1486f4(0x247)]=Object[_0x1486f4(0x21e)],this[_0x1486f4(0x2c3)]=_0x372a2f[_0x1486f4(0x29a)],this[_0x1486f4(0x2a9)]=RegExp['prototype'][_0x1486f4(0x2cc)],this['_dateToString']=Date[_0x1486f4(0x2b5)][_0x1486f4(0x2cc)];}[_0xc58029(0x254)](_0x362a6f,_0x453b72,_0x400020,_0x30f41e){var _0x753c00=_0xc58029,_0x59ed99=this,_0x4bd0ee=_0x400020[_0x753c00(0x23a)];function _0x1c5131(_0x1feadb,_0x816b47,_0x328ae6){var _0xc22720=_0x753c00;_0x816b47[_0xc22720(0x1fb)]=_0xc22720(0x20d),_0x816b47['error']=_0x1feadb[_0xc22720(0x27f)],_0x205dff=_0x328ae6[_0xc22720(0x28d)]['current'],_0x328ae6['node'][_0xc22720(0x1f9)]=_0x816b47,_0x59ed99[_0xc22720(0x20a)](_0x816b47,_0x328ae6);}if(_0x453b72&&_0x453b72[_0x753c00(0x26a)])_0x1c5131(_0x453b72,_0x362a6f,_0x400020);else try{_0x400020[_0x753c00(0x1f3)]++,_0x400020['autoExpand']&&_0x400020[_0x753c00(0x252)]['push'](_0x453b72);var _0x5ec9cd,_0x2f2630,_0xf9e191,_0x504866,_0x3b5c32=[],_0xe32ee5=[],_0x1989ba,_0x4b275b=this[_0x753c00(0x236)](_0x453b72),_0x2d738f=_0x4b275b==='array',_0x376c08=!0x1,_0x2fd23d=_0x4b275b===_0x753c00(0x1f0),_0x3596e7=this[_0x753c00(0x225)](_0x4b275b),_0x1cca89=this[_0x753c00(0x220)](_0x4b275b),_0x3ee0ab=_0x3596e7||_0x1cca89,_0x120ba9={},_0x2fc20c=0x0,_0x1d3f35=!0x1,_0x205dff,_0x352b65=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x400020[_0x753c00(0x27c)]){if(_0x2d738f){if(_0x2f2630=_0x453b72[_0x753c00(0x22d)],_0x2f2630>_0x400020['elements']){for(_0xf9e191=0x0,_0x504866=_0x400020[_0x753c00(0x2da)],_0x5ec9cd=_0xf9e191;_0x5ec9cd<_0x504866;_0x5ec9cd++)_0xe32ee5['push'](_0x59ed99['_addProperty'](_0x3b5c32,_0x453b72,_0x4b275b,_0x5ec9cd,_0x400020));_0x362a6f[_0x753c00(0x258)]=!0x0;}else{for(_0xf9e191=0x0,_0x504866=_0x2f2630,_0x5ec9cd=_0xf9e191;_0x5ec9cd<_0x504866;_0x5ec9cd++)_0xe32ee5[_0x753c00(0x279)](_0x59ed99[_0x753c00(0x2ad)](_0x3b5c32,_0x453b72,_0x4b275b,_0x5ec9cd,_0x400020));}_0x400020[_0x753c00(0x226)]+=_0xe32ee5['length'];}if(!(_0x4b275b===_0x753c00(0x294)||_0x4b275b==='undefined')&&!_0x3596e7&&_0x4b275b!==_0x753c00(0x2ae)&&_0x4b275b!==_0x753c00(0x218)&&_0x4b275b!==_0x753c00(0x2a2)){var _0x339a81=_0x30f41e[_0x753c00(0x2d7)]||_0x400020[_0x753c00(0x2d7)];if(this[_0x753c00(0x248)](_0x453b72)?(_0x5ec9cd=0x0,_0x453b72[_0x753c00(0x20c)](function(_0x363a14){var _0x3faea7=_0x753c00;if(_0x2fc20c++,_0x400020['autoExpandPropertyCount']++,_0x2fc20c>_0x339a81){_0x1d3f35=!0x0;return;}if(!_0x400020['isExpressionToEvaluate']&&_0x400020[_0x3faea7(0x23a)]&&_0x400020[_0x3faea7(0x226)]>_0x400020[_0x3faea7(0x2aa)]){_0x1d3f35=!0x0;return;}_0xe32ee5[_0x3faea7(0x279)](_0x59ed99['_addProperty'](_0x3b5c32,_0x453b72,_0x3faea7(0x2ac),_0x5ec9cd++,_0x400020,function(_0x354f89){return function(){return _0x354f89;};}(_0x363a14)));})):this[_0x753c00(0x271)](_0x453b72)&&_0x453b72['forEach'](function(_0x2bdad5,_0x500da9){var _0x591456=_0x753c00;if(_0x2fc20c++,_0x400020[_0x591456(0x226)]++,_0x2fc20c>_0x339a81){_0x1d3f35=!0x0;return;}if(!_0x400020[_0x591456(0x280)]&&_0x400020[_0x591456(0x23a)]&&_0x400020[_0x591456(0x226)]>_0x400020['autoExpandLimit']){_0x1d3f35=!0x0;return;}var _0x336d28=_0x500da9['toString']();_0x336d28[_0x591456(0x22d)]>0x64&&(_0x336d28=_0x336d28[_0x591456(0x232)](0x0,0x64)+_0x591456(0x21a)),_0xe32ee5['push'](_0x59ed99[_0x591456(0x2ad)](_0x3b5c32,_0x453b72,_0x591456(0x241),_0x336d28,_0x400020,function(_0x1a23c6){return function(){return _0x1a23c6;};}(_0x2bdad5)));}),!_0x376c08){try{for(_0x1989ba in _0x453b72)if(!(_0x2d738f&&_0x352b65['test'](_0x1989ba))&&!this['_blacklistedProperty'](_0x453b72,_0x1989ba,_0x400020)){if(_0x2fc20c++,_0x400020[_0x753c00(0x226)]++,_0x2fc20c>_0x339a81){_0x1d3f35=!0x0;break;}if(!_0x400020[_0x753c00(0x280)]&&_0x400020[_0x753c00(0x23a)]&&_0x400020[_0x753c00(0x226)]>_0x400020[_0x753c00(0x2aa)]){_0x1d3f35=!0x0;break;}_0xe32ee5[_0x753c00(0x279)](_0x59ed99[_0x753c00(0x270)](_0x3b5c32,_0x120ba9,_0x453b72,_0x4b275b,_0x1989ba,_0x400020));}}catch{}if(_0x120ba9[_0x753c00(0x216)]=!0x0,_0x2fd23d&&(_0x120ba9[_0x753c00(0x282)]=!0x0),!_0x1d3f35){var _0x2fd771=[][_0x753c00(0x2d6)](this[_0x753c00(0x247)](_0x453b72))[_0x753c00(0x2d6)](this[_0x753c00(0x2c5)](_0x453b72));for(_0x5ec9cd=0x0,_0x2f2630=_0x2fd771[_0x753c00(0x22d)];_0x5ec9cd<_0x2f2630;_0x5ec9cd++)if(_0x1989ba=_0x2fd771[_0x5ec9cd],!(_0x2d738f&&_0x352b65[_0x753c00(0x288)](_0x1989ba[_0x753c00(0x2cc)]()))&&!this['_blacklistedProperty'](_0x453b72,_0x1989ba,_0x400020)&&!_0x120ba9[_0x753c00(0x2c2)+_0x1989ba[_0x753c00(0x2cc)]()]){if(_0x2fc20c++,_0x400020[_0x753c00(0x226)]++,_0x2fc20c>_0x339a81){_0x1d3f35=!0x0;break;}if(!_0x400020[_0x753c00(0x280)]&&_0x400020[_0x753c00(0x23a)]&&_0x400020[_0x753c00(0x226)]>_0x400020['autoExpandLimit']){_0x1d3f35=!0x0;break;}_0xe32ee5[_0x753c00(0x279)](_0x59ed99[_0x753c00(0x270)](_0x3b5c32,_0x120ba9,_0x453b72,_0x4b275b,_0x1989ba,_0x400020));}}}}}if(_0x362a6f['type']=_0x4b275b,_0x3ee0ab?(_0x362a6f[_0x753c00(0x253)]=_0x453b72[_0x753c00(0x1f1)](),this[_0x753c00(0x244)](_0x4b275b,_0x362a6f,_0x400020,_0x30f41e)):_0x4b275b===_0x753c00(0x1fe)?_0x362a6f[_0x753c00(0x253)]=this[_0x753c00(0x210)][_0x753c00(0x22e)](_0x453b72):_0x4b275b===_0x753c00(0x2a2)?_0x362a6f['value']=_0x453b72['toString']():_0x4b275b===_0x753c00(0x20f)?_0x362a6f[_0x753c00(0x253)]=this['_regExpToString'][_0x753c00(0x22e)](_0x453b72):_0x4b275b===_0x753c00(0x22b)&&this[_0x753c00(0x2c3)]?_0x362a6f[_0x753c00(0x253)]=this[_0x753c00(0x2c3)][_0x753c00(0x2b5)][_0x753c00(0x2cc)][_0x753c00(0x22e)](_0x453b72):!_0x400020['depth']&&!(_0x4b275b===_0x753c00(0x294)||_0x4b275b===_0x753c00(0x1ef))&&(delete _0x362a6f['value'],_0x362a6f[_0x753c00(0x2d1)]=!0x0),_0x1d3f35&&(_0x362a6f[_0x753c00(0x2d9)]=!0x0),_0x205dff=_0x400020[_0x753c00(0x28d)][_0x753c00(0x1f9)],_0x400020[_0x753c00(0x28d)][_0x753c00(0x1f9)]=_0x362a6f,this[_0x753c00(0x20a)](_0x362a6f,_0x400020),_0xe32ee5[_0x753c00(0x22d)]){for(_0x5ec9cd=0x0,_0x2f2630=_0xe32ee5[_0x753c00(0x22d)];_0x5ec9cd<_0x2f2630;_0x5ec9cd++)_0xe32ee5[_0x5ec9cd](_0x5ec9cd);}_0x3b5c32[_0x753c00(0x22d)]&&(_0x362a6f['props']=_0x3b5c32);}catch(_0x1ea2b3){_0x1c5131(_0x1ea2b3,_0x362a6f,_0x400020);}return this[_0x753c00(0x234)](_0x453b72,_0x362a6f),this[_0x753c00(0x27e)](_0x362a6f,_0x400020),_0x400020[_0x753c00(0x28d)][_0x753c00(0x1f9)]=_0x205dff,_0x400020[_0x753c00(0x1f3)]--,_0x400020['autoExpand']=_0x4bd0ee,_0x400020[_0x753c00(0x23a)]&&_0x400020['autoExpandPreviousObjects'][_0x753c00(0x263)](),_0x362a6f;}[_0xc58029(0x2c5)](_0x2f9708){var _0x5e537c=_0xc58029;return Object[_0x5e537c(0x25a)]?Object[_0x5e537c(0x25a)](_0x2f9708):[];}[_0xc58029(0x248)](_0x4b5e55){var _0x25a41d=_0xc58029;return!!(_0x4b5e55&&_0x372a2f[_0x25a41d(0x2ac)]&&this[_0x25a41d(0x268)](_0x4b5e55)===_0x25a41d(0x2a8)&&_0x4b5e55[_0x25a41d(0x20c)]);}[_0xc58029(0x239)](_0x2125e1,_0x334c7d,_0x244e6e){var _0x522912=_0xc58029;return _0x244e6e[_0x522912(0x2c9)]?typeof _0x2125e1[_0x334c7d]==_0x522912(0x1f0):!0x1;}[_0xc58029(0x236)](_0x3768d5){var _0x2118c9=_0xc58029,_0x4dd151='';return _0x4dd151=typeof _0x3768d5,_0x4dd151===_0x2118c9(0x2c0)?this[_0x2118c9(0x268)](_0x3768d5)==='[object\\x20Array]'?_0x4dd151=_0x2118c9(0x25d):this[_0x2118c9(0x268)](_0x3768d5)===_0x2118c9(0x204)?_0x4dd151=_0x2118c9(0x1fe):this[_0x2118c9(0x268)](_0x3768d5)===_0x2118c9(0x205)?_0x4dd151='bigint':_0x3768d5===null?_0x4dd151=_0x2118c9(0x294):_0x3768d5[_0x2118c9(0x298)]&&(_0x4dd151=_0x3768d5[_0x2118c9(0x298)][_0x2118c9(0x1fd)]||_0x4dd151):_0x4dd151==='undefined'&&this[_0x2118c9(0x249)]&&_0x3768d5 instanceof this[_0x2118c9(0x249)]&&(_0x4dd151=_0x2118c9(0x278)),_0x4dd151;}[_0xc58029(0x268)](_0x4ace5d){var _0x5c96d7=_0xc58029;return Object[_0x5c96d7(0x2b5)][_0x5c96d7(0x2cc)][_0x5c96d7(0x22e)](_0x4ace5d);}[_0xc58029(0x225)](_0x4c6acb){var _0x1fbcc8=_0xc58029;return _0x4c6acb===_0x1fbcc8(0x2ca)||_0x4c6acb===_0x1fbcc8(0x2c8)||_0x4c6acb===_0x1fbcc8(0x24e);}['_isPrimitiveWrapperType'](_0x37dd65){var _0x1fe9f3=_0xc58029;return _0x37dd65===_0x1fe9f3(0x22a)||_0x37dd65===_0x1fe9f3(0x2ae)||_0x37dd65===_0x1fe9f3(0x207);}[_0xc58029(0x2ad)](_0x151846,_0x128875,_0x3ce0fb,_0x499774,_0x24c725,_0x2b4204){var _0x1a6828=this;return function(_0x4ce70c){var _0x49dae5=_0x1ad9,_0x5f44ee=_0x24c725[_0x49dae5(0x28d)][_0x49dae5(0x1f9)],_0x59d2a4=_0x24c725[_0x49dae5(0x28d)][_0x49dae5(0x2af)],_0x4d5999=_0x24c725[_0x49dae5(0x28d)]['parent'];_0x24c725[_0x49dae5(0x28d)]['parent']=_0x5f44ee,_0x24c725['node'][_0x49dae5(0x2af)]=typeof _0x499774==_0x49dae5(0x24e)?_0x499774:_0x4ce70c,_0x151846[_0x49dae5(0x279)](_0x1a6828[_0x49dae5(0x1ff)](_0x128875,_0x3ce0fb,_0x499774,_0x24c725,_0x2b4204)),_0x24c725[_0x49dae5(0x28d)][_0x49dae5(0x221)]=_0x4d5999,_0x24c725[_0x49dae5(0x28d)][_0x49dae5(0x2af)]=_0x59d2a4;};}['_addObjectProperty'](_0x5cf2be,_0x2d264d,_0xc3b5e1,_0x5ea3ab,_0x5b0b8a,_0x56f6de,_0xcf1a14){var _0x2e4469=_0xc58029,_0x835d73=this;return _0x2d264d[_0x2e4469(0x2c2)+_0x5b0b8a[_0x2e4469(0x2cc)]()]=!0x0,function(_0x105e87){var _0xc83f2c=_0x2e4469,_0x2188ef=_0x56f6de[_0xc83f2c(0x28d)][_0xc83f2c(0x1f9)],_0xc99380=_0x56f6de['node'][_0xc83f2c(0x2af)],_0xcd46e8=_0x56f6de[_0xc83f2c(0x28d)][_0xc83f2c(0x221)];_0x56f6de[_0xc83f2c(0x28d)][_0xc83f2c(0x221)]=_0x2188ef,_0x56f6de[_0xc83f2c(0x28d)][_0xc83f2c(0x2af)]=_0x105e87,_0x5cf2be[_0xc83f2c(0x279)](_0x835d73['_property'](_0xc3b5e1,_0x5ea3ab,_0x5b0b8a,_0x56f6de,_0xcf1a14)),_0x56f6de[_0xc83f2c(0x28d)][_0xc83f2c(0x221)]=_0xcd46e8,_0x56f6de[_0xc83f2c(0x28d)]['index']=_0xc99380;};}[_0xc58029(0x1ff)](_0x238b41,_0x4ccebe,_0x41aac8,_0x5a70c0,_0x3dfb82){var _0x2775fa=_0xc58029,_0x25c284=this;_0x3dfb82||(_0x3dfb82=function(_0x56979f,_0x16166f){return _0x56979f[_0x16166f];});var _0x3e70d5=_0x41aac8[_0x2775fa(0x2cc)](),_0x38e6ac=_0x5a70c0['expressionsToEvaluate']||{},_0x106715=_0x5a70c0[_0x2775fa(0x27c)],_0x1442bb=_0x5a70c0['isExpressionToEvaluate'];try{var _0x87f529=this[_0x2775fa(0x271)](_0x238b41),_0x51796d=_0x3e70d5;_0x87f529&&_0x51796d[0x0]==='\\x27'&&(_0x51796d=_0x51796d[_0x2775fa(0x261)](0x1,_0x51796d[_0x2775fa(0x22d)]-0x2));var _0x50b8fa=_0x5a70c0[_0x2775fa(0x299)]=_0x38e6ac[_0x2775fa(0x2c2)+_0x51796d];_0x50b8fa&&(_0x5a70c0[_0x2775fa(0x27c)]=_0x5a70c0[_0x2775fa(0x27c)]+0x1),_0x5a70c0[_0x2775fa(0x280)]=!!_0x50b8fa;var _0x5711d0=typeof _0x41aac8==_0x2775fa(0x22b),_0xd04337={'name':_0x5711d0||_0x87f529?_0x3e70d5:this['_propertyName'](_0x3e70d5)};if(_0x5711d0&&(_0xd04337[_0x2775fa(0x22b)]=!0x0),!(_0x4ccebe===_0x2775fa(0x25d)||_0x4ccebe===_0x2775fa(0x260))){var _0x4f64dd=this['_getOwnPropertyDescriptor'](_0x238b41,_0x41aac8);if(_0x4f64dd&&(_0x4f64dd[_0x2775fa(0x212)]&&(_0xd04337[_0x2775fa(0x2c6)]=!0x0),_0x4f64dd['get']&&!_0x50b8fa&&!_0x5a70c0[_0x2775fa(0x2cb)]))return _0xd04337[_0x2775fa(0x283)]=!0x0,this[_0x2775fa(0x28b)](_0xd04337,_0x5a70c0),_0xd04337;}var _0x2fd050;try{_0x2fd050=_0x3dfb82(_0x238b41,_0x41aac8);}catch(_0x16b3f2){return _0xd04337={'name':_0x3e70d5,'type':_0x2775fa(0x20d),'error':_0x16b3f2['message']},this['_processTreeNodeResult'](_0xd04337,_0x5a70c0),_0xd04337;}var _0x466c5b=this['_type'](_0x2fd050),_0x2fa9a7=this[_0x2775fa(0x225)](_0x466c5b);if(_0xd04337[_0x2775fa(0x1fb)]=_0x466c5b,_0x2fa9a7)this[_0x2775fa(0x28b)](_0xd04337,_0x5a70c0,_0x2fd050,function(){var _0x3a4081=_0x2775fa;_0xd04337[_0x3a4081(0x253)]=_0x2fd050['valueOf'](),!_0x50b8fa&&_0x25c284[_0x3a4081(0x244)](_0x466c5b,_0xd04337,_0x5a70c0,{});});else{var _0x464fe7=_0x5a70c0[_0x2775fa(0x23a)]&&_0x5a70c0[_0x2775fa(0x1f3)]<_0x5a70c0[_0x2775fa(0x214)]&&_0x5a70c0[_0x2775fa(0x252)][_0x2775fa(0x275)](_0x2fd050)<0x0&&_0x466c5b!=='function'&&_0x5a70c0['autoExpandPropertyCount']<_0x5a70c0['autoExpandLimit'];_0x464fe7||_0x5a70c0['level']<_0x106715||_0x50b8fa?(this[_0x2775fa(0x254)](_0xd04337,_0x2fd050,_0x5a70c0,_0x50b8fa||{}),this[_0x2775fa(0x234)](_0x2fd050,_0xd04337)):this[_0x2775fa(0x28b)](_0xd04337,_0x5a70c0,_0x2fd050,function(){var _0x2ccc15=_0x2775fa;_0x466c5b===_0x2ccc15(0x294)||_0x466c5b===_0x2ccc15(0x1ef)||(delete _0xd04337['value'],_0xd04337[_0x2ccc15(0x2d1)]=!0x0);});}return _0xd04337;}finally{_0x5a70c0[_0x2775fa(0x299)]=_0x38e6ac,_0x5a70c0[_0x2775fa(0x27c)]=_0x106715,_0x5a70c0[_0x2775fa(0x280)]=_0x1442bb;}}[_0xc58029(0x244)](_0x42ac20,_0x246c78,_0x1894bd,_0x528869){var _0x5d40f2=_0xc58029,_0x3ba7e0=_0x528869['strLength']||_0x1894bd[_0x5d40f2(0x273)];if((_0x42ac20==='string'||_0x42ac20===_0x5d40f2(0x2ae))&&_0x246c78[_0x5d40f2(0x253)]){let _0x1422f7=_0x246c78[_0x5d40f2(0x253)]['length'];_0x1894bd[_0x5d40f2(0x1f8)]+=_0x1422f7,_0x1894bd['allStrLength']>_0x1894bd[_0x5d40f2(0x2c1)]?(_0x246c78['capped']='',delete _0x246c78[_0x5d40f2(0x253)]):_0x1422f7>_0x3ba7e0&&(_0x246c78[_0x5d40f2(0x2d1)]=_0x246c78[_0x5d40f2(0x253)][_0x5d40f2(0x261)](0x0,_0x3ba7e0),delete _0x246c78['value']);}}[_0xc58029(0x271)](_0x1d197a){var _0x516613=_0xc58029;return!!(_0x1d197a&&_0x372a2f[_0x516613(0x241)]&&this[_0x516613(0x268)](_0x1d197a)===_0x516613(0x285)&&_0x1d197a[_0x516613(0x20c)]);}[_0xc58029(0x201)](_0x1f4af8){var _0x329593=_0xc58029;if(_0x1f4af8['match'](/^\\d+$/))return _0x1f4af8;var _0xe3b70a;try{_0xe3b70a=JSON[_0x329593(0x266)](''+_0x1f4af8);}catch{_0xe3b70a='\\x22'+this[_0x329593(0x268)](_0x1f4af8)+'\\x22';}return _0xe3b70a[_0x329593(0x257)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0xe3b70a=_0xe3b70a[_0x329593(0x261)](0x1,_0xe3b70a[_0x329593(0x22d)]-0x2):_0xe3b70a=_0xe3b70a['replace'](/'/g,'\\x5c\\x27')[_0x329593(0x27b)](/\\\\"/g,'\\x22')[_0x329593(0x27b)](/(^"|"$)/g,'\\x27'),_0xe3b70a;}[_0xc58029(0x28b)](_0x4956fe,_0x1a3226,_0xa21d78,_0x15453a){var _0x36d7b0=_0xc58029;this['_treeNodePropertiesBeforeFullValue'](_0x4956fe,_0x1a3226),_0x15453a&&_0x15453a(),this[_0x36d7b0(0x234)](_0xa21d78,_0x4956fe),this[_0x36d7b0(0x27e)](_0x4956fe,_0x1a3226);}[_0xc58029(0x20a)](_0x481b11,_0x51f8c9){var _0x75b509=_0xc58029;this[_0x75b509(0x20e)](_0x481b11,_0x51f8c9),this[_0x75b509(0x267)](_0x481b11,_0x51f8c9),this[_0x75b509(0x1f6)](_0x481b11,_0x51f8c9),this[_0x75b509(0x250)](_0x481b11,_0x51f8c9);}[_0xc58029(0x20e)](_0x10e3e6,_0x522b37){}[_0xc58029(0x267)](_0x36f07c,_0xb037ef){}[_0xc58029(0x264)](_0x14b0d4,_0xd682f2){}['_isUndefined'](_0x151d1c){return _0x151d1c===this['_undefined'];}[_0xc58029(0x27e)](_0x23ae17,_0x3ef0b3){var _0x45f5c9=_0xc58029;this[_0x45f5c9(0x264)](_0x23ae17,_0x3ef0b3),this['_setNodeExpandableState'](_0x23ae17),_0x3ef0b3[_0x45f5c9(0x2bd)]&&this[_0x45f5c9(0x286)](_0x23ae17),this[_0x45f5c9(0x293)](_0x23ae17,_0x3ef0b3),this[_0x45f5c9(0x287)](_0x23ae17,_0x3ef0b3),this[_0x45f5c9(0x25e)](_0x23ae17);}[_0xc58029(0x234)](_0x2031c1,_0x3a4e4d){var _0x190e26=_0xc58029;try{_0x2031c1&&typeof _0x2031c1[_0x190e26(0x22d)]==_0x190e26(0x24e)&&(_0x3a4e4d[_0x190e26(0x22d)]=_0x2031c1[_0x190e26(0x22d)]);}catch{}if(_0x3a4e4d['type']==='number'||_0x3a4e4d[_0x190e26(0x1fb)]===_0x190e26(0x207)){if(isNaN(_0x3a4e4d[_0x190e26(0x253)]))_0x3a4e4d['nan']=!0x0,delete _0x3a4e4d[_0x190e26(0x253)];else switch(_0x3a4e4d['value']){case Number[_0x190e26(0x2d2)]:_0x3a4e4d[_0x190e26(0x25b)]=!0x0,delete _0x3a4e4d[_0x190e26(0x253)];break;case Number[_0x190e26(0x2b9)]:_0x3a4e4d[_0x190e26(0x230)]=!0x0,delete _0x3a4e4d['value'];break;case 0x0:this[_0x190e26(0x2cf)](_0x3a4e4d[_0x190e26(0x253)])&&(_0x3a4e4d[_0x190e26(0x26d)]=!0x0);break;}}else _0x3a4e4d['type']===_0x190e26(0x1f0)&&typeof _0x2031c1[_0x190e26(0x1fd)]==_0x190e26(0x2c8)&&_0x2031c1['name']&&_0x3a4e4d['name']&&_0x2031c1[_0x190e26(0x1fd)]!==_0x3a4e4d[_0x190e26(0x1fd)]&&(_0x3a4e4d[_0x190e26(0x29c)]=_0x2031c1[_0x190e26(0x1fd)]);}[_0xc58029(0x2cf)](_0x1bf00b){var _0x2ce1b7=_0xc58029;return 0x1/_0x1bf00b===Number[_0x2ce1b7(0x2b9)];}[_0xc58029(0x286)](_0x36e25f){var _0x595d85=_0xc58029;!_0x36e25f['props']||!_0x36e25f[_0x595d85(0x2d7)][_0x595d85(0x22d)]||_0x36e25f[_0x595d85(0x1fb)]===_0x595d85(0x25d)||_0x36e25f['type']===_0x595d85(0x241)||_0x36e25f[_0x595d85(0x1fb)]===_0x595d85(0x2ac)||_0x36e25f[_0x595d85(0x2d7)][_0x595d85(0x211)](function(_0x2eea19,_0x24e5e2){var _0x4eafc1=_0x595d85,_0x2fbd21=_0x2eea19[_0x4eafc1(0x1fd)][_0x4eafc1(0x227)](),_0x19e5b5=_0x24e5e2[_0x4eafc1(0x1fd)]['toLowerCase']();return _0x2fbd21<_0x19e5b5?-0x1:_0x2fbd21>_0x19e5b5?0x1:0x0;});}[_0xc58029(0x293)](_0x56540c,_0x5975e8){var _0x4a3a8f=_0xc58029;if(!(_0x5975e8[_0x4a3a8f(0x2c9)]||!_0x56540c['props']||!_0x56540c[_0x4a3a8f(0x2d7)][_0x4a3a8f(0x22d)])){for(var _0x5eec4b=[],_0x4c5b42=[],_0x32e65d=0x0,_0x4579e1=_0x56540c[_0x4a3a8f(0x2d7)][_0x4a3a8f(0x22d)];_0x32e65d<_0x4579e1;_0x32e65d++){var _0x19feef=_0x56540c[_0x4a3a8f(0x2d7)][_0x32e65d];_0x19feef[_0x4a3a8f(0x1fb)]===_0x4a3a8f(0x1f0)?_0x5eec4b['push'](_0x19feef):_0x4c5b42['push'](_0x19feef);}if(!(!_0x4c5b42[_0x4a3a8f(0x22d)]||_0x5eec4b[_0x4a3a8f(0x22d)]<=0x1)){_0x56540c['props']=_0x4c5b42;var _0x1af482={'functionsNode':!0x0,'props':_0x5eec4b};this[_0x4a3a8f(0x20e)](_0x1af482,_0x5975e8),this[_0x4a3a8f(0x264)](_0x1af482,_0x5975e8),this['_setNodeExpandableState'](_0x1af482),this['_setNodePermissions'](_0x1af482,_0x5975e8),_0x1af482['id']+='\\x20f',_0x56540c['props'][_0x4a3a8f(0x2a1)](_0x1af482);}}}[_0xc58029(0x287)](_0x587b26,_0x3d5e6a){}['_setNodeExpandableState'](_0x42d149){}['_isArray'](_0x28ba0f){var _0x38f891=_0xc58029;return Array[_0x38f891(0x1f2)](_0x28ba0f)||typeof _0x28ba0f=='object'&&this[_0x38f891(0x268)](_0x28ba0f)==='[object\\x20Array]';}[_0xc58029(0x250)](_0x2968b3,_0x3b3a0e){}[_0xc58029(0x25e)](_0x4ebab8){var _0x10a259=_0xc58029;delete _0x4ebab8[_0x10a259(0x235)],delete _0x4ebab8[_0x10a259(0x25c)],delete _0x4ebab8[_0x10a259(0x2bc)];}[_0xc58029(0x1f6)](_0x5e86b2,_0x282cab){}[_0xc58029(0x2d3)](_0x18954f){var _0x4e974a=_0xc58029;return _0x18954f?_0x18954f['match'](this[_0x4e974a(0x2c7)])?'['+_0x18954f+']':_0x18954f['match'](this[_0x4e974a(0x1f4)])?'.'+_0x18954f:_0x18954f[_0x4e974a(0x257)](this[_0x4e974a(0x219)])?'['+_0x18954f+']':'[\\x27'+_0x18954f+'\\x27]':'';}}let _0x56d998=new _0x1ae7d4();function _0x10cae1(_0x3d8cf1,_0x24b4e6,_0xdf8570,_0x3e180d,_0x31ee80,_0x1a8000){var _0x1e6707=_0xc58029;let _0x565354,_0x314a17;try{_0x314a17=_0x368491(),_0x565354=_0x793dfe[_0x24b4e6],!_0x565354||_0x314a17-_0x565354['ts']>0x1f4&&_0x565354[_0x1e6707(0x21b)]&&_0x565354['time']/_0x565354[_0x1e6707(0x21b)]<0x64?(_0x793dfe[_0x24b4e6]=_0x565354={'count':0x0,'time':0x0,'ts':_0x314a17},_0x793dfe[_0x1e6707(0x245)]={}):_0x314a17-_0x793dfe[_0x1e6707(0x245)]['ts']>0x32&&_0x793dfe[_0x1e6707(0x245)]['count']&&_0x793dfe[_0x1e6707(0x245)][_0x1e6707(0x224)]/_0x793dfe[_0x1e6707(0x245)][_0x1e6707(0x21b)]<0x64&&(_0x793dfe[_0x1e6707(0x245)]={});let _0x40e0aa=[],_0x155284=_0x565354[_0x1e6707(0x24c)]||_0x793dfe[_0x1e6707(0x245)][_0x1e6707(0x24c)]?_0x3e3aee:_0x1e2060,_0x4211f5=_0x3dc4b2=>{var _0x425951=_0x1e6707;let _0x217229={};return _0x217229['props']=_0x3dc4b2[_0x425951(0x2d7)],_0x217229[_0x425951(0x2da)]=_0x3dc4b2[_0x425951(0x2da)],_0x217229[_0x425951(0x273)]=_0x3dc4b2[_0x425951(0x273)],_0x217229[_0x425951(0x2c1)]=_0x3dc4b2[_0x425951(0x2c1)],_0x217229[_0x425951(0x2aa)]=_0x3dc4b2[_0x425951(0x2aa)],_0x217229[_0x425951(0x214)]=_0x3dc4b2[_0x425951(0x214)],_0x217229['sortProps']=!0x1,_0x217229['noFunctions']=!_0x5c9995,_0x217229[_0x425951(0x27c)]=0x1,_0x217229[_0x425951(0x1f3)]=0x0,_0x217229[_0x425951(0x289)]=_0x425951(0x2a0),_0x217229[_0x425951(0x213)]=_0x425951(0x222),_0x217229['autoExpand']=!0x0,_0x217229['autoExpandPreviousObjects']=[],_0x217229[_0x425951(0x226)]=0x0,_0x217229[_0x425951(0x2cb)]=!0x0,_0x217229[_0x425951(0x1f8)]=0x0,_0x217229[_0x425951(0x28d)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x217229;};for(var _0x364558=0x0;_0x364558<_0x31ee80['length'];_0x364558++)_0x40e0aa[_0x1e6707(0x279)](_0x56d998['serialize']({'timeNode':_0x3d8cf1===_0x1e6707(0x224)||void 0x0},_0x31ee80[_0x364558],_0x4211f5(_0x155284),{}));if(_0x3d8cf1==='trace'){let _0x396e60=Error[_0x1e6707(0x2bf)];try{Error[_0x1e6707(0x2bf)]=0x1/0x0,_0x40e0aa[_0x1e6707(0x279)](_0x56d998['serialize']({'stackNode':!0x0},new Error()['stack'],_0x4211f5(_0x155284),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x396e60;}}return{'method':_0x1e6707(0x243),'version':_0x77ff4c,'args':[{'ts':_0xdf8570,'session':_0x3e180d,'args':_0x40e0aa,'id':_0x24b4e6,'context':_0x1a8000}]};}catch(_0x2c4590){return{'method':'log','version':_0x77ff4c,'args':[{'ts':_0xdf8570,'session':_0x3e180d,'args':[{'type':_0x1e6707(0x20d),'error':_0x2c4590&&_0x2c4590['message']}],'id':_0x24b4e6,'context':_0x1a8000}]};}finally{try{if(_0x565354&&_0x314a17){let _0x53e16f=_0x368491();_0x565354[_0x1e6707(0x21b)]++,_0x565354[_0x1e6707(0x224)]+=_0x3f16bf(_0x314a17,_0x53e16f),_0x565354['ts']=_0x53e16f,_0x793dfe[_0x1e6707(0x245)]['count']++,_0x793dfe['hits'][_0x1e6707(0x224)]+=_0x3f16bf(_0x314a17,_0x53e16f),_0x793dfe[_0x1e6707(0x245)]['ts']=_0x53e16f,(_0x565354[_0x1e6707(0x21b)]>0x32||_0x565354[_0x1e6707(0x224)]>0x64)&&(_0x565354[_0x1e6707(0x24c)]=!0x0),(_0x793dfe[_0x1e6707(0x245)][_0x1e6707(0x21b)]>0x3e8||_0x793dfe['hits'][_0x1e6707(0x224)]>0x12c)&&(_0x793dfe[_0x1e6707(0x245)][_0x1e6707(0x24c)]=!0x0);}}catch{}}}return _0x372a2f[_0xc58029(0x23c)];})(globalThis,'127.0.0.1','53508',_0x5b65ae(0x238),'remix',_0x5b65ae(0x2a4),_0x5b65ae(0x23d),["localhost","127.0.0.1","example.cypress.io","Mati69lbt","192.168.0.177"],_0x5b65ae(0x27d));`);
  } catch {
  }
}
function oo_oo(i, ...v) {
  try {
    oo_cm().consoleLog(i, v);
  } catch {
  }
  return v;
}

// app/routes/guitarras.$guitarraUrls.jsx
var guitarras_guitarraUrls_exports = {};
__export(guitarras_guitarraUrls_exports, {
  default: () => guitarras_guitarraUrls_default,
  loader: () => loader,
  meta: () => meta2
});
var import_react6 = require("@remix-run/react"), import_react7 = require("react");

// app/models/guitarras.server.js
async function getGuitarras() {
  let url = process.env.API_URL;
  return await (await fetch(`${url}/guitarras?populate=Imagen`)).json();
}
async function getGuitarra(url) {
  let urlApi = process.env.API_URL;
  return await (await fetch(
    `${urlApi}/guitarras?filters[url]=${url}&populate=Imagen`
  )).json();
}

// app/routes/guitarras.$guitarraUrls.jsx
var import_jsx_runtime6 = require("react/jsx-runtime");
async function loader({ params }) {
  let { guitarraUrls } = params, guitarra = await getGuitarra(guitarraUrls);
  if (guitarra.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada"
    });
  return { guitarra };
}
function meta2({ data }) {
  return data ? [
    { title: `GuitarLA - ${data.guitarra.data[0].attributes.nombre}` },
    {
      description: "Venta de Guitarras, Blog de Musica, Coleccion de guitarras, guitarras baratas"
    }
  ] : [{ title: "GuitarLA" }, { description: "Guitarra no encontrada" }];
}
var Guitarra = () => {
  let { agregarCarrito } = (0, import_react6.useOutletContext)(), [cantidad, setCantidad] = (0, import_react7.useState)(0), { guitarra } = (0, import_react6.useLoaderData)(), { nombre, descripcion, Imagen, precio } = guitarra.data[0].attributes, img = Imagen.data.attributes.url;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("img", { src: img, alt: nombre, className: "imagen" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { children: nombre }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "texto", children: descripcion }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", { className: "precio", children: [
        "U$D ",
        precio
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("form", { className: "formulario", onSubmit: (e) => {
        if (e.preventDefault(), cantidad < 1) {
          alert("Seleccionar Cantidad");
          return;
        }
        let guitarraSeleccionada = {
          id: guitarra.data[0].id,
          img,
          nombre,
          cantidad,
          precio
        };
        agregarCarrito(guitarraSeleccionada);
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("label", { htmlFor: "cantidad", children: "Cantidad" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
          "select",
          {
            id: "cantidad",
            onChange: (e) => setCantidad(parseInt(e.target.value)),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "0", children: "-- Seleccione --" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "1", children: "1" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "2", children: "2" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "3", children: "3" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "4", children: "4" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "5", children: "5" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("input", { type: "submit", value: "Comprar" })
      ] })
    ] })
  ] });
}, guitarras_guitarraUrls_default = Guitarra;

// app/routes/guitarras._index.jsx
var guitarras_index_exports = {};
__export(guitarras_index_exports, {
  default: () => guitarras_index_default,
  loader: () => loader2,
  meta: () => meta3
});
var import_react9 = require("@remix-run/react");

// app/components/guitarra.jsx
var import_react8 = require("@remix-run/react"), import_jsx_runtime7 = require("react/jsx-runtime"), Guitarra2 = ({ guitarra }) => {
  let { descripcion, Imagen, precio, url, nombre } = guitarra;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: Imagen.data.attributes.formats.medium.url, alt: url }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { children: nombre }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "descripcion", children: descripcion }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { className: "precio", children: [
        "U$D ",
        precio
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react8.Link, { className: "enlace", to: `/guitarras/${url}`, children: "Ver Producto" })
    ] })
  ] });
}, guitarra_default = Guitarra2;

// app/components/listado-guitarras.jsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function ListadoGuitarras({ guitarras }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "heading", children: "Nuestra Colecci\xF3n" }),
    (guitarras == null ? void 0 : guitarras.length) && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "guitarras-grid", children: guitarras.map((guitarra) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(guitarra_default, { guitarra: guitarra.attributes }, guitarra.id)) })
  ] });
}

// app/routes/guitarras._index.jsx
var import_jsx_runtime9 = require("react/jsx-runtime");
async function loader2() {
  return (await getGuitarras()).data;
}
function meta3() {
  return [
    { title: "GuitarLA - Tienda" },
    {
      description: "Venta de Guitarras, Blog de Musica, Coleccion de guitarras"
    }
  ];
}
function Tienda() {
  let guitarras = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ListadoGuitarras, { guitarras });
}
var guitarras_index_default = Tienda;

// app/routes/posts.$postUrl.jsx
var posts_postUrl_exports = {};
__export(posts_postUrl_exports, {
  default: () => PostUrl,
  links: () => links2,
  loader: () => loader3,
  meta: () => meta4
});
var import_react10 = require("@remix-run/react");

// app/models/post.server.js
async function getPosts() {
  let url = process.env.API_URL;
  return await (await fetch(`${url}/posts?populate=imagen`)).json();
}
async function getPost(url) {
  let urlApi = process.env.API_URL;
  return await (await fetch(
    `${urlApi}/posts?filters[url]=${url}&populate=imagen`
  )).json();
}

// app/utils/helpers.js
var formatearFecha = (fecha) => {
  let fechaNueva = new Date(fecha), opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit"
  };
  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

// app/styles/blog.css
var blog_default = "/build/_assets/blog-WWPFPZAE.css";

// app/routes/posts.$postUrl.jsx
var import_jsx_runtime10 = require("react/jsx-runtime");
async function loader3({ params }) {
  let { postUrl } = params, post = await getPost(postUrl);
  if (post.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Entrada no encontrada"
    });
  return post;
}
function links2() {
  return [
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
function meta4({ data }) {
  var _a;
  return data ? [
    { title: `GuitarLA - ${(_a = data == null ? void 0 : data.data[0]) == null ? void 0 : _a.attributes.titulo}` },
    {
      descrpcion: "Venta de Guitarras, Blog de Musica, Coleccion de guitarras, guitarras baratas"
    }
  ] : [
    { title: "GuitarLa - Pag no encontrada" },
    {
      descrpcion: "Venta de Guitarras, Blog de Musica, Coleccion de guitarras, guitarras baratas"
    }
  ];
}
function PostUrl() {
  var _a;
  let post = (0, import_react10.useLoaderData)(), { titulo, contenido, imagen, publishedAt } = post == null ? void 0 : post.data[0].attributes, img = (_a = imagen == null ? void 0 : imagen.data) == null ? void 0 : _a.attributes.formats.medium.url;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("article", { className: "post mt-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("img", { className: "imagen", src: img, alt: titulo }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { children: titulo }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "fecha", children: formatearFecha(publishedAt) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "texto", children: contenido })
    ] })
  ] });
}

// app/routes/posts._index.jsx
var posts_index_exports = {};
__export(posts_index_exports, {
  default: () => posts_index_default,
  loader: () => loader4,
  meta: () => meta5
});
var import_react12 = require("@remix-run/react");

// app/components/post.jsx
var import_react11 = require("@remix-run/react");
var import_jsx_runtime11 = require("react/jsx-runtime");
function Post({ post }) {
  let { contenido, imagen, titulo, url, publishedAt } = post, img = imagen.data.attributes.formats.small.url;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("article", { className: "post", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("img", { className: "imagen", src: img, alt: titulo }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { children: titulo }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "fecha", children: formatearFecha(publishedAt) }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "resumen", children: contenido }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react11.Link, { className: "enlace", to: `/posts/${url}`, children: "Leer Post" })
    ] })
  ] });
}

// app/components/listado-posts.jsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function ListadoPosts({ posts }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { className: "heading", children: "B l o g" }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "blog", children: posts && (posts == null ? void 0 : posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Post, { post: post.attributes }, post.id))) })
  ] });
}

// app/routes/posts._index.jsx
var import_jsx_runtime13 = require("react/jsx-runtime");
async function loader4() {
  return (await getPosts()).data;
}
function meta5() {
  return [
    {
      title: "GuitarLA - Blog",
      description: "GuitarLA, venta de guitarras"
    }
  ];
}
function Blog() {
  let posts = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ListadoPosts, { posts });
}
var posts_index_default = Blog;

// app/routes/guitarras.jsx
var guitarras_exports = {};
__export(guitarras_exports, {
  default: () => guitarras_default2,
  links: () => links3
});
var import_react13 = require("@remix-run/react");

// app/styles/guitarras.css
var guitarras_default = "/build/_assets/guitarras-4L7CW6TL.css";

// app/routes/guitarras.jsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function links3() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    }
  ];
}
function Tienda2() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react13.Outlet, { context: (0, import_react13.useOutletContext)() }) });
}
var guitarras_default2 = Tienda2;

// app/routes/nosotros.jsx
var nosotros_exports = {};
__export(nosotros_exports, {
  default: () => nosotros_default3,
  links: () => links4,
  meta: () => meta6
});

// public/img/nosotros.jpg
var nosotros_default = "/build/_assets/nosotros-55PFFMUZ.jpg";

// app/styles/nosotros.css
var nosotros_default2 = "/build/_assets/nosotros-6XXHILW2.css";

// app/routes/nosotros.jsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function meta6() {
  return [
    { title: "GuitarLA - Nosotros" },
    { description: "Venta de Guitarras, Blog de Musica" }
  ];
}
function links4() {
  return [
    {
      rel: "stylesheet",
      href: nosotros_default2
    },
    {
      rel: "preload",
      href: nosotros_default,
      as: "imagen"
    }
  ];
}
function Nosotros() {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("main", { className: "contenedor nosotros", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "heading", children: "Nosotros" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("img", { src: nosotros_default, alt: "imagen" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { children: "En nuestra tienda de guitarras, nos apasiona la m\xFAsica y nos enfocamos en brindar una experiencia excepcional a nuestros clientes. Ofrecemos una amplia selecci\xF3n de guitarras de alta calidad para m\xFAsicos de todos los niveles y estilos. Nuestro equipo de expertos est\xE1 listo para asesorarte y ayudarte a encontrar la guitarra perfecta que se adapte a tu estilo \xFAnico." }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { children: "Adem\xE1s de las guitarras, ofrecemos servicios de primera clase. Contamos con t\xE9cnicos altamente capacitados que pueden ajustar, reparar y personalizar tu instrumento. Tambi\xE9n organizamos eventos y talleres para que los m\xFAsicos puedan compartir su pasi\xF3n y aprender de otros artistas. Nos enorgullece ser parte de la comunidad musical y ser el destino preferido para aquellos que buscan su guitarra perfecta. Te invitamos a visitarnos y vivir una experiencia inolvidable en nuestra tienda de guitarras." })
      ] })
    ] })
  ] });
}
var nosotros_default3 = Nosotros;

// app/routes/carrito.jsx
var carrito_exports = {};
__export(carrito_exports, {
  default: () => Carrito,
  links: () => links5,
  meta: () => meta7
});
var import_react14 = require("@remix-run/react"), import_react15 = require("react");

// app/styles/carrito.css
var carrito_default2 = "/build/_assets/carrito-F5A7VGEL.css";

// app/routes/carrito.jsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function meta7() {
  return [
    { title: "GuitarLA - Compras" },
    { description: "Venta de Guitarras, Blog de Musica" }
  ];
}
function links5() {
  return [
    {
      rel: "stylesheet",
      href: carrito_default2
    }
  ];
}
function Carrito() {
  let [total, setTotal] = (0, import_react15.useState)(0), { carrito, actualizarCantidad, eliminarGuitarra } = (0, import_react14.useOutletContext)();
  return (0, import_react15.useEffect)(() => {
    let calculoTotal = carrito.reduce(
      (total2, producto) => total2 + producto.cantidad * producto.precio,
      0
    );
    setTotal(calculoTotal);
  }, [carrito]), /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("main", { className: "contenedor", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h1", { className: "heading", children: "Carrito de Compras" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "carrito", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { children: "Articulos" }),
        (carrito == null ? void 0 : carrito.length) === 0 ? "Carrito Vac\xEDo" : carrito == null ? void 0 : carrito.map(
          (producto) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "producto", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("img", { src: producto.img, alt: producto.nombre }) }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "nombre", children: producto.nombre }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { children: "Cantidad:" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
                "select",
                {
                  value: producto.cantidad,
                  className: "select",
                  onChange: (e) => actualizarCantidad({
                    cantidad: +e.target.value,
                    id: producto.id
                  }),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("option", { value: "1", children: "1" }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("option", { value: "2", children: "2" }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("option", { value: "3", children: "3" }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("option", { value: "4", children: "4" }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("option", { value: "5", children: "5" })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("p", { className: "precio", children: [
                "U$D ",
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: producto.precio })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("p", { className: "subtotal", children: [
                "SubTotal U$D",
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: producto.cantidad * producto.precio })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
              "button",
              {
                type: "button",
                className: "btn_eliminar",
                onClick: () => eliminarGuitarra(producto.id),
                children: "X"
              }
            )
          ] }, producto.id)
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("aside", { className: "resumen", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h3", { children: "Resumen de Pedido" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("p", { children: [
          "Total a Pagar: U$D ",
          total
        ] })
      ] })
    ] })
  ] });
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  links: () => links6,
  loader: () => loader5,
  meta: () => meta8
});
var import_react16 = require("@remix-run/react");

// app/styles/curso.css
var curso_default = "/build/_assets/curso-ZPSYIDYO.css";

// app/models/curso.server.js
async function getCurso() {
  let url = process.env.API_URL;
  return await (await fetch(`${url}/curso?populate=imagen`)).json();
}

// app/components/curso.jsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function Curso({ curso }) {
  let { contenido, imagen, titulo } = curso, img = imagen.data.attributes.url;
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("section", { className: "curso", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("style", { jsx: "true", children: `
          .curso {
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.65),
                rgb(0 0 0 / 0.7)
              ),
              url(${img});
          }
        ` }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "contenedor curso-grid", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h2", { className: "heading", children: titulo }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "texto", children: contenido })
    ] }) })
  ] });
}

// app/routes/_index.jsx
var import_jsx_runtime18 = require("react/jsx-runtime");
async function loader5() {
  let [guitarras, posts, curso] = await Promise.all(
    [
      getGuitarras(),
      getPosts(),
      getCurso()
    ]
  );
  return { guitarras: guitarras.data, posts: posts.data, curso: curso.data };
}
function meta8() {
}
function links6() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    },
    {
      rel: "stylesheet",
      href: blog_default
    },
    {
      rel: "stylesheet",
      href: curso_default
    }
  ];
}
function Index() {
  let { guitarras, posts, curso } = (0, import_react16.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ListadoGuitarras, { guitarras }) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Curso, { curso: curso.attributes }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("section", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ListadoPosts, { posts }) })
  ] });
}
var index_default = Index;

// app/routes/posts.jsx
var posts_exports = {};
__export(posts_exports, {
  default: () => posts_default,
  links: () => links7
});
var import_react17 = require("@remix-run/react");
var import_jsx_runtime19 = require("react/jsx-runtime");
function links7() {
  return [
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
function Blog2() {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react17.Outlet, {}) });
}
var posts_default = Blog2;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-ODV3STOS.js", imports: ["/build/_shared/chunk-K454JM2K.js", "/build/_shared/chunk-5XCBIPQZ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-W6HXHSIX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-23EVMO27.js", imports: ["/build/_shared/chunk-AOEGNPPN.js", "/build/_shared/chunk-PKTLV57A.js", "/build/_shared/chunk-KE7PP56N.js", "/build/_shared/chunk-ADSADLD3.js", "/build/_shared/chunk-MOOO3WCG.js", "/build/_shared/chunk-2Z6N72RA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/carrito": { id: "routes/carrito", parentId: "root", path: "carrito", index: void 0, caseSensitive: void 0, module: "/build/routes/carrito-RG2J5B4A.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras": { id: "routes/guitarras", parentId: "root", path: "guitarras", index: void 0, caseSensitive: void 0, module: "/build/routes/guitarras-HXRVG7TG.js", imports: ["/build/_shared/chunk-2Z6N72RA.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras.$guitarraUrls": { id: "routes/guitarras.$guitarraUrls", parentId: "routes/guitarras", path: ":guitarraUrls", index: void 0, caseSensitive: void 0, module: "/build/routes/guitarras.$guitarraUrls-H4XWGEBO.js", imports: ["/build/_shared/chunk-PKTLV57A.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras._index": { id: "routes/guitarras._index", parentId: "routes/guitarras", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/guitarras._index-DTAOSM4V.js", imports: ["/build/_shared/chunk-AOEGNPPN.js", "/build/_shared/chunk-PKTLV57A.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/nosotros": { id: "routes/nosotros", parentId: "root", path: "nosotros", index: void 0, caseSensitive: void 0, module: "/build/routes/nosotros-XKUKLQWY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts": { id: "routes/posts", parentId: "root", path: "posts", index: void 0, caseSensitive: void 0, module: "/build/routes/posts-IJGKFKRV.js", imports: ["/build/_shared/chunk-KE7PP56N.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts.$postUrl": { id: "routes/posts.$postUrl", parentId: "routes/posts", path: ":postUrl", index: void 0, caseSensitive: void 0, module: "/build/routes/posts.$postUrl-RLJSKSCX.js", imports: ["/build/_shared/chunk-MOOO3WCG.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts._index": { id: "routes/posts._index", parentId: "routes/posts", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/posts._index-XVQ2XWBT.js", imports: ["/build/_shared/chunk-ADSADLD3.js", "/build/_shared/chunk-MOOO3WCG.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "6f5c8b32", hmr: void 0, url: "/build/manifest-6F5C8B32.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/guitarras.$guitarraUrls": {
    id: "routes/guitarras.$guitarraUrls",
    parentId: "routes/guitarras",
    path: ":guitarraUrls",
    index: void 0,
    caseSensitive: void 0,
    module: guitarras_guitarraUrls_exports
  },
  "routes/guitarras._index": {
    id: "routes/guitarras._index",
    parentId: "routes/guitarras",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: guitarras_index_exports
  },
  "routes/posts.$postUrl": {
    id: "routes/posts.$postUrl",
    parentId: "routes/posts",
    path: ":postUrl",
    index: void 0,
    caseSensitive: void 0,
    module: posts_postUrl_exports
  },
  "routes/posts._index": {
    id: "routes/posts._index",
    parentId: "routes/posts",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: posts_index_exports
  },
  "routes/guitarras": {
    id: "routes/guitarras",
    parentId: "root",
    path: "guitarras",
    index: void 0,
    caseSensitive: void 0,
    module: guitarras_exports
  },
  "routes/nosotros": {
    id: "routes/nosotros",
    parentId: "root",
    path: "nosotros",
    index: void 0,
    caseSensitive: void 0,
    module: nosotros_exports
  },
  "routes/carrito": {
    id: "routes/carrito",
    parentId: "root",
    path: "carrito",
    index: void 0,
    caseSensitive: void 0,
    module: carrito_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/posts": {
    id: "routes/posts",
    parentId: "root",
    path: "posts",
    index: void 0,
    caseSensitive: void 0,
    module: posts_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
