import TextField, { TextFieldProps } from '@mui/material/TextField';
import { ErrorMessage, FieldProps } from 'formik';
import React from 'react';

interface CustomTextFieldProps
  extends Omit<TextFieldProps, 'error' | 'helperText'> {
  field: FieldProps['field'];
  form: FieldProps['form'];
  showError?: boolean;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  field,
  form,
  showError = true,
  ...props
}) => {
  const { name } = field;
  const { errors, touched } = form;
  const hasError = errors[name] && touched[name];

  return (
    <TextField
      fullWidth
      margin="normal"
      {...field}
      {...props}
      error={showError && !!hasError}
      helperText={
        showError && hasError ? <ErrorMessage name={name} /> : undefined
      }
    />
  );
};

export default CustomTextField;
