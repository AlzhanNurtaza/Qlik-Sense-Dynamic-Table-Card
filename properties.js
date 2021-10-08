define([], function () {
    'use strict';
    return {
        type: "items",
        component: "accordion",
        items: {
            dimensions: {
                uses: "dimensions"
            },
            measures: {
                uses: "measures"
            },
            appearance: {
                uses: "settings",
            }
        }
    };
});