import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import CustomTextField from './CustomTextField';

export default {
  title: 'Components/CustomTextField',
  component: CustomTextField,
  argTypes: {
    label: { control: 'text' },
    type: { control: 'select', options: ['text', 'email', 'password'] },
    showError: { control: 'boolean' },
  },
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

const Template = (args) => (
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={validationSchema}
    onSubmit={(values) => console.log(values)}
  >
    {({ handleSubmit }) => (
      <Form onSubmit={handleSubmit}>
        <Field
          name="email"
          component={CustomTextField}
          {...args}
        />
      </Form>
    )}
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Email',
  type: 'email',
  showError: true,
};
