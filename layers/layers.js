ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-3.344210, 48.786204, -3.244039, 48.853322]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRI_1 = new ol.layer.Tile({
            'title': 'ESRI',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Limitescommunale_2 = new ol.format.GeoJSON();
var features_Limitescommunale_2 = format_Limitescommunale_2.readFeatures(json_Limitescommunale_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Limitescommunale_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitescommunale_2.addFeatures(features_Limitescommunale_2);
var lyr_Limitescommunale_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitescommunale_2, 
                style: style_Limitescommunale_2,
                popuplayertitle: 'Limites communale',
                interactive: false,
                title: '<img src="styles/legend/Limitescommunale_2.png" /> Limites communale'
            });
var format_LabelMonumentshistorique_3 = new ol.format.GeoJSON();
var features_LabelMonumentshistorique_3 = format_LabelMonumentshistorique_3.readFeatures(json_LabelMonumentshistorique_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LabelMonumentshistorique_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LabelMonumentshistorique_3.addFeatures(features_LabelMonumentshistorique_3);
var lyr_LabelMonumentshistorique_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LabelMonumentshistorique_3, 
                style: style_LabelMonumentshistorique_3,
                popuplayertitle: 'Label Monuments historique',
                interactive: true,
                title: '<img src="styles/legend/LabelMonumentshistorique_3.png" /> Label Monuments historique'
            });
var format_ZonedePresomptionArcheologique_4 = new ol.format.GeoJSON();
var features_ZonedePresomptionArcheologique_4 = format_ZonedePresomptionArcheologique_4.readFeatures(json_ZonedePresomptionArcheologique_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ZonedePresomptionArcheologique_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonedePresomptionArcheologique_4.addFeatures(features_ZonedePresomptionArcheologique_4);
var lyr_ZonedePresomptionArcheologique_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonedePresomptionArcheologique_4, 
                style: style_ZonedePresomptionArcheologique_4,
                popuplayertitle: 'Zone de Presomption Archeologique',
                interactive: true,
                title: '<img src="styles/legend/ZonedePresomptionArcheologique_4.png" /> Zone de Presomption Archeologique'
            });
var format_Patrimoinelineaire_5 = new ol.format.GeoJSON();
var features_Patrimoinelineaire_5 = format_Patrimoinelineaire_5.readFeatures(json_Patrimoinelineaire_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Patrimoinelineaire_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Patrimoinelineaire_5.addFeatures(features_Patrimoinelineaire_5);
var lyr_Patrimoinelineaire_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Patrimoinelineaire_5, 
                style: style_Patrimoinelineaire_5,
                popuplayertitle: 'Patrimoine lineaire',
                interactive: true,
                title: '<img src="styles/legend/Patrimoinelineaire_5.png" /> Patrimoine lineaire'
            });
var format_Siteshistoriques_6 = new ol.format.GeoJSON();
var features_Siteshistoriques_6 = format_Siteshistoriques_6.readFeatures(json_Siteshistoriques_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Siteshistoriques_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Siteshistoriques_6.addFeatures(features_Siteshistoriques_6);
var lyr_Siteshistoriques_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Siteshistoriques_6, 
                style: style_Siteshistoriques_6,
                popuplayertitle: 'Sites historiques ',
                interactive: true,
    title: 'Sites historiques <br />\
    <img src="styles/legend/Siteshistoriques_6_0.png" /> Bunker<br />\
    <img src="styles/legend/Siteshistoriques_6_1.png" /> Calvaire<br />\
    <img src="styles/legend/Siteshistoriques_6_2.png" /> Fontaine<br />\
    <img src="styles/legend/Siteshistoriques_6_3.png" /> Fontaine historique<br />\
    <img src="styles/legend/Siteshistoriques_6_4.png" /> Lavoir<br />\
    <img src="styles/legend/Siteshistoriques_6_5.png" /> Manoir<br />\
    <img src="styles/legend/Siteshistoriques_6_6.png" /> Memorial<br />\
    <img src="styles/legend/Siteshistoriques_6_7.png" /> Ruines<br />\
    <img src="styles/legend/Siteshistoriques_6_8.png" /> Sanctuaire de bord de route<br />\
    <img src="styles/legend/Siteshistoriques_6_9.png" /> Chapelle<br />\
    <img src="styles/legend/Siteshistoriques_6_10.png" /> Site archaeologique<br />' });
