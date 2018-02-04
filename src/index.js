import 'script-loader!osm-read/osm-read-pbf.js';


function init() {
    pbfParser.parse({
        filePath: 'bulgaria-latest.osm.pbf',
        endDocument: () => {
            console.log('end');
        },
        node: node => {
        },
        way: way => {
        },
        relation: relation => {
        },
        error: msg => {
            console.error(msg);
        },
    });
}

$(function () {
    init();
});
