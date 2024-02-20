import InputField from './InputField.jsx'

export default function EducationSection({ data, onClick, isOpen, mode, onEdit, currentEdited, onTypeEdit, onSubmit }) {
  return (
    <div className='text-white flex flex-col'>
      <button
        className='p-2 border rounded' 
        data-key='education'
        onClick={onClick}
      >
      Education 
      </button>
      {isOpen && mode === 'none' &&
        <div>
          <div className='flex flex-col gap-1 my-1'>
            {data.map((edu) => (
              <button 
                className='border p-2 rounded w-full' 
                key={edu.id}
                onClick={onEdit}
              >
                <p id={edu.id} data-key='education'>{edu.school}</p>
              </button>
            ))}
          </div>
          <button className='p-2 border w-full rounded'>
            Add Education
          </button>
        </div>
      }
      {isOpen && mode === 'edit' && currentEdited !== null &&
        <form className='text-black' onSubmit={onSubmit}>
          <InputField
            label='University'
            type='text'
            value={currentEdited.school}
            placeholder='Example University'
            dataKey='school'
            onChange={onTypeEdit}
          />
          <InputField
            label='Degree'
            type='text'
            value={currentEdited.degree}
            placeholder='Bachelor of Example'
            dataKey='degree'
            onChange={onTypeEdit}
          />
          <InputField
            label='Location'
            type='text'
            value={currentEdited.location}
            placeholder='Bachelor of Example'
            dataKey='location'
            onChange={onTypeEdit}
          />
          <InputField
            label='Start Date'
            type='date'
            value={currentEdited.startDate}
            placeholder='Bachelor of Example'
            dataKey='startDate'
            onChange={onTypeEdit}
          />
          <InputField
            label='End Date'
            type='date'
            value={currentEdited.endDate}
            placeholder='Bachelor of Example'
            dataKey='endDate'
            onChange={onTypeEdit}
          />
          {isOpen && mode === 'edit' && 
            <div className='text-white flex justify-evenly p-2'>
              <button className='border p-1 rounded' onClick={onSubmit}>Cancel</button>
              <button className='border p-1 rounded' type='submit'>Submit</button>
            </div>
          }
        </form>
      }
    </div>
  )
}