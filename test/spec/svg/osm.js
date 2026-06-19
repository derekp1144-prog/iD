import { select as d3_select } from 'd3-selection';

describe('iD.svgOsm', function () {
    var container;

    beforeEach(function () {
        container = d3_select(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));
    });

    it('creates default osm layers', function () {
        container.call(iD.svgOsm());
        var layers = container.selectAll('g.layer-osm').nodes();
        expect(layers.length).to.eql(6);
        expect(d3_select(layers[0]).classed('covered')).to.be.true;
        expect(d3_select(layers[1]).classed('areas')).to.be.true;
        expect(d3_select(layers[2]).classed('lines')).to.be.true;
        expect(d3_select(layers[3]).classed('points')).to.be.true;
        expect(d3_select(layers[4]).classed('auxiliary')).to.be.true;
        expect(d3_select(layers[5]).classed('labels')).to.be.true;
    });

    it('creates default osm point layers', function () {
        container.call(iD.svgOsm());
        var layers = container.selectAll('g.points-group').nodes();
        expect(layers.length).to.eql(4);
        expect(d3_select(layers[0]).classed('vertices')).to.be.true;
        expect(d3_select(layers[1]).classed('midpoints')).to.be.true;
        expect(d3_select(layers[2]).classed('points')).to.be.true;
        expect(d3_select(layers[3]).classed('turns')).to.be.true;
    });

});
