# Camera Merge Control

This macro and corresponding In-Room Control sample demonstrates how to create an in-room control to control what camera inputs are sent to the remote party of a call, and in what layout.  For example, if an endpoint has two cameras connected (say, a Quad Camera and a P60 camera), the control allows selection of either the Quad Camera, the P60, or a combined layout of the Quad Camera + P60 to be sent to the remote party.  The sample includes macros to automatically disables reset the camera selection after a call disconnects, and at endpoint boot.

This sample gadget contains the following files:

	yolo-oslo/
		camera-merge-control/
			README.md (this file)
			reset-on-disconnect.js (the macro to return to a default camera selection on call disconnect)
			reset-on-boot.js (the macro to return to a default camera selection on boot)
			camera-merge-control.js (the macro to interact with the in-room control to allow camera selection)
			roomcontrolconfig.xml (in-room control definition file)

## Requirements
1. Cisco video room device that supports multiple cameras, e.g. SX-80, RoomKit Plus or RoomKit Pro
2. Firmware CE9.2.1 or newer for SX-80, CE9.4.0 or newer for RoomKit Plus, TBD for RoomKit Pro
3. Admin user access to endpoint

## Usage
1. Read the document [Working with Macros and In-room Controls](https://www.cisco.com/c/dam/en/us/td/docs/telepresence/endpoint/ce92/sx-mx-dx-room-kit-customization-guide-ce92.pdf) for a comprehensive introduction of In-Room Controls, Macros as well as step-by-step instructions on how to build and upload your code.
2. Watch this video for a quick introduction of what In-Room Controls are: https://www.youtube.com/watch?v=7dw9zvvitp8

## Setup

1. Import the in-room control, or replicate it to suit your needs
2. Import the Javascript files
3. Open Macros editor and edit the variables for cameraStateWidgetId, connectorId, widget values, etc. appropriately  

## Additional Information
### XAPI
Documentation for the XAPI can be found in the [Command References overview](https://www.cisco.com/c/en/us/support/collaboration-endpoints/telepresence-quick-set-series/products-command-reference-list.html).

## Authors

* Nick Mueller, [CDW](http://www.cdw.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details