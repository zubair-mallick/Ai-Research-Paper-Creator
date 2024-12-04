import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const App = () => {
  const [paperDetails, setPaperDetails] = useState({
    title: 'The Impact of AI on Modern Education',
    authors: 'John Doe, Jane Smith',
    department: 'Department of Computer Science, XYZ University',
    emails: ['john.doe@example.com', 'jane.smith@example.com'],
    sections: [
      {
        title: 'Abstract',
        content: `This paper explores the influence of artificial intelligence (AI) on modern education. 
                  We investigate how AI-based tools can enhance both teaching and learning experiences. 
                  The study draws on recent advancements in machine learning, natural language processing, and data analytics. 
                  Preliminary results show that AI integration improves student engagement and outcomes.`,
        points: [
          'AI enhances teaching and learning experiences.',
          'Recent advancements in AI technologies are transforming education.',
          'Improved student engagement and outcomes with AI-based tools.',
        ],
      },
      {
        title: 'Introduction',
        content: `The role of AI in education has grown significantly over the past decade. 
                  As technology becomes increasingly integrated into daily life, its application in educational environments 
                  offers opportunities to customize learning experiences, automate administrative tasks, and enhance data-driven insights for educators. 
                  This research examines the potential of AI to revolutionize educational systems worldwide.`,
        points: [
          'AI has been transforming the education landscape.',
          'Technology integration offers personalized learning experiences.',
          'Opportunities to automate administrative tasks with AI.',
        ],
      },
      {
        title: 'Methodology',
        content: `Our research methodology incorporates both qualitative and quantitative approaches. 
                  We conducted surveys with educators and students across various institutions, alongside the deployment of AI-based systems in live classrooms 
                  to measure engagement, interaction, and performance.`,
        points: [
          'Combination of qualitative and quantitative research methods.',
          'Surveys with educators and students.',
          'Deployment of AI-based systems in live classrooms.',
        ],
      },
      {
        title: 'Results and Discussion',
        content: `The integration of AI-based systems demonstrated significant improvements in student engagement, particularly in courses utilizing personalized learning systems. 
                  Additionally, educators reported that AI tools reduced the time spent on administrative tasks, allowing for more focus on instruction and student interaction.`,
        points: [
          'Significant improvement in student engagement with personalized learning systems.',
          'AI tools reduce the time spent on administrative tasks for educators.',
        ],
      },
      {
        title: 'Conclusion',
        content: `In conclusion, AI technology has the potential to reshape educational environments by personalizing learning experiences, improving engagement, 
                  and providing valuable insights for educators. Future research should focus on addressing challenges such as ethical considerations 
                  and ensuring equal access to AI tools for all students.`,
        points: [
          'AI can personalize learning and improve student engagement.',
          'Future research should address ethical concerns and equal access.',
        ],
      },
    ],
    references: [
      {
        author: 'Smith, J.',
        year: 2023,
        title: 'Artificial Intelligence in Modern Classrooms',
        journal: 'Journal of Educational Technology',
        volume: 15,
        issue: 3,
        pages: '123-134',
        doi: 'https://doi.org/10.1234/jet.v15i3.4567',
      },
      {
        author: 'Doe, J.',
        year: 2022,
        title: 'The Role of AI in Personalized Learning',
        journal: 'International Review of Educational Research',
        volume: 28,
        issue: 2,
        pages: '45-67',
        doi: 'https://doi.org/10.5678/irer.2022.45',
      },
    ],
  });

  // Function to generate and download the PDF
  const downloadPDF = () => {
    const input = document.getElementById('pdf-container'); // Get the content to print

    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF();

      // Set margins (20mm from all sides)
      const margin = 20;
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210 - 2 * margin; // A4 width in mm minus margins
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Adjust height based on aspect ratio

      // Add the image (content) to PDF with margins
      pdf.addImage(imgData, 'PNG', margin, margin, imgWidth, imgHeight);

      // Save the PDF
      pdf.save('research-paper.pdf');
    });
  };

  useEffect(() => {
    // Trigger download when the component is mounted (this can be adjusted)
    downloadPDF();
  }, []); // Empty dependency array means it runs once when the component is mounted

  return (
    <div
      id="pdf-container"
      className="research-paper-container"
      style={{
        width: '297mm',
        height: '420mm',
        margin: '20mm',
        fontFamily: 'Georgia, serif',
        fontSize: '16px',
        textAlign: 'justify',
      }}
    >
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Research Paper Example</title>

      {/* Title Section */}
      <div className="text-center mb-10" style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 className="text-5xl font-bold">{paperDetails.title}</h1>
        <p className="text-lg text-gray-600 mt-2">{paperDetails.authors}</p>
        <p className="text-md text-gray-500">{paperDetails.department}</p>
        <p className="text-md text-gray-500">{paperDetails.emails.join(', ')}</p>
      </div>

      {/* Sections */}
      {paperDetails.sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <p className="text-justify text-gray-700 leading-relaxed">{section.content}</p>

          {/* Dynamic Points (if any) */}
          {section.points && section.points.length > 0 && (
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
              {section.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {/* References */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">References</h2>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed">
          {paperDetails.references.map((reference, index) => (
            <li key={index}>
              {reference.author} ({reference.year}). <i>{reference.title}</i> {reference.journal}, {reference.volume}({reference.issue}), {reference.pages}.{' '}
              <a href={reference.doi} className="text-blue-600" target="_blank" rel="noopener noreferrer">
                {reference.doi}
              </a>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default App;
