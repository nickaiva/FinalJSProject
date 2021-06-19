"use strict"

function yaftPreProcess() {
    // collect ad load times call YAFT.triggerCustomTiming right before the AFT calculation finished
    var darlaAdTimings = [];
    var adTiming;
    var allowlistAds = {
        "LREC": "my-adsLREC-base",
        "MAST": "my-adsMAST",
        "LDRB": "my-adsLDRB",
        "UBALDRB": "my-adsUBALDRB",
        "TL1": "my-adsTL1",
        "TXTL": "my-adsTXTL",
        "LREC-0": "hl-ad-LREC-0",
        "MON-0": "hl-ad-MON-0",
        "MAST-0": "hl-ad-MAST-0",
        "LDRB-0": "hl-ad-LDRB-0",
        "SPL2-0": "hl-ad-SPL2-0",
        "SPL-0": "hl-ad-SPL-0",
        "LDRB-1": "viewer-LDRB",
        "MON-1": "viewer-MON",
        "LREC-1": "viewer-LREC",
        "LREC-2": "viewer-LREC2"
    };
    var w = window;
    var aft2StartRender = w.YAFT.AFT2.getAFT2StartRender() - 800;
    if (typeof w._adLT !== 'undefined' && w.performance && w.performance.now) {
        for (var i = 0; i < w._adLT.length; i++) {
            adTiming = w._adLT[i];
            var adIdAction = adTiming[0];
            var adTime = adTiming[1];
            var adAction = adIdAction.indexOf('ADSTART_') > -1 ? 'start' : 'end';
            var adId = '';

            if (adAction === 'start') {
                adId = adIdAction.replace('ADSTART_', '');
                darlaAdTimings[adId] = {
                    started: adTime,
                    loaded: 0
                };
            } else {
                adId = adIdAction.replace('ADEND_', '');
                if (typeof darlaAdTimings[adId] !== 'undefined') {
                    darlaAdTimings[adId].loaded = adTime;
                }
            }
        }

        for (var adObj in darlaAdTimings) {
            if (darlaAdTimings.hasOwnProperty(adObj) && typeof allowlistAds[adObj] !== undefined) {
                var adStartTime = darlaAdTimings[adObj].started;
                var adLoadTime = darlaAdTimings[adObj].loaded || w.performance.now();
                if (aft2StartRender > adStartTime) {
                    continue;
                }
                w.YAFT.triggerCustomTiming(allowlistAds[adObj], adStartTime, adLoadTime);
            }
        }
    }

    // calculate custom video timing
    if (typeof w._videoLT !== 'undefined' && w.YAFT && w.YAFT.isInitialized() && w.performance && typeof w.performance.now === 'function') {
        Object.getOwnPropertyNames(window._videoLT).forEach(function (key) {
            w.YAFT.triggerCustomTiming(key, window._videoLT[key].startTime, window._videoLT[key].loadTime || w.performance.now());
        });
    }
}

