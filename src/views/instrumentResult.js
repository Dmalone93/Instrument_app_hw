const PubSub = require('../helpers/PubSub.js');

const InstrumentResult = function(container){
this.container = container;
}

InstrumentResult.prototype.bindEvents = function(){
  PubSub.subscribe('Instrument:passed-on-selected', (event) => {
    this.render(event.detail)
  })
}

InstrumentResult.prototype.render = function(instrument){

  const infoDiv = document.querySelector('#instrument-object')
  const infoPara = document.createElement('p')
  infoPara.textContent = `${instrument.name}: ${instrument.description}. ${instrument.instruments}`;
  infoDiv.innerHTML = '';
  infoDiv.appendChild(infoPara);
};

module.exports = InstrumentResult;
