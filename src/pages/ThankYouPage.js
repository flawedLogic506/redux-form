import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { resetForm } from '../store/formSlice';
import { DataDisplayWrapper, DataCard, DataField, ItemLabel, ItemValue, Title, Subtitle } from '../components/DataCollectedComponents';
import { Button } from '../components/FormComponents';

const ThankYouPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useSelector(state => state.form);
  const fields = location.state.fields;

  const [formData, setFormData] = useState([]);
  
  const formatFields = (fields, formValues) => {
    return fields.map((field) => {
      if (Array.isArray(field)) {
        const fieldArray = [];
        field.forEach((item) => {
          fieldArray.push({
            field: item.id,
            label: item.placeholder,
            value: formValues[item.id]
          })
        })
        return [...fieldArray]
      }
      return {
        field: field.id,
        label: field.placeholder,
        value: formValues[field.id]
      }
    })
  }

  const handleBackClick = () => {
    dispatch(resetForm())
    navigate('/');
  }

  useEffect(() => {
    if (form) {
      const formattedFields = formatFields(fields, form)
      setFormData(formattedFields);
    }
  }, [form, fields])

  return (
    <DataDisplayWrapper>
      <DataCard>
        <Title>Your information has been submitted!</Title>
        <Subtitle>Review the information submitted below</Subtitle>
        {
          formData.map((formField) => {
            if (Array.isArray(formField)) {
              return (
                <DataField>
                  {
                    formField.map(item => (
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
                      {!formField.label.includes('Describe') && <ItemLabel>{formField.label} :</ItemLabel>}
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