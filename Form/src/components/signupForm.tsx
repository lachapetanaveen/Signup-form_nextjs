import React from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Radio, RadioGroup, FormLabel } from '@material-ui/core';
import { useForm } from 'react-hook-form';
export interface Field {
  label: string;
  name: string;
  type: 'TEXT' | 'TEXT' | 'RADIO';
  options?: string[];
}

interface Props {
  fields: Field[];
}

const SignupForm: React.FC<Props> = ({ fields }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
//   const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data); // Handle form submission
  };

  const ListComponent: React.FC<{ options: string[] }> = ({ options }) => {
    return (
      <FormControl>
        <InputLabel>Select</InputLabel>
        <Select>
          {options.map(option => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  const RadioComponent: React.FC<{ options: string[] }> = ({ options }) => {
    return (
      <FormControl>
        <FormLabel>Choose One</FormLabel>
        <RadioGroup>
          {options.map(option => (
            <FormControlLabel
              key={option}
              value={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </FormControl>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map(field => (
        <div key={field.name}>
          {field.type === 'TEXT' && (
            <TextField
              label={field.label}
              {...register(field.name, { required: true })}
              error={!!errors[field.name]}
              helperText={errors[field.name] && 'This field is required'}
            />
          )}
         
          {field.type === 'RADIO' && (
            <RadioComponent options={field.options || []} />
          )}
        </div>
      ))}
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </form>
  );
};

export default SignupForm;