var format_Voiesdedplacement_7 = new ol.format.GeoJSON();
var features_Voiesdedplacement_7 = format_Voiesdedplacement_7.readFeatures(json_Voiesdedplacement_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Voiesdedplacement_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voiesdedplacement_7.addFeatures(features_Voiesdedplacement_7);
var lyr_Voiesdedplacement_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voiesdedplacement_7, 
                style: style_Voiesdedplacement_7,
                popuplayertitle: 'Voies de déplacement',
                interactive: true,
    title: 'Voies de déplacement<br />\
    <img src="styles/legend/Voiesdedplacement_7_0.png" /> Circuit 1<br />\
    <img src="styles/legend/Voiesdedplacement_7_1.png" /> Circuit 2<br />\
    <img src="styles/legend/Voiesdedplacement_7_2.png" /> Circuit Penvenan Est<br />\
    <img src="styles/legend/Voiesdedplacement_7_3.png" /> Circuit Penvenan Ouest<br />\
    <img src="styles/legend/Voiesdedplacement_7_4.png" /> Piste cyclable <br />\
    <img src="styles/legend/Voiesdedplacement_7_5.png" /> Voie verte<br />\
    <img src="styles/legend/Voiesdedplacement_7_6.png" /> Liaison circuits 1 et 2<br />\
    <img src="styles/legend/Voiesdedplacement_7_7.png" /> Deviation Samedi matin<br />' });
var format_Axesduprogramme_8 = new ol.format.GeoJSON();
var features_Axesduprogramme_8 = format_Axesduprogramme_8.readFeatures(json_Axesduprogramme_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Axesduprogramme_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Axesduprogramme_8.addFeatures(features_Axesduprogramme_8);
var lyr_Axesduprogramme_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Axesduprogramme_8, 
                style: style_Axesduprogramme_8,
                popuplayertitle: 'Axes du programme',
                interactive: true,
    title: 'Axes du programme<br />\
    <img src="styles/legend/Axesduprogramme_8_0.png" /> Attractivite & accompagnement des acteurs<br />\
    <img src="styles/legend/Axesduprogramme_8_1.png" /> Cadre de vie<br />\
    <img src="styles/legend/Axesduprogramme_8_2.png" /> Lien social & Solidarite<br />\
    <img src="styles/legend/Axesduprogramme_8_3.png" /> Repondre aux enjeux de long terme<br />\
    <img src="styles/legend/Axesduprogramme_8_4.png" /> Voies de circulation & deplacements<br />' });
var group_Programme = new ol.layer.Group({
                                layers: [lyr_Voiesdedplacement_7,lyr_Axesduprogramme_8,],
                                fold: 'open',
                                title: 'Programme'});
var group_Patrimoine = new ol.layer.Group({
                                layers: [lyr_LabelMonumentshistorique_3,lyr_ZonedePresomptionArcheologique_4,lyr_Patrimoinelineaire_5,lyr_Siteshistoriques_6,],
                                fold: 'open',
                                title: 'Patrimoine'});
var group_Administratif = new ol.layer.Group({
                                layers: [lyr_Limitescommunale_2,],
                                fold: 'open',
                                title: 'Administratif'});
var group_Fond = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_ESRI_1,],
                                fold: 'open',
                                title: 'Fond'});

