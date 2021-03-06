<?xml version="1.0" encoding="UTF-8"?>
<!--
Copyright (C) 2016 Stephan Kreutzer

This file is part of wordpress_rss_to_html_1, a submodule of the
digital_publishing_workflow_tools package.

wordpress_rss_to_html_1 is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License version 3 or any later version,
as published by the Free Software Foundation.

wordpress_rss_to_html_1 is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License 3 for more details.

You should have received a copy of the GNU Affero General Public License 3
along with wordpress_rss_to_html_1. If not, see <http://www.gnu.org/licenses/>.
-->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" exclude-result-prefixes="dc content">
  <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="yes" doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN" doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"/>

  <xsl:template match="/rss/channel">
    <xsl:comment> This file was generated by wordpress_rss_to_html_1.xsl, which is free software licensed under the GNU Affero General Public License 3 or any later version (see http://github.com/publishing-systems/digital_publishing_workflow_tools/ and http://www.publishing-systems.org)). </xsl:comment><xsl:text>&#xA;</xsl:text>
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
      <head>
        <meta http-equiv="content-type" content="application/xhtml+xml; charset=UTF-8"/>
        <title><xsl:value-of select="./title"/></title>
      </head>
      <body>
        <xsl:apply-templates/>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="/rss/channel/item">
    <div>
      <h1><xsl:value-of select="./title"/></h1>
      <div class="metainfo">
        <xsl:text>On </xsl:text><xsl:value-of select="./pubDate"/><xsl:text> by </xsl:text><xsl:value-of select="./dc:creator/text()"/><xsl:text>.</xsl:text>
      </div>
      <div class="page">
        <xsl:apply-templates/>
      </div>
    </div>
  </xsl:template>

  <xsl:template match="/rss/channel/item/content:encoded">
    <xsl:value-of select="./text()" disable-output-escaping="yes"/>
  </xsl:template>

  <xsl:template match="text()|@*"/>

</xsl:stylesheet>
