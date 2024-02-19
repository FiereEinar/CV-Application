export default function EducationSection({data, onClick, isOpen}) {
  return (
    <div className='text-white flex flex-col'>
      <button
        className='p-2 border rounded' 
        data-key='education'
        onClick={onClick}
      >
      Education 
      </button>
      {isOpen &&
        <div>
          <div>
            {data.map((edu) => (
              <button className='border p-2 rounded w-full' key={edu.id}>
                <p>{edu.school}</p>
              </button>
            ))}
          </div>
          <button
            className='p-2 border w-full rounded'
            >
            Add Education
          </button>
        </div>
      }
    </div>
  )
}