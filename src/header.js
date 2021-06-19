"use strict"
var pageloadValidAds = ["MAST", "LREC4", "MON", "LREC3"];
var clientSideValidAds = [];
var pageloadNonCollapsedAds = ["MAST", "LREC4", "MON", "LREC3"];
var adPosRenderTracking = [];
var adPrefetchCreativeLogEnabled = false;
var adPrefetchCreativeInfo = {};
var bucketSAEnabled = true;
var darlaJsAsyncEnabled = false;
var darlaJsAsyncPollTimeout = 10000;
var darlaJsAsyncPollMaxTimeout = 20000;
var darlaJsAsyncPollFirstInterval = 100;
var darlaJsAsyncPollSecondInterval = 300;
var segBlob = { "pt": "home", "ver": "megastrm", "lu": "1" };
var isMON2Valid = false;
var nativeBillboardConf = { "pos": "MAST", "clean": "my-adsMAST", "dest": "my-adsMAST-iframe", "fr": "expIfr_exp", "rmxp": 0, "metaSize": true, "w": 970, "h": 250, "supports": { "exp-ovr": 1, "exp-push": 1, "resize-to": 1, "lyr": 1 }, "closeBtn": { "adc": 0, "mode": 2, "useShow": 1 }, "fclose": 2, "fdb": { "1": "1", "where": "inside" }, "doubleBuffering": false, "flex": { "w": { "max": 1260, "min": 10 } } };
var nonNativeBillboardConf = { "pos": "MAST", "clean": "my-adsMAST", "dest": "my-adsMAST-iframe", "fr": "expIfr_exp", "rmxp": 0, "metaSize": true, "w": 970, "h": 250, "supports": { "exp-ovr": 1, "exp-push": 1, "resize-to": 1, "lyr": 1 }, "closeBtn": { "adc": 0, "mode": 2, "useShow": 1 }, "fclose": 2, "fdb": { "1": "1", "where": "inside" }, "doubleBuffering": false };


var customSiteAttr = "geminifed=1";
var facCustomTimout = 380;

var D, C,
    _adPerfBeaconData,
    _pendingAds = [],
    _adLT = [];

