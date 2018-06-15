const xapi = require('xapi');

const presenterTrackWidgetId = 'presentertrack';

function handleError(error){
  console.log('Error', error);
}

function enableSpeakerTrack(){
	xapi.command('Cameras SpeakerTrack Activate').catch(handleError);

	xapi.command('UserInterface Extensions Widget SetValue', {
	  Value: 'off',
	  WidgetId: presenterTrackWidgetId,
	}).catch(handleError);

}

xapi.event.on('CallDisconnect', (event) => {
	enableSpeakerTrack();
});