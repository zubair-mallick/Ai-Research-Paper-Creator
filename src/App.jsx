import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';

const App = () => {
  const [paperDetails, setPaperDetails] = useState(
    {
      "title": "The Transformative Role of Artificial Intelligence in Modern Education: In-Depth Analysis and Future Prospects",
      "authors": "John Doe, Jane Smith, Robert Brown, Emily White, Michael Green, Alice Turner, Richard Davis",
      "department": "Department of Computer Science, XYZ University",
      "emails": [
        "john.doe@example.com",
        
        "alice.turner@example.com",
        "richard.davis@example.com"
      ],
      "sections": [
        {
          "title": "Abstract",
          "content": "The rise of Artificial Intelligence (AI) has led to revolutionary changes across industries, and education is no exception. This paper delves deep into the integration of AI into modern education, providing an extensive analysis of its impact on teaching, learning, administration, and policy. Drawing on over 200 case studies from diverse educational institutions, including universities, K-12 schools, and vocational training centers, this research explores AI-powered tools such as intelligent tutoring systems (ITS), predictive analytics, and automated grading systems. We employ a mixed-methods approach, collecting both qualitative and quantitative data, to assess how AI is reshaping classroom dynamics, student engagement, academic performance, and administrative functions. Additionally, the paper addresses the potential of AI to bridge the educational gap, the ethical issues surrounding its implementation, and its implications for future educational paradigms. The findings point to a significant positive impact of AI in terms of personalized learning, teacher productivity, and student success, while also emphasizing the need for responsible, equitable, and ethical AI integration.",
          "points": [
            "AI has the potential to revolutionize education by improving teaching, learning, and administrative functions.",
            "The paper analyzes the impact of AI on student engagement, academic performance, and teacher productivity.",
            "Ethical issues, data privacy concerns, and equitable access to AI in education are discussed."
          ]
        },
        {
          "title": "Introduction",
          "content": "Artificial Intelligence, a field of computer science that simulates human intelligence, has rapidly transformed multiple industries, and education stands out as one of its most promising areas of impact. Over the past two decades, AI has evolved from a theoretical concept into a set of practical technologies that are beginning to reshape how students learn, how educators teach, and how educational institutions operate. AI systems are designed to mimic human cognition and learning processes, such as recognizing patterns, making predictions, and adapting responses based on previous interactions.\n\nIn education, AI's potential has expanded beyond simple automation of tasks such as grading or scheduling. More recently, AI systems are employed to provide personalized learning experiences, tailor educational content to individual needs, and even predict student success. Moreover, AI tools assist educators in real-time decision-making, helping to improve classroom dynamics and offering data-driven insights into student performance.\n\nDespite the growing potential of AI, challenges remain, including issues related to equity, data privacy, and the potential loss of human interaction in learning environments. These challenges are addressed throughout this paper as we assess the opportunities and limitations of AI in modern education.",
          "points": [
            "AI has evolved from a theoretical concept to practical tools that reshape education.",
            "AI is used to personalize learning, tailor content, and improve decision-making in classrooms.",
            "Challenges in equity, data privacy, and human interaction are explored."
          ]
        },
        {
          "title": "Literature Review",
          "content": "AI’s journey in education began with the development of expert systems in the 1960s and 1970s. These systems were designed to replicate the decision-making abilities of human experts in various fields, including education. The introduction of the first intelligent tutoring systems (ITS), such as SCHOLAR (1970) and the more advanced ITS in the 1980s, marked a milestone in the evolution of AI-powered education technologies.\n\nAI technologies currently employed in education include natural language processing (NLP), machine learning (ML), and data analytics. NLP allows machines to understand and generate human language, facilitating AI-powered chatbots and virtual teaching assistants. ML algorithms analyze vast datasets to identify patterns and make predictions, while data analytics tools are used to assess student performance and guide instructional practices.\n\nIn K-12 schools, AI is often used to create personalized learning environments for students. Tools like Duolingo, an AI-powered language-learning app, provide individualized instruction based on user interactions, adjusting lesson difficulty and offering feedback accordingly. Similarly, AI-powered tutoring systems are helping students who struggle with certain subjects, providing targeted exercises and explanations.",
          "points": [
            "AI in education began with expert systems and intelligent tutoring systems.",
            "AI technologies used in education include NLP, ML, and data analytics.",
            "AI tools like Duolingo and AI-powered tutoring systems provide personalized learning."
          ]
        },
        {
          "title": "Methodology",
          "content": "This study employed a mixed-methods research approach combining both qualitative and quantitative data collection techniques. The methodology was designed to capture the complexity of AI’s impact on educational systems across multiple levels, from administrative tasks to student learning outcomes.\n\nQuantitative Research: We collected performance data from over 1000 students at five major universities and ten high schools. This data included grades, test scores, attendance records, and participation in AI-powered learning platforms.\n\nQualitative Research: Semi-structured interviews were conducted with 100 educators, administrators, and students across various educational settings. These interviews were aimed at understanding the perceptions of stakeholders regarding the use of AI in classrooms and the broader educational system.\n\nCase Studies: We performed an in-depth analysis of three schools that had implemented AI-powered systems for student tracking, personalized learning, and automated grading. These case studies helped us examine how AI was integrated into everyday educational practices and its effectiveness in different contexts.\n\nEthical Considerations: In all stages of the research, we ensured adherence to ethical guidelines. Informed consent was obtained from all participants, and measures were taken to protect the privacy and confidentiality of personal data.",
          "points": [
            "Mixed-methods research approach combining qualitative and quantitative data.",
            "Case studies and interviews with educators and students to assess AI impact.",
            "Ethical considerations included informed consent and privacy protection."
          ]
        },
        {
          "title": "Results and Discussion",
          "content": "The implementation of AI tools in classrooms resulted in notable improvements in student performance. On average, students who utilized AI-powered platforms showed a 20% increase in exam scores compared to those who did not. AI tools allowed for more frequent assessments, providing students with immediate feedback and tailored learning paths.\n\nIn addition to improving academic performance, AI systems also led to a 30% increase in overall student engagement. Personalized learning algorithms kept students interested and motivated by providing challenges suited to their learning pace.\n\nEducators reported a 40% reduction in time spent on administrative tasks due to AI-powered grading and feedback systems. This allowed teachers to focus more on instruction and student support. The AI systems provided detailed analytics on student progress, enabling teachers to make data-driven decisions regarding lesson planning and classroom management.\n\nWhile AI offers immense potential, its implementation raises significant ethical concerns. Privacy issues are paramount, as the collection and use of vast amounts of student data may expose sensitive information. The potential for algorithmic bias also exists, with AI systems unintentionally reinforcing existing stereotypes or discrimination based on historical data. There is also a risk that AI could exacerbate the digital divide, leaving underserved communities without access to these tools.",
          "points": [
            "AI tools resulted in a 20% increase in student exam scores and a 30% increase in engagement.",
            "AI reduced time spent on administrative tasks, freeing up time for teaching.",
            "Ethical concerns include privacy issues, algorithmic bias, and the digital divide."
          ]
        },
        {
          "title": "Conclusion",
          "content": "AI’s role in education is only beginning to be realized, with vast potential for further innovation. As AI technologies continue to evolve, they will likely become more integrated into the daily operations of schools and universities. However, the future of AI in education depends on overcoming several challenges, including data privacy concerns, algorithmic bias, and ensuring equitable access to technology.\n\nFurther research should focus on long-term outcomes, examining how AI impacts educational trajectories over several years. Additionally, addressing the ethical concerns surrounding AI is essential to ensure that these technologies are used responsibly and equitably.\n\nRecommendations: Implement AI in a manner that complements human instruction, rather than replacing teachers. Focus on improving data privacy policies to ensure students' personal information is protected. Promote policies that ensure equitable access to AI-powered education tools in underprivileged schools and communities. Continued monitoring and evaluation of AI tools to assess their long-term effectiveness and potential unintended consequences.",
          "points": [
            "AI will continue to evolve and become more integrated into education systems.",
            "Challenges include data privacy, algorithmic bias, and equitable access.",
            "Future research should focus on long-term outcomes and ethical considerations."
          ]
        }
      ],
      "references": [
        {
          "author": "Smith, J.",
          "year": 2023,
          "title": "Artificial Intelligence in Modern Classrooms",
          "journal": "Journal of Educational Technology",
          "volume": 15,
          "issue": 3,
          "pages": "123-134",
          "doi": "https://doi.org/10.1234/jet.v15i3.4567"
        },
        {
          "author": "Doe, J.",
          "year": 2022,
          "title": "The Role of AI in Personalized Learning",
          "journal": "International Review of Educational Research",
          "volume": 28,
          "issue": 2,
          "pages": "45-67",
          "doi": "https://doi.org/10.5678/irer.2022.45"
        },
        {
          "author": "Brown, R.",
          "year": 2021,
          "title": "AI and Teacher Professional Development: A New Paradigm",
          "journal": "Educational Research Review",
          "volume": 30,
          "issue": 4,
          "pages": "112-124",
          "doi": "https://doi.org/10.9876/err.v30i4.7891"
        },
        {
          "author": "White, E.",
          "year": 2020,
          "title": "Ethical Considerations in the Use of AI in Education",
          "journal": "Ethics in Education Journal",
          "volume": 19,
          "issue": 1,
          "pages": "34-46",
          "doi": "https://doi.org/10.3456/eej.v19i1.8923"
        },
        {
          "author": "Green, M.",
          "year": 2022,
          "title": "AI for K-12: Revolutionizing Education",
          "journal": "Journal of Educational Computing Research",
          "volume": 14,
          "issue": 3,
          "pages": "78-92",
          "doi": "https://doi.org/10.6543/jec.v14i3.6234"
        },
        {
          "author": "Lewis, A.",
          "year": 2021,
          "title": "The Future of AI in Education: Global Perspectives",
          "journal": "Global Education Studies",
          "volume": 12,
          "issue": 2,
          "pages": "101-118",
          "doi": "https://doi.org/10.2314/ges.v12i2.7658"
        }
      ]
    }
    );

    const downloadPDF = () => {
      const doc = new jsPDF('p', 'mm', 'a4'); // Create a new PDF document (portrait, A4 size)
      const margin = 15; // Equal margins for left, right, top, and bottom
      const pageWidth = doc.internal.pageSize.width;
      const pageHeight = doc.internal.pageSize.height;
      let yPosition = margin;
      let pageCount = 1;
    
      // Function to add the header (title and page number)
    
    // Function to add the header (title and page number)
const addHeader = (currentPage) => {
  doc.setFont('times', 'normal');
  doc.setFontSize(10);

  // Title
  const headerText = `${paperDetails.title} - Page ${currentPage}`;
  
  const headerLines = doc.splitTextToSize(headerText, pageWidth - 2 * margin);

  // Add header text to the top center of the page
  const headerWidth = doc.getStringUnitWidth(headerText) * doc.getFontSize() / doc.internal.scaleFactor;
  const headerX = (pageWidth - headerWidth) / 2;
  doc.text(headerLines, headerX, margin - 10); // 5mm from the top

  // Add a line after the header
  const lineYPosition = margin-8 ; // Line position right below the header
  doc.setLineWidth(0.3);
  doc.setDrawColor(0, 0, 0); // Set line color to black (RGB for black)

  doc.line(margin, lineYPosition, pageWidth - margin, lineYPosition); // Horizontal line
};

      // Title
     // Title
doc.setFont('times', 'bold');
doc.setFontSize(20);
const titleLines = doc.splitTextToSize(paperDetails.title, pageWidth - 2 * margin);
const titleHeight = titleLines.length * 8; // Calculate title height
titleLines.forEach((line, index) => {
  const titleWidth = doc.getTextWidth(line);
  const titleX = (pageWidth - titleWidth) / 2;
  doc.text(line, titleX, yPosition + index * 8); // Center align each line
});
yPosition += titleHeight + 5; // Adjust yPosition

// Line after title
doc.setLineWidth(0.5);
doc.line(margin, yPosition, pageWidth - margin, yPosition); // Horizontal line
yPosition += 5; // Space after line

// Authors and Contact
doc.setFont('times', 'normal');
doc.setFontSize(10);

const centerText = (text) => {
  const textWidth = doc.getTextWidth(text);
  const textX = (pageWidth - textWidth) / 2;
  return textX;
};

// Authors
const authorText = `Authors: ${paperDetails.authors}`;
const authorX = centerText(authorText);
doc.text(authorText, authorX, yPosition);
yPosition += 5; // Line spacing

// Department
const departmentText = `Department: ${paperDetails.department}`;
const departmentX = centerText(departmentText);
doc.text(departmentText, departmentX, yPosition);
yPosition += 5; // Line spacing

// Emails
const emailText = `Emails: ${paperDetails.emails.join(', ')}`;
const emailX = centerText(emailText);
doc.text(emailText, emailX, yPosition);
yPosition += 10; // Space after email

      // Sections
      paperDetails.sections.forEach((section) => {
        if (yPosition + 10 > pageHeight - margin) {
          doc.addPage();
          pageCount++; // Increment page count when a new page is added
          yPosition = margin;
        }
        
        // Add header for each page
        addHeader(pageCount);
        
        // Section Title - Centered
        doc.setFont('times', 'bold');
        doc.setFontSize(14);
        const sectionTitleLines = doc.splitTextToSize(section.title, pageWidth - 2 * margin);
        const sectionTitleWidth = doc.getStringUnitWidth(section.title) * doc.getFontSize() / doc.internal.scaleFactor;
        const sectionTitleX = (pageWidth - sectionTitleWidth) / 2;  // Centering the section title
        doc.text(sectionTitleLines, sectionTitleX, yPosition);
        yPosition += sectionTitleLines.length * 8 + 3;
    
        // Line after Section Title
        yPosition += 3; // Space after line
    
        // Section Content
        doc.setFont('times', 'normal');
        doc.setFontSize(12);
        const contentLines = doc.splitTextToSize(section.content, pageWidth - 2 * margin);
        doc.text(contentLines, margin, yPosition);
        yPosition += contentLines.length * 5 + 3;
    
        // Points (Bullet points)
        if (section.points && section.points.length > 0) {
          section.points.forEach((point) => {
            if (yPosition + 10 > pageHeight - margin) {
              doc.addPage();
              pageCount++; // Increment page count when a new page is added
              yPosition = margin;
            }
            doc.setFont('times', 'normal');
            const pointLines = doc.splitTextToSize(`• ${point}`, pageWidth - 2 * margin);
            doc.text(pointLines, margin + 10, yPosition);
            yPosition += pointLines.length * 6;
          });
        }
    
        // Line after each Section
        doc.setLineWidth(0.2); // Set the line thickness to a thinner value
        doc.setDrawColor(200, 200, 200); // Set the line color to light gray (RGB values)
        doc.line(margin, yPosition, pageWidth - margin, yPosition); // Horizontal line
        yPosition += 10; // Increased space after the line
      });
    
      // References
      if (paperDetails.references.length > 0) {
        if (yPosition + 10 > pageHeight - margin) {
          doc.addPage();
          pageCount++; // Increment page count when a new page is added
          yPosition = margin;
        }
    
        // Add header for References page
        addHeader(pageCount);
    
        doc.setFont('times', 'bold');
        doc.setFontSize(14);
        doc.text("References", margin, yPosition);
        yPosition += 5;
    
        // Line after References Title
        doc.line(margin, yPosition, pageWidth - margin, yPosition); // Horizontal line
        yPosition += 5; // Space after line
    
        paperDetails.references.forEach((reference) => {
          if (yPosition + 10 > pageHeight - margin) {
            doc.addPage();
            pageCount++; // Increment page count when a new page is added
            yPosition = margin;
          }
    
          // Reference Text and Link combined
          doc.setFont('times', 'normal');
          doc.setFontSize(12);
          const referenceText = `${reference.author} (${reference.year}). ${reference.title}. ${reference.journal}, ${reference.volume}(${reference.issue}), ${reference.pages}.`;
          const referenceLink = ` DOI: ${reference.doi}`;
    
          // Combine reference text and DOI
          const fullReferenceText = referenceText + referenceLink;
    
          // Split the combined text and add it to the document
          const referenceLines = doc.splitTextToSize(fullReferenceText, pageWidth - 2 * margin);
          doc.text(referenceLines, margin, yPosition);
    
          // Get the position for the DOI link
          const referenceWidth = doc.getStringUnitWidth(referenceText) * doc.getFontSize() / doc.internal.scaleFactor;
          const linkXPosition = margin + referenceWidth + 5; // 5px gap between text and link
    
          // Set link color to blue for the DOI link only
          doc.setTextColor(0, 0, 255); // RGB for blue
          doc.text(reference.doi, linkXPosition, yPosition);
    
          // Reset text color back to black
          doc.setTextColor(0, 0, 0); // Black
    
          yPosition += referenceLines.length * 6 + 3; // Space after reference
        });
    
        // Line after References section
        doc.setLineWidth(0.5);
        doc.line(margin, yPosition, pageWidth - margin, yPosition); // Horizontal line
        yPosition += 5; // Space after line
      }
    
      // Save the PDF
      doc.save('research-paper.pdf');
    };
    
    
  
  useEffect(() => {
    // Trigger download when the component is mounted (this can be adjusted)
    downloadPDF();
  }, []);

  return (
    <div>
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
};

export default App;
