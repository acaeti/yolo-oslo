# Whiteboard Control

This macro and corresponding In-Room Control sample demonstrates how to create an in-room control to change the main video HDMI input via the Touch 10 of an endpoint.  For example, a normal camera (e.g. QuadCam or P60) may be connected to HDMI input 1 and generally used for main video, while a digital whiteboard may be connected to HDMI input 2 and used occasionally en lieu of HDMI 1 for main video.  The macro also automatically reverts the camera to HDMI input 1 after a call disconnects.

This sample gadget contains the following files:

	yolo-oslo/
		whiteboard-control/
			README.md (this file)
			reset-on-disconnect.js (the macro to change main video HDMI input on the endpoint on call disconnect)
			reset-on-reboot.js (the macro to reset the main video HDMI input on reboot)
			whiteboard-control.js (the macro to interact with the in-room control to change main video HDMI input)
			roomcontrolconfig.xml (in-room control definition file)

## Requirements
1. Cisco video room device with multiple inputs, e.g. SX-80, RoomKit Plus or RoomKit Pro
2. Firmware CE9.2.1 or newer for SX-80, CE9.4.0 or newer for RoomKit Plus, 9.4.1 for RoomKit Pro
3. Admin user access to endpoint

## Usage
1. Read the document [Working with Macros and In-room Controls](https://www.cisco.com/c/dam/en/us/td/docs/telepresence/endpoint/ce92/sx-mx-dx-room-kit-customization-guide-ce92.pdf) for a comprehensive introduction of In-Room Controls, Macros as well as step-by-step instructions on how to build and upload your code.
2. Watch this video for a quick introduction of what In-Room Controls are: https://www.youtube.com/watch?v=7dw9zvvitp8

## Setup

1. Import the in-room control, or replicate it to suit your needs
2. Import the Javascript files
3. Open Macros editor and edit the three Macro scripts, substituting your values for the constants defined in each, appropriately  

## Additional Information
### xAPI
Documentation for the xAPI can be found in the [Command References overview](https://www.cisco.com/c/en/us/support/collaboration-endpoints/telepresence-quick-set-series/products-command-reference-list.html).

## Authors

* Nick Mueller, [CDW](http://www.cdw.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details