const PubSub = require('../helpers/PubSub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('Instruments:all-ready', this.data);

  PubSub.subscribe('Instrument:selected', (event) => {
    const index = event.detail
    const selectedInstrument = this.findInstrument(index)
    console.log("reached point")

  PubSub.publish('Instrument:passed-on-selected', selectedInstrument)
  })
}

InstrumentFamilies.prototype.findInstrument = function(index){
  return this.data[index]

}

module.exports = InstrumentFamilies;
