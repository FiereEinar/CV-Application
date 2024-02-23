export default function PersonalInfo({ personalInfo }) {
  return (
    <section className="bg-blue-950 text-white text-center p-5">
      {personalInfo.fullname && <p className='text-3xl'>{personalInfo.fullname}</p>}
      <div className='flex gap-5 justify-center w-full'>
        {personalInfo.email && <p className='w-fit'>{personalInfo.email} | {personalInfo.number} | {personalInfo.address}</p>}
      </div>
    </section>
  )
}