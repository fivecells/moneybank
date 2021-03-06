function ar_get_clientInfo(key) {
    var _arc = window._pv_arc_pub || [];
    for (i = 0; i < _arc.length; i++) if (_arc[i][0] == key) return _arc[i][1];
    return ""
}

function ar_join_clientInfo() {
    var u = "", _arc = window._pv_arc_pub || [];
    for (i = 0; i < _arc.length; i++) u += "&" + _arc[i][0] + "=" + encodeURIComponent(_arc[i][1]);
    return u
}

function ar_encode(str) {
    var e = "", i = 0;
    for (i = 0; i < str.length; i++) e += str.charCodeAt(i) >= 0 && str.charCodeAt(i) <= 255 ? escape(str.charAt(i)) : str.charAt(i);
    return e
}

function ar_get_screen() {
    var c = "";
    return self.screen && (c = screen.width + "x" + screen.height), c
}

function ar_get_color() {
    var c = "";
    return self.screen && (c = screen.colorDepth + "-bit"), c
}

function ar_get_language() {
    var l = "", n = navigator;
    return n.language ? l = n.language.toLowerCase() : n.browserLanguage && (l = n.browserLanguage.toLowerCase()), l
}

function ar_get_agent() {
    var a = "", n = navigator;
    return n.userAgent && (a = n.userAgent), a
}

function ar_get_jvm_enabled() {
    var j = "", n = navigator;
    return j = n.javaEnabled() ? 1 : 0
}

function ar_get_cookie_enabled() {
    var c = "", n = navigator;
    return c = n.cookieEnabled ? 1 : 0
}

function ar_get_flash_ver() {
    var f = "", n = navigator;
    if (n.plugins && n.plugins.length) {
        for (var ii = 0; ii < n.plugins.length; ii++) if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
            f = n.plugins[ii].description.split("Shockwave Flash ")[1];
            break
        }
    } else if (window.ActiveXObject) for (var ii = 10; ii >= 2; ii--) try {
        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
        if (fl) {
            f = ii + ".0";
            break
        }
    } catch (e) {
    }
    return f
}

function ar_get_app() {
    var a = "", n = navigator;
    return n.appName && (a = n.appName), a
}

function ar_c_ctry_top_domain(str) {
    var pattern = "/^aero$|^cat$|^coop$|^int$|^museum$|^pro$|^travel$|^xxx$|^com$|^net$|^gov$|^org$|^mil$|^edu$|^biz$|^info$|^name$|^ac$|^mil$|^co$|^ed$|^gv$|^nt$|^bj$|^hz$|^sh$|^tj$|^cq$|^he$|^nm$|^ln$|^jl$|^hl$|^js$|^zj$|^ah$|^hb$|^hn$|^gd$|^gx$|^hi$|^sc$|^gz$|^yn$|^xz$|^sn$|^gs$|^qh$|^nx$|^xj$|^tw$|^hk$|^mo$|^fj$|^ha$|^jx$|^sd$|^sx$/i";
    return str.match(pattern) ? 1 : 0
}

