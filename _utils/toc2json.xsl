<?xml version="1.0" encoding="UTF-8"?>
<!--
  DITA HTML TOC to JSON Transformer
  author: rcrews@hortonworks.com
  date: 2018-01-16
-->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="text" encoding="UTF-8"/>
	
  <!--
    Used the ugly local-name business so the stylesheet would work with
    both HTML and XHTML. The provided sample output has
      <meta name="DC.Format" content="XHTML"/>
    but the output is actually HTML, with start-tag-only meta elements
    and no namespace.

   TODO:
     Sample output starts with  <!DOCTYPE html
                                   SYSTEM "about:legacy-compat">

     xsltproc writes a warning about not being able to load the DTD from
     the provided SYSTEM identifier. Best to remove the SYSTEM
     declaration. Till then, the warning can be hidden by adding the
     novalid flag to the xsltproc command.
  -->

  <xsl:template match="*[local-name() = 'ul']">
    <xsl:text>[</xsl:text>
    <xsl:apply-templates select="*[local-name() = 'li'][@class='topicref']"/>
    <xsl:text>]</xsl:text>
  </xsl:template>

  <xsl:template match="*[local-name() = 'li'][@class='topicref']">
    <xsl:text>{</xsl:text>
    <xsl:text>"text":"</xsl:text>
    <xsl:value-of select="*[local-name() = 'a']"/>
    <xsl:text>"</xsl:text>
    <xsl:text>,</xsl:text>
    <xsl:text>"href":"</xsl:text>
    <xsl:value-of select="*[local-name() = 'a']/@href"/>
    <xsl:text>"</xsl:text>
    <xsl:if test="*[local-name() = 'ul']
      /*[local-name() = 'li'][@class='topicref']">
      <xsl:text>,</xsl:text>
      <xsl:text>"sub":</xsl:text>
      <xsl:apply-templates select="*[local-name() = 'ul']"/>
    </xsl:if>
    <xsl:text>}</xsl:text>
    <xsl:if test="following-sibling::*[local-name() = 'li'][@class='topicref']">
      <xsl:text>,</xsl:text>
    </xsl:if>
  </xsl:template>

  <xsl:template match="/">
    <xsl:apply-templates select="/*[local-name() = 'html']
      /*[local-name() = 'body']
      /*[local-name() = 'nav']
      /*[local-name() = 'ul'][@class='map']"/>
    <xsl:text>&#x0a;</xsl:text> <!-- End the file with a line feed -->
  </xsl:template>

</xsl:stylesheet>
