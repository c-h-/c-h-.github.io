(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3167:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return fA}});var a=t(5893),i=(t(304),t(1801),t(6276)),o=t(8603),r=t(9163),n=t(2765),g=t(2809),s=t(1979),c=t(9370),E=t(2616),C=t(3188),l=t(7294),h=t(9308),Q="RESOLVE_LOCATION",d="SET_POS",u=(0,h.ZP)(),B=u(Q),p=u(d),w=function(A){return A.location.pos},m=t(7407),I=t(434),f=t(9244),D=t(6734),x=function(A){return function(e){return function(t){var a=A.dispatch;return!A.getState().location.pos&&(0,h.P9)(t,B)&&fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=64aa99cb731c426cb0467daf0e0d2a66").then((function(A){200===A.status&&A.json().then((function(A){var e=A.longitude,t=A.latitude;a(p([e,t]))}))})),e(t)}}};function U(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,a)}return t}function b(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?U(Object(t),!0).forEach((function(e){(0,g.Z)(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}var j={pos:null};var P={key:"root",storage:D.Z},S=(0,I.UY)({location:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;return(0,h.P9)(e,p)?b(b({},A),{},{pos:e.payload}):A}}),M=(0,f.OJ)(P,S),F=(0,m.xC)({reducer:M,middleware:function(A){return A().prepend(x)}}),y=(0,f.p5)(F),v=t(5675),R=function(A){return A.src},k=r.ZP.a.withConfig({displayName:"GlobeImage__StyledContainer",componentId:"sc-1iwun7r-0"})(["display:block;position:relative;z-index:10000;background-color:white;padding:0.3rem;padding-bottom:1rem;transition:transform ease-in-out 50ms;transform-origin:top left;transform:scale(",") translate(",",0);box-shadow:0 1px 1px rgba(0,0,0,0.12);"],(function(A){return A.show?A.zoom:0}),(function(A){return"left"===A.position?"-100%":"0"}));function G(A){var e=A.imageSet,t=A.viewState,i=(null===t||void 0===t?void 0:t.latitude)||0,o=(null===t||void 0===t?void 0:t.longitude)||0,r=(i-45)%180,n=(i+45)%180,g=(o-90)%360,s=(o+90)%360,c=e.pos[1],E=e.pos[0],C=c>r&&c<n,l=E>g&&E<s,h=Math.min(1,((null===t||void 0===t?void 0:t.zoom)||0)/5),Q=t&&C&&l;return(0,a.jsx)(k,{show:Q,zoom:h,href:e.url,position:e.position,target:"_blank",rel:"noreferrer",children:e.imgs.map((function(A){return(0,a.jsx)(v.default,{src:A.src,alt:A.alt,objectFit:"cover",width:200,height:200,loader:R,unoptimized:!0},A.alt)}))})}var T=[{imgs:[{src:{src:"/_next/static/image/public/img/nyc.24fcb4a59a017169e0361f95996b4a1e.jpg",height:640,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAF/9oACAEBAAAAAEf/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAECEAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAEDEAAAAGf/xAAdEAABAgcAAAAAAAAAAAAAAAABABECBAUUFSFC/9oACAEBAAE/AMxThLGK07ZtL//EABgRAAIDAAAAAAAAAAAAAAAAAAACASFx/9oACAECAQE/AFSL0//EABgRAAIDAAAAAAAAAAAAAAAAAAACASFx/9oACAEDAQE/AGeaw//Z"},alt:"New York City, NY"}],url:"https://www.instagram.com/p/9MVicpQnTh/",pos:[-73.981269,40.759644]},{imgs:[{src:{src:"/_next/static/image/public/img/mombasa.d7889d2fb03bf4ed817801785af8e586.jpg",height:640,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAB/9oACAEBAAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAC//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAF//xAAcEAACAQUBAAAAAAAAAAAAAAACAwEABREhM6H/2gAIAQEAAT8AS62nIZJytR1CD9Gv/8QAFREBAQAAAAAAAAAAAAAAAAAAEQD/2gAIAQIBAT8AG//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z"},alt:"Mombasa, Kenya"}],url:"https://www.instagram.com/p/pl7oHAQnbU/",pos:[39.680226,-4.062233]},{imgs:[{src:{src:"/_next/static/image/public/img/xian.64525b3c17396142a95c0b5146ab237b.jpg",height:640,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAE/9oACAEBAAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAECEAAAAF//xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAEDEAAAAF//xAAcEAABAwUAAAAAAAAAAAAAAAACAAEEAwURE0L/2gAIAQEAAT8Aa61I0MA2ARY5Jf/EABgRAAIDAAAAAAAAAAAAAAAAAAACFFGR/9oACAECAQE/AJD0uH//xAAaEQABBQEAAAAAAAAAAAAAAAABAAIDBBIi/9oACAEDAQE/ABUiy09L/9k="},alt:"Xian, China"}],url:"https://www.instagram.com/p/fJUN3RwnSl/",pos:[108.93493,34.274622],position:"left"},{imgs:[{src:{src:"/_next/static/image/public/img/shanghai.0b89e226aa10794a1d1a7a0b84254aec.jpg",height:640,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAF/9oACAEBAAAAACP/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAECEAAAAB//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDEAAAAF//xAAeEAAABAcAAAAAAAAAAAAAAAAAAQIDBAUREiIygf/aAAgBAQABPwBE1bXCrMnba469H//EABgRAAIDAAAAAAAAAAAAAAAAAAABAiEx/9oACAECAQE/AHC9P//EABgRAAMBAQAAAAAAAAAAAAAAAAECEQBB/9oACAEDAQE/AHZhIeb/2Q=="},alt:"Shanghai, China"}],url:"https://www.instagram.com/p/hIKmOlQnSH/",pos:[121.496731,31.236239]},{imgs:[{src:{src:"/_next/static/image/public/img/neworleans.890d6f08257ba28b8107ef849fed9255.jpg",height:640,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAF/9oACAEBAAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAECEAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDEAAAAD//xAAbEAACAwADAAAAAAAAAAAAAAABAwIEBQARUf/aAAgBAQABPwBujiaFJVx5WFCXYg73n//EABkRAAEFAAAAAAAAAAAAAAAAAAACAwQRMv/aAAgBAgEBPwBMl2tH/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAISUf/aAAgBAwEBPwCFw//Z"},alt:"New Orleans, LA"}],url:"https://www.instagram.com/p/sNzPNAwncp/",pos:[-90.06197,29.956787]},{imgs:[{src:{src:"/_next/static/image/public/img/iceland.cb02dd67ca7b5cfac6c0a78b845a0f62.jpg",height:640,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAD/9oACAEBAAAAAF//xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAECEAAAAF//xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAEDEAAAAC//xAAZEAADAQEBAAAAAAAAAAAAAAABAgMRANH/2gAIAQEAAT8AiXlrUjJ5EahQ573/xAAZEQACAwEAAAAAAAAAAAAAAAADEQABAiH/2gAIAQIBAT8Ayci7bn//xAAZEQABBQAAAAAAAAAAAAAAAAARAAIDBDL/2gAIAQMBAT8AdXiOQv/Z"},alt:"Isafjordur, Iceland"}],url:"https://www.instagram.com/p/BVVvsFqAb0P/",pos:[-23.127337,66.075164]},{imgs:[{src:{src:"/_next/static/image/public/img/abudhabi.6eac15657f6d1925991dab7e493585ee.jpg",height:612,width:612,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAAF//xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECEAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDEAAAAD//xAAbEAACAgMBAAAAAAAAAAAAAAABAgMRAAQSUf/aAAgBAQABPwCDeQTUIWBD0elb3P/EABcRAQADAAAAAAAAAAAAAAAAAAEAISL/2gAIAQIBAT8AdWz/xAAVEQEBAAAAAAAAAAAAAAAAAAARAP/aAAgBAwEBPwBb/9k="},alt:"Abu Dhabi, UAE"}],url:"https://www.instagram.com/p/UI3z-iwnZZ/",pos:[54.36086,24.494286]},{imgs:[{src:{src:"/_next/static/image/public/img/qatar.50b7995b3f0b80f01d37f70070e645b2.jpg",height:640,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAE/9oACAEBAAAAAHf/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAB//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAH//xAAZEAADAAMAAAAAAAAAAAAAAAABAwQABhP/2gAIAQEAAT8Ah2iOZAPNJOf/xAAXEQEAAwAAAAAAAAAAAAAAAAABAAJR/9oACAECAQE/AGhrP//EABYRAQEBAAAAAAAAAAAAAAAAAAEAUf/aAAgBAwEBPwADL//Z"},alt:"Qatar Desert"}],url:"https://www.instagram.com/p/kc1b0xQnWf/",pos:[50.879812,24.9552],position:"left"},{imgs:[{src:{src:"/_next/static/image/public/img/miami.ee9e09c84c4637b70a0bfe777c3a0021.jpg",height:640,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAF/9oACAEBAAAAAB//xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECEAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDEAAAAF//xAAcEAABAwUAAAAAAAAAAAAAAAABAAIDBhIhIlL/2gAIAQEAAT8AdWRfBYYdusBf/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQBBkf/aAAgBAgEBPwAUt2f/xAAXEQADAQAAAAAAAAAAAAAAAAAAAYGR/9oACAEDAQE/AIsP/9k="},alt:"Miami Beach, FL"}],url:"https://www.instagram.com/p/BMToDr4BWO6/",pos:[-80.12938,25.788586],position:"left"},{imgs:[{src:{src:"/_next/static/image/public/img/bahamas.5a19df4af16df0acbca6f966d7065c9e.jpg",height:479,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAE/9oACAEBAAAAAA//xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAECEAAAAGf/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/9oACAEDEAAAAB//xAAbEAABBAMAAAAAAAAAAAAAAAACAwQFEgABYv/aAAgBAQABPwAZuRbNhV2te3I5/8QAGBEBAAMBAAAAAAAAAAAAAAAAAgABEUH/2gAIAQIBAT8ALS3b7P/EABcRAQEBAQAAAAAAAAAAAAAAAAEhMQD/2gAIAQMBAT8AIFcHe//Z"},alt:"The Bahamas"}],url:"https://www.instagram.com/p/BiPVOj7H5Po/",pos:[-77.346326,25.030911]},{imgs:[{src:{src:"/_next/static/image/public/img/bryce.c8ec4f318c39ac1af8ff653413a6a2a9.jpg",height:800,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAF/9oACAEBAAAAACf/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAECEAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAEDEAAAAGf/xAAcEAABAwUAAAAAAAAAAAAAAAABAgMFABESMrH/2gAIAQEAAT8AkpEvFJQ1iyNU8vX/xAAYEQEBAAMAAAAAAAAAAAAAAAABAgASIf/aAAgBAgEBPwBibdq6uf/EABkRAQACAwAAAAAAAAAAAAAAAAEAAgMhIv/aAAgBAwEBPwAu4+a6Cf/Z"},alt:"Bryce Canyon, UT"}],url:"https://www.instagram.com/p/Bf1HuNDABTE/",pos:[-112.208434,37.597756]},{imgs:[{src:{src:"/_next/static/image/public/img/cayman.546758851bd3173ea858773cb0e48998.jpg",height:480,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAAEP/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAC//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDEAAAAD//xAAcEAACAQUBAAAAAAAAAAAAAAACAxIAAQUxQYH/2gAIAQEAAT8AZgktsZLkM5bZ0vK//8QAGREAAgMBAAAAAAAAAAAAAAAAAQMAAhEE/9oACAECAQE/AGdL6nAw5P/EABgRAQEAAwAAAAAAAAAAAAAAAAEDAAQR/9oACAEDAQE/AJa8UVmdXP/Z"},alt:"Cayman Islands"}],url:"https://www.instagram.com/p/BcGryBqA67g/",pos:[-81.382982,19.319525]},{imgs:[{src:{src:"/_next/static/image/public/img/fujian.dc8da4ff9f2f5d0d2e3403f113860754.jpg",height:800,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAB/9oACAEBAAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAECEAAAAF//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDEAAAAD//xAAaEAABBQEAAAAAAAAAAAAAAAACAAEEBRIW/9oACAEBAAE/AOpqSFswyyv/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPwAW/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Aj//Z"},alt:"Fujian, China"}],url:"https://www.instagram.com/p/BgkDIOKhA7M/",pos:[118.128403,24.543688]},{imgs:[{src:{src:"/_next/static/image/public/img/hongkong.73c7620abf9c1638935113478f9a8fd1.jpg",height:480,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAF/9oACAEBAAAAAB//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAF//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAC//xAAaEAACAgMAAAAAAAAAAAAAAAACAwABBAZz/9oACAEBAAE/AC2rJJICtCRvnVz/xAAXEQEAAwAAAAAAAAAAAAAAAAABAAIS/9oACAECAQE/AKrkn//EABgRAAIDAAAAAAAAAAAAAAAAAAABAhIh/9oACAEDAQE/AJJWeH//2Q=="},alt:"Hong Kong, China"}],url:"https://www.instagram.com/p/BjBclfOn10y/",pos:[113.928963,22.296065]},{imgs:[{src:{src:"/_next/static/image/public/img/shenzhen.6e4035b318e20e4d62c7a2f95b5cf46d.jpg",height:639,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAC/9oACAEBAAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDEAAAAD//xAAbEAACAQUAAAAAAAAAAAAAAAABAwAEBQcykv/aAAgBAQABPwB2QaY6W5nQn//EABYRAAMAAAAAAAAAAAAAAAAAAAACEv/aAAgBAgEBPwC2P//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/AK//2Q=="},alt:"Shenzhen, China"}],position:"left",url:"https://www.instagram.com/p/Bab1X6ngc2e/",pos:[114.056516,22.529085]},{imgs:[{src:{src:"/_next/static/image/public/img/london.d8ac8690269a273628884b2c3158c730.jpg",height:800,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAD/9oACAEBAAAAAC//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAA//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAH//xAAdEAADAAEFAQAAAAAAAAAAAAABAgMiAAURIUJR/9oACAEBAAE/ALb4kZzZEvRh0UJHOeX3zr//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwCP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k="},alt:"London, England"}],url:"https://www.instagram.com/p/Bew8iU7Aj7F/",pos:[-.134295,51.498043]},{imgs:[{src:{src:"/_next/static/image/public/img/md.316446b9d9475e8fe8de5ac1027fe8fc.jpg",height:479,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAACX/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAECEAAAAC//xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAEDEAAAAF//xAAbEAACAgMBAAAAAAAAAAAAAAABAwIRAAQjMf/aAAgBAQABPwB3EA6yFQQweMtkhZz/xAAYEQACAwAAAAAAAAAAAAAAAAARIQACA//aAAgBAgEBPwAGmZan/8QAGBEAAgMAAAAAAAAAAAAAAAAAAiEAETH/2gAIAQMBAT8AwipOf//Z"},alt:"Maryland"}],url:"https://www.instagram.com/p/BjSFfCxn6jB/",pos:[-76.469668,38.332734],position:"left"},{imgs:[{src:{src:"/_next/static/image/public/img/montreal.b1f9ff9c5ecffa6f492feed29a7ec62e.jpg",height:587,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAAF//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAECEAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDEAAAAD//xAAcEAACAgIDAAAAAAAAAAAAAAABAwIEAAURYbH/2gAIAQEAAT8ATtrc7SqUWkskhjueoEA+5//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z"},alt:"Montreal, Canada"}],url:"https://www.instagram.com/p/Bd5vLoGgVmz/",pos:[-73.561732,45.496688],position:"left"},{imgs:[{src:{src:"/_next/static/image/public/img/seattle.e83ab93c6fa775800344132d75700d02.jpg",height:640,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAF/9oACAEBAAAAABP/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAECEAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDEAAAAD//xAAbEAACAgMBAAAAAAAAAAAAAAACAxESAAEEBf/aAAgBAQABPwB/q9BBVvW9cPoQCel2Gs3gYnWf/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQARITH/2gAIAQIBAT8ALQ15P//EABcRAQADAAAAAAAAAAAAAAAAAAEAISL/2gAIAQMBAT8AXTRP/9k="},alt:"Seattle, WA"}],url:"https://www.instagram.com/p/CQ_Z4zbMYJ_/",pos:[-122.349619,47.614627],position:"left"},{imgs:[{src:{src:"/_next/static/image/public/img/sf.4365394249dac78cfc61e3023fc5b3e7.jpg",height:800,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAC/9oACAEBAAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAECEAAAABf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAH//xAAcEAACAgIDAAAAAAAAAAAAAAACEQESAAMEBSP/2gAIAQEAAT8A7UtvMGR3Hf0E5YxV1ThZ/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQACESH/2gAIAQIBAT8A1ti9Z//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z"},alt:"San Francisco, CA"}],url:"https://www.instagram.com/p/BiMRz5tnZIr/",pos:[-122.410478,37.794601]},{imgs:[{src:{src:"/_next/static/image/public/img/singapore.e206a0b7c6768d680de500821224ffce.jpg",height:479,width:640,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAC/9oACAEBAAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAECEAAAAB//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDEAAAAB//xAAcEAABAwUAAAAAAAAAAAAAAAACAQMSAAQFBlL/2gAIAQEAAT8Ab2/KAaNm3bmXUVSVf//EABkRAAEFAAAAAAAAAAAAAAAAAAMAAQIRIv/aAAgBAgEBPwCRiNWl/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEx/9oACAEDAQE/AFD/2Q=="},alt:"Singapore"}],url:"https://www.instagram.com/p/Bew9aVlgg4I/",pos:[103.866908,1.278989]}],K=t(8019),L=t(4303),Y=function(A){var e=A.pos,t=A.viewState,i=(0,K.Z)(e,2),o=i[0],r=i[1],n=(null===t||void 0===t?void 0:t.latitude)||0,g=(null===t||void 0===t?void 0:t.longitude)||0;return t&&(r>(n-45)%180&&r<(n+45)%180)&&(o>(g-90)%360&&o<(g+90)%360)?(0,a.jsx)(L.Vp,{round:!0,icon:"user",minimal:!0,intent:"success",children:"Your estimated location"}):null},Z=t(4717);function O(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,a)}return t}function V(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?O(Object(t),!0).forEach((function(e){(0,g.Z)(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function z(A,e){if(0===e[0]&&0===e[1])return null;var t=A.map((function(A){return V(V({},A),{},{arcSourcePos:e})}));return new Z.Z({id:"arc",data:t,getWidth:1,getSourcePosition:function(A){return A.arcSourcePos},getTargetPosition:function(A){return A.pos},getSourceColor:function(){return[69,170,242]},getTargetColor:function(){return[255,255,255]}})}var J=t(9187),_=t(4310),N=t(8930),H=t(4088);var W=t(4739),X=t(1045),q=t(5361);function $(){return new W.Z({sunlight:new X.Z({color:[255,255,255],intensity:.5,timestamp:Date.now()}),ambient:new q.M({color:[255,255,255],intensity:2})})}function AA(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,a)}return t}function eA(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?AA(Object(t),!0).forEach((function(e){(0,g.Z)(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):AA(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}var tA={altitude:1.5,latitude:25.77427,longitude:-80.19366,bearing:0,pitch:0,zoom:0,transitionDuration:1500,transitionInterpolator:new s.Z},aA=r.ZP.div.withConfig({displayName:"Globe__GlobeWrapper",componentId:"sc-10kxjse-0"})(["position:absolute;overflow:hidden;width:100vw;height:100vh;opacity:",";transition:opacity 2s ease-in-out;"],(function(A){return A.loaded?"1":"0"}));function iA(){var A=(0,l.useState)(tA),e=A[0],t=A[1],o=(0,l.useState)($()),r=o[0],g=o[1],h=(0,l.useState)(!1),Q=h[0],d=h[1],u=(0,l.useState)(null),p=u[0],m=u[1],I=(0,i.I0)(),f=(0,i.v9)(w),D=(0,l.useMemo)((function(){return f||[0,0]}),[f]),x=(0,l.useCallback)((function(A){m(A.viewState)}),[]);(0,l.useEffect)((function(){var A=setInterval((function(){return g($())}),3e4);return function(){return clearInterval(A)}}),[]);var U=(0,l.useMemo)((function(){return[].concat((0,n.Z)([new _.Z({id:"earth-sphere",data:[0],mesh:new N.Z({radius:63e5,nlat:18,nlong:36}),coordinateSystem:H.Df.CARTESIAN,getPosition:[0,0,0],getColor:[69,170,242],extruded:!0,material:{ambient:.3,diffuse:.7,shininess:80,specularColor:[30,30,30]}}),new J.Z({id:"earth-land",data:"https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_land.geojson",stroked:!1,filled:!0,opacity:.9,getFillColor:[164,176,190],extruded:!0,material:{ambient:.6,diffuse:.1,shininess:80,specularColor:[30,30,30]}})]),[z(T,D)])}),[D]);return(0,a.jsx)(aA,{loaded:Q,children:(0,a.jsxs)(C.Z,{initialViewState:e,views:new c.Z({id:"globe",controller:!0,resolution:12}),layers:U,effects:[r],onLoad:function(){I(B()),d(!0),t(eA(eA({},e),{},{zoom:.8,latitude:37.77493,longitude:-122.41942,transitionDuration:3e3,transitionInterpolator:new s.Z({curve:1})}))},onViewStateChange:x,children:[(0,a.jsx)(E.ue,{children:T.map((function(A){return(0,a.jsx)(E.RF,{coordinates:A.pos,children:(0,a.jsx)(G,{imageSet:A,viewState:p})},A.url)}))}),(0,a.jsx)(E.ue,{children:(0,a.jsx)(E.RF,{coordinates:D,children:(0,a.jsx)(Y,{viewState:p,pos:D})},"self")})]})})}var oA=t(9583),rA=r.ZP.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-ezwo3e-0"})(["z-index:1;margin:3rem;padding:1rem;box-shadow:0 1px 1px rgba(0,0,0,0.12),0 2px 2px rgba(0,0,0,0.12),0 4px 4px rgba(0,0,0,0.12),0 8px 8px rgba(0,0,0,0.12),0 16px 16px rgba(0,0,0,0.12);border-radius:1rem;background:rgba(255,255,255,0.9);@media (max-width:800px){margin:1rem;}"]),nA=r.ZP.h1.withConfig({displayName:"Header__StyledHeader",componentId:"sc-1azvc7m-0"})(["margin:0;font-size:3rem;"]),gA=r.ZP.h2.withConfig({displayName:"Header__StyledSubHeader",componentId:"sc-1azvc7m-1"})(["margin:0.1rem 0 1rem;"]),sA=r.ZP.div.withConfig({displayName:"Header__StyledNavbar",componentId:"sc-1azvc7m-2"})(["& a{margin-right:0.5rem;:last-child{margin-right:0;}svg{width:1.5rem;height:1.5rem;transition:transform ease-in-out 50ms;transform:scale(1);&:hover{transform:scale(1.1);}@media (max-width:800px){width:2rem;height:2rem;}}}"]),cA=function(){return(0,a.jsxs)(rA,{children:[(0,a.jsx)(nA,{children:"Charlie Hulcher"}),(0,a.jsx)(gA,{children:"Senior Software Engineer"}),(0,a.jsx)("p",{children:(0,a.jsx)("em",{children:"Welcome to my web tech playground."})}),(0,a.jsxs)(sA,{children:[(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/charliehulcher/",title:"Charlie's LinkedIn",children:(0,a.jsx)(oA.ltd,{})}),(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/c-h-/",title:"Charlie's GitHub Profile",children:(0,a.jsx)(oA.NML,{})}),(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://twitter.com/chulcher",title:"Charlie's LinkedIn",children:(0,a.jsx)(oA.N1v,{})}),(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/that_c_h/",title:"Charlie's Instagram",children:(0,a.jsx)(oA.dR1,{})})]})]})},EA=t(3766),CA=(0,r.ZP)(L.dy).withConfig({displayName:"Drawer__StyledDrawer",componentId:"sc-1yg7sl7-0"})(["&.bp3-position-right{transition:width ease-in-out 200ms;@media (max-width:800px){width:100%;}}"]),lA=(0,r.ZP)(L.Zb).withConfig({displayName:"Drawer__StyledCard",componentId:"sc-1yg7sl7-1"})(["margin:1rem;"]),hA=r.ZP.div.withConfig({displayName:"Drawer__Tags",componentId:"sc-1yg7sl7-2"})(["display:flex;margin-bottom:1rem;& > span{margin-right:0.5rem;}"]),QA=function(A){var e=A.setSelectedProjectTitle,t=A.currentProject;return(0,a.jsxs)(CA,{isOpen:"undefined"!==typeof t,title:null===t||void 0===t?void 0:t.title,onClose:function(){return e(null)},position:EA.Ly.RIGHT,canOutsideClickClose:!0,canEscapeKeyClose:!0,children:["video"===(null===t||void 0===t?void 0:t.feature.type)&&(null===t||void 0===t?void 0:t.feature.videoSrc)&&(0,a.jsx)("video",{muted:!0,autoPlay:!0,loop:!0,src:null===t||void 0===t?void 0:t.feature.videoSrc}),"image"===(null===t||void 0===t?void 0:t.feature.type)&&(null===t||void 0===t?void 0:t.feature.imgSrc)&&(0,a.jsx)(v.default,{src:null===t||void 0===t?void 0:t.feature.imgSrc,alt:null===t||void 0===t?void 0:t.feature.alt,loader:R,unoptimized:!0}),(0,a.jsxs)(lA,{elevation:2,children:[(0,a.jsxs)(hA,{children:[(0,a.jsx)(L.Vp,{intent:"success",large:!0,minimal:!0,children:null===t||void 0===t?void 0:t.year},"year"),((null===t||void 0===t?void 0:t.tags)||[]).map((function(A){return(0,a.jsx)(L.Vp,{intent:"none",large:!0,minimal:!0,children:A},A)}))]}),null===t||void 0===t?void 0:t.description]})]})},dA=[{title:"Tred - Virtual Reality Treadmill",tags:["Arduino","Python"],year:2014,description:'We won the "largest hackathon in history" - the Grand Prize at LA Hacks. Built in 36 hours with team of three. Our treadmill captures user movement and translates it into motion in any virtual reality world. Designed to be low-cost, widely compatible, and high-performance.',feature:{type:"video",videoSrc:"./video/tred.mp4"}},{title:"Autonomous Hovercraft",year:2012,description:"We won the college-wide Clark School of Engineering freshman competition. I led a team of ten to design and build an autonomous hovercraft to navigate a course and retrieve a payload.",feature:{type:"video",videoSrc:"./video/hovercraft.mp4"}},{title:"Amation - SVG Animator",year:2013,description:"We won First Prize with Amation at Penn Apps X hackathon, an in-browser single page app for animating SVGs (like Adobe Flash).",feature:{type:"image",imgSrc:{src:"/_next/static/image/public/img/projects/amation_1.6ae68ba60d042b8ab3970b78d3e79b1d.png",height:227,width:404,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR4nAGEAHv/AU1MSv6zDNsAz2iZACr4/AADQ0EA1NXVADAwMAAzMzMAAUNAQf69/9kA1pGxACkPEQAAICMA3N3dACUkJAAxMTEAAVVTVf7v8OgAYlt6ABoiJADe4soA497aAKOmpwAUExIAAVRTU//6Av8AN+0F/w3v9wGbz7IA0wEH/z89NwH8/f0Aq78zhJNZDSMAAAAASUVORK5CYII="},alt:"A screenshot of the user interface of an SVG animation editor"}},{title:"Essential School Tools",year:2013,description:"A React Native Web Chrome Extension and Android/iOS app that automatically synchronizes your course schedule, books, bus schedules, weather, and sport event schedules for easy reference.",feature:{type:"image",imgSrc:{src:"/_next/static/image/public/img/projects/est.dd96637c87069ec150e340a59c5ae12f.png",height:550,width:413,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAA00lEQVR4nAHIADf/AYh3P/4REBEB5Oz/AO/0CwAfFej/DgsBAQGLeT7+BwoLAfb4IP8UJ0AA2+jsANjFrwABnI1S/vD3CQFZKkAAGAz2ANvf4f+54u0BAaWeYv4D6xABQ/z+AAr46AD8/fX/qgYMAQGQjF7+L+UNASLm0f8OEv4B6BMj/7AE7AEBjXlg/j7c+wET/vUACAP9ANMgF//YENoBAUdGIP4JuvoBTiIZACUrJgDTKgUADRrsAAGNeiz+6fgTAbja4wDSvewAi3I9/xgR+QFDu1a6lUMgkwAAAABJRU5ErkJggg=="},alt:"A screenshot of a phone running Essential School Tools"}}],uA=r.ZP.div.withConfig({displayName:"Projects__ProjectsContainer",componentId:"sc-4dgsgy-0"})(["margin-top:auto;position:relative;max-width:100%;button h2{margin:0;}}"]),BA=(0,r.ZP)(rA).withConfig({displayName:"Projects__Card",componentId:"sc-4dgsgy-1"})(["& > h2{margin-top:0;}"]),pA=r.ZP.div.withConfig({displayName:"Projects__ProjectSlider",componentId:"sc-4dgsgy-2"})(["margin-top:1rem;width:100%;overflow-x:auto;display:flex;flex-direction:row;"]),wA=r.ZP.a.withConfig({displayName:"Projects__ProjectWrapper",componentId:"sc-4dgsgy-3"})(["display:block;flex-shrink:0;height:200px;border-radius:1rem;overflow:hidden;position:relative;margin-right:1rem;&:last-child{margin-right:0;}& > video,& > img{height:100%;transform:scale(1);transition:transform ease-in-out 50ms;}&:hover > video,&:hover > img{transform:scale(1.1);}& > h3{position:absolute;bottom:0;left:0;margin:0;padding:1rem;color:white;display:block;width:100%;background-color:rgba(0,0,0,0.3);}&:hover > h3{text-decoration:underline;}"]),mA=function(){var A=(0,l.useState)(!1),e=A[0],t=A[1],i=(0,l.useState)(null),o=i[0],r=i[1],n=dA.find((function(A){return A.title===o}));return(0,a.jsx)(uA,{children:(0,a.jsx)(BA,{children:e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(L.zx,{icon:"caret-down",minimal:!0,intent:"none",onClick:function(){return t(!1)},children:(0,a.jsx)("h2",{children:"Side Projects"})}),(0,a.jsx)(pA,{children:dA.map((function(A){return(0,a.jsxs)(wA,{onClick:function(){return r(A.title)},children:["video"===A.feature.type&&A.feature.videoSrc&&(0,a.jsx)("video",{muted:!0,autoPlay:!0,loop:!0,src:A.feature.videoSrc}),"image"===A.feature.type&&A.feature.imgSrc&&(0,a.jsx)(v.default,{src:A.feature.imgSrc,alt:A.feature.alt,loader:R,unoptimized:!0}),(0,a.jsx)(L.xv,{tagName:"h3",ellipsize:!0,children:A.title})]},A.title)}))}),(0,a.jsx)(QA,{setSelectedProjectTitle:r,currentProject:n})]}):(0,a.jsx)(L.zx,{icon:"caret-up",large:!0,intent:"none",minimal:!0,onClick:function(){return t(!0)},children:"Side Projects"})})})},IA=r.ZP.div.withConfig({displayName:"pages__Wrapper",componentId:"sc-1uled16-0"})(["display:flex;flex-direction:column;align-items:flex-start;height:100vh;width:100vw;"]);function fA(){return(0,a.jsx)(i.zt,{store:F,children:(0,a.jsx)(o.r,{persistor:y,children:(0,a.jsxs)(IA,{children:[(0,a.jsx)(cA,{}),(0,a.jsx)(iA,{}),(0,a.jsx)(mA,{})]})})})}},5301:function(A,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3167)}])},2540:function(){},5307:function(){}},function(A){A.O(0,[774,256,445,865,340,888,179],(function(){return e=5301,A(A.s=e);var e}));var e=A.O();_N_E=e}]);