# Single Click Speed Dial

This macro and corresponding In-Room Control sample demonstrates how to create a simple out-of-call button on the Touch 10 of an endpoint that operates as a single-click speed dial (press the button, it dials).

This sample gadget contains the following files:

	yolo-oslo/
		single-click-speed-dial/
			README.md (this file)
			speed-dial.js (the macro that listens for a out-of-call panel click and dials the destination)
			roomcontrolconfig.xml (in-room control definition file)

## Requirements
1. Cisco Video room device
2. Firmware CE9.x
3. Admin user access to endpoint (to load macro and in-room control)

## Usage
1. Read the document [Working with Macros and In-room Controls](https://www.cisco.com/c/dam/en/us/td/docs/telepresence/endpoint/ce92/sx-mx-dx-room-kit-customization-guide-ce92.pdf) for a comprehensive introduction of In-Room Controls, Macros as well as step-by-step instructions on how to build and upload your code.
2. Watch this video for a quick introduction of what In-Room Controls are: https://www.youtube.com/watch?v=7dw9zvvitp8

## Setup

1. Import the in-room control, or replicate it to suit your needs
2. Import the Javascript file
3. Open Macros editor and edit the variables for speedDialPanelId and speedDialDestinationUri appropriately  

## Additional Information
### XAPI
Documentation for the XAPI can be found in the [Command References overview](https://www.cisco.com/c/en/us/support/collaboration-endpoints/telepresence-quick-set-series/products-command-reference-list.html).

## Authors

* Nick Mueller, [CDW](http://www.cdw.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details