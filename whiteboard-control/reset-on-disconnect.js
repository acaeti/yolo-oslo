const xapi = require('xapi');

const defaultCameraConnectorId = '1';

function handleError(error){
  console.log('Error', error);
}

function resetCameraState(){
	xapi.command('Video Input SetMainVideoSource ConnectorId', defaultCameraConnectorId).catch(handleError);
}

xapi.event.on('CallDisconnect', (event) => {
	resetCameraState();
});