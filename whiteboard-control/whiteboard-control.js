const xapi = require('xapi');

const whiteboardControlOutOfCallPanelId = 'whiteboardControlOutOfCall';

const whiteboardControlInCallPanelId = 'whiteboardControlInCall';

const whiteboardControlPanelIds = [whiteboardControlOutOfCallPanelId, whiteboardControlInCallPanelId]

const defaultCameraConnectorId = '1';

const whiteboardCameraConnectorId = '2';

function handleError(error){
  console.log('Error', error);
}

function setCameraConnector(connectorId){
	xapi.command('Video Input SetMainVideoSource ConnectorId', connectorId).catch(handleError);
}

function changeMainVideoSource(mvsource) {
  if(mvsource === defaultCameraConnectorId){
    setCameraConnector(whiteboardCameraConnectorId);
  }else if(mvsource === whiteboardCameraConnectorId){
    setCameraConnector(defaultCameraConnectorId);
  }else{
    console.log("error: unknown current input of " + mvsource)
  }
}

function whiteboardControlListener(event){
  if (whiteboardControlPanelIds.includes(event.PanelId)){
    xapi.status.get('Video Input MainVideoSource').then((mvsource) => changeMainVideoSource(mvsource));
  }
}

xapi.event.on('UserInterface Extensions Panel Clicked', whiteboardControlListener);