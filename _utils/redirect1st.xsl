<?xml version="1.0" encoding="UTF-8"?>
<!--
  DITA HTML Redirect to First Topic
  author: rcrews@hortonworks.com
  date: 2018-01-16
-->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" encoding="UTF-8"/>

  <xsl:template match="head">
    <xsl:element name="head">
      <xsl:element name="meta">
        <xsl:attribute name="http-equiv">
          <xsl:text>refresh</xsl:text>
        </xsl:attribute>
        <xsl:attribute name="content">
          <xsl:text>0;url=</xsl:text>
          <xsl:value-of select="/html/body/nav/ul/li[1]/a/@href"/>
        </xsl:attribute>
      </xsl:element>
      <xsl:for-each select="*|@*|processing-instruction()|comment()">
        <xsl:copy>
          <xsl:apply-templates select="@*"/>
          <xsl:apply-templates/>
        </xsl:copy>
        <!-- <xsl:text>&#x0a;</xsl:text> -->
      </xsl:for-each>
    </xsl:element>
  </xsl:template>

  <xsl:template match="*|@*|processing-instruction()|comment()">
    <xsl:copy>
      <xsl:apply-templates select="@*"/>
      <xsl:apply-templates/>
    </xsl:copy>
  </xsl:template>

</xsl:stylesheet>
