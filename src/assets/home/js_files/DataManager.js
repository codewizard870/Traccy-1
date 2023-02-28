"use strict";

var Site = Site || {};
Site.DataManager = function () {
    var self = this;
    var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson";
    this.earthquakes = [];
    this.loadSignal = new BK.Signal();

    this.load = function () {
        var a = new BK.Ajax({
            url: url,
            method: "GET",
            onComplete: function (response, headers) {
                // for (var i = 0; i < response.features.length; i++) {
                //     var feature = response.features[i];
                //     self.earthquakes.push(new Site.DataManager.Earthquake(feature));
                // }
                // console.log(self.earthquakes[0]);

                // self.loadSignal.fire();
                // console.log(self);
                for (var i = 0; i < locationData.length; i++) {
                    var feature = locationToData(locationData[i]["cord"], locationData[i]["country"], i);
                    self.earthquakes.push(new Site.DataManager.Earthquake(feature));
                }
                console.log(self.earthquakes[0]);

                self.loadSignal.fire();
                console.log(self);
            }
        });


        a.fire();
    }
}

Site.DataManager.Earthquake = function (data) {
    this.magnitude = data.mag;
    this.desc = data.place;
    this.data = data;

    var coords = data.geometry.coordinates;
    this.latLng = new GK.LatLng(coords[1], coords[0]);
    this.pos = GK.LatLng.toWorld(this.latLng);
}

var locationData = [{ "country": "Switzerland", "cord": [8.22, 46.8, 10] }, { "country": "Congo", "cord": [21.75, 4.0, 10] }, { "country": "Burundi", "cord": [29.91, 3.37, 10] }, { "country": "Kenya", "cord": [37.90, 0.023, 10] }, { "country": "Gabon", "cord": [11.60, 0.80, 10] }];

function locationToData(cord, country, index) {
    return {
        "type": "Feature",
        "properties": {
            "mag": index + 1,
            "place": country,
            "time": 1668608610763,
            "updated": 1668610186040,
            "tz": null,
            "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us7000iq4j",
            "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us7000iq4j.geojson",
            "felt": null,
            "cdi": null,
            "mmi": null,
            "alert": null,
            "status": "reviewed",
            "tsunami": 0,
            "sig": 312,
            "net": "us",
            "code": "7000iq4j",
            "ids": ",us7000iq4j,",
            "sources": ",us,",
            "types": ",origin,phase-data,",
            "nst": 110,
            "dmin": 2.336,
            "rms": 1,
            "gap": 70,
            "magType": "mb",
            "type": "earthquake",
            "title": country
        },
        "geometry": {
            "type": "Point",
            "coordinates": cord
        },
        "id": "us7000iq4j"
    };
}