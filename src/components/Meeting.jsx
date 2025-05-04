import React from "react";
import ZoomMtgEmbedded from "@zoom/meetingsdk/embedded";

const Meeting = () => {
	const client = ZoomMtgEmbedded.createClient();

	const meetingSDKElement = document.getElementById("meetingSDKElement");

	client.init({ zoomAppRoot: meetingSDKElement, language: "en-US" });

	return <div id="meetingSDKElement"></div>;
};

export default Meeting;
