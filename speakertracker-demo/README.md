# SpeakerTrack Demo

This macro and corresponding In-Room Control sample demonstrates how to create an in-room control to turn on/off Cisco SpeakerTrack diagnostics on the Touch 10 of an endpoint for demonstration purposes.

This sample contains the following files:

	yolo-oslo/
		speakertrack-demo/
			README.md (this file)
			speakertrack-demo.js (the macro to interact with the in-room control to enable/disable SpeakerTrack diagnostics for demonstration purposes)
			roomcontrolconfig.xml (in-room control definition file)

## Requirements
1. Cisco Video room device with SpeakerTrack, e.g. SX-80, RoomKit, RoomKit Plus or RoomKit Pro
2. Firmware CE9.2.1 or newer for SX-80, RoomKit, or RoomKit Plus, TBD for RoomKit Pro
3. Admin user access to endpoint

## Usage
1. Read the document [Working with Macros and In-room Controls](https://www.cisco.com/c/dam/en/us/td/docs/telepresence/endpoint/ce92/sx-mx-dx-room-kit-customization-guide-ce92.pdf) for a comprehensive introduction of In-Room Controls, Macros as well as step-by-step instructions on how to build and upload your code.
2. Watch this video for a quick introduction of what In-Room Controls are: https://www.youtube.com/watch?v=7dw9zvvitp8

## Setup

1. Import the in-room control, or replicate it to suit your needs
2. Import the Javascript file
3. Open Macros editor and edit the variable for speakerTrackDemoWidgetId appropriately  

## Additional Information
### XAPI
Documentation for the XAPI can be found in the [Command References overview](https://www.cisco.com/c/en/us/support/collaboration-endpoints/telepresence-quick-set-series/products-command-reference-list.html).

## Authors

* Nick Mueller, [CDW](http://www.cdw.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details