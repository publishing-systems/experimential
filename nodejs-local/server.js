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
// Based on
// https://wiki.ubuntuusers.de/Node.js/

var express = require('express');
var app = express();

// https://enable-cors.org/server_expressjs.html
app.use(function(req, res, next)
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/write', function(req, res)
{
    var fs = require('fs');

    fs.writeFile("./output.txt", "Hello, world!", function(err) {
        if (err)
        {
            console.log(err);
            res.status(500).end();
        }
        else
        {
            console.log("The file was saved!");
            res.status(200).end();
        }
    });
});

app.listen(8080)
