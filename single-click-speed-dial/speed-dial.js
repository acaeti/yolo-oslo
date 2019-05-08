const xapi = require('xapi');

const speedDialPanelId = 'speedDial';

//you can also enter a bare number, as opposed to a full URI, e.g. '12345,' if dialing only digits.
const speedDialDestinationUri = 'example@example.com'; 

function speedDialListener(event){
  if(event.PanelId == speedDialPanelId){
    xapi.command("dial", {Number: speedDialDestinationUri});
  }
}

xapi.event.on('UserInterface Extensions Panel Clicked', speedDialListener);