export const formElements=[
    {
        label: 'Name',
        type: 'text',
        name: 'name',
        required: true
    },
    {
        label: 'Email',
        type: 'email',
        name: 'email',
        required: true
    },
    {
        label: 'Phone Number',
        type: 'tel',
        name: 'phone',
        required: true
    },
    {
        label: 'Address',
        type: 'textarea',
        name: 'address',
        required: true
    },
    {
        label: 'Gender',
        type: 'radio',
        name: 'gender',
        options: ['Male', 'Female', 'Other'],
        required: true
    },
    {
        label: 'Preferred Contact Method',
        type: 'checkbox',
        name: 'contactMethod',
        options: ['Email', 'Phone', 'Text Message'],
        required: true
    },
    {
        label:'Select',
        type:'select',
        name:'select',
        options: ['Option 1', 'Option 2', 'Option 3'],
        required: true
    },

    {
        label: 'Submit',
        type:'submit',
        value: 'Submit'
    },

    

    
]