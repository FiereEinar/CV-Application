import { useState } from 'react'
import testData from './testData.js'
import PersonalDetails from './components/PersonalDetails.jsx'
import EducationSection from './components/EducationSection.jsx'

function App() {
  const [personalInfo, setPersonalInfo] = useState(testData.personalInfo)
  const [educationInfo, setEducationInfo] = useState(testData.educationInfo)
  const [expandedToggle, setExpandedToggle] = useState({ education: false, experience: false })
  
  const personalInfoChangeHandler = (e) => {
    const { key } = e.target.dataset
    setPersonalInfo({ ...personalInfo, [key]: e.target.value })
  }
  
  const expandComponent = (e) => {
    const { key } = e.target.dataset
    setExpandedToggle({ ...expandedToggle, [key]: !expandedToggle[key] })
  }
  
  return (
    <div className="bg-blue-950 min-h-screen w-full p-10 flex justify-center items-start">
      <div>
        <PersonalDetails
          name={personalInfo.fullname}
          email={personalInfo.email}
          address={personalInfo.address}
          number={personalInfo.number}
          onChange={personalInfoChangeHandler}
        />
        <EducationSection
          data={educationInfo}
          onClick={expandComponent}
          isOpen={expandedToggle.education}
        />
      </div>
      <div className="text-white">
        {personalInfo.fullname && <p>{personalInfo.fullname}</p>}
        {personalInfo.email && <p>{personalInfo.email}</p>}
        {personalInfo.number && <p>{personalInfo.number}</p>}
        {personalInfo.address && <p>{personalInfo.address}</p>}
      </div>
    </div>
  )
}

export default App
