import InputField from './InputField.jsx'

export default function PersonalDetails({name, number, address, email, onChange}) {
  return (
    <form className='flex flex-col gap-2'>
      <InputField
        label='Full Name'
        type='text'
        value={name}
        placeholder='Jhon Doe'
        dataKey='fullname'
        onChange={onChange}
      />
      <InputField
        label='Email'
        value={email}
        placeholder='exampleemail@email.com'
        type='email'
        dataKey='email'
        onChange={onChange}
      />
      <InputField
        label='Phone Number'
        value={number}
        placeholder='09XXXXXXXXX'
        type='number'
        dataKey='number'
        onChange={onChange}
      />
      <InputField
        label='Adress'
        value={address}
        placeholder='Cornelia Street'
        type='text'
        dataKey='address'
        onChange={onChange}
      />
    </form>
  )
}