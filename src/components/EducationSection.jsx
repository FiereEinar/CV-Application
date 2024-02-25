import InputField from './InputField.jsx'
import { useState } from 'react'

export default function EducationSection({ data, mode, onEdit, currentEdited, onDelete, onTypeEdit, onSubmit, onAdd, onCancel }) {
  const [isOpen, setIsOpen] = useState(false)
  
  const expandComponent = (e) => {
    const { key } = e.target.dataset
    setIsOpen(!isOpen)
  }
  
  return (
    <div className=' flex flex-col gap-3'>
      <button
        className='p-2 border rounded shadow 
        btn-transition' 
        data-key='education'
        onClick={expandComponent}
      >
      Education 
      </button>
      {isOpen && mode === 'none' &&
        <div>
          <div className='flex flex-col gap-1 my-1 justify-center items-center'>
            {data.length === 0 &&
              <p>No items here...</p>
            }
            {data.map((edu) => (
              <button 
                className='border p-2 rounded w-48 truncate
                btn-transition' 
                key={edu.id}
                id={edu.id}
                data-key='education'
                onClick={onEdit}
              >
                {edu.school}
              </button>
            ))}
          </div>
          <button 
            data-key='education' 
            className='p-2 border w-full rounded transition-all 
            bg-blue-100 hover:bg-blue-200 mt-2' 
            onClick={onAdd}
          >
            Add Education +
          </button>
        </div>
      }
      {(isOpen && currentEdited !== null)  && (mode === 'edit' || mode === 'add') &&
        <form className='text-black flex flex-col gap-2'>
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
          <div className=' flex justify-evenly p-2'>
            <button 
              className='border p-1 rounded w-1/3 btn-transition' 
              data-mode={mode} 
              data-key={'education'} 
              onClick={onCancel}
            >
            Cancel
            </button>
            <button 
              className='border p-1 rounded w-1/3 btn-transition' 
              data-mode={mode} 
              data-key='education' 
              onClick={onDelete}
            >
            Delete
            </button>
            {mode === 'edit' && 
              <button 
                className='border p-1 rounded w-1/3 btn-transition' 
                data-key='education' 
                onClick={onSubmit}
              >
              Save
              </button>
            }
            {mode === 'add' &&
              <button 
                className='border p-1 rounded w-1/3 btn-transition' 
                data-key='education' 
                onClick={onSubmit}
              >
              Submit
              </button>
            }
          </div>
        </form>
      }
    </div>
  )
}