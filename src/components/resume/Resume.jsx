import PersonalInfo from './PersonalInfo.jsx'
import EducationInfo from './EducationInfo.jsx'
import ExperienceInfo from './ExperienceInfo.jsx'

 export default function Resume({ personalInfo, educationInfo, experienceInfo }) {
   return (
     <section className='text-white'>
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