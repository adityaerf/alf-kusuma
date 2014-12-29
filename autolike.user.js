// ==UserScript==
// @name			Auto Like Facebook
// @namespace		auto_like_facebook
// @description		Auto Like Facebook by Kusuma189 - Kakiteng c Kusuma. Auto Like status, wall and facebook comments system uses delay timer that allows you to control the speed of access and prevents blocking of the account.
// @include			htt*://www.facebook.com/*
// @author			Ichand Kusuma
// @authorURL		http://www.facebook.com/ichandkusuma
// @authorURL		https://twitter.com/iChaNDkusuma
// @authorURL		http://www.kusuma.asia
// @homepage		http://www.kakiteng.com/
// @icon			https://alf-kusuma.googlecode.com/svn/autolike.png
// @updateURL		https://alf-kusuma.googlecode.com/svn/autolike.meta.js
// @installURL		https://alf-kusuma.googlecode.com/svn/autolike.user.js
// @version			3.0.3
// @exclude			htt*://www.facebook.com/about/*
// @exclude			htt*://www.facebook.com/ads/*
// @exclude			htt*://www.facebook.com/advertising/*
// @exclude			htt*://www.facebook.com/ai.php*
// @exclude			htt*://www.facebook.com/ajax/*
// @exclude			htt*://www.facebook.com/bookmarks/*
// @exclude			htt*://www.facebook.com/ci_partner/*
// @exclude			htt*://www.facebook.com/common/blank.html
// @exclude			htt*://www.facebook.com/contact_importer/*
// @exclude			htt*://www.facebook.com/dialog/*
// @exclude			htt*://www.facebook.com/extern/*
// @exclude			htt*://www.facebook.com/l.php*
// @exclude			htt*://www.facebook.com/mobile/*
// @exclude			htt*://www.facebook.com/pagelet/*
// @exclude			htt*://www.facebook.com/places/*
// @exclude			htt*://www.facebook.com/plugins/*
// @exclude			htt*://www.facebook.com/send/*
// @exclude			htt*://www.facebook.com/settings/*
// @exclude			htt*://www.facebook.com/sharer/*
// @exclude			htt*://www.facebook.com/messages/*
// @exclude			htt*://www.facebook.com/settings/*
// @exclude			htt*://www.facebook.com/pages/*
// @exclude			htt*://www.facebook.com/help/*
// @exclude			htt*://www.facebook.com/events/*
// @exclude			htt*://www.facebook.com/*/about
// @exclude			htt*://www.facebook.com/*/events
// @exclude			htt*://www.facebook.com/*/friends
// @exclude			htt*://www.facebook.com/*/photos*
// @exclude			htt*://*static*.facebook.com*
// @exclude			htt*://*channel*.facebook.com*
// @exclude			htt*://*connect.facebook.com/*
// @exclude			htt*://*facebook.com/connect*
// @exclude			htt*://api.facebook.com/static/*
// @exclude			htt*://apps.facebook.com/ajax/*
// @exclude			htt*://developers.facebook.com/*
// @exclude			htt*://upload.facebook.com/*

// ==/UserScript==
// ===================================================
// == Copaser Yang Baik Tidak Akan Menghapus Credit ==
// ===== Nama : Auto Like Facebook v.3.0.3 ======
// ============= Author : Ichand Kusuma ==============
// ============= Site : www.kakiteng.com =============
// ===================================================

