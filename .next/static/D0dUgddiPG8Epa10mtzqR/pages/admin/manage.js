(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{Qk2m:function(e,n,t){e.exports={container:"Layout_container__3k3Im",body:"Layout_body__1jffz",footer_content:"Layout_footer_content__2w_tK",logo:"Layout_logo__x1539",copyright:"Layout_copyright__1o4l6"}},jhxP:function(e,n,t){"use strict";var o=t("o0o1"),a=t.n(o),r=t("8Kt/"),c=t.n(r),i=(t("YFqc"),t("q1tI")),u=t.n(i),s=t("xy40"),l=t.n(s),d=t("a6RD"),f=t.n(d),m=t("je4i"),b=t.n(m),_=t("Qk2m"),p=t.n(_),h=t("Ruh/"),y=t("mhur"),w=u.a.createElement,g=f()((function(){return Promise.all([t.e(0),t.e(5),t.e(6),t.e(11),t.e(53)]).then(t.bind(null,"vwdz"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["vwdz"]},modules:["src/components/admin/Nav"]}}),v=f()((function(){return Promise.all([t.e(0),t.e(5),t.e(7),t.e(14),t.e(52)]).then(t.bind(null,"2Ts+"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["2Ts+"]},modules:["src/components/admin/Login"]}}),j=f()((function(){return Promise.all([t.e(7),t.e(16),t.e(54)]).then(t.bind(null,"zt1u"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["zt1u"]},modules:["src/components/admin/BodyContent"]}});function N(e){var n=Object(i.useState)(l.a.User.current()),t=n[0],o=(n[1],Object(i.useState)(null)),r=o[0],u=o[1],s=Object(i.useState)(null),d=s[0],f=s[1];return Object(i.useEffect)((function(){Object(h.b)().then((function(e){e?f(e):Object(h.a)().then((function(e){f(e)}))})),t&&function e(){var n,o;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.a.awrap(Object(y.b)());case 2:(n=r.sent)?u(n):((o=new l.a.Object("CMS_UserInfo")).set("user",t),o.set("nickname",t.toJSON().username),o.set("priority",1),o.set("shortid",b.a.generate()),o.save().then((function(n){e()}),(function(e){})));case 4:case"end":return r.stop()}}),null,null,null,Promise)}()}),[]),Object(i.useEffect)((function(){e.onChange&&e.onChange({curUser:t,profile:d,userinfo:r})}),[t,d,r]),w("div",{className:p.a.container},w(c.a,null,w("title",null,"\u7ba1\u7406\u540e\u53f0")),w(g,{type:"login",curUser:t,userinfo:r,profile:d}),w("div",{className:p.a.body,style:e.bodyStyle},!t&&w(v,{profile:d}),t&&w(j,{priority:r?r.toJSON().priority:0,userinfo:r,hideSidebar:e.hideSidebar},e.children)),d&&w("footer",null,w("div",{className:p.a.footer_content},w("img",{src:d.toJSON().logo,alt:"",className:p.a.logo}),w("p",{className:p.a.copyright},d.toJSON().copyright))))}N.defaultProps={onChange:function(){},hideSidebar:!1,bodyStyle:{}},n.a=N},rmJa:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/manage",function(){return t("vBsR")}])},vBsR:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),a=t.n(o),r=(t("8Kt/"),t("xy40"),t("a6RD"),t("jhxP")),c=a.a.createElement;n.default=function(){return c(r.a,null,c("div",{className:"_admin_body_section_block"},"home"))}}},[["rmJa",1,0,3,2,4]]]);