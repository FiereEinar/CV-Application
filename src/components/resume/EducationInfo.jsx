export default function EducationInfo({ educationInfo }) {
  return (
    <section className='p-10'>
      <h1 className='w-full bg-gray-300 text-center p-2 text-2xl'>Educational Background</h1>
      {educationInfo.map((data) => (
        <div key={data.id} className='flex gap-10 p-5'>
          <aside>
            <p>{data.startDate} -</p>
            <p>{data.endDate}</p>
            <p>{data.location}</p>
          </aside>
          <main>
            <p>{data.school}</p>
            <p>{data.degree}</p>
          </main>
        </div>
      ))}
    </section>
  )
}