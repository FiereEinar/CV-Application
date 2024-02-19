export default function InputField({onChange, label, type, value, dataKey, placeholder}) {
  return (
    <div className='p-1 border flex flex-col'>
      <label className='text-white'>{label}</label>
      <input 
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        data-key={dataKey}
      />
    </div>
  )
}