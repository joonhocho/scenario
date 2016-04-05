new Scene({
  name: 'Signup',
  scenarios: [
    {
      name: 'Normal Sign Up',
      actions: [
        {
          type: 'Input',
          fields: ['Full name', 'Phone or Email', 'Password'],
        },
        {
          type: 'Click',
          button: 'Sign Up',
        },
      ],
      results: [
        {
          type: 'Error',
          message: 'Wrong Input',
          scene: 'Signup',
        },
        {
          type: 'Success',
          scene: 'AddPhoneNumber',
        },
      ],
    },
  ]
})

scene('Signup')
  .scenario('Normal Sign')
    .action('Enter', ['Full name', 'Phone or Email', 'Password'])
    .action('Click', 'Sign Up')
    .segue('AddPhoneNumber');
