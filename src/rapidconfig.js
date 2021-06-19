if (YAHOO && YAHOO.i13n && YAHOO.i13n.Rapid) {
    var rapidEarlyConfig = rapidPageConfig.rapidEarlyConfig;
    YAHOO.i13n.YWA_CF_MAP = rapidPageConfig.ywaCF;
    YAHOO.i13n.YWA_ACTION_MAP = rapidPageConfig.ywaActionMap;
    YAHOO.i13n.YWA_OUTCOME_MAP = rapidPageConfig.ywaOutcomeMap;
    YAHOO.i13n.rapidInstance = new YAHOO.i13n.Rapid(rapidEarlyConfig);
}