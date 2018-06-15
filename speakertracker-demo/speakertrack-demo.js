const xapi = require('xapi');

const speakerTrackDemoWidgetId = 'speakertrackdemo';

function handleError(error){
  console.log('Error', error);
}

function enableSpeakerTrackDiagnostics(){
  xapi.command('Cameras SpeakerTrack Diagnostics Start', {
    Tracking: 'On',
  }).catch(handleError);
}

function disableSpeakerTrackDiagnostics(){
  xapi.command('Cameras SpeakerTrack Diagnostics Stop').catch(handleError);
}

function speakerTrackListener(event){
  if (event.WidgetId === speakerTrackDemoWidgetId && event.Type === 'changed'){
    //console.log('stdiag event');
    if (event.Value === 'on'){
      enableSpeakerTrackDiagnostics();
    }else{
      disableSpeakerTrackDiagnostics();
    }
  }
}

xapi.event.on('UserInterface Extensions Widget Action', speakerTrackListener);