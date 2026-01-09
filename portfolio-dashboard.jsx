import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Activity, Briefcase, Code, Database, Heart, TrendingUp, Users, Award, FileText, Github, Linkedin, Mail } from 'lucide-react';

// Tech Innovation Theme Colors
const theme = {
  primary: '#0066ff',
  accent: '#00ffff',
  dark: '#1e1e1e',
  darkAlt: '#2a2a2a',
  white: '#ffffff',
  gray: '#808080'
};

// Sample data for visualizations
const bellaeatData = [
  { day: 'Mon', steps: 8547, calories: 2234, activeMinutes: 45 },
  { day: 'Tue', steps: 10234, calories: 2456, activeMinutes: 62 },
  { day: 'Wed', steps: 7823, calories: 2123, activeMinutes: 38 },
  { day: 'Thu', steps: 9456, calories: 2345, activeMinutes: 55 },
  { day: 'Fri', steps: 11234, calories: 2567, activeMinutes: 71 },
  { day: 'Sat', steps: 13456, calories: 2789, activeMinutes: 89 },
  { day: 'Sun', steps: 12345, calories: 2654, activeMinutes: 78 }
];

const evMarketData = [
  { year: '2019', marketShare: 2.3 },
  { year: '2020', marketShare: 3.8 },
  { year: '2021', marketShare: 5.2 },
  { year: '2022', marketShare: 7.6 },
  { year: '2023', marketShare: 10.4 },
  { year: '2024', marketShare: 14.2 }
];

const skillsData = [
  { name: 'R Programming', value: 85 },
  { name: 'SQL', value: 80 },
  { name: 'Tableau', value: 75 },
  { name: 'Microsoft Excel', value: 90 },
  { name: 'Data Cleaning & Wrangling', value: 88 },
  { name: 'Data Visualization', value: 82 },
  { name: 'Statistical Analysis', value: 78 }
];

const technicalKeywords = [
  'Data Analysis', 'Business Intelligence', 'SQL Queries', 'Data Mining',
  'Dashboard Creation', 'Reporting', 'KPI Tracking', 'Trend Analysis',
  'Google Analytics', 'Data Quality', 'ETL', 'Database Management',
  'RStudio', 'ggplot2', 'dplyr', 'tidyverse', 'Power BI',
  'Data-Driven Decision Making', 'Predictive Analytics', 'Root Cause Analysis',
  'A/B Testing', 'Statistical Modeling', 'Data Storytelling', 'Stakeholder Communication'
];

const industryKeywords = [
  'Healthcare Analytics', 'Clinical Data', 'Patient Outcomes', 'EHR Systems',
  'Epic Systems', 'Population Health', 'Healthcare Informatics', 'HIPAA Compliance',
  'Quality Improvement', 'Care Coordination', 'Value-Based Care', 'Health Metrics',
  'Cardiac Rehabilitation', 'Exercise Physiology', 'Wellness Programs', 'Preventive Care'
];

const softSkills = [
  'Problem Solving', 'Critical Thinking', 'Attention to Detail', 'Communication',
  'Team Collaboration', 'Time Management', 'Adaptability', 'Client Relations',
  'Project Management', 'Documentation', 'Training & Mentoring', 'Cross-functional Collaboration'
];

