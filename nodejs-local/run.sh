#!/bin/sh
# Copyright (C) 2017 Stephan Kreutzer
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License version 3 or any later version,
# as published by the Free Software Foundation.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU Affero General Public License 3 for more details.
#
# You should have received a copy of the GNU Affero General Public License 3
# along with this program. If not, see <http://www.gnu.org/licenses/>.

# Error messages from the second call on are likely caused by the server
# already running, so no second server can be instantiated listening on
# the same port. In the future, the shell script could check if there's
# already a nodejs process.

nodejs server.js &
sensible-browser client.html?host=http%3A%2F%2Flocalhost%3A8080
