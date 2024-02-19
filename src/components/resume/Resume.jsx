import PersonalInfo from './PersonalInfo.jsx'
import EducationInfo from './EducationInfo.jsx'

 export default function Resume({ personalInfo, educationInfo }) {
   return (
     <section className='text-white'>
        <PersonalInfo 
          personalInfo={personalInfo}
        />
        <EducationInfo
          educationInfo={educationInfo}
        />
     </section>
    )
 }