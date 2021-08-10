L.Mask = L.Polygon.extend({

    options: {
        stroke: false,
        color: '000',
        fillOpacity: 0.91,
        clickable: true,
        outerBounds: new L.LatLngBounds([-90, -360], [90, 360])
    },

    initialize: function (latLngs, options) {

         var outerBoundsLatLngs = [
            this.options.outerBounds.getSouthWest(),
            this.options.outerBounds.getNorthWest(),
            this.options.outerBounds.getNorthEast(),
            this.options.outerBounds.getSouthEast()
        ];

        L.Polygon.prototype.initialize.call(this, [outerBoundsLatLngs, latLngs], options);
    }

});

L.MaskAlt = L.Polygon.extend({

    options: {
        stroke: false,
        color: 'none',
        fillOpacity: 0.3,
        clickable: true,
        outerBounds: new L.LatLngBounds([-90, -360], [90, 360])
    },

    initialize: function (latLngs, options) {

        //  var outerBoundsLatLngs = [
        //     this.options.outerBounds.getSouthWest(),
        //     this.options.outerBounds.getNorthWest(),
        //     this.options.outerBounds.getNorthEast(),
        //     this.options.outerBounds.getSouthEast()
        // ];

            var outerBoundsLatLngs = [
            [0,0],[0,0],[0,0],[0,0]
        ];

        L.Polygon.prototype.initialize.call(this, [outerBoundsLatLngs, latLngs], options);
    }

});

L.mask = function (latLngs, options) {
    return new L.Mask(latLngs, options);
};

L.mask2 = function (latLngs, options) {
    return new L.MaskAlt(latLngs, options);
};

L.mask3 = function (latLngs, options) {
    return new L.MaskAlt(latLngs, options);
};
