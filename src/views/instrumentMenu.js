PubSub = require('../helpers/PubSub.js')

const InstrumentMenu = function(optionElement){
this.optionElement = optionElement;
};

InstrumentMenu.prototype.bindEvents = function(){
  PubSub.subscribe('Instruments:all-ready', (event) => {
    this.populate(event.detail);
  })

  this.optionElement.addEventListener('change', (event) => {
    const selectedInstrumentIndex = event.target.value;
    PubSub.publish('Instrument:selected', selectedInstrumentIndex)
  })
}

InstrumentMenu.prototype.populate = function(instruments){
  instruments.forEach((instrument, index) => {
    const option = document.createElement('option')
    option.value = index;
    option.textContent = instrument.name;
    this.optionElement.appendChild(option)
  })
}

module.exports = InstrumentMenu;