function ar_c_ctry_domain(str) {
    var pattern = "/^ac$|^ad$|^ae$|^af$|^ag$|^ai$|^al$|^am$|^an$|^ao$|^aq$|^ar$|^as$|^at$|^au$|^aw$|^az$|^ba$|^bb$|^bd$|^be$|^bf$|^bg$|^bh$|^bi$|^bj$|^bm$|^bo$|^br$|^bs$|^bt$|^bv$|^bw$|^by$|^bz$|^ca$|^cc$|^cd$|^cf$|^cg$|^ch$|^ci$|^ck$|^cl$|^cm$|^cn$|^co$|^cr$|^cs$|^cu$|^cv$|^cx$|^cy$|^cz$|^de$|^dj$|^dk$|^dm$|^do$|^dz$|^ec$|^ee$|^eg$|^eh$|^er$|^es$|^et$|^eu$|^fi$|^fj$|^fk$|^fm$|^fo$|^fr$|^ly$|^hk$|^hm$|^hn$|^hr$|^ht$|^hu$|^id$|^ie$|^il$|^im$|^in$|^io$|^ir$|^is$|^it$|^je$|^jm$|^jo$|^jp$|^ke$|^kg$|^kh$|^ki$|^km$|^kn$|^kp$|^kr$|^kw$|^ky$|^kz$|^la$|^lb$|^lc$|^li$|^lk$|^lr$|^ls$|^lt$|^lu$|^lv$|^ly$|^ga$|^gb$|^gd$|^ge$|^gf$|^gg$|^gh$|^gi$|^gl$|^gm$|^gn$|^gp$|^gq$|^gr$|^gs$|^gt$|^gu$|^gw$|^gy$|^ma$|^mc$|^md$|^mg$|^mh$|^mk$|^ml$|^mm$|^mn$|^mo$|^mp$|^mq$|^mr$|^ms$|^mt$|^mu$|^mv$|^mw$|^mx$|^my$|^mz$|^na$|^nc$|^ne$|^nf$|^ng$|^ni$|^nl$|^no$|^np$|^nr$|^nu$|^nz$|^om$|^re$|^ro$|^ru$|^rw$|^pa$|^pe$|^pf$|^pg$|^ph$|^pk$|^pl$|^pm$|^pr$|^ps$|^pt$|^pw$|^py$|^qa$|^wf$|^ws$|^sa$|^sb$|^sc$|^sd$|^se$|^sg$|^sh$|^si$|^sj$|^sk$|^sl$|^sm$|^sn$|^so$|^sr$|^st$|^su$|^sv$|^sy$|^sz$|^tc$|^td$|^tf$|^th$|^tg$|^tj$|^tk$|^tm$|^tn$|^to$|^tp$|^tr$|^tt$|^tv$|^tw$|^tz$|^ua$|^ug$|^uk$|^um$|^us$|^uy$|^uz$|^va$|^vc$|^ve$|^vg$|^vi$|^vn$|^vu$|^ye$|^yt$|^yu$|^za$|^zm$|^zr$|^zw$/i";
    return str.match(pattern) ? 1 : 0
}

function ar_get_domain(host) {
    var d = host.replace(/^www\./, ""), ss = d.split("."), l = ss.length;
    if (3 == l) ar_c_ctry_top_domain(ss[1]) && ar_c_ctry_domain(ss[2]) || (d = ss[1] + "." + ss[2]); else if (l >= 3) {
        var ip_pat = "^[0-9]*.[0-9]*.[0-9]*.[0-9]*$";
        if (host.match(ip_pat)) return d;
        d = ar_c_ctry_top_domain(ss[l - 2]) && ar_c_ctry_domain(ss[l - 1]) ? ss[l - 3] + "." + ss[l - 2] + "." + ss[l - 1] : ss[l - 2] + "." + ss[l - 1]
    }
    return d
}

function ar_get_cookie(name) {
    var b, e, mn = name + "=", co = document.cookie;
    return "=" == mn ? co : (b = co.indexOf(mn), b < 0 ? "" : (e = co.indexOf(";", b + name.length), e < 0 ? co.substring(b + name.length + 1) : co.substring(b + name.length + 1, e)))
}

function ar_set_cookie(name, val, cotp) {
    var date = new Date, year = date.getFullYear(), hour = date.getHours(), cookie = "";
    0 == cotp ? cookie = name + "=" + val + ";" : 1 == cotp ? (year += 10, date.setYear(year), cookie = name + "=" + val + ";expires=" + date.toGMTString() + ";") : 2 == cotp && (hour += 1, date.setHours(hour), cookie = name + "=" + val + ";expires=" + date.toGMTString() + ";");
    var d = ar_get_domain(document.domain);
    "" != d && (cookie += "domain=" + d + ";"), cookie += "path=/;", document.cookie = cookie
}

function str_reverse(str) {
    var ln = str.length, i = 0, temp = "";
    for (i = ln - 1; i > -1; i--) temp += "." == str.charAt(i) ? "#" : str.charAt(i);
    return temp
}

function ar_get_ss_id(str) {
    return len = str.indexOf("_"), str = str.substring(len + 1), len = str.indexOf("_"), str = str.substring(len + 1)
}

function ar_get_ss_no(str) {
    return len = str.indexOf("_"), str = str.substring(0, len), parseInt(str)
}

