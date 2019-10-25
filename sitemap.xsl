<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns="http://www.w3.org/1999/xhtml"
  exclude-result-prefixes="sitemap">

  <xsl:output method="xml" encoding="UTF-8"
    doctype-public="-//W3C//DTD XHTML 1.1//EN"
    doctype-system="http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"/>

  <xsl:template match="/sitemap:sitemapindex">
    <html xml:lang="en">
      <head>
        <title>Sitemap Index for docs.cloudera.com</title>
      </head>
      <body>
        <h1>Sitemap Index for docs.cloudera.com</h1>
        <p>This site contains the following sitemap files:</p>
        <ul>
          <xsl:apply-templates select="sitemap:sitemap/sitemap:loc"/>
        </ul>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="/sitemap:urlset">
    <html xml:lang="en">
      <head>
        <title>Sub-sitemap for docs.cloudera.com</title>
      </head>
      <body>
        <h1>Sub-sitemap for docs.cloudera.com</h1>
        <p>This site area contains the following files:</p>
        <ul>
          <xsl:apply-templates select="sitemap:url/sitemap:loc"/>
        </ul>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="*/sitemap:loc">
    <li>
      <a>
        <xsl:attribute name="href">
          <xsl:value-of select="."/>
        </xsl:attribute>
        <xsl:value-of select="."/>
      </a>
    </li>
  </xsl:template>

</xsl:stylesheet>
