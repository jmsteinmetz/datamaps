$(function() {

    buildMap("demoLocation", "usa", "#e5ebe9", "#4f56b8", "#a7a7a3", "/data/locations.json");

    // : Refactor
    // Map : http://datamaps.github.io/

    function buildMap(target, scope, fillColor, scopeFillColor, borderColor, dataURL) {

        var map = new Datamap({
            element: document.getElementById(target),
            scope: scope,
            fills: {
                defaultFill: fillColor,
                USA: scopeFillColor,
            },
            geographyConfig: {
                borderWidth: 3,
                borderColor: borderColor
            }
        });

        $.getJSON(dataURL, function(obj) {
            //console.log(obj);
            var loc = new Array;
            $.each(obj.locations, function(key, value) {

                var locObject = {
                        name: value.name,
                        radius: value.radius,
                        yeild: value.yield,
                        country: value.country,
                        significance: value.significance,
                        fillKey: value.fillKey,
                        date: value.date,
                        latitude: value.latitude,
                        longitude: value.longitude
                    }
                    //console.log(locObject);
                loc.push(locObject)
            })
            map.bubbles(loc);
        });
    }

});
