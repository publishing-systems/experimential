/*
Copyright (C) 2017 Stephan Kreutzer

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License version 3 or any later version,
as published by the Free Software Foundation.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License 3 for more details.

You should have received a copy of the GNU Affero General Public License 3
along with this program. If not, see <http://www.gnu.org/licenses/>.
*/


var requestPath = "";

var url = new URL(window.location.href);
var host = url.searchParams.get("host");

if (host != undefined &&
    host != null)
{
    requestPath = host;

    if (requestPath.length > 0)
    {
        if (requestPath.substring(requestPath.length - 1) != "/")
        {
            requestPath += "/";
        }
    }
}
else
{
    var scripts = document.getElementsByTagName("script");
    // 'scripts' contains always the last script tag that was loaded.
    var myPath = scripts[scripts.length-1].src;

    requestPath = myPath.substring(0, myPath.lastIndexOf('/'));
    requestPath += "/";

    // 'file://' indicates that the usage of a local server is intended.
    if (requestPath.substring(0, 7) == "file://")
    {
        requestPath = "http://localhost:8080/";
    }
    else
    {
        // The server which delivered this file will be assumed to be the host.
    }
}

var xmlhttp = null;

// Mozilla
if (window.XMLHttpRequest)
{
    xmlhttp = new XMLHttpRequest();
}
// IE
else if (window.ActiveXObject)
{
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
}

if (xmlhttp == undefined ||
    xmlhttp == null)
{
    alert("No AJAX.");
    exit();
}




function writeToFile()
{
    xmlhttp.open('POST', requestPath + "write", true);
    xmlhttp.setRequestHeader('Content-Type',
                             'application/x-www-form-urlencoded');
    xmlhttp.onreadystatechange = writeToFileResponse;
    xmlhttp.send('parameter=' + encodeURIComponent("value"));
}

function writeToFileResponse()
{
    if (xmlhttp.readyState != 4)
    {
        // Waiting...
    }

    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
        alert("File written.");
    }
    else if (xmlhttp.readyState == 4 && xmlhttp.status == 0)
    {
        alert("Server offline.");
    }
}
