export default function InputField({onChange, label, type, value, dataKey, placeholder}) {
  return (
    <div className='p-1 flex flex-col'>
      <label className=''>{label}</label>
      <input 
        className='border rounded px-1 py-2'
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        data-key={dataKey}
      />
    </div>
  )
}