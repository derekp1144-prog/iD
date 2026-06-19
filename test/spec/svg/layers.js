import { select as d3_select } from 'd3-selection';
import { geoProjection as d3_geoProjection } from 'd3-geo';

describe('iD.svgLayers', function () {
    var context, container;
    var projection = d3_geoProjection(function(x, y) { return [x, -y]; })
        .translate([0, 0])
        .scale(iD.geoZoomToScale(17))
        .clipExtent([[0, 0], [Infinity, Infinity]]);

    beforeEach(function () {
        context = iD.coreContext().assetPath('../dist/').init();
        container = d3_select(document.createElement('div'));
    });


    it('creates a surface', function () {
        container.call(iD.svgLayers(projection, context));
        expect(container.selectAll('svg').classed('surface')).to.be.true;
    });

    it('creates surface defs', function () {
        container.call(iD.svgLayers(projection, context));
        var nodes = container.selectAll('svg defs').nodes();
        expect(nodes.length).to.eql(1);
        expect(d3_select(nodes[0]).classed('surface-defs')).to.be.true;
    });

    it('creates default data layers', function () {
        container.call(iD.svgLayers(projection, context));
        var nodes = container.selectAll('svg .data-layer').nodes();
        expect(nodes.length).to.eql(17);
        /* eslint-disable no-useless-assignment */
        let i = 0;
        expect(d3_select(nodes[i++]).classed('osm')).to.be.true;
        expect(d3_select(nodes[i++]).classed('notes')).to.be.true;
        expect(d3_select(nodes[i++]).classed('data')).to.be.true;
        expect(d3_select(nodes[i++]).classed('osmose')).to.be.true;
        expect(d3_select(nodes[i++]).classed('streetside')).to.be.true;
        expect(d3_select(nodes[i++]).classed('mapillary')).to.be.true;
        expect(d3_select(nodes[i++]).classed('mapillary-position')).to.be.true;
        expect(d3_select(nodes[i++]).classed('mapillary-map-features')).to.be.true;
        expect(d3_select(nodes[i++]).classed('mapillary-signs')).to.be.true;
        expect(d3_select(nodes[i++]).classed('kartaview')).to.be.true;
        expect(d3_select(nodes[i++]).classed('mapilio')).to.be.true;
        expect(d3_select(nodes[i++]).classed('vegbilder')).to.be.true;
        expect(d3_select(nodes[i++]).classed('panoramax')).to.be.true;
        expect(d3_select(nodes[i++]).classed('local-photos')).to.be.true;
        expect(d3_select(nodes[i++]).classed('debug')).to.be.true;
        expect(d3_select(nodes[i++]).classed('geolocate')).to.be.true;
        expect(d3_select(nodes[i++]).classed('touch')).to.be.true;
        /* eslint-enable no-useless-assignment */
    });

});
