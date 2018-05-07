/* Copyright (C) 2012-2018 Stephan Kreutzer
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License version 3 or any later
 * version of the license, as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License 3 for more details.
 *
 * You should have received a copy of the GNU Affero General Public License 3
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

"use strict";

function run(targetId, onLoadFunction)
{
    if (!window.File)
    {
        console.log("No window.File.");
        return;
    }

    if (!window.FileReader)
    {
        console.log("No window.FileReader.");
        return;
    }

    if (!window.FileList)
    {
        console.log("No window.FileList.");
        return;
    }

    if (!window.Blob)
    {
        console.log("No window.Blob.");
        return;
    }

    let targetElement = document.getElementById(targetId);

    if (targetElement == null)
    {
        console.log("Target element with ID '" + targetId + "' not found.");
        return;
    }

    targetElement.addEventListener('change', function(data) { onFileSelected(data, onLoadFunction); }, false);
}

function onFileSelected(args, onLoadFunction)
{
    let files = args.target.files;

    if (files.length <= 0)
    {
        console.log("File list is empty.");
        return;
    }

    let file = files[0];
    let fileReader = new FileReader();

    fileReader.onloadend = function(data) { onLoadFunction(data.target.result); };
    fileReader.readAsBinaryString(file);
}

function saveFile(data)
{
    document.location.href = "data:application/octet-stream," + encodeURIComponent(data);
}
