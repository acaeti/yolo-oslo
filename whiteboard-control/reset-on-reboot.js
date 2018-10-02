const xapi = require('xapi');

const defaultCameraConnectorId = '1';

function handleError(error){
  console.log('Error', error);
}

function initializeCameraState(){
	xapi.command('Video Input SetMainVideoSource ConnectorId', defaultCameraConnectorId).catch(handleError);
}

initializeCameraState();