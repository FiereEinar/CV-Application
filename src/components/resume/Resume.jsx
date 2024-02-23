import PersonalInfo from './PersonalInfo.jsx'
import EducationInfo from './EducationInfo.jsx'
import ExperienceInfo from './ExperienceInfo.jsx'

 export default function Resume({ personalInfo, educationInfo, experienceInfo }) {
   return (
     <section className='shadow-2xl w-fit'>
        <PersonalInfo 
          personalInfo={personalInfo}
        />
        <EducationInfo
          educationInfo={educationInfo}
        />
        <ExperienceInfo
          experienceInfo={experienceInfo}
        />
     </section>
    )
 }