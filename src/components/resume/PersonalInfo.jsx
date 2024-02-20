export default function PersonalInfo({ personalInfo }) {
  return (
    <section className="">
      {personalInfo.fullname && <p>{personalInfo.fullname}</p>}
      {personalInfo.email && <p>{personalInfo.email}</p>}
      {personalInfo.number && <p>{personalInfo.number}</p>}
      {personalInfo.address && <p>{personalInfo.address}</p>}
    </section>
  )
}