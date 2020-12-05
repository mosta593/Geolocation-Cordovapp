/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);


function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
  document.getElementById('deviceready').classList.add('ready');

  document.getElementById("cameraTakePicture").addEventListener
    ("click", cameraTakePicture);

  document.getElementById("cameraTakeVideo").addEventListener
    ("click", cameraTakeVideo);


}


// start image capture

function captureSuccess(mediaFiles) {
  var i, path, len;
  for (i = 0, len = mediaFiles.length; i < len; i += 1) {
    path = mediaFiles[i].fullPath;
    alert('Se ha guardado exitosamente  :) ' );
    // do something interesting with the file


  }
};


// start image capture

function cameraTakePicture() {
  navigator.device.capture.captureImage(captureSuccess, FailCallback, { limit: 1 });
}



// capture callback
function captureSuccessi(mediaFiles) {
  var i, path, len;
  for (i = 0, len = mediaFiles.length; i < len; i += 1) {
    path = mediaFiles[i].fullPath;
    alert('Se ha guardado exitosamente  :) ');

  }
};



function cameraTakeVideo() {
  navigator.device.capture.captureVideo(captureSuccessi, FailCallback, {
    limit: 1

  });
}



// capture error callback
function FailCallback(message) {
  alert('Error critico: ' + message);
}







