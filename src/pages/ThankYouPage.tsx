import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { useNavigate, useLocation } from 'react-router-dom';
import { resetForm } from '../store/formSlice';
import { DataDisplayWrapper, DataCard, DataField, ItemLabel, ItemValue, Title, Subtitle } from '../components/DataCollectedComponents';
import { Button } from '../components/FormComponents';
import { Field, ReadOnlyField, Form } from '../types';

const ThankYouPage: React.FC<{}> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const form = useAppSelector(state => state.form);
  const fields = location.state.fields;
  const [formData, setFormData] = useState<ReadOnlyField[]>([]);
  
  const formatFields = (fields: Field[], formValues: Form) => {
    return fields.map((field) => {
      if (Array.isArray(field)) {
        const fieldArray: ReadOnlyField[] = [];
        field.forEach((item) => {
          fieldArray.push({
            field: item.id,
            label: item.placeholder,
            value: formValues[item.id as keyof Form]
          })
        })
        return [...fieldArray]
      }
      return {
        field: field.id,
        label: field.placeholder,
        value: formValues[field.id as keyof Form]
      }
    })
  }

  const handleBackClick = () => {
    dispatch(resetForm(true))
    navigate('/');
  }

  useEffect(() => {
    if (form) {
      const formattedFields = formatFields(fields, form)
      setFormData(formattedFields as ReadOnlyField[]);
    }
  }, [form, fields])

  return (
    <DataDisplayWrapper>
      <DataCard>
        <Title>Your information has been submitted!</Title>
        <Subtitle>Review the information submitted below</Subtitle>
        {
          formData.map((formField: ReadOnlyField) => {
            if (Array.isArray(formField)) {
              return (
                <DataField>
                  {
                    formField.map((item: ReadOnlyField) => (
                      <>
                        <ItemLabel>{item.label} :</ItemLabel>
                        <ItemValue>{item.value}</ItemValue>
                      </>
                    ))
                  }
                </DataField>
              )
            }
            return (
              <DataField>
                {
                  formField.value && (
                    <>
                      {!formField.label?.includes('Describe') && <ItemLabel>{formField.label} :</ItemLabel>}
                      <ItemValue>{formField.value}</ItemValue>
                    </>
                  )
                }
              </DataField>
            )
          })
        }
        <DataField>
          <Button onClick={handleBackClick}>Back to Form</Button>
        </DataField>
      </DataCard>
    </DataDisplayWrapper>
  )
}

export default ThankYouPage;