lyr_OpenStreetMap_0.setVisible(true);lyr_ESRI_1.setVisible(true);lyr_Limitescommunale_2.setVisible(true);lyr_LabelMonumentshistorique_3.setVisible(true);lyr_ZonedePresomptionArcheologique_4.setVisible(true);lyr_Patrimoinelineaire_5.setVisible(true);lyr_Siteshistoriques_6.setVisible(true);lyr_Voiesdedplacement_7.setVisible(false);lyr_Axesduprogramme_8.setVisible(true);
var layersList = [group_Fond,group_Administratif,group_Patrimoine,group_Programme];
lyr_Limitescommunale_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref:INSEE': 'ref:INSEE', 'boundary': 'boundary', 'admin_level': 'admin_level', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'type': 'type', 'source:postal_code': 'source:postal_code', 'source:population': 'source:population', 'ref:FR:SIREN': 'ref:FR:SIREN', 'postal_code': 'postal_code', 'population:date': 'population:date', 'population': 'population', 'name:br': 'name:br', 'name': 'name', });
lyr_LabelMonumentshistorique_3.set('fieldAliases', {'idTigre': 'idTigre', 'idApp': 'idApp', 'parcelle': 'parcelle', 'appelation': 'appelation', 'categorie': 'categorie', 'localisati': 'localisati', 'ressource': 'ressource', 'evenement': 'evenement', 'legende': 'legende', 'precision': 'precision', 'statut': 'statut', 'maj': 'maj', });
lyr_ZonedePresomptionArcheologique_4.set('fieldAliases', {'IDENTIFIAN': 'IDENTIFIAN', 'NATURE': 'NATURE', 'N_ZONE': 'N_ZONE', 'DATE_ARRET': 'DATE_ARRET', 'NUM_ARRETE': 'NUM_ARRETE', 'NUM_RAA': 'NUM_RAA', 'INSEE': 'INSEE', 'COMMUNE': 'COMMUNE', });
lyr_Patrimoinelineaire_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'military': 'military', 'material': 'material', 'barrier': 'barrier', });
lyr_Siteshistoriques_6.set('fieldAliases', {'fid': 'fid', 'historic': 'historic', 'bunker_type': 'bunker_type', 'material': 'material', 'start_date': 'start_date', 'moved': 'moved', 'ref:t4t35.fr': 'ref:t4t35.fr', 'ref:megalithic.co.uk': 'ref:megalithic.co.uk', 'ref:DRAC': 'ref:DRAC', 'historic:period': 'historic:period', 'historic:era': 'historic:era', 'historic:civilization': 'historic:civilization', 'access': 'access', 'height': 'height', 'wikidata': 'wikidata', 'source:heritage': 'source:heritage', 'ref:mhs': 'ref:mhs', 'mhs:inscription_date': 'mhs:inscription_date', 'heritage:operator': 'heritage:operator', 'heritage': 'heritage', 'archaeological_site': 'archaeological_site', 'denomination': 'denomination', 'religion': 'religion', 'name': 'name', });
lyr_Voiesdedplacement_7.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', 'distance': 'distance', });
lyr_Axesduprogramme_8.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', 'Description': 'Description', 'Quartier': 'Quartier', 'Statut': 'Statut', 'Date': 'Date', 'Categorie': 'Categorie', 'Surface': 'Surface', 'Photo_avant': 'Photo_avant', 'Photo_apres': 'Photo_apres', 'Axe': 'Axe', });
lyr_Limitescommunale_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref:INSEE': 'TextEdit', 'boundary': 'TextEdit', 'admin_level': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'source:postal_code': 'TextEdit', 'source:population': 'TextEdit', 'ref:FR:SIREN': 'TextEdit', 'postal_code': 'TextEdit', 'population:date': 'TextEdit', 'population': 'TextEdit', 'name:br': 'TextEdit', 'name': 'TextEdit', });
lyr_LabelMonumentshistorique_3.set('fieldImages', {'idTigre': 'Hidden', 'idApp': 'Hidden', 'parcelle': 'Hidden', 'appelation': 'TextEdit', 'categorie': 'TextEdit', 'localisati': 'Hidden', 'ressource': 'TextEdit', 'evenement': 'Classification', 'legende': 'TextEdit', 'precision': 'TextEdit', 'statut': 'TextEdit', 'maj': 'TextEdit', });
lyr_ZonedePresomptionArcheologique_4.set('fieldImages', {'IDENTIFIAN': 'Range', 'NATURE': 'TextEdit', 'N_ZONE': 'TextEdit', 'DATE_ARRET': 'TextEdit', 'NUM_ARRETE': 'TextEdit', 'NUM_RAA': 'TextEdit', 'INSEE': 'Range', 'COMMUNE': 'TextEdit', });
lyr_Patrimoinelineaire_5.set('fieldImages', {'fid': 'Hidden', 'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'Hidden', 'military': 'TextEdit', 'material': 'Hidden', 'barrier': 'TextEdit', });
lyr_Siteshistoriques_6.set('fieldImages', {'fid': 'Hidden', 'historic': 'TextEdit', 'bunker_type': 'Hidden', 'material': 'Hidden', 'start_date': 'Hidden', 'moved': 'Hidden', 'ref:t4t35.fr': 'Hidden', 'ref:megalithic.co.uk': 'Hidden', 'ref:DRAC': 'TextEdit', 'historic:period': 'Hidden', 'historic:era': 'Hidden', 'historic:civilization': 'Hidden', 'access': 'Hidden', 'height': 'Hidden', 'wikidata': 'Hidden', 'source:heritage': 'Hidden', 'ref:mhs': 'Hidden', 'mhs:inscription_date': 'Hidden', 'heritage:operator': 'Hidden', 'heritage': 'Hidden', 'archaeological_site': 'Hidden', 'denomination': 'Hidden', 'religion': 'Hidden', 'name': 'TextEdit', });
lyr_Voiesdedplacement_7.set('fieldImages', {'fid': 'Hidden', 'Nom': 'TextEdit', 'distance': 'TextEdit', });
lyr_Axesduprogramme_8.set('fieldImages', {'fid': 'Hidden', 'Nom': 'TextEdit', 'Description': 'TextEdit', 'Quartier': 'TextEdit', 'Statut': 'ValueMap', 'Date': 'DateTime', 'Categorie': 'ValueMap', 'Surface': 'TextEdit', 'Photo_avant': 'ExternalResource', 'Photo_apres': 'ExternalResource', 'Axe': 'ValueMap', });
lyr_Limitescommunale_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref:INSEE': 'no label', 'boundary': 'no label', 'admin_level': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'type': 'no label', 'source:postal_code': 'no label', 'source:population': 'no label', 'ref:FR:SIREN': 'no label', 'postal_code': 'no label', 'population:date': 'no label', 'population': 'no label', 'name:br': 'no label', 'name': 'no label', });
lyr_LabelMonumentshistorique_3.set('fieldLabels', {'appelation': 'header label - always visible', 'categorie': 'header label - always visible', 'ressource': 'header label - always visible', 'evenement': 'header label - always visible', 'legende': 'header label - always visible', 'precision': 'header label - always visible', 'statut': 'header label - visible with data', 'maj': 'header label - visible with data', });
lyr_ZonedePresomptionArcheologique_4.set('fieldLabels', {'IDENTIFIAN': 'no label', 'NATURE': 'header label - always visible', 'N_ZONE': 'no label', 'DATE_ARRET': 'header label - always visible', 'NUM_ARRETE': 'header label - always visible', 'NUM_RAA': 'header label - always visible', 'INSEE': 'no label', 'COMMUNE': 'no label', });
lyr_Patrimoinelineaire_5.set('fieldLabels', {'military': 'header label - always visible', 'barrier': 'header label - visible with data', });
lyr_Siteshistoriques_6.set('fieldLabels', {'historic': 'header label - always visible', 'ref:DRAC': 'header label - always visible', 'name': 'header label - always visible', });
lyr_Voiesdedplacement_7.set('fieldLabels', {'Nom': 'header label - always visible', 'distance': 'header label - always visible', });
lyr_Axesduprogramme_8.set('fieldLabels', {'Nom': 'header label - always visible', 'Description': 'header label - visible with data', 'Quartier': 'header label - visible with data', 'Statut': 'header label - visible with data', 'Date': 'no label', 'Categorie': 'header label - always visible', 'Surface': 'no label', 'Photo_avant': 'inline label - always visible', 'Photo_apres': 'inline label - always visible', 'Axe': 'no label', });
lyr_Axesduprogramme_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});