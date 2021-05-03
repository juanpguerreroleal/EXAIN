const InputField = ({label, value, type, onChange}) =>{
    const handleChange = (e) => {
        onChange(e);
      };
    return (
            <div className="form-group">
            <label>{label}</label>
            <input className="form-control" name={label} type={type} value={value} onChange={handleChange}/>
            </div>
    );
};
export default InputField;