function ar_get_stm() {
    var i, date = new Date, yy = date.getFullYear(), mm = date.getMonth(), dd = date.getDate(), hh = date.getHours(),
        ii = date.getMinutes(), ss = date.getSeconds(), tm = 0;
    for (i = 1970; i < yy; i++) tm += i % 4 == 0 && i % 100 != 0 || i % 100 == 0 && i % 400 == 0 ? 31622400 : 31536e3;
    for (mm += 1, i = 1; i < mm; i++) tm += 1 == i || 3 == i || 5 == i || 7 == i || 8 == i || 10 == i || 12 == i ? 2678400 : 2 == i ? yy % 4 == 0 && yy % 100 != 0 || yy % 100 == 0 && yy % 400 == 0 ? 2505600 : 2419200 : 2592e3;
    return tm += 86400 * (dd - 1), tm += 3600 * hh, tm += 60 * ii, tm += ss
}

function ar_get_ctm(str) {
    return len = str.indexOf("_"), str = str.substring(len + 1), len = str.indexOf("_"), str = str.substring(0, len), parseInt(str, 10)
}

function ar_get_random(n) {
    for (var str = "", i = 0; i < n; i++) str += String(parseInt(10 * Math.random()));
    return str
}

function ar_main(referrer) {
    var i, unit_id = "9999", u = "undefined" == typeof PVServerHost ? getFrameMidPubData().pvHost : PVServerHost,
        dest_path = u + "/perbank/image/perbank.gif?unit_id=" + unit_id, host = document.location.host,
        domain = ar_get_domain(host.toLocaleLowerCase()), hashval = 0;
    for (i = 0; i < domain.length; i++) hashval += domain.charCodeAt(i);
    var ref = referrer || document.referrer;
    ref = encodeURIComponent(String(ref));
    var urlname = document.URL.substring(document.URL.lastIndexOf("/") + 1);
    urlname = encodeURIComponent(String(urlname));
    var title = document.title;
    title = encodeURIComponent(String(title));
    var charset = document.charset;
    charset = encodeURIComponent(String(charset));
    var screen = ar_get_screen();
    screen = encodeURIComponent(String(screen));
    var color = ar_get_color();
    color = encodeURIComponent(String(color));
    var language = ar_get_language();
    language = encodeURIComponent(String(language));
    var agent = ar_get_agent();
    agent = encodeURIComponent(String(agent));
    var jvm_enabled = ar_get_jvm_enabled();
    jvm_enabled = encodeURIComponent(String(jvm_enabled));
    var cookie_enabled = ar_get_cookie_enabled();
    cookie_enabled = encodeURIComponent(String(cookie_enabled));
    var flash_ver = ar_get_flash_ver();
    flash_ver = encodeURIComponent(String(flash_ver));
    var flag_pri = ar_get_cookie("isPri");
    flag_pri = encodeURIComponent(String(flag_pri)), dest = dest_path + "&urlname=" + urlname + "&title=" + title + "&chset=" + charset + "&scr=" + screen + "&col=" + color + "&lg=" + language + "&je=" + jvm_enabled + "&ec=" + cookie_enabled + "&fv=" + flash_ver + "&cnv=" + String(Math.random()) + "&ref=" + ref + "&uagent=" + agent + "&privateBankFlagPV=" + flag_pri, dest += ar_join_clientInfo(), console.log("dest1: " + dest);
    var str_pv = ["uip", "areacode", "url", "urlname", "title", "chset", "scr", "col", "lg", "je", "ec", "fv", "cnv", "ref", "uagent", "stat_ss", "prodcode", "prodname", "curmenu", "srcpageno", "curpageno", "pvModelElementId", "labelname", "cis", "TRANSDATE", "TRANSTIME", "requestChannel", "sessionId", "searchWord", "searchChannel", "filterWord", "serviceid", "privateBankFlagPV"];
    for (i = 0; i < str_pv.length; i++) {
        var str_p = str_pv[i];
        dest.indexOf(str_p) <= -1 && (dest = dest + "&" + str_p + "=")
    }
    console.log("dest2: " + dest);
    var dom = jQuery('<img style="display:none" src="' + dest + '" border="0" width="0px" height="0px" />');
    document.body.appendChild(dom.get(0))
}

function addPvValue(pa) {
    var re = !1;
    if (pa.length > 0) {
        var _arc = window._pv_arc_pub || [];
        for (i = 0; i < _arc.length; i++) _arc[i][0] == pa[0] && (_arc[i] = pa, re = !0);
        re || _arc.push(pa)
    }
}

jQuery(document).ready(function () {
    try {
        ar_main()
    } catch (e) {
    }
});