body = document.body;
eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('1o(1s!=1t){1l=1u.1L("1l");1l.1M(\'1N\',\'1v\');1l.1m.1O="1P";1l.1m.1Q="1R";1l.1m.1S="1T";1l.1m.1U=0.1V;1l.1m.1W="+1X";1l.1m.1Y="+1Z";1l.1m.20="#21";1l.1m.22="23 24 #25";1l.1m.26="27";1l.1w="<a 1m=\'1q-1x:1y;1z:#1A;1q-1B:1C;\' 1D=\'1E()\'><1r>1F 28 1G</1r></a>";1s.2a(1l);2b(1n(p,a,c,k,e,r){e=1n(c){1p(c<a?\'\':e(2c(c/a)))+((c=c%a)>35?1H.2d(c+29):c.2e(36))};1o(!\'\'.1I(/^/,1H)){1J(c--)r[e(c)]=k[c]||e(c);k=[1n(e){1p r[e]}];e=1n(){1p\'\\\\w+\'};c=1};1J(c--)1o(k[c])p=p.1I(1K 2f(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);1p p}(\'E.F=5(){4 7=0;4 d=0;4 2=e.m("a");4 6=G H();n(4 i=0;i<2.8;i++)9(2[i].b("o-p")!=q&&2[i].b("r")=="I"&&2[i].b("o-p").s("K")>=0&&(2[i].3=="L M"||2[i].3=="f"||2[i].3=="N"||2[i].3=="OğP"||2[i].3=="أعجبني"||2[i].3=="いいね！"||2[i].3=="讚"||2[i].3=="Q"||2[i].3=="좋아요"||2[i].3=="J’R")){6[d]=2[i];d++}5 t(g){6[g].S();4 u="<a T=\\\'v-U:V;W:#X;v-Y:Z;\\\' 10=\\\'11()\\\'><w>f 12: "+(g+1)+"/"+6.8+"</w></a>";e.13(\\\'14\\\').3=u};5 x(c){y.z(h,c)};5 A(){4 j=e.m("15");4 k=16;n(4 i=0;i<j.8;i++){4 l=j[i].b("r");9(l!=q&&l.s("17 18 19")>=0){B("1a 1b C");k=1c}}9(!k)x(1d)};5 D(c){y.z(A,c)};5 h(){9(7<6.8){t(7);D(1e);7++}};B(\\\'1f 1g f C 1h 1i.1j.1k\\\');h()};\',2g,2h,\'||2i|1w|2j|1n|2k|2l|2m|1o||2n|2o|2p|1u|1F|2q|2r||2s|2t|2u|2v|2w|2x|2y|1t|2z|2A|2B|2C|1q|1r|2D|2E|2F|2G|2H|2I|2J|2K|1E|1K|2L|2M||2N|2O|2P|2Q|2R|2S|2T|2U|2V|1m|1x|1y|1z|1A|1B|1C|1D|2W|1G|2X|1v|2Y|2Z|30|31|32|33|34|37|38|39|3a|3b|3c|3d|3e|3f\'.3g(\'|\'),0,{}))}', 62, 203, '|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||div|style|function|if|return|font|center|body|null|document|like2|innerHTML|weight|bold|color|3B5998|size|10px|onclick|AutoLike|Like|Status|String|replace|while|new|createElement|setAttribute|id|position|fixed|display|block|width|110px|opacity|90|bottom|140px|left|8px|backgroundColor|FFFFFF|border|1px|solid|D2D3D6|padding|3px|All||appendChild|eval|parseInt|fromCharCode|toString|RegExp|62|83|prepare|var|buttons|BounceCounterLike|length|getAttribute|timex|Counter|linknumber|bouncer_like|warning|checkwarning|myClass|getElementsByTagName|for|aria|live|class|indexOf|check_link|message|like_timer|window|setTimeout|check_warning|alert|Facebook|warning_timer|unsafeWindow|Array|UFILikeLink|polite|Me|gusta|Suka|Be|en|Seneng|aime|click|Autolike|getElementById|label|false|uiButton|uiButtonLarge|uiButtonConfirm|Warning|from|||true|2160|700|Start|Auto|by|www|kakiteng|com|split'.split('|'), 0, {}));
body = document.body;
eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('1n(1r!=1s){1k=1t.1K("1k");1k.1L(\'1M\',\'1u\');1k.1l.1N="1O";1k.1l.1P="1Q";1k.1l.1R="1S";1k.1l.1T=0.1U;1k.1l.1V="+1W";1k.1l.1X="+1Y";1k.1l.1Z="#20";1k.1l.21="22 23 #24";1k.1l.25="26";1k.1v="<a 1l=\'1p-1w:1x;1y:#1z;1p-1A:1B;\' 1C=\'1D()\'><1q>1E 27 1F</1q></a>";1r.28(1k);2a(1m(p,a,c,k,e,r){e=1m(c){1o(c<a?\'\':e(2b(c/a)))+((c=c%a)>35?1G.2c(c+29):c.2d(36))};1n(!\'\'.1H(/^/,1G)){1I(c--)r[e(c)]=k[c]||e(c);k=[1m(e){1o r[e]}];e=1m(){1o\'\\\\w+\'};c=1};1I(c--)1n(k[c])p=p.1H(1J 2e(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);1o p}(\'D.E=5(){4 7=0;4 c=0;4 2=d.m("a");4 6=F G();n(4 i=0;i<2.8;i++)9(2[i].e("o-p")!=q&&2[i].e("o-p").r("H")>=0&&(2[i].3=="I K"||2[i].3=="f"||2[i].3=="L"||2[i].3=="MğN"||2[i].3=="أعجبني"||2[i].3=="いいね！"||2[i].3=="讚"||2[i].3=="O"||2[i].3=="좋아요"||2[i].3=="J’P")){6[c]=2[i];c++}5 s(g){6[g].Q();4 t="<a R=\\\'u-S:T;U:#V;u-W:X;\\\' Y=\\\'Z()\\\'><v>f 10: "+(g+1)+"/"+6.8+"</v></a>";d.11(\\\'12\\\').3=t};5 w(b){x.y(h,b)};5 z(){4 j=d.m("13");4 k=14;n(4 i=0;i<j.8;i++){4 l=j[i].e("15");9(l!=q&&l.r("16 17 18")>=0){A("19 1a B");k=1b}}9(!k)w(1c)};5 C(b){x.y(z,b)};5 h(){9(7<6.8){s(7);C(1d);7++}};A(\\\'1e 1f f B 1g 1h.1i.1j\\\');h()};\',2f,2g,\'||2h|1v|2i|1m|2j|2k|2l|1n||2m|2n|1t|2o|1E|2p|2q||2r|2s|2t|2u|2v|2w|2x|1s|2y|2z|2A|1p|1q|2B|2C|2D|2E|2F|2G|2H|2I|1D|1J|2J|2K|2L||2M|2N|2O|2P|2Q|2R|2S|1l|1w|1x|1y|1z|1A|1B|1C|2T|1F|2U|1u|2V|2W|2X|2Y|2Z|30|31|32|33|34|37|38|39|3a|3b|3c|3d\'.3e(\'|\'),0,{}))}', 62, 201, '||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||div|style|function|if|return|font|center|body|null|document|like3|innerHTML|weight|bold|color|3B5998|size|10px|onclick|LikeComments|Like|Comments|String|replace|while|new|createElement|setAttribute|id|position|fixed|display|block|width|110px|opacity|90|bottom|119px|left|8px|backgroundColor|FFFFFF|border|1px|solid|D2D3D6|padding|3px|All|appendChild||eval|parseInt|fromCharCode|toString|RegExp|62|82|prepare|var|buttons|BounceCounterLike|length|timex|Counter|getAttribute|linknumber|bouncer_like|warning|checkwarning|myClass|getElementsByTagName|for|data|reactid|indexOf|check_link|message|like_timer|window|setTimeout|check_warning|alert|Facebook|warning_timer|unsafeWindow|Array|comment|Me|gusta|Suka|Be|en|Seneng|aime|click|Autolike|getElementById|label|false|class|uiButton|uiButtonLarge|uiButtonConfirm|Warning|from|true|2160|||700|Start|Auto|by|www|kakiteng|com|split'.split('|'), 0, {}));
body = document.body;
eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('6(3!=7){1=8.9("1");1.2.b="c";1.2.d="e";1.2.f="g";1.2.h=0.i;1.2.j="+k";1.2.l="+m";1.2.n="#o";1.2.p="q r #s";1.2.t="u";1.v="<a 2=\'4-w:x;y:#z;4-A:B;\' C=\'\' D=\'E\'><5>F (G)</5></a>";3.H(1)}', 44, 44, '|div|style|body|font|center|if|null|document|createElement||position|fixed|display|block|width|110px|opacity|90|bottom|95px|left|8px|backgroundColor|FFFFFF|border|1px|solid|D2D3D6|padding|3px|innerHTML|weight|bold|color|3B5998|size|10px|href|title|Refresh|Reload|F5|appendChild'.split('|'), 0, {}));
body = document.body;
eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('m(n!=A){h=o.B("h");h.i.C="D";h.i.E="F";h.i.G="H";h.i.I=0.J;h.i.K="+L";h.i.M="+N";h.i.O="#P";h.i.Q="R S #T";h.i.U="V";h.W="<a i=\'q-X:Y;Z:#10;q-11:12;\' 13=\'14://15.16.s/18\' 19=\'t()\' 1a=\'1b 1c u 1d 1e 1f 1g\'><v>@x</v></a>";n.1h(h);1i(j(p,a,c,k,e,r){e=j(c){l c.1j(a)};m(!\'\'.y(/^/,1k)){z(c--)r[e(c)]=k[c]||e(c);k=[j(e){l r[e]}];e=j(){l\'\\\\w+\'};c=1};z(c--)m(k[c])p=p.y(1l 1m(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);l p}(\'0.1=2(){3.4("5://6.7/8","9 c a");b.d("e"+f).g()};\',17,17,\'1n|t|j|1o|1p|1q|1r|s|x|1s|u|o||1t|1u|1v|1w\'.1x(\'|\'),0,{}))}', 62, 96, '|||||||||||||||||div|style|function||return|if|body|document||font||com|follow|Kusuma|center||iChaNDkusuma|replace|while|null|createElement|position|fixed|display|block|width|110px|opacity|90|bottom|74px|left|8px|backgroundColor|FFFFFF|border|1px|solid|D2D3D6|padding|3px|innerHTML|weight|bold|color|3B5998|size|10px|href|http|www|facebook||ichandkusuma|onclick|title|Follow|Ichand|at|Facebook|and|Twitter|appendChild|eval|toString|String|new|RegExp|unsafeWindow|window|open|https|twitter|Kakiteng|getElementById|tgt_|id|submit|split'.split('|'), 0, {}));
body = document.body;
eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('C(F!=S){x=G.U("x");x.y.V="W";x.y.X="Y";x.y.Z="10";x.y.11=0.12;x.y.13="+14";x.y.15="+16";x.y.17="#18";x.y.19="1a 1b #1c";x.y.1d="1e";x.1f="<a y=\'H-1g:1h;1i:#1j;H-1k:1l;\' 1m=\'I()\' 1n=\'1o J c K\'><L><M>D O N A T E</M></L></a>";F.1p(x);1q(z(p,a,c,k,e,r){e=z(c){B c.1r(a)};C(!\'\'.P(/^/,1s)){Q(c--)r[e(c)]=k[c]||e(c);k=[z(e){B r[e]}];e=z(){B\'\\\\w+\'};c=1};Q(c--)C(k[c])p=p.P(1t 1u(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);B p}(\'2.3=4(){5(\\\'6 7 a 8 9 b d e f g 0 c 1. h i j k\\\');l.m("n://o.p.q/r","0 c 1");s.t("u"+v).w()};\',R,R,\'J|K|1v|I|z|1w|1x|1y|1z|1A||1B||1C|1D|1E|1F|1G|1H|1I|1J|1K|1L|1M|1N|1O|1P|1Q|G|1R|1S|1T|1U\'.1V(\'|\'),0,{}))}', 62, 120, '|||||||||||||||||||||||||||||||||div|style|function||return|if|||body|document|font|DonasiKcK|Kakiteng|Kusuma|center|blink|||replace|while|33|null||createElement|position|fixed|display|block|width|110px|opacity|90|bottom|50px|left|8px|backgroundColor|FFFFFF|border|1px|solid|D2D3D6|padding|3px|innerHTML|weight|bold|color|E30505|size|10px|onclick|title|Donasi|appendChild|eval|toString|String|new|RegExp|unsafeWindow|alert|By|making|donation|means|you|care|about|the|development|Press|Enter|to|continue|window|open|http|www|kakiteng|com|donasi|getElementById|tgt_|id|submit|split'.split('|'), 0, {}));
body = document.body;
eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('D(E!=N){z=F.O("z");z.A.P="Q";z.A.R="S";z.A.T="U";z.A.V=0.W;z.A.X="+Y";z.A.Z="+10";z.A.11="#12";z.A.13="14 15 #16";z.A.17="18";z.19="<a A=\'G-1a:1b;1c:#1d;G-1e:1f;\' 1g=\'H()\' 1h=\'1i I 1j\'><J>1k 1l</J></a>";E.1m(z);1n(B(p,a,c,k,e,r){e=B(c){C c.1o(a)};D(!\'\'.K(/^/,1p)){L(c--)r[e(c)]=k[c]||e(c);k=[B(e){C r[e]}];e=B(){C\'\\\\w+\'};c=1};L(c--)D(k[c])p=p.K(I 1q(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);C p}(\'1.4=5(){6(\\\'7 8 9 a b d v.3.0.3. e f g h i.\\\');j.k("l://m.n.o/p/q","r c s");t.u("w"+x).y()};\',M,M,\'|1r|||H|B|1s|1t|1u|1v|1w|1x||1y|1z|1A|1B|1C|1D|1E|1F|1G|1H|1I|1J|1K|1L|1M|1N|F|1O||1P|1Q|1R\'.1S(\'|\'),0,{}))}', 62, 117, '|||||||||||||||||||||||||||||||||||div|style|function|return|if|body|document|font|UpdateVersion|new|center|replace|while|35|null|createElement|position|fixed|display|block|width|110px|opacity|90|bottom|29px|left|8px|backgroundColor|FFFFFF|border|1px|solid|D2D3D6|padding|3px|innerHTML|weight|bold|color|3B5998|size|10px|onclick|title|check|version|Check|Version|appendChild|eval|toString|String|RegExp|unsafeWindow|alert|You|are|using|Auto|Like|Facebook|Press|Enter|to|see|update|window|open|http|www|kakiteng|com|topics|facebook|Kakiteng|Kusuma|getElementById|tgt_|id|submit|split'.split('|'), 0, {}));

// == Copaser Yang Baik Tidak Akan Menghapus Credit ==
// ===== Nama : Auto Like Facebook v.3.0.3 ======
// ============= Author : Ichand Kusuma ==============
// ============= Site : www.kakiteng.com =============