
// set defaults
breeze.config.initializeAdapterInstances({
    ajax: "jQuery",
    dataService: "webApi"
});

// don't initialize with ko unless it exists.
var ko = window.ko;
if ((!ko) && require) {
    ko = require("ko");
}
if (ko) {
    breeze.config.initializeAdapterInstance("modelLibrary", "ko");
}

return breeze;
});