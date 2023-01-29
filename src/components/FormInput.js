function FormInput(props) {
  const { label, errorMassage, onChange, id, ...inputProps } = props;

  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
      <span>{errorMassage}</span>
    </div>
  );
}

export default FormInput;
