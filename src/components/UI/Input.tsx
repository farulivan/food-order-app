import { forwardRef } from 'react';
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

type Ref = HTMLInputElement;

const Input = forwardRef<Ref, InputProps>(({ input, label }, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;