function darlaOnready() {
    var w = window;

    D = w.DARLA;
    C = { "useYAC": 0, "usePE": 0, "servicePath": "https:\/\/gr.yahoo.com\/sdarla\/php\/fc.php", "xservicePath": "", "beaconPath": "https:\/\/gr.yahoo.com\/sdarla\/php\/b.php", "renderPath": "", "allowFiF": false, "srenderPath": "https:\/\/s.yimg.com\/rq\/darla\/4-6-0\/html\/r-sf.html", "renderFile": "https:\/\/s.yimg.com\/rq\/darla\/4-6-0\/html\/r-sf.html", "sfbrenderPath": "https:\/\/s.yimg.com\/rq\/darla\/4-6-0\/html\/r-sf.html", "msgPath": "https:\/\/fc.yahoo.com\/unsupported-1946.html", "cscPath": "https:\/\/s.yimg.com\/rq\/darla\/4-6-0\/html\/r-csc.html", "root": "sdarla", "edgeRoot": "https:\/\/s.yimg.com\/rq\/darla\/4-6-0", "sedgeRoot": "https:\/\/s.yimg.com\/rq\/darla\/4-6-0", "version": "4-6-0", "tpbURI": "", "hostFile": "https:\/\/s.yimg.com\/rq\/darla\/4-6-0\/js\/g-r-min.js", "beaconsDisabled": true, "rotationTimingDisabled": true, "fdb_locale": "\u03a4\u03b9 \u03b4\u03b5\u03bd \u03c3\u03b1\u03c2 \u03b1\u03c1\u03ad\u03c3\u03b5\u03b9 \u03c3\u03b5 \u03b1\u03c5\u03c4\u03ae\u03bd \u03c4\u03b7 \u03b4\u03b9\u03b1\u03c6\u03ae\u03bc\u03b9\u03c3\u03b7;|\u0395\u03af\u03bd\u03b1\u03b9 \u03c0\u03c1\u03bf\u03c3\u03b2\u03bb\u03b7\u03c4\u03b9\u03ba\u03ae|\u039a\u03ac\u03c4\u03b9 \u03ac\u03bb\u03bb\u03bf|\u0395\u03c5\u03c7\u03b1\u03c1\u03b9\u03c3\u03c4\u03bf\u03cd\u03bc\u03b5 \u03c0\u03bf\u03c5 \u03bc\u03b1\u03c2 \u03b2\u03bf\u03b7\u03b8\u03ac\u03c4\u03b5 \u03bd\u03b1 \u03b2\u03b5\u03bb\u03c4\u03b9\u03ce\u03bd\u03bf\u03c5\u03bc\u03b5 \u03c4\u03b7\u03bd \u03b5\u03bc\u03c0\u03b5\u03b9\u03c1\u03af\u03b1 \u03c3\u03b1\u03c2 \u03c3\u03c4\u03bf Yahoo|\u0394\u03b5\u03bd \u03bc\u03b5 \u03b1\u03c6\u03bf\u03c1\u03ac|\u039c\u03bf\u03c5 \u03b1\u03c0\u03bf\u03c3\u03c0\u03ac \u03c4\u03b7\u03bd \u03c0\u03c1\u03bf\u03c3\u03bf\u03c7\u03ae|\u0394\u03b5\u03bd \u03bc\u03bf\u03c5 \u03b1\u03c1\u03ad\u03c3\u03b5\u03b9 \u03b1\u03c5\u03c4\u03ae \u03b7 \u03b4\u03b9\u03b1\u03c6\u03ae\u03bc\u03b9\u03c3\u03b7|\u0391\u03c0\u03bf\u03c3\u03c4\u03bf\u03bb\u03ae|\u03a4\u03ad\u03bb\u03bf\u03c2|\u0393\u03b9\u03b1\u03c4\u03af \u03b2\u03bb\u03ad\u03c0\u03c9 \u03b4\u03b9\u03b1\u03c6\u03b7\u03bc\u03af\u03c3\u03b5\u03b9\u03c2;|\u039c\u03ac\u03b8\u03b5\u03c4\u03b5 \u03c0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b1 \u03b3\u03b9\u03b1 \u03c4\u03b1 \u03c3\u03c7\u03cc\u03bb\u03b9\u03ac \u03c3\u03b1\u03c2.|\u0398\u03ad\u03bb\u03b5\u03c4\u03b5 \u0395\u03b9\u03c3\u03b5\u03c1\u03c7\u03cc\u03bc\u03b5\u03bd\u03b1 \u03c7\u03c9\u03c1\u03af\u03c2 \u03b4\u03b9\u03b1\u03c6\u03b7\u03bc\u03af\u03c3\u03b5\u03b9\u03c2; \u039a\u03ac\u03bd\u03c4\u03b5 \u03b1\u03bd\u03b1\u03b2\u03ac\u03b8\u03bc\u03b9\u03c3\u03b7 \u03c3\u03c4\u03bf \u03a4\u03b1\u03c7\u03c5\u03b4\u03c1\u03bf\u03bc\u03b5\u03af\u03bf Yahoo Pro!|\u0391\u03bd\u03b1\u03b2\u03ac\u03b8\u03bc\u03b9\u03c3\u03b7 \u03c4\u03ce\u03c1\u03b1", "positions": { "HPSPON": { "w": 1, "h": 1 }, "FPAD": { "w": 1, "h": 1 }, "LREC": { "w": 300, "h": 250 }, "MAST": { "w": 970, "h": 250 }, "LDRB": { "w": 728, "h": 90 }, "LREC4": { "w": 300, "h": 250 }, "LREC3": { "w": 300, "h": 250 }, "FOOT": { "w": 1, "h": 1 }, "MON": { "w": 300, "h": 600 } }, "lang": "el-GR" };
    C.positions = { "LREC": { "pos": "LREC", "id": "LREC", "clean": "my-adsLREC", "dest": "my-adsLREC-iframe", "metaSize": true, "fdb": true, "w": 300, "h": 250, "supports": { "exp-ovr": 0, "exp-push": 1 } }, "MAST": { "pos": "MAST", "clean": "my-adsMAST", "dest": "my-adsMAST-iframe", "fr": "expIfr_exp", "rmxp": 0, "metaSize": true, "w": 970, "h": 250, "supports": { "exp-ovr": 1, "exp-push": 1, "resize-to": 1, "lyr": 1 }, "closeBtn": { "adc": 0, "mode": 2, "useShow": 1 }, "fclose": 2, "fdb": { "1": "1", "where": "inside", "on": 1 }, "doubleBuffering": false }, "LDRB": { "clean": "my-adsLDRB", "dest": "my-adsLDRB-iframe", "w": 728, "h": 90, "metaSize": 1, "rmxp": 0, "supports": { "exp-ovr": 1, "exp-push": 1 } }, "LREC4": { "pos": "LREC4", "id": "LREC4", "clean": "my-adsLREC4", "dest": "my-adsLREC4-iframe", "metaSize": true, "w": 300, "h": 250, "fdb": true, "supports": { "exp-ovr": 0, "exp-push": 1 } }, "LREC3": { "pos": "LREC3", "id": "LREC3", "clean": "my-adsLREC3", "dest": "my-adsLREC3-iframe", "metaSize": true, "w": 300, "h": 250, "fdb": true, "supports": { "exp-ovr": 0 } }, "MON": { "pos": "MON", "clean": "my-adsMON", "dest": "my-adsMON-iframe", "metaSize": true, "w": 300, "h": 600, "fdb": true, "supports": { "exp-ovr": 1, "resize-to": 1, "lyr": 0 } }, "DEFAULT": { "sandbox": 0, "meta": { "hostURL": "https:\/\/gr.yahoo.com" } } };
    C.k2 = { "res": { "rate": 100, "pos": ["LREC", "MAST", "FPAD", "LREC2", "LREC3", "LREC-0", "LREC2-0", "LREC3-0", "MAST-0", "LDRB-0", "SPL2-0", "SPL-0", "MON-0"] } };
    C.k2E2ERate = 100;
    C.k2Rate = 100;
    C.renderTimeout = 60000;
    C.so = 1;
    C.firstRenderingVisible = true;
    C.rotationRenderingVisible = false;
    C.cscCleanupTimeout = true;
    C.smartPixelDisabled = false;

    C.events = { "DEFAULT": { "clw": { "LREC-0": { "blocked_by": "MON-0" }, "MON-0": { "blocked_by": "LREC-0" }, "MAST-0": { "blocked_by": "LDRB-0,SPL-0" }, "SPL-0": { "blocked_by": "LDRB-0,MAST-0" }, "LDRB-0": { "blocked_by": "MAST-0,SPL-0" } } } };

    C.onStartRequest = function () {
        if (window.performance && window.performance.now) {
            _adLT.push(['DARLA_REQSTART', Math.round(window.performance.now())]);
        }
    };

    C.onPreParse = function (eventName, result) {
        var positions = result.ps();
        var posItem, mastSettings;
        if (positions.indexOf('MAST') >= 0) {
            posItem = result.item('MAST');
            if (posItem.serveType == 10 && nativeBillboardConf) {
                DARLA.addPos(nativeBillboardConf);
            } else if (nonNativeBillboardConf) {
                DARLA.addPos(nonNativeBillboardConf);
            }
        } else if (positions.indexOf('MAST-1') >= 0) {
            posItem = result.item('MAST-1');
            mastSettings = DARLA.posSettings('MAST-1');
            if (!mastSettings.doubleBuffering) {
                if (posItem.serveType == 10) {
                    mastSettings.flex = nativeBillboardConf && nativeBillboardConf.flex;
                } else {
                    delete mastSettings.flex;
                }
                DARLA.addPos(mastSettings);
            }
        }
    };

    C.onFinishParse = function (eventName, result) {
        var ps = result.ps(),
            modalOpen = false,
            position, posItem, curAd, curEvt,
            validPositions = {},
            isMONFetch = false;
        isPosValid = false;

        clientSideValidAds = [];

        if (ps && ps.length) {


            if (eventName === 'hlAdsAll' || eventName === 'hlAdsCustom' || eventName === 'homepage-viewer') {
                for (i = 0, l = ps.length; i < l; i++) {
                    position = ps[i];
                    posItem = result.item(position);
                    if (posItem.hasErr || posItem.size + '' === '1x1' || (posItem.meta && posItem.meta.y && posItem.meta.y.size && posItem.meta.y.size + '' === '1x1')) {
                        validPositions[position] = false;
                    } else {
                        if (position.indexOf("MON") > -1) {
                            isMONFetch = true;
                        }
                        validPositions[position] = true;
                    }
                }
                if (YMedia && YMedia.Af && YMedia.Af.Event && YMedia.Af.Event.fire) {
                    YMedia.Af.Event.fire('sidekickrefresh', validPositions);
                }

            }

            for (i = 0, l = ps.length; i < l; i++) {
                position = ps[i];
                posItem = result.item(position);
                isPosValid = !posItem.hasErr
                    && posItem.size !== "1x1"
                    && (
                        posItem.meta
                        && posItem.meta.y
                        && posItem.meta.y.size
                        && posItem.meta.y.size !== "1x1"
                    );

                if (isPosValid) {
                    clientSideValidAds.push(position);
                }

                if (posItem && posItem.conf && posItem.conf.clean) {
                    curAd = document.getElementById(posItem.conf.clean);
                    if (curAd) {
                        if (eventName === 'hlAdsAll' || eventName === 'hlAdsCustom') {
                            var posName = position.split('-')[0];
                            if ((posName === "LDRB" || posName === "MAST" || posName === "SPL" || posName === "SPL2") &&
                                (!posItem.hasErr && posItem.size + '' !== '1x1')) {
                                curAd.className = curAd.className.replace('D-n', 'D-ib');
                                if (posName !== "SPL" && posName !== "SPL2") {
                                    curAd.className = curAd.className + " Bdb-Grey-1";
                                }
                            } else if (posName === 'LREC2' || posName === 'LREC3') {
                                curAd.className = curAd.className.replace(/lrec-reserve-ht/, 'D-n');
                            }
                        }



                    }
                }


                if (!isPosValid && posItem && posItem.conf && posItem.conf.dest) {
                    var posItemDest = document.getElementById(posItem.conf.dest);
                    var posAdPlaceholder = posItemDest && posItemDest.querySelector('.caas-da-placeholder');

                    if (posAdPlaceholder) {
                        posItemDest.removeChild(posAdPlaceholder);
                    }
                }

            }



        }

        if (window.performance && window.performance.now) {
            _adLT.push(['DARLA_FINISH_PARSE', Math.round(window.performance.now())]);
        }
    };

    C.onStartPosRender = function (posItem) {
        if (window.performance && window.performance.now) {
            var ltime = window.performance.now(),
                posId = posItem && posItem.pos;
            _adLT.push(['ADSTART_' + posId, Math.round(ltime)]);
        }
        if (window._isModalOpen && window._isModalOpen()) {
            window._perfMark('ADSTART_' + posId);
        }

    };

    C.onBeforeStartPosRender = function (posItem) {
        if (posItem.conf && posItem.conf.clean) {
            var element = document.getElementById(posItem.conf.clean);
            if (element) {
                element.className = element.className.replace('Ht-pl-' + posItem.size, '').replace('Ht-pl-default', '');
                element = element.parentNode;
                if (element && element.className && element.className.match(/Ht-pl-LDRB|Ht-pl-LREC/)) {
                    element.className = element.className.replace(/Ht-pl-LDRB|Ht-pl-LREC/, '');
                } else if (element.parentNode && element.parentNode.className && element.parentNode.className.match(/Ht-pl-LDRB|Ht-pl-LREC/)) {
                    element.parentNode.className = element.parentNode.className.replace(/Ht-pl-LDRB|Ht-pl-LREC/, '');
                }
            }
        }
    };

    C.onFinishPosRender = function (posId, reqList, posItem) {
        var curAd = document.getElementById("my-ads" + posId),
            adIndex,
            posSize = (posItem && posItem.meta && posItem.meta.value("size", "y")),
            facStatus = (posItem && posItem.meta && posItem.meta.value("facStatus", "y"));

        // Get clean div for ad position in case defined
        if (posItem && posItem.conf && posItem.conf.clean) {
            curAd = document.getElementById(posItem.conf.clean);
        }
        if (curAd) {

            // Let ad take its original size, remove default height given to ad div
            curAd.className = curAd.className.replace('Ht-' + posSize, '');
            curAd.className = curAd.className.replace('Ht-default', '');
            curAd.parentElement.className = curAd.parentElement.className.replace(/lrec-bgcolor/, '');
            curAd.className = curAd.className.replace(/lrec-bgcolor/, '');
            curAd.parentElement.className = curAd.parentElement.className.replace(/lrec-before-loading/, '');

            if ((posSize && posSize != "1x1") && (!facStatus || facStatus.fedStatusCode != '16')) {
                curAd.className = curAd.className.replace('D-n', '');
                var sponsorSlugNode = curAd.parentElement.getElementsByClassName('cslug');
                if (sponsorSlugNode && 0 !== sponsorSlugNode.length) {
                    sponsorSlugNode[0].className = sponsorSlugNode[0].className.replace('Dn', '');
                    sponsorSlugNode[0].className = sponsorSlugNode[0].className.replace('D-n', '');
                }
            }
        }

        if (window.performance !== undefined && window.performance.now !== undefined) {
            var allowListAds = { "LREC": "my-adsLREC-base", "MAST": "my-adsMAST", "LDRB": "my-adsLDRB", "UBALDRB": "my-adsUBALDRB", "TL1": "my-adsTL1", "TXTL": "my-adsTXTL", "LREC-0": "hl-ad-LREC-0", "MON-0": "hl-ad-MON-0", "MAST-0": "hl-ad-MAST-0", "LDRB-0": "hl-ad-LDRB-0", "SPL2-0": "hl-ad-SPL2-0", "SPL-0": "hl-ad-SPL-0", "LDRB-1": "viewer-LDRB", "MON-1": "viewer-MON", "LREC-1": "viewer-LREC", "LREC-2": "viewer-LREC2" },
                ltime = window.performance.now();
            _adLT.push(['ADEND_' + posId, Math.round(ltime)]);
            setTimeout(function () {
                if (window.YAFT !== undefined && window.YAFT.isInitialized() && allowListAds[posId]) {
                    // Trigger custom timing for LREC ad position
                    window.YAFT.triggerCustomTiming(allowListAds[posId], '', ltime);
                }
            }, 300);
        }
        if (window._isModalOpen && window._isModalOpen()) {
            window._perfMark('ADEND_' + posId);
            adIndex = window._pendingAds.indexOf(posId);
            if (adIndex >= 0) {
                window._pendingAds.splice(adIndex, 1);
                if (window._pendingAds.length === 0) {
                    window._adRenderComplete();
                }
            }
        }
    };

    C.onBeforePosMsg = function (msg_name, position) {
        // Make these configurable for INTLS
        var maxWidth = 970,
            maxHeight = 600,
            newWidth,
            newHeight,
            origWidth,
            origHeight,
            pos;

        if ('MAST' !== position) {
            return;
        }

        if (msg_name === 'resize-to') {
            newWidth = arguments[2];
            newHeight = arguments[3];
        }
        else if (msg_name === 'exp-push' || msg_name === 'exp-ovr') {
            pos = $sf.host.get('MAST'),
                origWidth = pos.conf.w;
            origHeight = pos.conf.h;
            //"exp-ovr" or "exp-push", position id, delta X, delta Y, push (true /false), top increase, left increase, right increase, bottom increase
            newWidth = origWidth + arguments[6] + arguments[7];
            newHeight = origHeight + arguments[5] + arguments[8];
        }
        if (newWidth > maxWidth || newHeight > maxHeight) {
            return true;
        }
    };
    //call back when the ad is expanded or collapsed
    C.onPosMsg = function (msg_name, data, msg_data) {
        var visible;
        if (msg_name == "collapse" && data == "MAST") {
            var bodyTag = document.getElementsByTagName("body")[0];
            bodyTag.className = bodyTag.className.replace('mastAdExpanded', '');
            bodyTag.className += " " + "mastAdCollapsed";
        }
        if (msg_name == "exp-push" && data == "MAST") {
            var bodyTag = document.getElementsByTagName("body")[0];
            bodyTag.className = bodyTag.className.replace('mastAdCollapsed', '');
            bodyTag.className += " " + "mastAdExpanded";
        }

        /* generic ad expansion logic */
        if (msg_name == "collapse") {
            var bodyTag = document.getElementsByTagName("body")[0];
            bodyTag.className = bodyTag.className.replace(data + "-ad-expanded", '');
        }

        if (msg_name == "exp-ovr") {
            var bodyTag = document.getElementsByTagName("body")[0];
            bodyTag.className += " " + data + "-ad-expanded";
        }

        if (msg_name === 'geom-update') {
            visible = D.render.RenderMgr.get(data).viewedAt > 0;
            // geom-update event will always be available when Y is available
            if (YMedia && visible) {
                YMedia.Global.fire('ads:beacon', { id: data });
            }
        }
    };

    C.onFailure = function (eventName, pos) {

        var evtSettings = DARLA.evtSettings(eventName);

        if (window.thamba && evtSettings && evtSettings.ps && evtSettings.ps.indexOf('UBALREC') === -1) {
            var lrecDivs = document.querySelectorAll('div[id*=my-adsLREC][class*=Ht-pl-]');

            for (i = 0; i < lrecDivs.length; i++) {
                var lrecDiv = lrecDivs[i];
                lrecDiv.className += ' D-n';
            }
        }

        if (typeof window.darlaLogRenderFailure === 'function') {
            window.darlaLogRenderFailure('onFailure', eventName);
        }

        if (window.performance && window.performance.now) {
            _adLT.push(['DARLA_FAILURE', Math.round(window.performance.now())]);
        }
    };



    C.onStartParse = function () {
        if (window.performance && window.performance.now) {
            _adLT.push(['DARLA_START_PARSE', Math.round(window.performance.now())]);
        }
    };

    C.onFinishRequest = function () {
        if (window.performance && window.performance.now) {
            _adLT.push(['DARLA_REQEND', Math.round(window.performance.now())]);
        }
    };

    C.onSuccess = function (eventName, positions) {
        if (typeof window.darlaLogRenderFailure === 'function') {
            window.darlaLogRenderFailure('onSuccess', eventName, positions);
        }

        if (window.performance && window.performance.now) {
            _adLT.push(['DARLA_SUCCESS', Math.round(window.performance.now())]);
        }
    };

    C.onRenderTimeout = function (eventName) {
        if (typeof window.darlaLogRenderFailure === 'function') {
            window.darlaLogRenderFailure('onRenderTimeout', eventName);
        }
    };


    if ("OK" == D.config(C)) {
        setTimeout(function () {
            if (window.performance && window.performance.now) {
                var ltime = window.performance.now();
                _adLT.push(['DARLA_RSTART', Math.round(ltime)]);
            }
            var w = window,
                d = document,
                e = d.documentElement,
                g = d.getElementsByTagName('body')[0],
                winWidth = w.innerWidth || e.clientWidth || g.clientWidth;
            D.render();
            if (window.performance && window.performance.now) {
                var ltime = window.performance.now();
                _adLT.push(['DARLA_REND', Math.round(ltime)]);
            }
        }, 2);
    }
}
function darlaFetcherBeacon(params) {
    if (window.wafer && window.wafer.utils && window.YAHOO && window.YAHOO.homepageClientConfig) {
        var clientConfig = window.YAHOO.homepageClientConfig;
        var beaconUrl = '/p.gif?beaconType=darlaFetcherBeacon&' +
            'bucket=' + (clientConfig.beacon.bucket || '') + '&' +
            'rid=' + (clientConfig.beacon && clientConfig.beacon.rid || '') + '&' +
            'device=' + (clientConfig.pageInfo && clientConfig.pageInfo.device || '') + '&' +
            'lang=' + (clientConfig.pageInfo && clientConfig.pageInfo.lang || '') + '&' +
            'region=' + (clientConfig.pageInfo && clientConfig.pageInfo.region || '') + '&' +
            'site=' + (clientConfig.pageInfo && clientConfig.pageInfo.site || '') + '&' +
            params;
        window.wafer.utils.fireBeacon(beaconUrl);
    }
}

