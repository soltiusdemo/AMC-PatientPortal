(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{rykw:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class u{}var o=t("pMnS"),i=t("SVse"),c=t("MKJQ"),s=t("sZkV"),a=t("s7LF"),r=t("mrSG"),b=t("DCf0"),d=t("LvDl");class p{constructor(l){this.popoverController=l,this.model={}}presentPopover(l){return r.a(this,void 0,void 0,(function*(){const n=yield this.popoverController.create({component:b.a,event:l,translucent:!0,animated:!0});return yield n.present()}))}customSort(l,n){return 0}getDateDisplay(l){return console.log(l),l[0].date}ngOnInit(){}ionViewDidEnter(){this.loadData()}openProfile(l){this.presentPopover(l)}toggleGroup(l){console.log(l),l.value[0].show=!l.value[0].show}isGroupShown(l){return l.value[0].show}sortData(){}showFilters(){alert("ShowFilters")}filterDocuments(l){console.log(l);let n=this;switch(l){case"ALL":this.model.selectedAll="tab-selected",this.model.selectedEmergency="",this.model.selectedPhysician="",this.model.selectedMedical="";let l=d.groupBy(n.documentsOld,"date");d.forEach(l,(function(l){l.lineItems=l})),n.documents=l;break;case"EME":this.model.selectedAll="",this.model.selectedEmergency="tab-selected",this.model.selectedPhysician="",this.model.selectedMedical="";let t=d.groupBy(n.emergencyDocuments,"date");d.forEach(t,(function(l){l.lineItems=l})),n.documents=t;break;case"PHY":this.model.selectedAll="",this.model.selectedEmergency="",this.model.selectedPhysician="tab-selected",this.model.selectedMedical="";let e=d.groupBy(n.physicanDocuments,"date");d.forEach(e,(function(l){l.lineItems=l})),n.documents=e;break;case"MED":this.model.selectedAll="",this.model.selectedEmergency="",this.model.selectedPhysician="",this.model.selectedMedical="tab-selected";let u=d.groupBy(n.medicalDocuments,"date");d.forEach(u,(function(l){l.lineItems=l})),n.documents=u}}filterList(l){this.documents=this.documentsOld;const n=l.srcElement.value;if(console.log(n),!n){this.documents=this.documentsOld;let l=d.groupBy(this.documents,"date");return d.forEach(l,(function(l){l.lineItems=l})),void(this.documents=l)}""==n&&(this.documents=this.documentsOld),this.documents=this.documents.filter(l=>{if(l.documentNo&&n)return l.documentNo.toString().toLowerCase().indexOf(n.toLowerCase())>-1||l.physician.toLowerCase().indexOf(n.toLowerCase())>-1||l.status.toLowerCase().indexOf(n.toLowerCase())>-1});let t=d.groupBy(this.documents,"date");d.forEach(t,(function(l){l.lineItems=l})),this.documents=t}filterListClear(l){this.documents=this.documentsOld;let n=d.groupBy(this.documents,"date");d.forEach(n,(function(l){l.lineItems=l})),this.documents=n}loadData(){let l=[];l.push({documentNo:1e4,date:"27.10.2019",time:"06:28:18 AM",type:"Emergency Discharge Report",typeCode:"EME",physician:"Dr. Suzanne Al Sayed",status:"On Review",statusCode:1,class:"task-primary"},{documentNo:10001,date:"28.10.2019",time:"01:25:44 AM",type:"Physician Discharge Report",typeCode:"PHY",physician:"Dr. Ghassan Khayyat",status:"On Review",statusCode:1,class:"task-primary"},{documentNo:10002,date:"27.10.2019",time:"06:51:00 AM",type:"Medical Record",typeCode:"MED",physician:"Dr. Yaman Tai",status:"On Review",statusCode:1,class:"task-primary"},{documentNo:10003,date:"29.10.2019",time:"12:51:05 AM",type:"Physician Discharge Report",typeCode:"PHY",physician:"Dr. Yaman Tai",status:"On Review",statusCode:1,class:"task-warning"},{documentNo:10004,date:"27.10.2019",time:"06:28:18 AM",type:"Emergency Discharge Report",typeCode:"EME",physician:"Dr. Violet Asfour",status:"Ready",statusCode:0,class:"task-warning"});let n=d.map(l,(function(l){if("EME"==l.typeCode)return l}));n=d.without(n,void 0),this.emergencyDocuments=n;let t=d.map(l,(function(l){if("PHY"==l.typeCode)return l}));t=d.without(t,void 0),this.physicanDocuments=t;let e=d.map(l,(function(l){if("MED"==l.typeCode)return l}));e=d.without(e,void 0),this.medicalDocuments=e,this.model.allDocuments=l.length,this.model.emergencyDocuments=n.length,this.model.physicianDocuments=t.length,this.model.medicalDocuments=e.length,this.documentsOld=l;let u=d.groupBy(l,"date");d.forEach(u,(function(l){l.lineItems=l})),this.documents=u,this.filterDocuments("ALL"),console.log(this.documents)}}var m=e.nb({encapsulation:0,styles:[[".ahLogo[_ngcontent-%COMP%]{display:inline-block;width:13em;height:3.5em}.ahThemeToolBar[_ngcontent-%COMP%]{--background:rgb(190,230,239)}.ahThemeButtonMenu[_ngcontent-%COMP%]{--color:rgb(87,143,182)}.titleWhite[_ngcontent-%COMP%]{color:#000}.title[_ngcontent-%COMP%]{color:#fff;font-weight:700}.subtitle[_ngcontent-%COMP%]{color:#fff;font-style:italic}.vertical-align-content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:flex!important;align-content:center!important;align-items:center!important}.tasks[_ngcontent-%COMP%]{padding:5px;float:left;width:100%}.tasks[_ngcontent-%COMP%]   .task-item[_ngcontent-%COMP%]{width:100%;float:left;padding:0;background:#fff;border-left:3px solid #fff;margin-bottom:10px;box-shadow:1px 1px 1px rgba(0,0,0,.2)}.tasks[_ngcontent-%COMP%]   .task-item[_ngcontent-%COMP%]:hover{background:#f9f9f9;cursor:pointer}.tasks[_ngcontent-%COMP%]   .task-item.task-complete[_ngcontent-%COMP%]{background:#fff2c5}.tasks[_ngcontent-%COMP%]   .task-item.task-primary[_ngcontent-%COMP%]{border-left-color:#1b1e24}.tasks[_ngcontent-%COMP%]   .task-item.task-success[_ngcontent-%COMP%]{border-left-color:#95b75d}.tasks[_ngcontent-%COMP%]   .task-item.task-info[_ngcontent-%COMP%], .tasks[_ngcontent-%COMP%]   .task-item.task-warning[_ngcontent-%COMP%]{border-left-color:#1caf9a}.tasks[_ngcontent-%COMP%]   .task-item.task-danger[_ngcontent-%COMP%]{border-left-color:#e04b4a}.tasks[_ngcontent-%COMP%]   .task-item[_ngcontent-%COMP%]   .task-text[_ngcontent-%COMP%]{margin-bottom:10px;float:left;width:100%;font-size:12px;font-weight:400;padding:10px}.tasks[_ngcontent-%COMP%]   .task-item[_ngcontent-%COMP%]   .task-footer[_ngcontent-%COMP%]{float:left;width:100%;font-size:12px;color:#aaa;line-height:20px;padding:10px;background:#f5f5f5}.tasks[_ngcontent-%COMP%]   .task-item[_ngcontent-%COMP%]   .task-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#aaa;display:block;float:left;margin-left:10px;font-size:14px}.tasks[_ngcontent-%COMP%]   .task-item[_ngcontent-%COMP%]   .task-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#22262e}.tasks[_ngcontent-%COMP%]   .task-drop[_ngcontent-%COMP%]{float:left;width:100%;padding:30px 10px;border:2px dashed #d5d5d5;border-radius:0;font-size:16px;text-align:center;line-height:20px}.tasks[_ngcontent-%COMP%]   .task-drop[_ngcontent-%COMP%]:hover{opacity:.5;filter:alpha(opacity=50);cursor:pointer}ion-tab-bar[_ngcontent-%COMP%]{--color-selected:#000!important}ion-card-subtitle[_ngcontent-%COMP%]{font-size:14px}ion-tab-button.tab-selected[_ngcontent-%COMP%]{--background:rgb(87,143,182)!important;--color-selected:#000000}ion-tab-button[aria-selected=true][_ngcontent-%COMP%]{--background:rgb(87,143,182)!important;--color-selected:var(--ion-color-medium);--ripple-color:var(--ion-color-medium);--color:var(--ion-color-dark)}.ionLabel[_ngcontent-%COMP%]{font-size:14px}"]],data:{}});function h(l){return e.Lb(0,[(l()(),e.pb(0,0,null,null,17,"div",[["class","tasks"],["id","tasks"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,16,"div",[["class","task-item"]],null,null,null,null,null)),e.Gb(512,null,i.t,i.u,[e.q,e.r,e.k,e.B]),e.ob(3,278528,null,0,i.j,[i.t],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),e.pb(4,0,null,null,6,"div",[["class","task-text"]],null,null,null,null,null)),(l()(),e.pb(5,0,null,null,1,"h5",[["style","color:rgb(87,143,182);font-weight:bold"]],null,null,null,null,null)),(l()(),e.Jb(6,null,["Document Number: ",""])),(l()(),e.pb(7,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e.Jb(8,null,["",""])),(l()(),e.pb(9,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Jb(10,null,["Status : ",""])),(l()(),e.pb(11,0,null,null,6,"div",[["class","task-footer"]],null,null,null,null,null)),(l()(),e.pb(12,0,null,null,2,"div",[["class","pull-left"]],null,null,null,null,null)),(l()(),e.pb(13,0,null,null,0,"span",[["class","fa fa-clock-o"]],null,null,null,null,null)),(l()(),e.Jb(14,null,[" "," - ",""])),(l()(),e.pb(15,0,null,null,2,"div",[["class","pull-right"]],null,null,null,null,null)),(l()(),e.pb(16,0,null,null,1,"h6",[["style","color:rgb(87,143,182);"]],null,null,null,null,null)),(l()(),e.Jb(17,null,["",""]))],(function(l,n){l(n,3,0,"task-item",n.context.$implicit.class)}),(function(l,n){l(n,6,0,n.context.$implicit.documentNo),l(n,8,0,n.context.$implicit.physician),l(n,10,0,n.context.$implicit.status),l(n,14,0,n.context.$implicit.date,n.context.$implicit.time),l(n,17,0,n.context.$implicit.type)}))}function g(l){return e.Lb(0,[(l()(),e.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,h)),e.ob(2,278528,null,0,i.k,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.documents[n.parent.context.$implicit.key].lineItems)}),null)}function f(l){return e.Lb(0,[(l()(),e.pb(0,0,null,null,12,"div",[],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,11,"div",[["class","panel panel-default"]],null,null,null,null,null)),(l()(),e.pb(2,0,null,null,8,"div",[["class","panel-heading clickable"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.toggleGroup(l.context.$implicit)&&e),e}),null,null)),e.Gb(512,null,i.t,i.u,[e.q,e.r,e.k,e.B]),e.ob(4,278528,null,0,i.j,[i.t],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Eb(5,{active:0}),(l()(),e.pb(6,0,null,null,4,"h4",[["class","panel-title"]],null,null,null,null,null)),(l()(),e.pb(7,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),e.pb(8,0,null,null,1,"ion-icon",[],null,null,null,c.E,c.h)),e.ob(9,49152,null,0,s.z,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.Jb(10,null,["Document Date : ",""])),(l()(),e.eb(16777216,null,null,1,null,g)),e.ob(12,16384,null,0,i.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component,e=l(n,5,0,t.isGroupShown(n.context.$implicit));l(n,4,0,"panel-heading clickable",e),l(n,9,0,t.isGroupShown(n.context.$implicit)?"remove-outline":"add-outline"),l(n,12,0,t.isGroupShown(n.context.$implicit))}),(function(l,n){var t=n.component;l(n,10,0,t.getDateDisplay(t.documents[n.context.$implicit.key]))}))}function k(l){return e.Lb(0,[(l()(),e.pb(0,0,null,null,5,"div",[["class","panel-group"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,4,"ion-list",[],null,null,null,c.H,c.k)),e.ob(2,49152,null,0,s.L,[e.h,e.k,e.x],null,null),(l()(),e.eb(16777216,null,0,2,null,f)),e.ob(4,278528,null,0,i.k,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),e.Db(0,i.e,[e.r])],(function(l,n){var t=n.component;l(n,4,0,e.Kb(n,4,0,e.Bb(n,5).transform(t.documents,t.customSort)))}),null)}function C(l){return e.Lb(0,[(l()(),e.pb(0,0,null,null,28,"ion-header",[],null,null,null,c.D,c.g)),e.ob(1,49152,null,0,s.y,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,12,"ion-toolbar",[["class","ahThemeToolBar"]],null,null,null,c.T,c.w)),e.ob(3,49152,null,0,s.wb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,c.A,c.d)),e.ob(5,49152,null,0,s.i,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,1,"ion-menu-button",[["autoHide","false"],["class","ahThemeButtonMenu"]],null,null,null,c.I,c.m)),e.ob(7,49152,null,0,s.O,[e.h,e.k,e.x],{autoHide:[0,"autoHide"]},null),(l()(),e.pb(8,0,null,0,0,"img",[["class","ahLogoMini"],["src","./assets/icon/favico.png"]],null,null,null,null,null)),(l()(),e.pb(9,0,null,0,2,"ion-thumbnail",[["slot","end"],["style","padding:0.5em"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.openProfile(t)&&e),e}),c.R,c.u)),e.ob(10,49152,null,0,s.tb,[e.h,e.k,e.x],null,null),(l()(),e.pb(11,0,null,0,0,"img",[["src","./assets/icon/usericon.svg"]],null,null,null,null,null)),(l()(),e.pb(12,0,null,0,2,"ion-title",[["class","ion-text-center titleWhite"]],null,null,null,c.S,c.v)),e.ob(13,49152,null,0,s.ub,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,["Medical Reports"])),(l()(),e.pb(15,0,null,0,13,"ion-toolbar",[],null,null,null,c.T,c.w)),e.ob(16,49152,null,0,s.wb,[e.h,e.k,e.x],null,null),(l()(),e.pb(17,0,null,0,3,"ion-searchbar",[["showCancelButton","never"]],null,[[null,"ionInput"],[null,"ionClear"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var u=!0,o=l.component;return"ionBlur"===n&&(u=!1!==e.Bb(l,20)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==e.Bb(l,20)._handleInputEvent(t.target)&&u),"ionInput"===n&&(u=!1!==o.filterList(t)&&u),"ionClear"===n&&(u=!1!==o.filterListClear(t)&&u),u}),c.L,c.o)),e.Gb(5120,null,a.e,(function(l){return[l]}),[s.Gb]),e.ob(19,49152,null,0,s.eb,[e.h,e.k,e.x],{showCancelButton:[0,"showCancelButton"]},null),e.ob(20,16384,null,0,s.Gb,[e.k],null,null),(l()(),e.pb(21,0,null,0,7,"ion-buttons",[["slot","end"]],null,null,null,c.A,c.d)),e.ob(22,49152,null,0,s.i,[e.h,e.k,e.x],null,null),(l()(),e.pb(23,0,null,0,2,"button",[["clear",""],["icon-only",""],["ion-button",""]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.sortData()&&e),e}),null,null)),(l()(),e.pb(24,0,null,null,1,"ion-icon",[["name","swap-vertical"]],null,null,null,c.E,c.h)),e.ob(25,49152,null,0,s.z,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(26,0,null,0,2,"button",[["clear",""],["icon-only",""],["ion-button",""]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.showFilters()&&e),e}),null,null)),(l()(),e.pb(27,0,null,null,1,"ion-icon",[["name","funnel"]],null,null,null,c.E,c.h)),e.ob(28,49152,null,0,s.z,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(29,0,null,null,5,"ion-content",[],null,null,null,c.B,c.e)),e.ob(30,49152,null,0,s.r,[e.h,e.k,e.x],null,null),(l()(),e.pb(31,0,null,0,3,"div",[["class","card"]],null,null,null,null,null)),(l()(),e.pb(32,0,null,null,2,"div",[["class","content"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,k)),e.ob(34,16384,null,0,i.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(35,0,null,null,52,"ion-footer",[],null,null,null,c.C,c.f)),e.ob(36,49152,null,0,s.w,[e.h,e.k,e.x],null,null),(l()(),e.pb(37,0,null,0,50,"ion-toolbar",[],null,null,null,c.T,c.w)),e.ob(38,49152,null,0,s.wb,[e.h,e.k,e.x],null,null),(l()(),e.pb(39,0,null,0,48,"ion-tabs",[],null,[[null,"ionTabButtonClick"]],(function(l,n,t){var u=!0;return"ionTabButtonClick"===n&&(u=!1!==e.Bb(l,40).select(t.detail.tab)&&u),u}),c.Q,c.t)),e.ob(40,49152,null,1,s.qb,[s.Bb],null,null),e.Hb(603979776,1,{tabBar:0}),(l()(),e.pb(42,0,null,1,45,"ion-tab-bar",[["slot","bottom"]],null,null,null,c.O,c.r)),e.ob(43,49152,[[1,4]],0,s.ob,[e.h,e.k,e.x],null,null),(l()(),e.pb(44,0,null,0,10,"ion-tab-button",[["id","all"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.filterDocuments("ALL")&&e),e}),c.P,c.s)),e.Gb(512,null,i.t,i.u,[e.q,e.r,e.k,e.B]),e.ob(46,278528,null,0,i.j,[i.t],{ngClass:[0,"ngClass"]},null),e.ob(47,49152,null,0,s.pb,[e.h,e.k,e.x],null,null),(l()(),e.pb(48,0,null,0,1,"ion-icon",[["name","person-circle"]],null,null,null,c.E,c.h)),e.ob(49,49152,null,0,s.z,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(50,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["All Documents"])),(l()(),e.pb(52,0,null,0,2,"ion-badge",[["color","dark"]],null,null,null,c.y,c.b)),e.ob(53,49152,null,0,s.g,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Jb(54,0,["",""])),(l()(),e.pb(55,0,null,0,10,"ion-tab-button",[["id","emergencyc"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.filterDocuments("EME")&&e),e}),c.P,c.s)),e.Gb(512,null,i.t,i.u,[e.q,e.r,e.k,e.B]),e.ob(57,278528,null,0,i.j,[i.t],{ngClass:[0,"ngClass"]},null),e.ob(58,49152,null,0,s.pb,[e.h,e.k,e.x],null,null),(l()(),e.pb(59,0,null,0,1,"ion-icon",[["name","person-circle"]],null,null,null,c.E,c.h)),e.ob(60,49152,null,0,s.z,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(61,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Emergency Discharge"])),(l()(),e.pb(63,0,null,0,2,"ion-badge",[["color","dark"]],null,null,null,c.y,c.b)),e.ob(64,49152,null,0,s.g,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Jb(65,0,["",""])),(l()(),e.pb(66,0,null,0,10,"ion-tab-button",[["id","physicain"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.filterDocuments("PHY")&&e),e}),c.P,c.s)),e.Gb(512,null,i.t,i.u,[e.q,e.r,e.k,e.B]),e.ob(68,278528,null,0,i.j,[i.t],{ngClass:[0,"ngClass"]},null),e.ob(69,49152,null,0,s.pb,[e.h,e.k,e.x],null,null),(l()(),e.pb(70,0,null,0,1,"ion-icon",[["name","person-circle"]],null,null,null,c.E,c.h)),e.ob(71,49152,null,0,s.z,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(72,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Physician Discharge"])),(l()(),e.pb(74,0,null,0,2,"ion-badge",[["color","dark"]],null,null,null,c.y,c.b)),e.ob(75,49152,null,0,s.g,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Jb(76,0,["",""])),(l()(),e.pb(77,0,null,0,10,"ion-tab-button",[["id","medical"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.filterDocuments("MED")&&e),e}),c.P,c.s)),e.Gb(512,null,i.t,i.u,[e.q,e.r,e.k,e.B]),e.ob(79,278528,null,0,i.j,[i.t],{ngClass:[0,"ngClass"]},null),e.ob(80,49152,null,0,s.pb,[e.h,e.k,e.x],null,null),(l()(),e.pb(81,0,null,0,1,"ion-icon",[["name","person-circle"]],null,null,null,c.E,c.h)),e.ob(82,49152,null,0,s.z,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(83,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Medical Report"])),(l()(),e.pb(85,0,null,0,2,"ion-badge",[["color","dark"]],null,null,null,c.y,c.b)),e.ob(86,49152,null,0,s.g,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Jb(87,0,["",""]))],(function(l,n){var t=n.component;l(n,7,0,"false"),l(n,19,0,"never"),l(n,25,0,"swap-vertical"),l(n,28,0,"funnel"),l(n,34,0,t.documents),l(n,46,0,t.model.selectedAll),l(n,49,0,"person-circle"),l(n,53,0,"dark"),l(n,57,0,t.model.selectedEmergency),l(n,60,0,"person-circle"),l(n,64,0,"dark"),l(n,68,0,t.model.selectedPhysician),l(n,71,0,"person-circle"),l(n,75,0,"dark"),l(n,79,0,t.model.selectedMedical),l(n,82,0,"person-circle"),l(n,86,0,"dark")}),(function(l,n){var t=n.component;l(n,54,0,t.model.allDocuments),l(n,65,0,t.model.emergencyDocuments),l(n,76,0,t.model.physicianDocuments),l(n,87,0,t.model.medicalDocuments)}))}function y(l){return e.Lb(0,[(l()(),e.pb(0,0,null,null,1,"app-medical-reports",[],null,null,null,C,m)),e.ob(1,114688,null,0,p,[s.Db],null,null)],(function(l,n){l(n,1,0)}),null)}var M=e.lb("app-medical-reports",p,y,{},{},[]),x=t("iInd");class v{}t.d(n,"MedicalReportsPageModuleNgFactory",(function(){return P}));var P=e.mb(u,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[o.a,M]],[3,e.j],e.v]),e.zb(4608,i.n,i.m,[e.s,[2,i.w]]),e.zb(4608,a.l,a.l,[]),e.zb(4608,s.a,s.a,[e.x,e.g]),e.zb(4608,s.Ab,s.Ab,[s.a,e.j,e.p]),e.zb(4608,s.Db,s.Db,[s.a,e.j,e.p]),e.zb(1073742336,i.b,i.b,[]),e.zb(1073742336,a.k,a.k,[]),e.zb(1073742336,a.d,a.d,[]),e.zb(1073742336,s.yb,s.yb,[]),e.zb(1073742336,x.o,x.o,[[2,x.t],[2,x.m]]),e.zb(1073742336,v,v,[]),e.zb(1073742336,u,u,[]),e.zb(1024,x.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);