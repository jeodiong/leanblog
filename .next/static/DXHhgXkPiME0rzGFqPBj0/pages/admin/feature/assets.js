(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"6FqY":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/feature/assets",function(){return t("XYHi")}])},Qk2m:function(e,n,t){e.exports={container:"Layout_container__3k3Im",body:"Layout_body__1jffz",footer_content:"Layout_footer_content__2w_tK",logo:"Layout_logo__x1539",copyright:"Layout_copyright__1o4l6"}},XYHi:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),a=t.n(o),r=(t("8Kt/"),t("xy40"),t("a6RD"),t("jhxP")),i=t("uYGA"),u=a.a.createElement;n.default=function(){return u(r.a,null,u("p",{className:"_admin_body_section_title"},"\u7d20\u6750\u7ba1\u7406"),u(i.a,null))}},jhxP:function(e,n,t){"use strict";var o=t("o0o1"),a=t.n(o),r=t("8Kt/"),i=t.n(r),u=(t("YFqc"),t("q1tI")),c=t.n(u),s=t("xy40"),l=t.n(s),d=t("a6RD"),f=t.n(d),b=t("je4i"),m=t.n(b),p=t("Qk2m"),_=t.n(p),y=t("Ruh/"),h=t("mhur"),w=c.a.createElement,g=f()((function(){return Promise.all([t.e(0),t.e(5),t.e(6),t.e(7),t.e(50)]).then(t.bind(null,"vwdz"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["vwdz"]},modules:["src/components/admin/Nav"]}}),j=f()((function(){return Promise.all([t.e(0),t.e(5),t.e(8),t.e(13),t.e(49)]).then(t.bind(null,"2Ts+"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["2Ts+"]},modules:["src/components/admin/Login"]}}),N=f()((function(){return Promise.all([t.e(13),t.e(16),t.e(51)]).then(t.bind(null,"zt1u"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["zt1u"]},modules:["src/components/admin/BodyContent"]}});function O(e){var n=Object(u.useState)(l.a.User.current()),t=n[0],o=(n[1],Object(u.useState)(null)),r=o[0],c=o[1],s=Object(u.useState)(null),d=s[0],f=s[1];return Object(u.useEffect)((function(){Object(y.b)().then((function(e){e?f(e):Object(y.a)().then((function(e){f(e)}))})),t&&function e(){var n,o;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.a.awrap(Object(h.a)());case 2:(n=r.sent)?c(n):((o=new l.a.Object("CMS_UserInfo")).set("user",t),o.set("nickname",t.toJSON().username),o.set("priority",1),o.set("shortid",m.a.generate()),o.save().then((function(n){e()}),(function(e){})));case 4:case"end":return r.stop()}}),null,null,null,Promise)}()}),[]),Object(u.useEffect)((function(){e.onChange&&e.onChange({curUser:t,profile:d,userinfo:r})}),[t,d,r]),w("div",{className:_.a.container},w(i.a,null,w("title",null,"\u7ba1\u7406\u540e\u53f0")),w(g,{type:"login",curUser:t,userinfo:r,profile:d}),w("div",{className:_.a.body,style:e.bodyStyle},!t&&w(j,{profile:d}),t&&w(N,{priority:r?r.toJSON().priority:0,userinfo:r,hideSidebar:e.hideSidebar},e.children)),d&&w("footer",null,w("div",{className:_.a.footer_content},w("img",{src:d.toJSON().logo,alt:"",className:_.a.logo}),w("p",{className:_.a.copyright},d.toJSON().copyright))))}O.defaultProps={onChange:function(){},hideSidebar:!1,bodyStyle:{}},n.a=O}},[["6FqY",1,0,3,2,4,5,6,7,8,9,10,14]]]);