function darlaLogRenderFailure(source, eventName, successPositions) {
    var validAdWithTracking = [];
    var beaconParams = [];
    var nonRenderedValidAds = [];
    var isSuccessCallback = source === 'onSuccess';
    var eventName = (eventName.indexOf('dr__') === 0 || eventName === 'prefetch') ? 'prefetch' : eventName;
    var isAdPrefetchCreativeLogEnabled = window.adPrefetchCreativeLogEnabled && eventName === 'prefetch';
    var addPositionBeacon = function (pos) {
        beaconParams.push('pos=' + pos);
        if (isAdPrefetchCreativeLogEnabled && window.adPrefetchCreativeInfo[pos]) {
            beaconParams.push('creativeInfo=' + window.adPrefetchCreativeInfo[pos] + ', pos:' + pos);
        }
    }

    // Darla somehow not returning `prefetched` eventName in onSuccess/onRenderTimeout/onFailure,
    // as compared to onFinishParse callback, so using global flag
    if (adPosRenderTracking.length && // check feature is enable
        clientSideValidAds.length && // check whether we got valid ads in client-side fetch
        Array.prototype.filter) {
        validAdWithTracking = clientSideValidAds.filter(function (pos) {
            return adPosRenderTracking.indexOf(pos) !== -1;
        });

        if (validAdWithTracking.length) {
            if (isSuccessCallback && successPositions && successPositions.length) {
                // if its success callback, then we need to only log those positions which didn't 
                // render.
                nonRenderedValidAds = validAdWithTracking.filter(function (pos) {
                    return successPositions.indexOf(pos) === -1;
                });

                if (nonRenderedValidAds.length) {
                    nonRenderedValidAds.forEach(function (pos) {
                        addPositionBeacon(pos);
                    });
                }
            } else {
                validAdWithTracking.forEach(function (pos) {
                    addPositionBeacon(pos);
                });

            }
        }

        if (beaconParams.length) {
            beaconParams.push('for=renderFailed');
            beaconParams.push('darlaCallBack=' + source);
            beaconParams.push('darlaEvent=' + eventName);

            setTimeout(function () {
                darlaFetcherBeacon(beaconParams.join('&'));
            }, 100);
        }
    }
}

function createNewEvent(eventName) {
    var event;
    if (typeof (Event) === 'function') {
        event = new Event(eventName);
    } else {
        event = document.createEvent('Event');
        event.initEvent(eventName, true, true);
    }
    return event;
}

function darlaOnreadyPoll(callback, timeout, maxTimeout, firstInterval, secondInterval) {
    timeout = Number(new Date()) + timeout;
    maxTimeout = Number(new Date()) + maxTimeout;

    (function condition() {
        if (window.DARLA) {
            dispatchEvent && dispatchEvent(createNewEvent('darlaReadyOnAsync'));
            callback();
        } else if (Number(new Date()) < timeout) {
            setTimeout(condition, firstInterval);
        } else if (Number(new Date()) < maxTimeout) {
            setTimeout(condition, secondInterval);
        } else {
            // NoAds
        }
    })();
}

if (darlaJsAsyncEnabled) {
    window.DARLA ?
        darlaOnready() :
        darlaOnreadyPoll(darlaOnready, darlaJsAsyncPollTimeout, darlaJsAsyncPollMaxTimeout, darlaJsAsyncPollFirstInterval, darlaJsAsyncPollSecondInterval);
} else {
    darlaOnready();
}