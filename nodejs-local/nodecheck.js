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

var hasNode = false;

{
    // Based on
    // https://www.npmjs.com/package/detect-is-node
    // https://github.com/abhirathore2006/detect-is-node/blob/master/index.js

    var windowTest;

    try
    {
        // If window is declared thorugh JS DOM then window will be defined but will not be equal to this.
        windowTest = this === window;
    }
    catch (ex)
    {
        hasNode = true;
    }

    if (hasNode !== true)
    {
        try
        {
            if (this === global && !windowTest)
            {
                hasNode = true;
            }
            else
            {
                hasNode = false;
            }
        }
        catch (ex)
        {
            hasNode = false;
        }
    }
}

if (hasNode === true)
{
    console.log("Is node.js.");
}
else
{
    // No local node.js running.
    console.log("No node.js.");
}
