import { select as d3_select } from 'd3-selection';
import { geoMercator as d3_geoMercator } from 'd3-geo';

describe('iD.rendererTileLayer', function() {
    var context, d, c;

    beforeEach(function() {
        context = iD.coreContext().assetPath('../dist/').init();
        d = d3_select(document.createElement('div'));
        c = iD.rendererTileLayer(context).projection(d3_geoMercator());
    });

    afterEach(function() {
        d.remove();
    });

    it('is instantiated', function() {
        expect(c).to.be.ok;
    });

    it('#dimensions', function() {
        expect(c.dimensions([100, 100])).to.equal(c);
        expect(c.dimensions()).to.eql([100,100]);
    });
});
