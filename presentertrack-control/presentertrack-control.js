const xapi = require('xapi');

const presenterTrackInput = '3';

const presenterTrackWidgetId = 'presentertrack';

function handleError(error){
  console.log('Error', error);
}

function changeCameraInput(){
  xapi.command('Video Input SetMainVideoSource', {
    ConnectorId: presenterTrackInput,
  }).catch(handleError);
}

function enablePresenterTrack(){
  xapi.command('Cameras PresenterTrack Set', {
    Mode: 'Follow',
  }).catch(handleError);

	xapi.command('UserInterface Extensions Widget SetValue', {
	  Value: 'on',
	  WidgetId: presenterTrackWidgetId,
	}).catch(handleError);
	
}

function enableSpeakerTrack(){
  xapi.command('Cameras SpeakerTrack Activate').catch(handleError);

	xapi.command('UserInterface Extensions Widget SetValue', {
	  Value: 'off',
	  WidgetId: presenterTrackWidgetId,
	}).catch(handleError);
}

function presenterTrackListener(event){
  if (event.WidgetId === presenterTrackWidgetId && event.Type === 'changed'){
    //console.log('presentertrack event');
    if (event.Value === 'on'){
      changeCameraInput();
			enablePresenterTrack();
    }else{
      enableSpeakerTrack();
    }
  }
}

xapi.event.on('UserInterface Extensions Widget Action', presenterTrackListener);