export default function ExperienceInfo({ experienceInfo }) {
  return (
    <section>
      {experienceInfo.map((data) => (
        <div key={data.id}>
          <aside>
            <p>{data.startDate}</p>
            <p>{data.endDate}</p>
            <p>{data.location}</p>
          </aside>
          <main>
            <p>{data.company}</p>
            <p>{data.position}</p>
            <p>{data.description}</p>
          </main>
        </div>
      ))}
    </section>
  )
}