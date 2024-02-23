import { useState } from 'react'

import PersonalDetails from './components/PersonalDetails.jsx'
import EducationSection from './components/EducationSection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import Resume from './components/resume/Resume.jsx'

import createEducation from './classes/education.js'
import createExperience from './classes/experience.js'
import testData from './testData.js'
import * as utils from './js/utils.js'

function App() {
  const [personalInfo, setPersonalInfo] = useState(testData.personalInfo)
  const [educationInfo, setEducationInfo] = useState(testData.educationInfo)
  const [experienceInfo, setExperienceInfo] =  useState(testData.experienceInfo)
  const [mode, setMode] = useState({ education: 'none', experience: 'none' })
  const [edit, setEdit] = useState({ current: null, previous: null })
 
  const personalInfoChangeHandler = (e) => {
    const { key } = e.target.dataset
    setPersonalInfo({ ...personalInfo, [key]: e.target.value })
  }
  
  const educationInfoChangeHandler = (e) => {
    const { key } = e.target.dataset
    let newEducationInfo = utils.copyData(educationInfo)
    setEdit({ current: { ...edit.current, [key]: e.target.value }, previous: { ...edit.previous }})
    
    newEducationInfo.map((edu) => {
      if (edu.id === edit.current.id) edu[key] = e.target.value
    })
    setEducationInfo(newEducationInfo)
  }
  
  const experienceInfoChangeHandler = (e) => {
    const { key } = e.target.dataset
    let newExperienceInfo = utils.copyData(experienceInfo)
    setEdit({ current: { ...edit.current, [key]: e.target.value }, previous: { ...edit.previous }})
    
    newExperienceInfo.map((exp) => {
      if (exp.id === edit.current.id) exp[key] = e.target.value
    })
    setExperienceInfo(newExperienceInfo)
  }
  
  const editingHandler = (e) => {
    const { key } = e.target.dataset
    const id = e.target.id
    let beingEdited
    
    if (key === 'education') beingEdited = educationInfo.find((x) => x.id === id)
    if (key === 'experience') beingEdited = experienceInfo.find((x) => x.id === id)
    
    setMode({ ...mode, [key]: 'edit' })
    setEdit({ current: beingEdited, previous: beingEdited })
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
    const { key } = e.target.dataset
    
    if (mode[key] === 'add') {
      if (key === 'education') {
        const newEducation = utils.copyData(edit.current)
        setEducationInfo([ ...educationInfo, newEducation ])
      }
      
      if (key === 'experience') {
        const newExperience = utils.copyData(edit.current)
        setExperienceInfo([ ...experienceInfo, newExperience ])
      }
    }
    
    setEdit({ current: null, previous: { ...edit.previous }})
    setMode({ ...mode, [key]: 'none' })
  }
  
  const addEducationHandler  = (e) => {
    const { key } = e.target.dataset
    const newEducation = createEducation()
    
    setMode({ ...mode, [key]: 'add' })
    setEdit({ current: newEducation, previous: { ...edit.previous }})
  }
  
  const addExperienceHandler  = (e) => {
    const { key } = e.target.dataset
    const newExperience = createExperience()
    
    setMode({ ...mode, [key]: 'add' })
    setEdit({ current: newExperience, previous: { ...edit.previous }})
  }
  
  const onCancel = (e) => {
    e.preventDefault()
    const { currentMode, key } = e.target.dataset
    
    if (currentMode === 'edit') {
      const previousData = utils.copyData(edit.previous)
      
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
      
      if (key === 'experience') {
        const newExperienceInfo = utils.copyData(experienceInfo)
        
        newExperienceInfo.forEach((x) => {
          if (x.id === previousData.id) {
            for (const [key, value] of Object.entries(x)) {
              x[key] = previousData[key]
            }
          }
        })
        setExperienceInfo(newExperienceInfo)
      }
    }
    setEdit({ current: null, previous: { ...edit.previous }})
    setMode({ ...mode, [key]: 'none' })
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
          mode={mode.education}
          currentEdited={edit.current}
          onEdit={editingHandler}
          onTypeEdit={educationInfoChangeHandler}
          onSubmit={onSubmit}
          onAdd={addEducationHandler}
          onCancel={onCancel}
        />
        <ExperienceSection 
          data={experienceInfo}
          mode={mode.experience}
          currentEdited={edit.current}
          onEdit={editingHandler}
          onTypeEdit={experienceInfoChangeHandler}
          onSubmit={onSubmit}
          onAdd={addExperienceHandler}
          onCancel={onCancel}
        />
      </div>
      <Resume
        personalInfo={personalInfo}
        educationInfo={educationInfo}
        experienceInfo={experienceInfo}
      />
    </div>
  )
}

export default App
