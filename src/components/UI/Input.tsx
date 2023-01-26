import classes from './Input.module.css';

interface InputType {
  id: string;
  type: string;
  min: string;
  max: string;
  steps: string;
  defaultValue: string;
}

interface InputProps {
  label: string;
  input: InputType;
}

const Input = ({ input, label }: InputProps) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