function yaftInit(e) {
    if (typeof window.YAFT !== 'undefined') {
        var __yaftConfig = {
            modules: ["header-wrapper", "applet_p_", "stream_item_", "ad-north-base", "fea-", "my-adsFPAD-base", "my-adsLREC-base", "my-adsMAST", "my-adsLDRB", "my-adsUBALDRB", "my-adsTXTL", "content-modal-", "hl-ad-LREC-", "modal-sidekick-", "hl-ad-LREC-0", "hl-ad-MON-0", "hl-ad-MAST-0", "hl-ad-LDRB-0", "hl-ad-SPL2-0", "hl-ad-SPL-0", "homepage-viewer-", "viewer-LDRB", "viewer-MON", "viewer-LREC", "viewer-LREC2"],
            modulesExclude: ["UH-Search", "UH-ColWrap", "my-adsMAST-base", "applet_p_50000313", "applet_p_50000314", "stream_item_title_2", "stream_item_title_3", "stream_item_title_4", "stream_item_title_5"],
            canShowVisualReport: false,
            useNormalizeCoverage: true,
            includeOnlyAft2: true,
            useNativeStartRender: true,
            useNativeStartRenderMeaningful: true,
            customReportModules: [],
            modulesAft2Container: ["hl-viewer"],
            maxWaitTime: 6000,
            preProcess: yaftPreProcess,
            preferDataModNameOverId: true
        };
        __yaftConfig.plugins = [];
        __yaftConfig.plugins.push({
            name: 'aftnoad',
            isPre: true,
            config: {
                useNormalizeCoverage: true,
                adModules: ["ad-north-base", "my-adsFPAD-base", "my-adsLREC-base", "my-adsTL1", "my-adsMAST", "my-adsLDRB", "my-adsUBALDRB", "hl-ad-LREC-0", "hl-ad-MAST-0", "hl-ad-LDRB-0", "hl-ad-SPL2-0", "my-adsTXTL", "hl-ad-SPL-0"]
            }
        });

        window.aft2CB = function (data, error) {
            window.YAFT && window.YAFT.updateConfig({
                modulesAft2Container: '["hl-viewer"]'
            });
            if (!error) {
                var aft2 = Math.round(data.aft);
                var vic2 = data.visuallyComplete;
                var srt2 = Math.round(data.startRender);

                var rapidInstance = (YAHOO && YAHOO.i13n && YAHOO.i13n.rapidInstance) || (YMedia && YMedia.My && YMedia.My.App && YMedia.My.App.getRapidTracker && YMedia.My.App.getRapidTracker()) || null;
                if (rapidInstance) {
                    var afterPageLoad = {
                        AFT: aft2,
                        AFT2: aft2,
                        STR: srt2,
                        VIC: vic2
                    };
                    var perfData = {
                        perf_commontime: {
                            afterPageLoad: afterPageLoad
                        }
                    };
                    var pageParamsObject = null;
                    if (rapidInstance.getRefererSpaceid) {
                        pageParamsObject = {
                            ref_sp: rapidInstance.getRefererSpaceid(),
                            visit_sp: (window.Af && window.Af.config && window.Af.config.spaceid)
                        };
                    }
                    rapidInstance.beaconPerformanceData(perfData, pageParamsObject);
                }
            }
        };
        window.getAFT2AdPerf = function (fireBeacon) {
            var w = window;
            var userPerfData = {};
            var perfData = {};
            var aft2StartRender = w.YAFT.AFT2.getAFT2StartRender();
            var darlaReqStart = 'DARLA_REQSTART';
            var pencilReqStart = 'NATIVE_PENCIL_REQSTART';
            var smReqStart = 'NATIVE_SM_REQSTART';
            var darlaReqStartTime;
            var yaftDelayInAFT2RecordTime = 50;
            var nativeAdReqStartTime;
            var rapidInstance = YAHOO.i13n.rapidInstance ?
                YAHOO.i13n.rapidInstance :
                (YMedia.My && YMedia.My.App && YMedia.My.App.getRapidTracker) ?
                YMedia.My.App.getRapidTracker() :
                null;

            if (typeof w._adLT !== 'undefined' && w.performance && w.performance.now && rapidInstance) {
                for (var i = 0; i < w._adLT.length; i++) {
                    var adTiming = w._adLT[i];
                    var adIdAction = adTiming[0];
                    var adTime = adTiming[1];
                    var adTimeAft2Diff;
                    var isAdPosAction = adIdAction.indexOf('ADSTART_') > -1 || adIdAction.indexOf('ADEND_') > -1;
                    var isDarlaCallbackAction = adIdAction.indexOf('DARLA_') > -1;
                    var isNativeAdAction = adIdAction.indexOf('NATIVE_') > -1;
                    var randomPencilAdXHRInitTime = Math.floor(Math.random() * (14 - 5 + 1)) + 5; // 5-14
                    var randomSMAdXHRInitTime = Math.floor(Math.random() * (25 - 15 + 1)) + 15; // 15-25
                    var adAction = '';
                    var adId = '';

                    if (isAdPosAction) {
                        adAction = adIdAction.indexOf('ADSTART_') > -1 ? 'start' : 'end';
                        adId = (adAction === 'start') ?
                            adIdAction.replace('ADSTART_', '') :
                            adIdAction.replace('ADEND_', '');
                    }

                    /**
                     * Conditions:
                     * 1 => To make sure its valid aft2 start render
                     * 2 => Only get those metrics which is after aft2 start render
                     *      There is delay of ~50msecs in YAFT when we ask to start AFT2 and what actually get recorded
                     * 3 => Only allowed list of metrics defined in platform_conf OR Darla callback
                     */
                    if (aft2StartRender > 800 &&
                        adTime > (aft2StartRender - yaftDelayInAFT2RecordTime) &&
                        (isAdPosAction || isDarlaCallbackAction || isNativeAdAction)) {
                        adTimeAft2Diff = Math.round(adTime - aft2StartRender);

                        // Time difference between when we ask YAFT to record and 
                        // first XHR call for AD is 15-25msec so adding that here, we cannot 
                        // rely on YAFT AFT2 start time here, due to fact that what actually get 
                        // recording is ~50msec + after we ask YAFT to record AFT2
                        adTimeAft2Diff = adTimeAft2Diff <= 0 ?
                            (adIdAction === pencilReqStart ? randomPencilAdXHRInitTime : randomSMAdXHRInitTime) :
                            adTimeAft2Diff;
                        if (adIdAction === darlaReqStart) { // pick darla req start time
                            darlaReqStartTime = adTimeAft2Diff;
                        } else if (adIdAction === pencilReqStart) {
                            nativeAdReqStartTime = adTimeAft2Diff;
                        } else if (adIdAction === smReqStart && !nativeAdReqStartTime) {
                            nativeAdReqStartTime = adTimeAft2Diff;
                        }

                        userPerfData[adIdAction] = adTimeAft2Diff;
                    }
                }

                // In some case for perf impovement we make Native Ad call in parallel with Display,
                // so in that case take pencilAdReq as startMark if its within 150msec of darlaReqStartTime
                var startMark = (nativeAdReqStartTime && nativeAdReqStartTime < darlaReqStartTime && (darlaReqStartTime - nativeAdReqStartTime <= 150)) ?
                    nativeAdReqStartTime :
                    darlaReqStartTime;
                // In some case we see darlaReqStart is greater than Ad position time,
                // So ignoring those invalid entry
                for (var propKey in userPerfData) {
                    if (userPerfData.hasOwnProperty(propKey) &&
                        startMark &&
                        (userPerfData[propKey] < startMark)) {
                        delete userPerfData[propKey];
                    }
                }

                perfData = {
                    perf_usertime: {
                        utm: userPerfData
                    }
                };

                if (fireBeacon) {
                    rapidInstance.beaconPerformanceData(perfData);
                }
            }

            return perfData;
        }

        window.YAFT.init(__yaftConfig, function (data, error) {
            var i;
            if (!error) {
                try {

                } catch (e) {}
            }
        });
    }
}
if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', yaftInit, false);
    var _yaftScrollingTimer,
        _yaftIsScrolling = false,
        _yaftIsDone = false,
        _yaftMaxScroll = 5,
        _yaftScrollingTimerDelay = 66,
        _yaftScrollCounter = 1,
        YMedia = YMedia || null,
        rapidInstance = (YAHOO && YAHOO.i13n && YAHOO.i13n.rapidInstance) || (YMedia && YMedia.My && YMedia.My.App && YMedia.My.App.getRapidTracker && YMedia.My.App.getRapidTracker()) || null;

    // Listen for scroll events
    window.addEventListener('scroll', function (event) {
        if (_yaftScrollCounter > _yaftMaxScroll) {
            return;
        }
        if (!_yaftIsScrolling) {
            window.YAFT && window.YAFT.FPS.start('FPSIndex');
            _yaftIsScrolling = true;
        }
        // Clear our timeout throughout the scroll
        window.clearTimeout(_yaftScrollingTimer);

        // Set a timeout to run after scrolling ends
        _yaftScrollingTimer = setTimeout(function () {
            _yaftIsScrolling = false;
            window.YAFT && window.YAFT.FPS.stop('FPSIndex', function (err, data) {
                var payload;
                if (!err) {
                    payload = {
                        utm: {
                            fps_average_index: Math.round(data.avgFps),
                            fps_lowest_index: Math.round(data.worse)
                        }
                    };
                    _yaftScrollCounter++;
                    if (rapidInstance) {
                        rapidInstance.beaconPerformanceData({
                            perf_usertime: payload
                        });
                    }
                }
            });
        }, _yaftScrollingTimerDelay);

    }, false);
} else if (window.attachEvent) {
    window.attachEvent('DOMContentLoaded', yaftInit);
}
window.addEventListener('load', function () {
    if (YMedia && YMedia.Af && YMedia.Af.Event && YMedia.Af.Event.on) {
        YMedia.Af.Event.on('modal:show', function () {
            window.YAFT && window.YAFT.updateConfig({
                modulesAft2Container: ["hl-viewer"]
            });
        });

        YMedia.Af.Event.on('modal:hide', function () {
            var self = this,
                w = window;
            if (typeof w.YAFT !== 'undefined') {
                w.YAFT.updateConfig({
                    modulesAft2Container: ["atomic"]
                });
                w.YAFT.AFT2.start();
                setTimeout(function () {
                    w.YAFT.AFT2.setAFT2StartRender();
                }, 100);

                setTimeout(function () {
                    w.YAFT.AFT2.end(window.aft2CB.bind(self));
                }, 1000);
            }
        });
    }
});