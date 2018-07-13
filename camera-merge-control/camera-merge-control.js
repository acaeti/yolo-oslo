const xapi = require('xapi');

const cameraStateWidgetId = 'camerastate';

function handleError(error){
  console.log('Error', error);
}

function setCameraStateQC(){
	xapi.command('Video Input SetMainVideoSource ConnectorId', '1').catch(handleError);
	xapi.command('UserInterface Extensions Widget SetValue', {
	  Value: 'quadcam',
	  WidgetId: cameraStateWidgetId,
	}).catch(handleError);
}

function setCameraStateP60(){
	xapi.command('Video Input SetMainVideoSource ConnectorId', '2').catch(handleError);
	xapi.command('UserInterface Extensions Widget SetValue', {
	  Value: 'p60',
	  WidgetId: cameraStateWidgetId,
	}).catch(handleError);
}

function setCameraStateQCP60(){
	xapi.command('Video Input SetMainVideoSource', {ConnectorId: ['1', '2'],}).catch(handleError);
	xapi.command('UserInterface Extensions Widget SetValue', {
	  Value: 'quadcamp60',
	  WidgetId: cameraStateWidgetId,
	}).catch(handleError);
}

function cameraStateListener(event){
  if (event.WidgetId === cameraStateWidgetId && event.Type === 'pressed'){
    //console.log('cameraStateEvent event');
    if (event.Value === 'quadcam'){
      setCameraStateQC().catch(handleError);
    }else if (event.Value === 'p60'){
      setCameraStateP60().catch(handleError);
    }else if (event.Value === 'quadcamp60'){
      setCameraStateQCP60().catch(handleError);
    }else {
     console.log('unknown cameraStateEvent event happened');
    }
  }
}

xapi.event.on('UserInterface Extensions Widget Action', cameraStateListener);