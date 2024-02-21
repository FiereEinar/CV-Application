import { useState } from 'react'
import testData from './testData.js'
import PersonalDetails from './components/PersonalDetails.jsx'
import EducationSection from './components/EducationSection.jsx'
import Resume from './components/resume/Resume.jsx'

import createEducation from './classes/education.js'
import * as utils from './js/utils.js'

function App() {
  const [personalInfo, setPersonalInfo] = useState(testData.personalInfo)
  const [educationInfo, setEducationInfo] = useState(testData.educationInfo)
  const [expandedToggle, setExpandedToggle] = useState({ education: false, experience: false })
  const [mode, setMode] = useState({ education: 'none', experience: 'none' })
  const [currentEdited, setCurrentEdited] = useState(null)
  const [previousEdited, setPreviousEdited] = useState(null)
  
  const personalInfoChangeHandler = (e) => {
    const { key } = e.target.dataset
    setPersonalInfo({ ...personalInfo, [key]: e.target.value })
  }
  
  const educationInfoChangeHandler = (e) => {
    const { key } = e.target.dataset
    let newEducationInfo = JSON.parse(JSON.stringify(educationInfo))
    setCurrentEdited({ ...currentEdited, [key]: e.target.value})
    
    newEducationInfo.map((edu) => {
      if (edu.id === currentEdited.id) edu[key] = e.target.value
    })
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
    setPreviousEdited(beingEdited)
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
    const { key } = e.target.dataset
    
    if (mode[key] === 'add') {
      const newEducation = JSON.parse(JSON.stringify(currentEdited))
      setEducationInfo([ ...educationInfo, newEducation ])
    }
    
    setCurrentEdited(null)
    setMode({ ...mode, [key]: 'none'})
  }
  
  const addEducationHandler  = (e) => {
    const { key } = e.target.dataset
    const newEducation = createEducation()
    
    setMode({ ...mode, [key]: 'add'})
    setCurrentEdited(newEducation)
  }
  
  const onCancel = (e) => {
    e.preventDefault()
    const { mode } = e.target.dataset
    const { key } = e.target.dataset
    
    if (mode === 'edit') {
      const previousData = utils.copyData(previousEdited)
      
      if (key === 'education') {
        const newEducationInfo = utils.copyData(educationInfo)

        newEducationInfo.forEach((x) => {
          if (x.id === previousData.id) {
            for (const [key, value] of Object.entries(x)) {
              x[key] = previousData[key]
            }
          }
        })
        setEducationInfo(newEducationInfo)
      }
    }
    setCurrentEdited(null)
    setMode({ ...mode, [key]: 'none'})
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
          onSubmit={onSubmit}
          onAdd={addEducationHandler}
          onCancel={onCancel}
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
