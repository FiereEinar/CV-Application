export default function EducationInfo({ educationInfo }) {
  return (
    <section>
      {educationInfo.map((data) => (
        <div key={data.id}>
          <aside>
            <p>{data.startDate}</p>
            <p>{data.endDate}</p>
          </aside>
          <main>
            <p>{data.school}</p>
            <p>{data.degree}</p>
            <p>{data.location}</p>
          </main>
        </div>
      ))}
    </section>
  )
}