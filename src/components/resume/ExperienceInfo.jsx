export default function ExperienceInfo({ experienceInfo }) {
  return (
    <section className='p-10'>
      <h1 className='w-full bg-gray-300 text-center p-2 text-2xl'>Educational Background</h1>
      {experienceInfo.map((data) => (
        <div key={data.id} className='flex gap-10 p-5'>
          <aside className='w-1/4'>
            <p>{data.startDate} -</p>
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