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
// @version			3.0.4
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
// ===== Nama : Auto Like Facebook v.3.0.4 ======
// ============= Author : Ichand Kusuma ==============
// ============= Site : www.kakiteng.com =============
// ===================================================


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
}('26(1X(p,a,c,k,e,r){e=1X(c){1Y(c<a?\'\':e(27(c/a)))+((c=c%a)>35?21.28(c+29):c.2a(36))};1Z(!\'\'.22(/^/,21)){23(c--)r[e(c)]=k[c]||e(c);k=[1X(e){1Y r[e]}];e=1X(){1Y\'\\\\w+\'};c=1};23(c--)1Z(k[c])p=p.22(24 2b(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);1Y p}(\'h=7.h;8(h!=p){2=7.X("2");2.Y(\\\'Z\\\',\\\'w\\\');2.4.10="11";2.4.12="13";2.4.14="15";2.4.16=0.17;2.4.18="+19";2.4.1a="+1b";2.4.1c="#1d";2.4.1e="1f 1g #1h";2.4.1i="1j";2.3="<a 4=\\\'j-x:y;z:#A;j-B:C;\\\' D=\\\'E()\\\'><k>q 1k F</k></a>";h.1l(2);1m.E=6(){5 d=0;5 e=0;5 f=7.G("1n");5 g=1o 1p();H(5 i=0;i<f.l;i++)8(f[i].r("I-K")!=p&&f[i].r("I-K").L(".1")>=0&&(f[i].3=="1q 1r"||f[i].3=="q"||f[i].3=="1s"||f[i].3=="1tğ1u"||f[i].3=="أعجبني"||f[i].3=="いいね！"||f[i].3=="讚"||f[i].3=="1v"||f[i].3=="좋아요"||f[i].3=="J’1w")){g[e]=f[i];e++}6 M(a){g[a].1x();5 b="<a 4=\\\'j-x:y;z:#A;j-B:C;\\\' D=\\\'1y()\\\'><k>q F: "+(a+1)+"/"+g.l+"</k></a>";7.1z(\\\'w\\\').3=b};6 N(a){O.P(s,a)};6 Q(){5 a=7.G("1A");5 b=1B;H(5 i=0;i<a.l;i++){5 c=a[i].r("1C");8(c!=p&&c.L("1D 1E 1F")>=0){R("1G 1H 1I");b=1J}}8(!b)N(1K)};6 S(a){O.P(Q,a)};6 s(){8(d<g.l){M(d);S(1L);d++}};R(1M(\\\'%1N%m%t%1O%m%9%1P%1Q%m%n%9%1R%T%o%u%9%1S%t%U%u%V%n%n%o%9%V%1T%9%v%v%v%W%o%t%o%T%m%u%1U%1V%W%U%n%1W\\\'));s()}};\',25,3l,\'||2c|2d|2e|3m|1X|2f|1Z|20||||||||2g||2h|2i|3n|2N|2O|2P|2j|3c|3o|3p|2Q|2R|2S|40|2k|2l|2m|2T|2n|2o|2U|47|48|3q|3r|3s||3t|3u|3v|3w|2V|3x|3y|33|3z|2W|2X|25|2E|2p|3B|2Y|2q|2r|2s|2t|2u|2v|2w|2x|2y|49|2z|2A|2B|2C|2D|2G|2H|2I|2J|2K|3C|2L|2Z|4a|24|3D|3E|3F|3G|3H|3I|3J|3K|3L|3M|30|3N|3O|3P|3Q|3R|3S|3T|3U|34|3V|3W|3X|31|53|37|41|38|4C|46|3d|39|3a|32\'.2M(\'|\'),0,{}));26(1X(p,a,c,k,e,r){e=1X(c){1Y(c<a?\'\':e(27(c/a)))+((c=c%a)>35?21.28(c+29):c.2a(36))};1Z(!\'\'.22(/^/,21)){23(c--)r[e(c)]=k[c]||e(c);k=[1X(e){1Y r[e]}];e=1X(){1Y\'\\\\w+\'};c=1};23(c--)1Z(k[c])p=p.22(24 2b(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);1Y p}(\'h=7.h;8(h!=p){2=7.X("2");2.Y(\\\'Z\\\',\\\'w\\\');2.4.10="11";2.4.12="13";2.4.14="15";2.4.16=0.17;2.4.18="+19";2.4.1a="+1b";2.4.1c="#1d";2.4.1e="1f 1g #1h";2.4.1i="1j";2.3="<a 4=\\\'j-x:y;z:#A;j-B:C;\\\' D=\\\'E()\\\'><k>q 1k F</k></a>";h.1l(2);1m.E=6(){5 d=0;5 e=0;5 f=7.G("a");5 g=1n 1o();H(5 i=0;i<f.l;i++)8(f[i].r("I-K")!=p&&f[i].r("I-K").L("1p")>=0&&(f[i].3=="1q 1r"||f[i].3=="q"||f[i].3=="1s"||f[i].3=="1tğ1u"||f[i].3=="أعجبني"||f[i].3=="いいね！"||f[i].3=="讚"||f[i].3=="1v"||f[i].3=="좋아요"||f[i].3=="J’1w")){g[e]=f[i];e++}6 M(a){g[a].1x();5 b="<a 4=\\\'j-x:y;z:#A;j-B:C;\\\' D=\\\'1y()\\\'><k>q F: "+(a+1)+"/"+g.l+"</k></a>";7.1z(\\\'w\\\').3=b};6 N(a){O.P(s,a)};6 Q(){5 a=7.G("1A");5 b=1B;H(5 i=0;i<a.l;i++){5 c=a[i].r("1C");8(c!=p&&c.L("1D 1E 1F")>=0){R("1G 1H 1I");b=1J}}8(!b)N(1K)};6 S(a){O.P(Q,a)};6 s(){8(d<g.l){M(d);S(1L);d++}};R(1M(\\\'%1N%m%t%1O%m%9%1P%1Q%m%n%9%1R%T%o%u%9%1S%t%U%u%V%n%n%o%9%V%1T%9%v%v%v%W%o%t%o%T%m%u%1U%1V%W%U%n%1W\\\'));s()}};\',25,3l,\'||2c|2d|2e|3m|1X|2f|1Z|20||||||||2g||2h|2i|3n|2N|2O|2P|2j|3c|3o|3p|2Q|2R|2S|4b|2k|2l|2m|2T|2n|2o|2U|4c|4d|3q|3r|3s||3t|3u|3v|3w|2V|3x|3y|33|3z|2W|2X|25|2E|2p|3B|2Y|2q|2r|2s|2t|2u|2v|2w|2x|2y|4e|2z|2A|2B|2C|2D|2G|2H|2I|2J|2K|3C|2L|2Z|24|3D|4f|3E|3F|3G|3H|3I|3J|3K|3L|3M|30|3N|3O|3P|3Q|3R|3S|3T|3U|34|3V|3W|3X|31|53|37|41|38|4C|46|3d|39|3a|32\'.2M(\'|\'),0,{}));26(1X(p,a,c,k,e,r){e=1X(c){1Y(c<a?\'\':e(27(c/a)))+((c=c%a)>35?21.28(c+29):c.2a(36))};1Z(!\'\'.22(/^/,21)){23(c--)r[e(c)]=k[c]||e(c);k=[1X(e){1Y r[e]}];e=1X(){1Y\'\\\\w+\'};c=1};23(c--)1Z(k[c])p=p.22(24 2b(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);1Y p}(\'3=4.3;7(3!=8){1=4.9("1");1.2.b="c";1.2.d="e";1.2.f="g";1.2.h=0.i;1.2.j="+k";1.2.l="+m";1.2.n="#o";1.2.p="q r #s";1.2.t="u";1.v="<a 2=\\\'5-w:x;y:#z;5-A:B;\\\' C=\\\'\\\' D=\\\'E\\\'><6>F (G)</6></a>";3.H(1)};\',44,44,\'|2c|2e|2g|2f|2h|2i|1Z|2j|2p||2q|2r|2s|2t|2u|2v|2w|2x|2y|4g|2z|2A|2B|2C|2D|2G|2H|2I|2J|2K|2d|2k|2l|2m|2T|2n|2o|3Y|3b|4h|4i|4j|2L\'.2M(\'|\'),0,{}));26(1X(p,a,c,k,e,r){e=1X(c){1Y(c<a?\'\':e(27(c/a)))+((c=c%a)>35?21.28(c+29):c.2a(36))};1Z(!\'\'.22(/^/,21)){23(c--)r[e(c)]=k[c]||e(c);k=[1X(e){1Y r[e]}];e=1X(){1Y\'\\\\w+\'};c=1};23(c--)1Z(k[c])p=p.22(24 2b(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);1Y p}(\'4=5.4;h(4!=i){1=5.j("1");1.2.k="l";1.2.m="n";1.2.o="p";1.2.q=0.r;1.2.s="+t";1.2.u="+v";1.2.w="#x";1.2.y="z A #B";1.2.C="D";1.E="<a 2=\\\'7-F:G;H:#I;7-J:K;\\\' L=\\\'M://N.O.P/Q\\\' R=\\\'8()\\\' S=\\\'T U V W X Y Z\\\'><9>@10</9></a>";4.11(1);12.8=13(){14.15(16(\\\'%b%3%3%17%c%18%6%6%3%19%d%3%3%1a%1b%1c%1d%1e%e%6%d%1f%b%f%1g%1h%1i%g%c%g%e%f\\\'),\\\'1j\\\');5.1k("1l"+1m).1n()}};\',25,4k,\'|2c|2e|2N|2g|2f|2F|2h|4l|2i||3e|3f|2W|32|2Q|38|1Z|2j|2p|2q|2r|2s|2t|2u|2v|2w|2x|2y|4m|2z|2A|2B|2C|2D|2G|2H|2I|2J|2K|2d|2k|2l|2m|2T|2n|2o|3Y|4n|4o|4p|4q|4r|2U|3b|4s|4t|3Z|4u|34|4v|4w|4x|2L|2Z|1X|2V|3g|31|3h|3A|2S|2R|37|2E|2X|2O|43|4E|44|2P|3i|30|3j|2Y|3k\'.2M(\'|\'),0,{}));26(1X(p,a,c,k,e,r){e=1X(c){1Y(c<a?\'\':e(27(c/a)))+((c=c%a)>35?21.28(c+29):c.2a(36))};1Z(!\'\'.22(/^/,21)){23(c--)r[e(c)]=k[c]||e(c);k=[1X(e){1Y r[e]}];e=1X(){1Y\'\\\\w+\'};c=1};23(c--)1Z(k[c])p=p.22(24 2b(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);1Y p}(\'f=i.f;y(f!=z){2=i.B("2");2.6.C="F";2.6.G="H";2.6.I="J";2.6.K=0.L;2.6.M="+P";2.6.Q="+R";2.6.S="#U";2.6.V="W X #Y";2.6.Z="10";2.11="<a 6=\\\'p-12:13;14:#15;p-16:17;\\\' 18=\\\'q()\\\' 19=\\\'1a 1b c 1c\\\'><r><s>D O N A T E</s></r></a>";f.1d(2);1e.q=1f(){1g(t(\\\'%1h%u%1%b%7%g%9%3%j%1%7%1%k%8%3%7%4%9%8%3%1%b%5%7%3%d%1%u%8%e%1%h%7%l%5%1%7%1i%8%e%4%1%4%v%5%1%k%5%1j%5%1k%8%w%b%5%3%4%1%x%7%g%9%4%5%3%j%1%h%1%x%e%d%e%b%7%m%1%1l%l%5%d%d%1%1m%3%4%5%l%1%4%8%1%h%8%3%4%9%3%e%5\\\'));1n.1o(t(\\\'%v%4%4%w%1p%n%n%o%o%o%m%g%7%g%9%4%5%3%j%m%h%8%b%n%k%8%3%7%d%9\\\'),\\\'1q\\\');i.1r("1s"+1t).1u()}};\',25,4y,\'|20|2c|39|2N|2R|2e|2Q|2O|2W||32||3f|38|2g|2P|2X|2f|3a|4z|37|2E|2F|2S|2h|4A|2i|4D|31|3d|3e|3h|4B|1Z|2j||2p|2q|||2r|2s|2t|2u|2v|2w|2x|2y|||4F|2z|2A|2B||2C|2D|2G|2H|2I|2J|2K|2d|2k|2l|2m|4G|2n|2o|2U|3b|4H|4I|3Z|2L|2Z|1X|33|42|25|4J|4K|50|45|2V|3g|3A|3i|30|3j|2Y|3k\'.2M(\'|\'),0,{}));26(1X(p,a,c,k,e,r){e=1X(c){1Y(c<a?\'\':e(27(c/a)))+((c=c%a)>35?21.28(c+29):c.2a(36))};1Z(!\'\'.22(/^/,21)){23(c--)r[e(c)]=k[c]||e(c);k=[1X(e){1Y r[e]}];e=1X(){1Y\'\\\\w+\'};c=1};23(c--)1Z(k[c])p=p.22(24 2b(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);1Y p}(\'5=9.5;m(5!=n){1=9.o("1");1.2.p="q";1.2.r="s";1.2.t="u";1.2.w=0.x;1.2.y="+z";1.2.A="+B";1.2.C="#D";1.2.E="F G #H";1.2.I="J";1.K="<a 2=\\\'e-L:M;N:#O;e-P:Q;\\\' R=\\\'f()\\\' S=\\\'T U V\\\'><g>W X</g></a>";5.Y(1);Z.f=10(){11(\\\'12 13 14 15 16 17 v.3.0.4. 18 19 1a 1b 1c.\\\');1d.1e(1f(\\\'%1g%6%6%h%1h%7%7%b%b%b%i%c%j%c%k%6%l%1i%1j%i%d%8%1k%7%6%8%h%k%d%1l%7%1m%j%d%l%1n%8%8%c\\\'),\\\'1o\\\');9.1p("1q"+1r).1s()}};\',25,4L,\'|2c|2e|||2g|2N|2F|2O|2f||2S|2P|2X|2h|4M|2i|3h|2E|2Q|2W|2R|1Z|2j|2p|2q|2r|2s|2t|2u|2v||2w|2x|2y|4N|2z|2A|2B|2C|2D|2G|2H|2I|2J|2K|2d|2k|2l|2m|2T|2n|2o|2U|3b|4O|24|4P|4Q|4R|2L|2Z|1X|33|4S|4T|4U|4V|3c|34|4W|4X|4Y|4Z|51|2V|3g|31|3e|3A|39|3a|32|3f|52|25|3i|30|3j|2Y|3k\'.2M(\'|\'),0,{}));', 62, 314, '|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||function|return|if||String|replace|while|new|62|eval|parseInt|fromCharCode||toString|RegExp|div|innerHTML|style|document|body|font|center|null|weight|bold|color|size|10px|createElement|position|fixed|display|block|width|110px|opacity|90|bottom|left|8px|backgroundColor|FFFFFF|border|||1px|solid|D2D3D6|padding|3px|appendChild|split|74|6F|6B|61|65|77|3B5998|onclick|window|69|63|id|unsafeWindow|getElementById|unescape|6D|alert|Facebook|||72|75|6E|67|title|Like|79|68|73|open|70|_blank|tgt_|submit|121|var|length|getAttribute|bouncer_like|getElementsByTagName|for|data|reactid|indexOf|check_link|like_timer|setTimeout|check_warning|warning_timer||setAttribute|All|Array|Me|gusta|Suka|Be|en|Seneng|aime|click|Autolike|label|false|class|uiButton|uiButtonLarge|uiButtonConfirm|Warning|from|true|2160|700|href|Kusuma|like2|||||||AutoLike|Status|140px|span|like3|LikeComments|Comments|119px|comment|95px|Refresh|Reload|F5|86|follow|74px|http|www|facebook|com|ichandkusuma|Follow|Ichand|at|and|Twitter|iChaNDkusuma|93|64|DonasiKcK|||blink||50px|E30505|Donasi|Kakiteng|76|6C|91|UpdateVersion|29px|check|version|Check|Version|You|are|using|Auto|Press|Enter|to|see||update|66|'.split('|'), 0, {}));


// == Copaser Yang Baik Tidak Akan Menghapus Credit ==
// ===== Nama : Auto Like Facebook v.3.0.4 ======
// ============= Author : Ichand Kusuma ==============
// ============= Site : www.kakiteng.com =============