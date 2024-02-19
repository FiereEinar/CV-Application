import InputField from './InputField.jsx'

export default function EducationSection({ data, onClick, isOpen, mode, onEdit, currentEdited, onTypeEdit }) {
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
          <div>
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
          <button
            className='p-2 border w-full rounded'
          >
          Add Education
          </button>
        </div>
      }
      {mode === 'edit' && currentEdited !== null &&
        <form className='text-black'>
          <InputField
            label='University'
            type='text'
            value={currentEdited.school}
            placeholder='Example University'
            dataKey='school'
            onChange={onTypeEdit}
          />
        </form>
      }
    </div>
  )
}