const projects = [
  {
    id: 1,
    title: 'Bellabeat Smart Device Analytics',
    category: 'Healthcare Analytics | Business Intelligence',
    description: 'Performed comprehensive data analysis on smart device usage data using R programming and SQL to extract actionable insights. Utilized statistical analysis, data visualization, and trend analysis to identify user behavior patterns and deliver data-driven marketing recommendations. Demonstrated proficiency in data cleaning, ETL processes, and dashboard creation.',
    tools: ['R Programming', 'RStudio', 'Tableau', 'Microsoft Excel', 'SQL', 'Data Visualization', 'Statistical Analysis'],
    outcomes: [
      'Analyzed 10,000+ data points across 33 users using R (tidyverse, ggplot2) to identify peak activity patterns and behavioral trends',
      'Conducted correlation analysis revealing 78% relationship between daily step count and sleep quality metrics',
      'Created interactive Tableau dashboards with KPI tracking for stakeholder presentations, resulting in 5 data-driven marketing strategies',
      'Performed data cleaning and validation to ensure 99% data quality and accuracy in reporting'
    ],
    metrics: { users: '33', dataPoints: '10,000+', insights: '5' }
  },
  {
    id: 2,
    title: 'U.S. Electric Vehicle Market Analysis',
    category: 'Market Research | Predictive Analytics',
    description: 'Executed end-to-end data analysis project examining EV adoption trends using SQL for database queries, R for statistical modeling, and Tableau for business intelligence reporting. Applied trend analysis, forecasting techniques, and geospatial analysis to identify market opportunities and growth patterns across all 50 states.',
    tools: ['R Programming', 'SQL', 'Tableau', 'Data Mining', 'Predictive Analytics', 'Excel', 'Business Intelligence'],
    outcomes: [
      'Analyzed 5 years of market data using SQL queries and statistical modeling to track 142% market growth trajectory',
      'Identified top 10 high-growth metropolitan areas through geospatial analysis and data mining techniques',
      'Developed interactive BI dashboard with real-time KPI tracking and automated reporting capabilities',
      'Presented data-driven insights to stakeholders with clear data storytelling and visualization best practices'
    ],
    metrics: { growth: '142%', regions: '50', years: '5' }
  },
  {
    id: 3,
    title: 'Healthcare Data Analysis: Cardiac Rehabilitation Outcomes',
    category: 'Healthcare Analytics | Clinical Data Analysis',
    description: 'Leveraged clinical expertise and quantitative analysis skills to evaluate cardiac rehabilitation program effectiveness. Applied healthcare informatics principles, quality improvement methodologies, and patient outcome metrics to drive evidence-based recommendations. Demonstrated understanding of EHR systems, HIPAA compliance, and healthcare data standards.',
    tools: ['Microsoft Excel', 'Statistical Analysis', 'Healthcare Metrics', 'Data Analysis', 'Quality Improvement', 'Clinical Documentation'],
    outcomes: [
      'Integrated clinical domain knowledge with data analytics methodologies to evaluate patient engagement and adherence patterns',
      'Conducted root cause analysis on program completion rates using statistical methods and trend identification',
      'Developed 3 evidence-based intervention strategies to improve patient outcomes and program effectiveness',
      'Demonstrated proficiency in healthcare data handling, HIPAA-compliant documentation, and clinical quality metrics'
    ],
    metrics: { experience: '2+ years', outcomes: '3', domain: 'Clinical' }
  }
];

