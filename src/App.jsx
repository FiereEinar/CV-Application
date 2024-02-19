import { useState } from 'react'
import testData from './testData.js'
import PersonalDetails from './components/PersonalDetails.jsx'
import EducationSection from './components/EducationSection.jsx'
import Resume from './components/resume/Resume.jsx'

function App() {
  const [personalInfo, setPersonalInfo] = useState(testData.personalInfo)
  const [educationInfo, setEducationInfo] = useState(testData.educationInfo)
  const [expandedToggle, setExpandedToggle] = useState({ education: false, experience: false })
  const [mode, setMode] = useState({ education: 'none', experience: 'none' })
  const [currentEdited, setCurrentEdited] = useState(null)
  
  const personalInfoChangeHandler = (e) => {
    const { key } = e.target.dataset
    setPersonalInfo({ ...personalInfo, [key]: e.target.value })
  }
  
  const educationInfoChangeHandler = (e) => {
    const { key } = e.target.dataset
    setCurrentEdited({ ...currentEdited, [key]: e.target.value})
    
    const education = JSON.parse(JSON.stringify(currentEdited))
    let newEducationInfo = JSON.parse(JSON.stringify(educationInfo))
    
    newEducationInfo = newEducationInfo.filter((edu) => edu.id !== currentEdited.id)
    newEducationInfo.push(education)
    console.log(newEducationInfo)
    console.log(currentEdited)
    setEducationInfo(newEducationInfo)
  }
  
  const expandComponent = (e) => {
    const { key } = e.target.dataset
    setExpandedToggle({ ...expandedToggle, [key]: !expandedToggle[key] })
  }
  
  const editingHandler = (e) => {
    const { key } = e.target.dataset
    const id = e.target.id
    const beingEdited = educationInfo.find((x) => x.id === id)
    
    setMode({ ...mode, [key]: 'edit'})
    setCurrentEdited(beingEdited)
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
          onEdit={editingHandler}
          onTypeEdit={educationInfoChangeHandler}
          currentEdited={currentEdited}
//           onAdd={}
          mode={mode.education}
          isOpen={expandedToggle.education}
        />
      </div>
      <Resume
        personalInfo={personalInfo}
        educationInfo={educationInfo}
      />
    </div>
  )
}

export default App
