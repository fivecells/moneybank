try{if(window.name=="content-frame"){parent.srollTOTop()}if(window.name=="perbank-content-frame"){try{parent.parent.scroll(0,0);parent.parent.parent.scroll(0,0)}catch(e){}}if(window.name=="QueryBalanceFrame"){parent.parent.parent.parent.scroll(0,0)}}catch(e){}function getFrameMidWindow(){var result=window;try{for(var i=0;i<20;i++){if(typeof result=="object"&&typeof result.name=="string"&&result.name=="content-frame"){break}else{result=result.parent.window}}}catch(e){result=parent}return result.parent}function getTopFrameMidWindow(){var result=window;var cnums=getFrameMidWindowNum();var b=0;try{for(var i=0;i<20;i++){if(typeof result=="object"&&typeof result.name=="string"&&result.name=="content-frame"){b++;if(cnums==b){break}else{result=result.parent.window}}else{result=result.parent.window}}}catch(e){result=window}return result.parent}function getFrameMidWindowNum(){var result=window;var t=0;try{for(var i=0;i<20;i++){if(typeof result=="object"&&typeof result.name=="string"&&result.name=="content-frame"){t++;result=result.parent.window}else{result=result.parent.window}}}catch(e){result=window}return t}function isinP3bank(){var result=window;try{for(var i=0;i<20;i++){if(typeof result=="object"&&typeof result.name=="string"&&result.name=="content-frame"){return true}else{result=result.parent.window}}}catch(e){result=parent}return result.parent}function getFrameMidPubData(){return getFrameMidWindow().Perbank3PubData}function AtomSerivceSubmit(serviceId,transData,checkflag,loginws){UserBrowseSidStack.setBrowseSid(serviceId,transData);var serviceIdInto=serviceId;if(serviceId.indexOf(">")>0){serviceIdInto=serviceId;serviceId=serviceId.substring(0,serviceId.indexOf(">"))}if(loctionmapList.mustInMainFrame(serviceId)){getTopFrameMidWindow().AtomSerivceSubmit(serviceIdInto,transData,checkflag,loginws)}else{getFrameMidWindow().AtomSerivceSubmit(serviceIdInto,transData,checkflag,loginws)}}function perbankAtomLocationCrossPage(serviceId,transData){if(getFrameMidPubData().requestChannel=="302"){if(loctionmapList.mustInMainFrame(serviceId)){getTopFrameMidWindow().AtomSerivceSubmit(serviceId,transData,false)}else{getFrameMidWindow().AtomSerivceSubmit(serviceId,transData,false)}}else{getFrameMidWindow().perbankAtomLocationCrossPage(serviceId,transData)}}function perbankCrossPageFormSubmit(formDom){var action_temp=formDom.action;formDom.action="/icbc/newperbank/perbank3/includes/changeFrame_temp.jsp";var oInput=document.createElement("input");oInput.type="hidden";oInput.name="action_perbankCrossPageFormSubmit";oInput.value=action_temp;formDom.appendChild(oInput);formDom.submit()}function perbank3_IEPASubmit(paramObj){var injectType=paramObj.injectType;if(injectType=="1"){if(isInEbankAds()){getTopWindow().perbankAtomLocationTW(paramObj.serviceId,paramObj.transData)}else{AtomSerivceSubmit(paramObj.serviceId,paramObj.transData)}}else if(injectType=="2"){var sendObj={};sendObj.url=paramObj.floatURL;if(isInEbankAds()){var sendObjtemp={};var url_frame_temp="/icbc/newperbank/perbank3/frame/perbank_showfloat_mid.jsp";sendObjtemp.width="1000px";sendObjtemp.height=window.screen.height*.53+"px";sendObjtemp.url=CrossDomain.perbankHost+url_frame_temp+"?showUrl="+encodeURIComponent(encodeURI(sendObj.url));getTopWindow().perbankOpenWindow(sendObjtemp)}else{getFrameMidWindow().perbankOpenWindow(sendObj)}}}function isInEbankAds(){var isInEbankAds=false;var result=window;try{for(var i=0;i<5;i++){if(typeof result=="object"&&typeof result.name=="string"&&result.name=="perbank-content-frame-adv"){isInEbankAds=true;break}else{result=result.parent.window}}}catch(e){result=parent}return isInEbankAds}function isInEbankMain(){var isInEbankAds=false;var result=window;try{for(var i=0;i<5;i++){if(typeof result=="object"&&typeof result.name=="string"&&result.name=="perbank-content-frame"){isInEbankAds=true;break}else{result=result.parent.window}}}catch(e){result=parent}return isInEbankAds}function isInEbankMain(){var isInEbankAds=false;var result=window;try{for(var i=0;i<5;i++){if(typeof result=="object"&&typeof result.name=="string"&&result.name=="perbank-content-frame"){isInEbankAds=true;break}else{result=result.parent.window}}}catch(e){result=parent}return isInEbankAds}function perbank3_mallLogin(serviceId,transData){if(getFrameMidPubData().requestChannel=="302"){getTopWindow().showLogonDiv(serviceId,transData)}else{window.location.href="/icbc/newperbank/perbank3/login_temp.jsp?encodeType=b64&serviceId="+serviceId+"&transData="+transData}}function LastAtomSerivceSubmit(){getFrameMidWindow().LastAtomSerivceSubmit()}function AtomSerivceSubmitContinue(){getFrameMidWindow().AtomSerivceSubmitContinue()}function perbankFormSubmit(formDom){if(hasPvModels)setTimeout("submitForm_perbank3pub('"+formDom.name+"')",50);else formDom.submit()}function submitForm_perbank3pub(formName){eval("document."+formName).submit()}function perbankPageLinkTo(url){if(hasPvModels)setTimeout("pageLink_perbank3pub('"+url+"')",50);else window.location.href=url}function pageLink_perbank3pub(url){window.location.href=url}function perbankRelocateByIdorUrl(serviceId,url){getFrameMidWindow().perbankRelocateByIdorUrl(serviceId,url)}var _hasChildFlag_pub=false;var _freshHeightIntervalFlag_pub;function perbankFreshFrameHeight(h,frameName){_hasChildFlag_pub=true;clearInterval(_freshHeightIntervalFlag_pub);var f=jQuery("iframe[name="+frameName+"]");if(f.length>0&&f.attr("autoHeight")!="false"){jQuery("iframe[name="+frameName+"]").height(h)}_changeHeight_pub()}function _changeHeight_pub(){if(!window.name||window.name==""){_clearHeightInterval_pub();return}var visibleTable=jQuery("body").children("table:visible");var visibleDiv=jQuery("body").children("div:visible");var vform=jQuery("body").children("form:visible");var visiblebr=jQuery("body").children("br");var vphtml=jQuery("body").children("p:visible");var bodyHeight=document.body.scrollHeight;var childDom=null;var height=bodyHeight;var childDomHeight=0;visibleTable.each(function(){childDomHeight=childDomHeight+jQuery(this).outerHeight(true)});vphtml.each(function(){childDomHeight=childDomHeight+jQuery(this).outerHeight(true)});visibleDiv.each(function(){if(jQuery(this).attr("noheight")!="true"){if(jQuery(this).css("position")!="absolute"||jQuery(this).attr("id")=="oCalendarChs_Div"||jQuery(this).attr("id")=="ui-datepicker-div"){childDomHeight=childDomHeight+jQuery(this).outerHeight(true)}else{childDomHeight=childDomHeight+50}}});vform.each(function(){childDomHeight=childDomHeight+jQuery(this).outerHeight(true)});var tapheight=0;var trheight=0;if(parent.hasadv){tapheight=tapheight+140}if((visibleTable.length>0||visibleDiv.length>0)&&bodyHeight>0){height=Math.min(childDomHeight+trheight+visiblebr.length*20+tapheight,bodyHeight+tapheight)}else{height=Math.max(childDomHeight+trheight+visiblebr.length*20+tapheight,bodyHeight+tapheight)}try{if(parent!=self){if(parent.name=="perbank-content-frame"&&height<500){height=500}parent.perbankFreshFrameHeight(height,window.name)}}catch(e){}}function _freshHeightInterval_pub(){if(!isNoautoHeight()){_freshHeightIntervalFlag_pub=setInterval("_changeHeight_pub()",500);getPvModels()}}function _setHeightInterval_pub(){_freshHeightIntervalFlag_pub=setInterval("_changeHeight_pub()",500)}function _clearHeightInterval_pub(){clearInterval(_freshHeightIntervalFlag_pub)}var hasPvModels=false;function getPvModels(){try{var pv_models=jQuery(".pv_model");if(pv_models.length>0){hasPvModels=true;pv_models.each(function(){jQuery(this).bind("click",function(){getFrameMidPubData().pvModelElementId=jQuery(this).attr("id")})})}}catch(e){}}function _scrollTop(){try{var l=jQuery(".srollTOTop").length;if(l>0){getTopFrameMidWindow().srollTOTop()}var b=jQuery(".srollTOTopWindow").length;if(b>0){getTopWindow().scroll(0,0)}}catch(e){}}function isNoautoHeight(){try{var l=jQuery(".noautoHeight").length;if(l>0){return true}}catch(e){}return false}function getTopWindow(){var Topwindow=getTopFrameMidWindow().parent.window;return Topwindow}$(function(){_freshHeightInterval_pub();_scrollTop();try{parent.AtomSerivceHideLoading()}catch(e){}});function logPV(serviceid,Prodid,ProdName,flag){addPvValue(["pvModelElementId","MainMenu"]);addPvValue(["serviceid",serviceid]);addPvValue(["requestChannel","302"]);if(typeof Prodid!="undefined"&&Prodid!=""){addPvValue(["prodcode",Prodid])}if(typeof ProdName!="undefined"&&ProdName!=""){addPvValue(["prodname",ProdName])}if(typeof flag!="undefined"&&flag!=""&&flag=="1"){addPvValue(["srcpageno","20000000"])}try{ar_main()}catch(e){}addPvValue(["pvModelElementId",""]);addPvValue(["serviceid",""]);addPvValue(["requestChannel",""]);addPvValue(["prodcode",""]);addPvValue(["prodname",""]);addPvValue(["srcpageno",""])}var Utils={setCookie:function(cookieName,cookieValue,date,domain){var now=new Date;var expire=new Date;if(date==null||date==0){date=1}expire.setTime(now.getTime()+36e5*24*date);document.cookie=cookieName+"="+encodeURI(cookieValue,"utf-8")+";expires="+expire.toGMTString()+";domain="+domain+";path=/"},getCookie:function(cookieName){var prefix=cookieName+"=";var start=document.cookie.indexOf(prefix);if(start==-1){return null}var end=document.cookie.indexOf(";",start+prefix.length);if(end==-1){end=document.cookie.length}var value=document.cookie.substring(start+prefix.length,end);return decodeURIComponent(value)},clearCookie:function(cookieName,domain){if(Utils.getCookie(cookieName)){var exp=new Date;exp.setTime(exp.getTime()-36e5*24*1);document.cookie=cookieName+"="+cookieName+"; domain="+domain+"; expires="+exp.toGMTString()+";path=/"}}};var Storage={setStorage:function(storageName,storageValue){if(window.sessionStorage){var storage=window.sessionStorage;storage.setItem(storageName,storageValue)}else{Utils.setCookie(storageName,storageValue,7,window.location.href.replace(/.*:\/\/([^:|^\/]*).*/,"$1"))}},getStorage:function(storageName){if(window.sessionStorage){var storage=window.sessionStorage;return storage.getItem(storageName)}else{if(Utils.getCookie(storageName)==storageName){return null}else{return Utils.getCookie(storageName)}}},clearStorage:function(storageName){if(window.sessionStorage){var storage=window.sessionStorage;try{storage.removeItem(storageName)}catch(e){}}else{Utils.clearCookie(storageName,window.location.href.replace(/.*:\/\/([^:|^\/]*).*/,"$1"))}}};var UserBrowseSidStack={setBrowseSid:function(serviceId,transData){try{var str1='{"serviceId":"'+serviceId+'","transData":"'+transData+'"}';var userBrowseSidStackValueArray=[];var userBrowseSidStackValue=null;userBrowseSidStackValue=Storage.getStorage("UserBrowseSidStack");if(userBrowseSidStackValue!=null&&userBrowseSidStackValue!=""){userBrowseSidStackValueArray=userBrowseSidStackValue.split("~``~")}var str2=userBrowseSidStackValueArray.pop();if(str2!=null){var str2Json=eval("("+str2+")");if(serviceId!=str2Json.serviceId){userBrowseSidStackValueArray.push(str2)}}userBrowseSidStackValueArray.push(str1);Storage.setStorage("UserBrowseSidStack",userBrowseSidStackValueArray.join("~``~"))}catch(e){}},popPreBrowseSid:function(){try{var userBrowseSidStackValue=Storage.getStorage("UserBrowseSidStack");if(userBrowseSidStackValue!=null){var userBrowseSidStackValueArray=userBrowseSidStackValue.split("~``~");userBrowseSidStackValueArray.pop();var str1=userBrowseSidStackValueArray.pop();Storage.setStorage("UserBrowseSidStack",userBrowseSidStackValueArray.join("~``~"));if(str1!=""){return eval("("+str1+")")}}}catch(e){}return null},returnBack:function(){var backSidJson=UserBrowseSidStack.popPreBrowseSid();if(backSidJson==null||backSidJson==""){history.go(-1)}else{try{var serviceId=backSidJson.serviceId;if(serviceId=="undefined"||serviceId=="null")serviceId=null;var transData=backSidJson.transData;if(transData=="undefined"||transData=="null")transData=null;AtomSerivceSubmit(serviceId,transData)}catch(e){history.go(-1)}}},clearUserBrowseSidStack:function(){Storage.clearStorage("UserBrowseSidStack")},getServiceid:function(step){try{var userBrowseSidStackValue=Storage.getStorage("UserBrowseSidStack");if(userBrowseSidStackValue!=null){var userBrowseSidStackValueArray=userBrowseSidStackValue.split("~``~");var sidJson=eval("("+userBrowseSidStackValueArray[userBrowseSidStackValueArray.length-step]+")");return sidJson.serviceId}}catch(e){}return null}};