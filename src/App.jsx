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
  
  const editingHandler = (e) => {
    const { key } = e.target.dataset
    const id = e.target.id
    const beingEdited = educationInfo.find((x) => x.id === id)
    
    setMode({ ...mode, [key]: 'edit'})
    setEdit({ current: beingEdited, previous: beingEdited })
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
    const { key } = e.target.dataset
    
    if (mode[key] === 'add') {
      const newEducation = utils.copyData(edit.current)
      setEducationInfo([ ...educationInfo, newEducation ])
    }
    
    setEdit({ current: null, previous: { ...edit.previous }})
    setMode({ ...mode, [key]: 'none'})
  }
  
  const addEducationHandler  = (e) => {
    const { key } = e.target.dataset
    const newEducation = createEducation()
    
    setMode({ ...mode, [key]: 'add'})
    setEdit({ current: newEducation, previous: { ...edit.previous }})
  }
  
  const onCancel = (e) => {
    e.preventDefault()
    const { mode } = e.target.dataset
    const { key } = e.target.dataset
    
    if (mode === 'edit') {
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
    }
    setEdit({ current: null, previous: { ...edit.previous }})
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
          onEdit={editingHandler}
          onTypeEdit={educationInfoChangeHandler}
          currentEdited={edit.current}
          onSubmit={onSubmit}
          onAdd={addEducationHandler}
          onCancel={onCancel}
          mode={mode.education}
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
