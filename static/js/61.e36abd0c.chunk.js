(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[61],{1719:function(e,t,a){"use strict";a.r(t);var c=a(16),s=a(0),n=a(589),i=a(471),l=a(80),r=a.n(l),o=a(561),j=a(562),d=a(838),b=a(584),m=a(585),x=a(1647),p=a(1648),O=a(1333),h=a(1649),u=a(701),f=a(1713),v=a(451),N=a(644),y=a(1642),g=a(572),C=a.n(g),w=a(1222),k=a(1223),S=a(1140),D=a(1071),P=a(1092),A=(a(1224),a(563),a(704),a(6)),I=function(e){var t=e.data,a=Object(s.useState)(1),n=Object(c.a)(a,2),i=n[0],l=n[1],r=Object(s.useState)(new Date(t.invoice.issuedDate)),d=Object(c.a)(r,2),g=d[0],I=d[1],T=Object(s.useState)(new Date(t.invoice.dueDate)),L=Object(c.a)(T,2),F=L[0],E=L[1],z=function(e){e.preventDefault(),e.target.closest(".repeater-wrapper").remove()};return Object(A.jsxs)(b.a,{className:"invoice-preview-card mb-0",children:[Object(A.jsx)(m.a,{className:"invoice-padding pb-0",children:Object(A.jsxs)("div",{className:"d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0",children:[Object(A.jsxs)("div",{children:[Object(A.jsxs)("div",{className:"logo-wrapper",children:[Object(A.jsxs)("svg",{viewBox:"0 0 139 95",version:"1.1",height:"24",children:[Object(A.jsxs)("defs",{children:[Object(A.jsxs)("linearGradient",{id:"invoice-linearGradient-1",x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",children:[Object(A.jsx)("stop",{stopColor:"#000000",offset:"0%"}),Object(A.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),Object(A.jsxs)("linearGradient",{id:"invoice-linearGradient-2",x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",children:[Object(A.jsx)("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),Object(A.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),Object(A.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(A.jsx)("g",{transform:"translate(-400.000000, -178.000000)",children:Object(A.jsxs)("g",{transform:"translate(400.000000, 178.000000)",children:[Object(A.jsx)("path",{className:"text-primary",d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",style:{fill:"currentColor"}}),Object(A.jsx)("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",fill:"url(#invoice-linearGradient-1)",opacity:"0.2"}),Object(A.jsx)("polygon",{fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),Object(A.jsx)("polygon",{fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),Object(A.jsx)("polygon",{fill:"url(#invoice-linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),Object(A.jsx)("h3",{className:"text-primary invoice-logo",children:"Vuexy"})]}),Object(A.jsx)("p",{className:"card-text mb-25",children:"Office 149, 450 South Brand Brooklyn"}),Object(A.jsx)("p",{className:"card-text mb-25",children:"San Diego County, CA 91905, USA"}),Object(A.jsx)("p",{className:"card-text mb-0",children:"+1 (123) 456 7891, +44 (876) 543 2198"})]}),Object(A.jsxs)("div",{className:"invoice-number-date mt-md-0 mt-2",children:[Object(A.jsxs)("div",{className:"d-flex align-items-center justify-content-md-end mb-1",children:[Object(A.jsx)("h4",{className:"invoice-title",children:"Invoice"}),Object(A.jsxs)(x.a,{className:"input-group-merge invoice-edit-input-group disabled",children:[Object(A.jsx)(p.a,{addonType:"prepend",children:Object(A.jsx)(O.a,{children:Object(A.jsx)(S.a,{size:15})})}),Object(A.jsx)(h.a,{type:"number",className:"invoice-edit-input",value:t.invoice.id,placeholder:"53634",disabled:!0})]})]}),Object(A.jsxs)("div",{className:"d-flex align-items-center mb-1",children:[Object(A.jsx)("span",{className:"title",children:"Date:"}),Object(A.jsx)(C.a,{value:g,onChange:function(e){return I(e)},className:"form-control invoice-edit-input date-picker"})]}),Object(A.jsxs)("div",{className:"d-flex align-items-center",children:[Object(A.jsx)("span",{className:"title",children:"Due Date:"}),Object(A.jsx)(C.a,{value:F,onChange:function(e){return E(e)},className:"form-control invoice-edit-input due-date-picker"})]})]})]})}),Object(A.jsx)("hr",{className:"invoice-spacing"}),Object(A.jsx)(m.a,{className:"invoice-padding pt-0",children:Object(A.jsxs)(o.a,{className:"invoice-spacing",children:[Object(A.jsxs)(j.a,{className:"p-0",lg:"8",children:[Object(A.jsx)("h6",{className:"mb-2",children:"Invoice To:"}),Object(A.jsx)("h6",{className:"mb-25",children:t.invoice.client.name}),Object(A.jsx)(u.a,{className:"mb-25",children:t.invoice.client.company}),Object(A.jsx)(u.a,{className:"mb-25",children:t.invoice.client.address}),Object(A.jsx)(u.a,{className:"mb-25",children:t.invoice.client.contact}),Object(A.jsx)(u.a,{className:"mb-0",children:t.invoice.client.companyEmail})]}),Object(A.jsxs)(j.a,{className:"p-0 mt-xl-0 mt-2",lg:"4",children:[Object(A.jsx)("h6",{className:"mb-2",children:"Payment Details:"}),Object(A.jsx)("table",{children:Object(A.jsxs)("tbody",{children:[Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{className:"pr-1",children:"Total Due:"}),Object(A.jsx)("td",{children:Object(A.jsx)("span",{className:"font-weight-bolder",children:t.paymentDetails.totalDue})})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{className:"pr-1",children:"Bank name:"}),Object(A.jsx)("td",{children:t.paymentDetails.bankName})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{className:"pr-1",children:"Country:"}),Object(A.jsx)("td",{children:t.paymentDetails.country})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{className:"pr-1",children:"IBAN:"}),Object(A.jsx)("td",{children:t.paymentDetails.iban})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{className:"pr-1",children:"SWIFT code:"}),Object(A.jsx)("td",{children:t.paymentDetails.swiftCode})]})]})})]})]})}),Object(A.jsxs)(m.a,{className:"invoice-padding invoice-product-details",children:[Object(A.jsx)(w.a,{count:i,children:function(e){var t=0===e?"div":k.SlideDown;return Object(A.jsx)(t,{className:"repeater-wrapper",children:Object(A.jsx)(o.a,{children:Object(A.jsxs)(j.a,{className:"d-flex product-details-border position-relative pr-0",sm:"12",children:[Object(A.jsxs)(o.a,{className:"w-100 pr-lg-0 pr-1 py-2",children:[Object(A.jsxs)(j.a,{className:"mb-lg-0 mb-2 mt-lg-0 mt-2",lg:"5",sm:"12",children:[Object(A.jsx)(u.a,{className:"col-title mb-md-50 mb-0",children:"Item"}),Object(A.jsxs)(h.a,{type:"select",className:"item-details",children:[Object(A.jsx)("option",{children:"App Design"}),Object(A.jsx)("option",{children:"App Customization"}),Object(A.jsx)("option",{children:"ABC Template"}),Object(A.jsx)("option",{children:"App Development"})]}),Object(A.jsx)(h.a,{className:"mt-2",type:"textarea",rows:"1",defaultValue:"Customization & Bug Fixes"})]}),Object(A.jsxs)(j.a,{className:"my-lg-0 my-2",lg:"3",sm:"12",children:[Object(A.jsx)(u.a,{className:"col-title mb-md-2 mb-0",children:"Cost"}),Object(A.jsx)(h.a,{type:"number",defaultValue:"24",placeholder:"24"}),Object(A.jsxs)("div",{className:"mt-2",children:[Object(A.jsx)("span",{children:"Discount:"})," ",Object(A.jsx)("span",{children:"0%"}),Object(A.jsx)("span",{id:"tax1-".concat(e),className:"ml-50",children:"0%"}),Object(A.jsx)("span",{id:"tax2-".concat(e),className:"ml-50",children:"0%"}),Object(A.jsx)(f.a,{target:"tax1-".concat(e),children:"Tax 1"}),Object(A.jsx)(f.a,{target:"tax2-".concat(e),children:"Tax 2"})]})]}),Object(A.jsxs)(j.a,{className:"my-lg-0 my-2",lg:"2",sm:"12",children:[Object(A.jsx)(u.a,{className:"col-title mb-md-2 mb-0",children:"Qty"}),Object(A.jsx)(h.a,{type:"number",defaultValue:"1",placeholder:"1"})]}),Object(A.jsxs)(j.a,{className:"my-lg-0 mt-2",lg:"2",sm:"12",children:[Object(A.jsx)(u.a,{className:"col-title mb-md-50 mb-0",children:"Price"}),Object(A.jsx)(u.a,{className:"mb-0",children:"$24.00"})]})]}),Object(A.jsx)("div",{className:"d-flex flex-column align-items-center justify-content-start border-left invoice-product-actions py-50 px-25",children:Object(A.jsx)(D.a,{size:18,className:"cursor-pointer",onClick:z})})]})})},e)}}),Object(A.jsx)(o.a,{className:"mt-1",children:Object(A.jsx)(j.a,{sm:"12",className:"px-0",children:Object(A.jsxs)(v.a.Ripple,{color:"primary",size:"sm",className:"btn-add-new",onClick:function(){return l(i+1)},children:[Object(A.jsx)(P.a,{size:14,className:"mr-25"}),Object(A.jsx)("span",{className:"align-middle",children:"Add Item"})]})})})]}),Object(A.jsx)(m.a,{className:"invoice-padding",children:Object(A.jsxs)(o.a,{className:"invoice-sales-total-wrapper",children:[Object(A.jsx)(j.a,{className:"mt-md-0 mt-3",md:{size:"6",order:1},xs:{size:12,order:2},children:Object(A.jsxs)("div",{className:"d-flex align-items-center mb-1",children:[Object(A.jsx)(N.a,{for:"salesperson",className:"form-label",children:"Salesperson:"}),Object(A.jsx)(h.a,{type:"text",className:"ml-50",id:"salesperson",placeholder:"Edward Crowley"})]})}),Object(A.jsx)(j.a,{className:"d-flex justify-content-end",md:{size:"6",order:2},xs:{size:12,order:1},children:Object(A.jsxs)("div",{className:"invoice-total-wrapper",children:[Object(A.jsxs)("div",{className:"invoice-total-item",children:[Object(A.jsx)("p",{className:"invoice-total-title",children:"Subtotal:"}),Object(A.jsx)("p",{className:"invoice-total-amount",children:"$1800"})]}),Object(A.jsxs)("div",{className:"invoice-total-item",children:[Object(A.jsx)("p",{className:"invoice-total-title",children:"Discount:"}),Object(A.jsx)("p",{className:"invoice-total-amount",children:"$28"})]}),Object(A.jsxs)("div",{className:"invoice-total-item",children:[Object(A.jsx)("p",{className:"invoice-total-title",children:"Tax:"}),Object(A.jsx)("p",{className:"invoice-total-amount",children:"21%"})]}),Object(A.jsx)("hr",{className:"my-50"}),Object(A.jsxs)("div",{className:"invoice-total-item",children:[Object(A.jsx)("p",{className:"invoice-total-title",children:"Total:"}),Object(A.jsx)("p",{className:"invoice-total-amount",children:"$1690"})]})]})})]})}),Object(A.jsx)("hr",{className:"invoice-spacing mt-0"}),Object(A.jsx)(m.a,{className:"invoice-padding py-0",children:Object(A.jsx)(o.a,{children:Object(A.jsx)(j.a,{children:Object(A.jsxs)(y.a,{className:"mb-2",children:[Object(A.jsx)(N.a,{for:"note",className:"form-label font-weight-bold",children:"Note:"}),Object(A.jsx)(h.a,{type:"textarea",rows:"2",id:"note",defaultValue:"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!"})]})})})})]})},T=a(1721),L=function(e){var t=e.setSendSidebarOpen,a=e.setAddPaymentOpen;return Object(A.jsxs)(s.Fragment,{children:[Object(A.jsx)(b.a,{className:"invoice-action-wrapper",children:Object(A.jsxs)(m.a,{children:[Object(A.jsx)(v.a.Ripple,{color:"primary",block:!0,className:"mb-75",onClick:function(){return t(!0)},children:"Send Invoice"}),Object(A.jsx)(v.a.Ripple,{tag:i.b,to:"/apps/invoice/preview",color:"primary",block:!0,outline:!0,className:"mb-75",children:"Preview"}),Object(A.jsx)(v.a.Ripple,{color:"primary",block:!0,outline:!0,className:"mb-75",children:"Save"}),Object(A.jsx)(v.a.Ripple,{color:"success",block:!0,onClick:function(){return a(!0)},children:"Add Payment"})]})}),Object(A.jsxs)("div",{className:"mt-2",children:[Object(A.jsxs)("div",{className:"invoice-payment-option",children:[Object(A.jsx)("p",{className:"mb-50",children:"Accept payments via"}),Object(A.jsxs)(h.a,{type:"select",id:"payment-select",children:[Object(A.jsx)("option",{children:"Debit Card"}),Object(A.jsx)("option",{children:"Credit Card"}),Object(A.jsx)("option",{children:"Paypal"}),Object(A.jsx)("option",{children:"Internet Banking"}),Object(A.jsx)("option",{children:"UPI Transfer"})]})]}),Object(A.jsxs)("div",{className:"invoice-terms mt-1",children:[Object(A.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(A.jsx)(N.a,{className:"mb-0",for:"payment-terms",children:"Payment Terms"}),Object(A.jsx)(T.a,{type:"switch",id:"payment-terms",defaultChecked:!0})]}),Object(A.jsxs)("div",{className:"d-flex justify-content-between py-1",children:[Object(A.jsx)(N.a,{className:"mb-0",for:"client-notes",children:"Client Notes"}),Object(A.jsx)(T.a,{type:"switch",id:"client-notes",defaultChecked:!0})]}),Object(A.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(A.jsx)(N.a,{className:"mb-0",for:"payment-stub",children:"Payment Stub"}),Object(A.jsx)(T.a,{type:"switch",id:"payment-stub"})]})]})]})]})},F=a(886),E=a(887);t.default=function(){var e=Object(n.i)().id,t=Object(s.useState)(null),a=Object(c.a)(t,2),l=a[0],b=a[1],m=Object(s.useState)(!1),x=Object(c.a)(m,2),p=x[0],O=x[1],h=Object(s.useState)(!1),u=Object(c.a)(h,2),f=u[0],v=u[1];return Object(s.useEffect)((function(){r.a.get("/api/invoice/invoices/".concat(e)).then((function(e){b(e.data)}))}),[]),null!==l&&void 0!==l.invoice?Object(A.jsxs)("div",{className:"invoice-edit-wrapper",children:[Object(A.jsxs)(o.a,{className:"invoice-edit",children:[Object(A.jsx)(j.a,{xl:9,md:8,sm:12,children:Object(A.jsx)(I,{data:l})}),Object(A.jsx)(j.a,{xl:3,md:4,sm:12,children:Object(A.jsx)(L,{setSendSidebarOpen:O,setAddPaymentOpen:v})})]}),Object(A.jsx)(F.a,{toggleSidebar:function(){return O(!p)},open:p}),Object(A.jsx)(E.a,{toggleSidebar:function(){return v(!f)},open:f})]}):Object(A.jsxs)(d.a,{color:"danger",children:[Object(A.jsx)("h4",{className:"alert-heading",children:"Invoice not found"}),Object(A.jsxs)("div",{className:"alert-body",children:["Invoice with id: ",e," doesn't exist. Check list of all invoices: ",Object(A.jsx)(i.b,{to:"/invoice/list",children:"Invoice List"})]})]})}},838:function(e,t,a){"use strict";var c=a(15),s=a(17),n=a(30),i=a(0),l=a.n(i),r=a(5),o=a.n(r),j=a(120),d=a.n(j),b=a(79),m=a(592);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O={children:o.a.node,className:o.a.string,closeClassName:o.a.string,closeAriaLabel:o.a.string,cssModule:o.a.object,color:o.a.string,fade:o.a.bool,isOpen:o.a.bool,toggle:o.a.func,tag:b.q,transition:o.a.shape(m.a.propTypes),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},h={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:p(p({},m.a.defaultProps),{},{unmountOnExit:!0})};function u(e){var t=e.className,a=e.closeClassName,n=e.closeAriaLabel,i=e.cssModule,r=e.tag,o=e.color,j=e.isOpen,x=e.toggle,O=e.children,h=e.transition,u=e.fade,f=e.innerRef,v=Object(s.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),N=Object(b.m)(d()(t,"alert","alert-"+o,{"alert-dismissible":x}),i),y=Object(b.m)(d()("close",a),i),g=p(p(p({},m.a.defaultProps),h),{},{baseClass:u?h.baseClass:"",timeout:u?h.timeout:0});return l.a.createElement(m.a,Object(c.a)({},v,g,{tag:r,className:N,in:j,role:"alert",innerRef:f}),x?l.a.createElement("button",{type:"button",className:y,"aria-label":n,onClick:x},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,O)}u.propTypes=O,u.defaultProps=h,t.a=u},886:function(e,t,a){"use strict";var c=a(564),s=a(1146),n=a(643),i=a(1642),l=a(644),r=a(1649),o=a(1651),j=a(451),d=a(6);t.a=function(e){var t=e.open,a=e.toggleSidebar;return Object(d.jsx)(c.a,{size:"lg",open:t,title:"Send Invoice",headerClassName:"mb-1",contentClassName:"p-0",bodyClassName:"pb-sm-0 pb-3",toggleSidebar:a,children:Object(d.jsxs)(n.a,{children:[Object(d.jsxs)(i.a,{children:[Object(d.jsx)(l.a,{for:"invoice-from",className:"form-label",children:"From"}),Object(d.jsx)(r.a,{id:"invoice-from",defaultValue:"shelbyComapny@email.com",placeholder:"company@email.com"})]}),Object(d.jsxs)(i.a,{children:[Object(d.jsx)(l.a,{for:"invoice-to",className:"form-label",children:"To"}),Object(d.jsx)(r.a,{id:"invoice-to",defaultValue:"qConsolidated@email.com",placeholder:"company@email.com"})]}),Object(d.jsxs)(i.a,{children:[Object(d.jsx)(l.a,{for:"invoice-subject",className:"form-label",children:"Subject"}),Object(d.jsx)(r.a,{id:"invoice-subject",defaultValue:"Invoice of purchased Admin Templates",placeholder:"Invoice regarding goods"})]}),Object(d.jsxs)(i.a,{children:[Object(d.jsx)(l.a,{for:"invoice-message",className:"form-label",children:"Message"}),Object(d.jsx)(r.a,{type:"textarea",cols:"3",rows:"11",id:"invoice-message",defaultValue:"Dear Queen Consolidated,\n\nThank you for your business, always a pleasure to work with you!\n\nWe have generated a new invoice in the amount of $95.59\n\nWe would appreciate payment of this invoice by 05/11/2019"})]}),Object(d.jsx)(i.a,{children:Object(d.jsxs)(o.a,{color:"light-primary",children:[Object(d.jsx)(s.a,{className:"mr-50",size:14}),Object(d.jsx)("span",{className:"align-middle",children:"Invoice Attached"})]})}),Object(d.jsxs)(i.a,{className:"d-flex flex-wrap mt-2",children:[Object(d.jsx)(j.a,{className:"mr-1",color:"primary",onClick:a,children:"Send"}),Object(d.jsx)(j.a,{color:"secondary",outline:!0,onClick:a,children:"Cancel"})]})]})})}},887:function(e,t,a){"use strict";var c=a(16),s=a(0),n=a(572),i=a.n(n),l=a(643),r=a(1642),o=a(1649),j=a(644),d=a(451),b=a(564),m=(a(563),a(704),a(6));t.a=function(e){var t=e.open,a=e.toggleSidebar,n=Object(s.useState)(new Date),x=Object(c.a)(n,2),p=x[0],O=x[1];return Object(m.jsx)(b.a,{size:"lg",open:t,title:"Add Payment",headerClassName:"mb-1",contentClassName:"p-0",toggleSidebar:a,children:Object(m.jsxs)(l.a,{children:[Object(m.jsx)(r.a,{children:Object(m.jsx)(o.a,{id:"balance",defaultValue:"Invoice Balance: 5000.00",disabled:!0})}),Object(m.jsxs)(r.a,{children:[Object(m.jsx)(j.a,{for:"amount",className:"form-label",children:"Payment Amount"}),Object(m.jsx)(o.a,{type:"number",id:"amount",placeholder:"$1000"})]}),Object(m.jsxs)(r.a,{children:[Object(m.jsx)(j.a,{for:"payment-amount",className:"form-label",children:"Payment Date"}),Object(m.jsx)(i.a,{id:"payment-amount",value:p,onChange:function(e){return O(e)},className:"form-control"})]}),Object(m.jsxs)(r.a,{children:[Object(m.jsx)(j.a,{for:"payment-method",className:"form-label",children:"Payment Method"}),Object(m.jsxs)(o.a,{type:"select",id:"payment-method",defaultValue:"",children:[Object(m.jsx)("option",{value:"",disabled:!0,children:"Select payment method"}),Object(m.jsx)("option",{value:"Cash",children:"Cash"}),Object(m.jsx)("option",{value:"Bank Transfer",children:"Bank Transfer"}),Object(m.jsx)("option",{value:"Debit",children:"Debit"}),Object(m.jsx)("option",{value:"Credit",children:"Credit"}),Object(m.jsx)("option",{value:"Paypal",children:"Paypal"})]})]}),Object(m.jsxs)(r.a,{children:[Object(m.jsx)(j.a,{for:"payment-note",className:"form-label",children:"Internal Payment Note"}),Object(m.jsx)(o.a,{type:"textarea",rows:"5",id:"payment-note",placeholder:"Internal Payment Note"})]}),Object(m.jsxs)(r.a,{className:"d-flex flex-wrap mb-0",children:[Object(m.jsx)(d.a,{className:"mr-1",color:"primary",onClick:a,children:"Send"}),Object(m.jsx)(d.a,{color:"secondary",outline:!0,onClick:a,children:"Cancel"})]})]})})}}}]);
//# sourceMappingURL=61.e36abd0c.chunk.js.map