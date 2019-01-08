const PubSub = require('./helpers/PubSub.js')

const instrumentData = require('./data/instrument_family_data.js')
const InstrumentFamilies = require('./models/instrument_families.js')
const InstrumentMenu = require('./views/instrumentMenu.js')
const InstrumentResult = require('./views/instrumentResult.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const container = document.querySelector('section.instrument-details')
  const instrumentResult = new InstrumentResult(container);
  instrumentResult.bindEvents();


  const optionElement = document.querySelector('#instrument-families')
  const instrumentMenu = new InstrumentMenu(optionElement);
  instrumentMenu.bindEvents();

  const instrumentFamilies = new InstrumentFamilies(instrumentData);
  instrumentFamilies.bindEvents();



});
