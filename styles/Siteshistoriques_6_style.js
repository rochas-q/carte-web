var size = 0;
var placement = 'point';
function categories_Siteshistoriques_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Bunker':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 5,
            radius2: 4.0, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Calvaire':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [14, 14],
                  scale: 1.3571428571428572,
                  anchor: [7.0, 7.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.5934122000000001,
                  src: "styles/christian.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Fontaine':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.032758620689655175,
                  anchor: [290.0, 290.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.5934122000000001,
                  src: "styles/amenity_fountain.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Fontaine historique':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 10.0 + size, points: 3,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(31,120,180,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lavoir':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 10.0 + size, points: 3,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(31,120,180,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Manoir':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [14, 14],
                  scale: 1.3571428571428572,
                  anchor: [7.0, 7.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/manor.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Memorial':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [14, 14],
                  scale: 1.3571428571428572,
                  anchor: [7.0, 7.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.5934122000000001,
                  src: "styles/memorial.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ruines':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 10.0 + size, points: 3,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(187,102,192,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sanctuaire de bord de route':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [14, 14],
                  scale: 1.3571428571428572,
                  anchor: [7.0, 7.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.5934122000000001,
                  src: "styles/christian_1.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Chapelle':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [14, 14],
                  scale: 1.3571428571428572,
                  anchor: [7.0, 7.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.5934122000000001,
                  src: "styles/bell_tower.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Site archaeologique':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [14, 14],
                  scale: 1.3571428571428572,
                  anchor: [7.0, 7.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.5934122000000001,
                  src: "styles/archaeological_site.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Siteshistoriques_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("historic");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Siteshistoriques_6(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
