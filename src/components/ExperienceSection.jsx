import InputField from './InputField.jsx'
import { useState } from 'react'

export default function ExperienceSection({ data, mode, onEdit, onDelete, currentEdited, onTypeEdit, onSubmit, onAdd, onCancel }) {
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
        data-key='experience'
        onClick={expandComponent}
      >
      Experience 
      </button>
      {isOpen && mode === 'none' &&
        <div>
          <div className='flex flex-col gap-1 my-1 justify-center items-center'>
            {data.length === 0 &&
              <p>No items here...</p>
            }
            {data.map((exp) => (
              <button 
                className='border p-2 rounded w-48 truncate
                btn-transition' 
                key={exp.id}
                id={exp.id}
                data-key='experience'
                onClick={onEdit}
              >
                {exp.company}
              </button>
            ))}
          </div>
          <button 
            data-key='experience' 
            className='p-2 border w-full rounded 
            transition-all bg-blue-100 hover:bg-blue-200 mt-2' 
            onClick={onAdd}
          >
            Add Experience +
          </button>
        </div>
      }
      {(isOpen && currentEdited !== null)  && (mode === 'edit' || mode === 'add') &&
        <form className='text-black flex flex-col gap-3'>
          <InputField
            label='Company Name'
            type='text'
            value={currentEdited.company}
            placeholder='Example Company Inc.'
            dataKey='company'
            onChange={onTypeEdit}
          />
          <InputField
            label='Position'
            type='text'
            value={currentEdited.position}
            placeholder='Example Worker'
            dataKey='position'
            onChange={onTypeEdit}
          />
          <InputField
            label='Location'
            type='text'
            value={currentEdited.location}
            placeholder='Example City'
            dataKey='location'
            onChange={onTypeEdit}
          />
          <InputField
            label='Start Date'
            type='date'
            value={currentEdited.startDate}
            placeholder=''
            dataKey='startDate'
            onChange={onTypeEdit}
          />
          <InputField
            label='End Date'
            type='date'
            value={currentEdited.endDate}
            placeholder=''
            dataKey='endDate'
            onChange={onTypeEdit}
          />
          <InputField
            label='Description'
            type='text'
            value={currentEdited.description}
            placeholder='...'
            dataKey='description'
            onChange={onTypeEdit}
          />
          <div className=' flex justify-evenly p-2'>
            <button 
              className='border p-1 rounded w-1/3 btn-transition' 
              data-mode={mode} 
              data-key='experience' 
              onClick={onCancel}
            >
            Cancel
            </button>
            <button 
              className='border p-1 rounded w-1/3 btn-transition' 
              data-mode={mode} 
              data-key='experience' 
              onClick={onDelete}
            >
            Delete
            </button>
            {mode === 'edit' && 
              <button 
                className='border p-1 rounded w-1/3 btn-transition' 
                data-key='experience' 
                onClick={onSubmit}
              >
              Save
              </button>
            }
            {mode === 'add' &&
              <button 
                className='border p-1 rounded w-1/3 btn-transition' 
                data-key='experience' 
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