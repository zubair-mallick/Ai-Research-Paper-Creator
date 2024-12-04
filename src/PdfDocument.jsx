import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 36, // 1-inch margin
    fontSize: 12,
    lineHeight: 1.5,
  },
  runningHead: {
    position: 'absolute',
    top: 12,
    left: 36,
    right: 36,
    textAlign: 'left',
    fontSize: 10,
    fontStyle: 'italic',
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  authors: {
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 12,
  },
  affiliation: {
    textAlign: 'center',
    fontSize: 10,
    fontStyle: 'italic',
    marginBottom: 12,
  },
  section: {
    marginBottom: 24,
  },
  subheading: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 6,
  },
  leftColumn: {
    width: '45%',
    textAlign: 'justify',
    paddingRight: 10,
    display: 'inline-block',
  },
  rightColumn: {
    width: '45%',
    textAlign: 'justify',
    display: 'inline-block',
  },
  indent: {
    textIndent: 12, // ½ inch indentation for new paragraphs
  },
  apaCitation: {
    marginTop: 24,
    fontStyle: 'italic',
  },
});

const PdfDocument = ({ elements }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Running Head */}
      <Text style={styles.runningHead}>Running head: ANONYMITY IN SOCIAL MEDIA</Text>

      {/* Title Section */}
      <View style={styles.section}>
        <Text style={styles.title}>
          {elements?.find(el => el.id === 'title')?.content || 'Anonymity in Social Media: Effects of Content Controversiality and Social Endorsement on Sharing Behavior'}
        </Text>
        <Text style={styles.authors}>
          {elements?.find(el => el.id === 'authors')?.content || 'Kaiping Zhang and René F. Kizilcec'}
        </Text>
        <Text style={styles.affiliation}>
          {elements?.find(el => el.id === 'affiliation')?.content || 'Stanford University, Department of Communication'}
        </Text>
      </View>

      {/* Abstract */}
      <View style={styles.section}>
        <Text style={styles.subheading}>Abstract</Text>
        <Text style={styles.indent}>
          {elements?.find(el => el.id === 'abstract')?.content || 'This study investigates the effect of controversiality and social endorsement of media content on sharing behavior when choosing between sharing publicly or anonymously.'}
        </Text>
      </View>

      {/* Two-column layout for the body content */}
      <View style={styles.section}>
        <View style={styles.leftColumn}>
          <Text style={styles.subheading}>Introduction</Text>
          <Text style={styles.indent}>
            {elements?.find(el => el.id === 'introduction')?.content || 'The introduction provides an overview of the importance of anonymity in online behavior.'}
          </Text>

          <Text style={styles.subheading}>Methods</Text>
          <Text style={styles.indent}>
            {elements?.find(el => el.id === 'methods')?.content || 'The methods section describes the experimental design and how data was collected.'}
          </Text>
        </View>

        <View style={styles.rightColumn}>
          <Text style={styles.subheading}>Results</Text>
          <Text style={styles.indent}>
            {elements?.find(el => el.id === 'results')?.content || 'Results show that controversial content is 3.2 times more likely to be shared anonymously.'}
          </Text>

          <Text style={styles.subheading}>Discussion</Text>
          <Text style={styles.indent}>
            {elements?.find(el => el.id === 'discussion')?.content || 'The discussion highlights the implications of anonymous sharing for online behavior.'}
          </Text>
        </View>
      </View>

      {/* Conclusion */}
      <View style={styles.section}>
        <Text style={styles.subheading}>Conclusion</Text>
        <Text style={styles.indent}>
          {elements?.find(el => el.id === 'conclusion')?.content || 'In conclusion, anonymity plays a significant role in shaping online behavior, especially for controversial content.'}
        </Text>
      </View>

      {/* References */}
      <View style={styles.section}>
        <Text style={styles.subheading}>References</Text>
        <Text style={styles.apaCitation}>
          {elements?.find(el => el.id === 'references')?.content || 'Zhang, K., & Kizilcec, R. F. (2014). Anonymity in social media: Effects of content controversiality and social endorsement on sharing behavior. In Proceedings of ICWSM.'}
        </Text>
      </View>
    </Page>
  </Document>
);

export default PdfDocument;
