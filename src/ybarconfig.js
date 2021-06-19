var YAHOO = window.YAHOO || {};
if (!YAHOO.i13n) {
    YAHOO.i13n = {};
}
YAHOO.i13n.SPACEID = 2143065895;
setTimeout(function () {
    (function (win, cfg) {
        win._ybar_runtime_config = win._ybar_runtime_config || {};
        Object.keys(cfg).forEach(function (key) {
            win._ybar_runtime_config[key] = cfg[key];
        });
    })(window, {
        "property": "homepage",
        "device": "desktop",
        "locale": "el-GR",
        "bucketConfig": {
            "scrollThreshold": 4
        }
    });
    $_mod_ybar && $_mod_ybar.ready();
}, 500); // adding delay to YBAR init to wait base page rapid initialization