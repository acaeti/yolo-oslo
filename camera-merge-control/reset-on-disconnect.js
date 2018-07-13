const xapi = require('xapi');

const cameraStateWidgetId = 'camerastate';

function handleError(error){
  console.log('Error', error);
}

function resetCameraState(){
	xapi.command('Video Input SetMainVideoSource ConnectorId', '1').catch(handleError);
	xapi.command('UserInterface Extensions Widget SetValue', {
	  Value: 'quadcam',
	  WidgetId: cameraStateWidgetId,
	}).catch(handleError);
}

xapi.event.on('CallDisconnect', (event) => {
	resetCameraState().catch(handleError);
});