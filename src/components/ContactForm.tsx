import React from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage, Form, FormikErrors } from 'formik';
import { updateInput } from '../store/formSlice';
import { Input, InputWrapper, SelectInput, TextareaInput, MainContainer, Button, FieldWrapper, CustomError } from './FormComponents';
import { Field, Form as FormType } from '../types';
import { fields } from "../fields";

const ContactForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const form = useAppSelector(state => state.form)

  // Controlled fields with store data
  const handleInputChange = (type: string, setFieldValue: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFieldValue(type, value)
    dispatch(updateInput({ type, value }))
  }

  // API mock 
  const postForm = (ms: number) => new Promise((res) => setTimeout(res, ms))

  return (
    <MainContainer>
      <Formik
        initialValues={form}
        validateOnChange={true}
        validate={(values: FormType) => {
          const errors: FormikErrors<FormType>  = {};
          if (!values.firstName) {
            errors.firstName = "* First name is required"
          }
          if (!values.lastName) {
            errors.lastName = "* Last name is required"
          }
          if (!values.email) {
            errors.email = "* Email is required"
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Please enter a valid email address"
          }
          if (!values.phone) {
            errors.phone = '* Phone number is required'
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          // Simulating API call posting form details.
          await postForm(1500);
          setSubmitting(false);
          navigate('/thanks', {
            state: {
              fields
            }
          });
        }}
      >
        {
          ({ isSubmitting, setFieldValue }) => (
            <Form>
              {
                fields.map((field, fieldIndex) => {
                  if (Array.isArray(field)) {
                    return (
                      <InputWrapper key={fieldIndex}>
                        {field.map((item, ind) => (
                          <FieldWrapper key={ind}>
                            <Input
                              key={ind}
                              type={item.type}
                              name={item.id}
                              placeholder={item.placeholder ?? ''}
                              onChange={handleInputChange(item.id, setFieldValue)}
                              value={form[`${item.id}` as keyof FormType]}
                              maxLength={item.maxLength}
                            />
                            <ErrorMessage name={item.id} component={CustomError} />
                          </FieldWrapper>
                        ))}
                      </InputWrapper>
                    )
                  }
                  return (
                    <InputWrapper>
                      {field.type === 'select'
                        ? (
                          <FieldWrapper>
                            <SelectInput
                              type="select"
                              as="select"
                              name={field.id}
                              value={form[`${field.id}` as keyof FormType]}
                              onChange={handleInputChange(field.id, setFieldValue)}
                            >
                              <option key={field.id}>{field.placeholder}</option>
                              {
                                field.options?.map((option: string, index: number) => <option key={index} value={option}>{option}</option>)
                              }
                            </SelectInput>
                            
                          </FieldWrapper>
                        )
                        : field.type === 'textarea'
                          ? (
                            <FieldWrapper>
                              <TextareaInput
                                key={fieldIndex}
                                as="textarea"
                                type={field.type}
                                name={field.id}
                                value={form[`${field.id}` as keyof FormType]}
                                placeholder={field.placeholder ?? ''}
                                onChange={handleInputChange(field.id, setFieldValue)}
                              />
                            </FieldWrapper>
                          )
                          : (
                            <FieldWrapper>
                              <Input
                                key={fieldIndex}
                                type={field.type}
                                name={field.id}
                                value={form[`${field.id}` as keyof FormType]}
                                placeholder={field.placeholder ?? ''}
                                onChange={handleInputChange(field.id, setFieldValue)}
                                maxLength={field.maxLength}
                              />
                              <ErrorMessage name={field.id} component={CustomError} />
                            </FieldWrapper>
                          )
                      }
                    </InputWrapper>
                  )
                })
              }
              <FieldWrapper>
                <Button type="submit" disabled={isSubmitting}>Submit</Button>
              </FieldWrapper>
            </Form>
          )
        }
      </Formik>
    </MainContainer>
  )
}

export default ContactForm;