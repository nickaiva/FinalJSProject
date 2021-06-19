var rapidPageConfig = {
    rapidEarlyConfig: { "compr_type": "deflate", "tracked_mods": ["Footer", "IntlSelector"], "spaceid": 2143065895, "click_timeout": 300, "track_right_click": true, "apv": true, "apv_time": 0, "async_all_clicks": false, "compr_on": true, "yql_host": "udc.yahoo.com", "yql_path": "\/v2\/public\/yql", "test_id": "921", "client_only": 0, "pageview_on_init": true, "perf_navigationtime": 0, "addmodules_timeout": 500, "extendbcookie": false, "keys": { "_rid": "5ldnpepgclvh0", "mrkt": "gr", "pt": "home", "site": "fp", "ver": "megastrm", "uh_vw": 0, "colo": "ir2", "navtype": "server", "abk": "" }, "dwell_on": true, "viewability": true, "tracked_mods_viewability": { "applet_p_50000291": "featurebar", "applet_p_50000287": "featurebar", "applet_p_50000314": "strm", "applet_p_50000353": "app-wea", "applet_p_50000405": "ft" } },
    rapidConfig: { "compr_type": "deflate", "tracked_mods": ["Footer", "IntlSelector"], "spaceid": 2143065895, "click_timeout": 300, "track_right_click": true, "apv": true, "apv_time": 0, "async_all_clicks": false, "compr_on": true, "yql_host": "udc.yahoo.com", "yql_path": "\/v2\/public\/yql", "test_id": "921", "client_only": 0, "pageview_on_init": false, "perf_navigationtime": 0, "addmodules_timeout": 500, "extendbcookie": false, "keys": { "_rid": "5ldnpepgclvh0", "mrkt": "gr", "pt": "home", "site": "fp", "ver": "megastrm", "uh_vw": 0, "colo": "ir2", "navtype": "server", "abk": "" }, "dwell_on": true, "viewability": true, "tracked_mods_viewability": { "applet_p_50000291": "featurebar", "applet_p_50000287": "featurebar", "applet_p_50000314": "strm", "applet_p_50000353": "app-wea", "applet_p_50000405": "ft" } },
    rapidSingleInstance: 1
};
var avpRapidCallBack = function (apvObj) {
    try {
        var spaceid = YAHOO && YAHOO.i13n && YAHOO.i13n.SPACEID;
        if (2143065895 == spaceid) {
            var img = new Image();
            img.src = "/p.gif?beaconType=apv&sp=" + spaceid + "&device=desktop&intl=gr&pixel_pos=" + apvObj.pixel_pos + "&scroll_dir=" + apvObj.scroll_dir;
        }
    } catch (e) { }
    if (window.sdaAvpCallback) {
        window.sdaAvpCallback();
    }
};
rapidPageConfig.rapidConfig.apv_callback = avpRapidCallBack;

try {
    if (YAHOO && YAHOO.i13n && YAHOO.i13n.Rapid) {
        YAHOO.i13n.WEBWORKER_FILE = '/lib/metro/g/myy/rapidworker_1_2_0.0.40.js';
    }
} catch (e) { }