export default function HealthcareAnalyticsPortfolio() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedProject, setSelectedProject] = useState(null);

  const OverviewSection = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg p-8 text-white">
        <h1 className="text-4xl font-bold mb-3" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          Mary's Healthcare Analytics Portfolio
        </h1>
        <p className="text-xl mb-4 opacity-90">
          Data Analyst | Healthcare Informatics | Business Intelligence
        </p>
        <p className="text-lg opacity-80 max-w-3xl mb-4">
          Entry-level Data Analyst with 10+ years of healthcare experience transitioning into analytics. 
          Proficient in R Programming, SQL, Tableau, and Microsoft Excel with proven ability to transform 
          clinical data into actionable insights. Strong background in cardiac rehabilitation, exercise science, 
          and patient care combined with technical expertise in data visualization, statistical analysis, 
          and database management. Google Data Analytics Certificate candidate with hands-on experience 
          in ETL processes, dashboard creation, and data-driven decision making.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Entry-Level Data Analyst</span>
          <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Healthcare Analytics</span>
          <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">SQL & R Programming</span>
          <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Tableau & Power BI</span>
          <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Career Changer</span>
        </div>
        <div className="flex gap-4 mt-6">
          <button 
            className="flex items-center gap-2 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
            onClick={() => setActiveTab('projects')}
          >
            <Briefcase size={20} />
            View Projects
          </button>
          <button 
            className="flex items-center gap-2 border-2 border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            onClick={() => setActiveTab('skills')}
          >
            <Code size={20} />
            Technical Skills
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between mb-2">
            <Database className="text-cyan-400" size={32} />
            <span className="text-3xl font-bold text-white">3</span>
          </div>
          <p className="text-gray-300 text-sm">Portfolio Projects Complete</p>
          <p className="text-gray-500 text-xs mt-1">R | SQL | Tableau</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-cyan-400">
          <div className="flex items-center justify-between mb-2">
            <Code className="text-blue-500" size={32} />
            <span className="text-3xl font-bold text-white">50+</span>
          </div>
          <p className="text-gray-300 text-sm">Technical Skills & Keywords</p>
          <p className="text-gray-500 text-xs mt-1">ATS-Optimized</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between mb-2">
            <Heart className="text-cyan-400" size={32} />
            <span className="text-3xl font-bold text-white">10+</span>
          </div>
          <p className="text-gray-300 text-sm">Years Healthcare Experience</p>
          <p className="text-gray-500 text-xs mt-1">Clinical & Patient Care</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-cyan-400">
          <div className="flex items-center justify-between mb-2">
            <Award className="text-blue-500" size={32} />
            <span className="text-3xl font-bold text-white">BS</span>
          </div>
          <p className="text-gray-300 text-sm">Exercise Science, VCU</p>
          <p className="text-gray-500 text-xs mt-1">+ Google Analytics Cert</p>
        </div>
      </div>

      {/* Featured Projects Preview */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <TrendingUp className="text-cyan-400" />
          Featured Analytics Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-lg p-5 border border-gray-700 hover:border-blue-500 transition cursor-pointer"
               onClick={() => { setSelectedProject(projects[0]); setActiveTab('projects'); }}>
            <h3 className="text-lg font-bold text-white mb-2">Bellabeat Analytics</h3>
            <p className="text-gray-400 text-sm mb-3">Smart device usage patterns and wellness insights</p>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={bellaeatData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                  <XAxis dataKey="day" stroke="#808080" />
                  <YAxis stroke="#808080" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e1e1e', border: '1px solid #0066ff' }}
                    labelStyle={{ color: '#ffffff' }}
                  />
                  <Bar dataKey="steps" fill="#0066ff" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-5 border border-gray-700 hover:border-cyan-400 transition cursor-pointer"
               onClick={() => { setSelectedProject(projects[1]); setActiveTab('projects'); }}>
            <h3 className="text-lg font-bold text-white mb-2">EV Market Analysis</h3>
            <p className="text-gray-400 text-sm mb-3">U.S. electric vehicle adoption trends and growth patterns</p>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={evMarketData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                  <XAxis dataKey="year" stroke="#808080" />
                  <YAxis stroke="#808080" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e1e1e', border: '1px solid #00ffff' }}
                    labelStyle={{ color: '#ffffff' }}
                  />
                  <Line type="monotone" dataKey="marketShare" stroke="#00ffff" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectsSection = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg p-6 text-white">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Briefcase size={32} />
          Portfolio Projects
        </h2>
        <p className="text-lg opacity-90">Detailed case studies showcasing data analytics expertise</p>
      </div>

      {selectedProject ? (
        <div className="bg-gray-800 rounded-lg p-6">
          <button 
            onClick={() => setSelectedProject(null)}
            className="text-cyan-400 hover:text-cyan-300 mb-4 flex items-center gap-2"
          >
            ← Back to all projects
          </button>
          
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            <p className="text-gray-300 mb-6">{selectedProject.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {Object.entries(selectedProject.metrics).map(([key, value]) => (
                <div key={key} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <p className="text-cyan-400 text-sm uppercase mb-1">{key}</p>
                  <p className="text-white text-2xl font-bold">{value}</p>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Code className="text-cyan-400" size={20} />
                Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.map(tool => (
                  <span key={tool} className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <TrendingUp className="text-cyan-400" size={20} />
                Key Outcomes
              </h4>
              <ul className="space-y-2">
                {selectedProject.outcomes.map((outcome, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {projects.map(project => (
            <div 
              key={project.id}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {project.category}
                </span>
              </div>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.slice(0, 3).map(tool => (
                  <span key={tool} className="bg-gray-900 text-cyan-400 px-3 py-1 rounded-lg text-sm border border-gray-700">
                    {tool}
                  </span>
                ))}
                {project.tools.length > 3 && (
                  <span className="bg-gray-900 text-gray-400 px-3 py-1 rounded-lg text-sm border border-gray-700">
                    +{project.tools.length - 3} more
                  </span>
                )}
              </div>
              <button className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2">
                View Case Study →
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const SkillsSection = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg p-6 text-white">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Code size={32} />
          Technical Skills & Expertise
        </h2>
        <p className="text-lg opacity-90">Comprehensive data analytics toolkit with healthcare domain knowledge</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Database className="text-cyan-400" />
            Data Analytics Skills
          </h3>
          <div className="space-y-4">
            {skillsData.map(skill => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-cyan-400 font-semibold">{skill.value}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-cyan-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Heart className="text-cyan-400" />
            Healthcare Domain Expertise
          </h3>
          <ul className="space-y-3">
            <li className="text-gray-300 flex items-start gap-3">
              <span className="text-cyan-400 mt-1">✓</span>
              <div>
                <p className="font-semibold text-white">Cardiac Rehabilitation</p>
                <p className="text-sm text-gray-400">Clinical experience at Sentara Martha Jefferson Hospital</p>
              </div>
            </li>
            <li className="text-gray-300 flex items-start gap-3">
              <span className="text-cyan-400 mt-1">✓</span>
              <div>
                <p className="font-semibold text-white">Exercise Science</p>
                <p className="text-sm text-gray-400">BS from Virginia Commonwealth University</p>
              </div>
            </li>
            <li className="text-gray-300 flex items-start gap-3">
              <span className="text-cyan-400 mt-1">✓</span>
              <div>
                <p className="font-semibold text-white">Direct Support Services</p>
                <p className="text-sm text-gray-400">CRi.inc - Working with individuals with disabilities</p>
              </div>
            </li>
            <li className="text-gray-300 flex items-start gap-3">
              <span className="text-cyan-400 mt-1">✓</span>
              <div>
                <p className="font-semibold text-white">Massage Therapy</p>
                <p className="text-sm text-gray-400">10 years of client relationship management</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Award className="text-cyan-400" />
          Certifications & Education
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <h4 className="font-bold text-white mb-2">Google Data Analytics Certificate</h4>
            <p className="text-gray-400 text-sm mb-2">Merit America Program via Coursera</p>
            <p className="text-cyan-400 text-sm">Currently in Course 7 - R Programming</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <h4 className="font-bold text-white mb-2">BS Exercise Science</h4>
            <p className="text-gray-400 text-sm mb-2">Virginia Commonwealth University</p>
            <p className="text-cyan-400 text-sm">Quantitative coursework & clinical experience</p>
          </div>
        </div>
      </div>

      {/* NEW: Technical Keywords Section */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Code className="text-cyan-400" />
          Technical Proficiencies (ATS Keywords)
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-cyan-400 mb-2">DATA ANALYSIS & TOOLS</h4>
            <div className="flex flex-wrap gap-2">
              {technicalKeywords.map(keyword => (
                <span key={keyword} className="bg-gray-900 text-gray-300 px-3 py-1 rounded text-xs border border-gray-700">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-blue-500 mb-2">HEALTHCARE & INDUSTRY EXPERTISE</h4>
            <div className="flex flex-wrap gap-2">
              {industryKeywords.map(keyword => (
                <span key={keyword} className="bg-gray-900 text-gray-300 px-3 py-1 rounded text-xs border border-gray-700">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-cyan-400 mb-2">PROFESSIONAL SKILLS</h4>
            <div className="flex flex-wrap gap-2">
              {softSkills.map(keyword => (
                <span key={keyword} className="bg-gray-900 text-gray-300 px-3 py-1 rounded text-xs border border-gray-700">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">Target Roles & Career Goals</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-900 rounded-lg p-4 border border-blue-600">
            <h4 className="font-bold text-white mb-2">Target Salary Range</h4>
            <p className="text-cyan-400 text-2xl font-bold mb-1">$45,000 - $65,000</p>
            <p className="text-gray-400 text-sm">Entry-Level Data Analyst positions</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-cyan-400">
            <h4 className="font-bold text-white mb-2">Location Preference</h4>
            <p className="text-white text-lg font-semibold mb-1">Fairfax, Virginia & Remote</p>
            <p className="text-gray-400 text-sm">DC Metro area + Remote opportunities</p>
          </div>
        </div>
        <div className="space-y-3 text-gray-300">
          <p className="flex items-start gap-3">
            <span className="text-blue-500 mt-1">→</span>
            <span><strong className="text-white">Data Analyst | Healthcare Data Analyst | Junior Data Analyst:</strong> Entry-level positions analyzing healthcare data, creating dashboards, and supporting data-driven decision making ($45K-$60K)</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-cyan-400 mt-1">→</span>
            <span><strong className="text-white">Epic Credentialed Trainer | Epic Analyst:</strong> Leveraging healthcare experience to train clinical staff on Epic EHR systems and support implementation projects ($50K-$70K)</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-blue-500 mt-1">→</span>
            <span><strong className="text-white">Business Intelligence Analyst | Reporting Analyst:</strong> Creating reports, dashboards, and KPI tracking systems for healthcare organizations ($48K-$65K)</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-cyan-400 mt-1">→</span>
            <span><strong className="text-white">Healthcare Informatics Analyst | Clinical Data Analyst:</strong> Combining clinical knowledge with analytics to improve patient outcomes and quality metrics ($50K-$68K)</span>
          </p>
        </div>
      </div>
    </div>
  );

  const ContactSection = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg p-6 text-white">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Users size={32} />
          Let's Connect
        </h2>
        <p className="text-lg opacity-90">Interested in discussing healthcare analytics opportunities</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
          <div className="space-y-4">
            <a href="mailto:mary@example.com" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-semibold">mary@example.com</p>
              </div>
            </a>
            <a href="https://linkedin.com" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Linkedin className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">LinkedIn</p>
                <p className="font-semibold">linkedin.com/in/mary</p>
              </div>
            </a>
            <a href="https://github.com" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Github className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">GitHub</p>
                <p className="font-semibold">github.com/mary</p>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Areas of Interest</h3>
          <div className="space-y-3">
            <div className="bg-gray-900 rounded-lg p-4 border border-blue-600">
              <h4 className="font-bold text-white mb-2">Epic Systems</h4>
              <p className="text-gray-400 text-sm">Credentialed Trainer positions combining technical and healthcare expertise</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 border border-cyan-400">
              <h4 className="font-bold text-white mb-2">Healthcare Analytics</h4>
              <p className="text-gray-400 text-sm">Data-driven insights for clinical outcomes and patient care improvement</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 border border-blue-600">
              <h4 className="font-bold text-white mb-2">Public Health</h4>
              <p className="text-gray-400 text-sm">Population health analytics and health equity initiatives</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4 text-center">Why Work With Me?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart className="text-white" size={32} />
            </div>
            <h4 className="font-bold text-white mb-2">Healthcare Background</h4>
            <p className="text-gray-400 text-sm">Deep understanding of clinical workflows and patient care priorities</p>
          </div>
          <div className="text-center">
            <div className="bg-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <Database className="text-gray-900" size={32} />
            </div>
            <h4 className="font-bold text-white mb-2">Technical Skills</h4>
            <p className="text-gray-400 text-sm">Proficient in R, SQL, Tableau, and modern analytics methodologies</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="text-white" size={32} />
            </div>
            <h4 className="font-bold text-white mb-2">Results-Driven</h4>
            <p className="text-gray-400 text-sm">Focus on actionable insights that improve outcomes and efficiency</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ backgroundColor: theme.dark, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-400 p-2 rounded-lg">
                <Activity className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Mary's Portfolio</h1>
                <p className="text-xs text-gray-400">Healthcare Data Analyst</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  activeTab === 'overview'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  activeTab === 'projects'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  activeTab === 'skills'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  activeTab === 'contact'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'overview' && <OverviewSection />}
        {activeTab === 'projects' && <ProjectsSection />}
        {activeTab === 'skills' && <SkillsSection />}
        {activeTab === 'contact' && <ContactSection />}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 Mary's Healthcare Analytics Portfolio | Built with React & Recharts
            </p>
            <div className="flex gap-4">
              <span className="text-gray-400 text-sm flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                Styled with Tech Innovation Theme
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
