export const fields = [
  [{
    id: 'firstName',
    placeholder: 'First Name',
    required: true,
    type: 'text',
    maxLength: "20"
  },
  {
    id: 'lastName',
    placeholder: 'Last Name',
    required: true,
    type: 'text',
    maxLength: "20"
  }],
  {
    id: 'email',
    required: true,
    type: 'email',
    placeholder: 'Email Address'
  },
  {
    id: 'address',
    placeholder: 'Address',
    type: 'text',
  },
  [{
    id: 'city',
    type: 'text',
    placeholder: 'City',
    maxLength: "20"
  },
  {
    id: 'state',
    type: 'text',
    placeholder: 'State',
    maxLength: "2"
  },
  {
    id: 'zip',
    type: 'tel',
    placeholder: 'Zip Code',
    maxLength: "5"
  }],
  {
    id: 'phone',
    required: true,
    type: 'tel',
    placeholder: 'Phone Number',
    maxLength: "15"
  },
  {
    id: 'jobTitle',
    options: [
      'Engineer - lead',
      'Engineer - mid level',
      'Engineer - junior',
      'Engineer - front end focused',
      'Engineer - backend focused',
      'Engineer - full stack',
    ],
    placeholder: 'Please select your job title',
    type: 'select',
  },
  {
    id: 'reason',
    placeholder: 'Describe why you are a good fit for the job you are applying for.',
    type: 'textarea',
  }
]