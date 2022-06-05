import * as React from 'react';
import { useForm, Controller } from "react-hook-form";

import { Box, Button, TextField } from '@mui/material';

import { FormValidation } from './FormValidation';

import './style.scss'

function Form({ title, handleClick }) {
    
    const { control, handleSubmit, formState: { errors, isValid }, reset } = useForm(FormValidation);
    
    const onSubmit = data => {
      const { email, password } = data
      console.log(data);
      handleClick(email, password)
      reset()
  }
    
  return (
    <>
      <Box onSubmit={handleSubmit(onSubmit)}        
        component="form"
        sx={{
          '& > :not(style)': { width: '25ch', display: 'block', m: '30px auto' }, 
        }}
        noValidate
        autoComplete="off"
      >       
          <Controller
              name="email"
              control={control}
              render={({ field }) => <TextField              
                error={errors.email ? true : false}
                label="email" 
                variant='outlined'
                type='email'
                placeholder='email'
                helperText={errors.email?.message}
                {...field} />
              }
          />        
          <Controller
              name="password"
              control={control}
              render={({ field }) => <TextField
                error={errors.password ? true : false}
                label="password" 
                variant="outlined"
                type='password'
                placeholder='password'
                helperText={errors.password?.message}
                {...field} />}
          />              
          <Button disabled={!isValid} className='submitbutton' type="submit">{title}</Button>
      </Box>     
    </>
  );
}

export { Form };



// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { Button } from '@mui/material';
// //import { FormControl, Input, InputLabel, FormHelperText } from '@mui/material';

// function Form({ title, handleClick }) {

//     const [email, setEmail] = React.useState('');
//     const [pass, setPass] = React.useState('');
//     // const hhh = false
   
//   return (
//     <>
//       <Box
//         component="form"
//         sx={{
//           '& > :not(style)': { m: 3, width: '25ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <TextField
//           //  error={true}
//               // sx={{
//               //   '.MuiFormHelperText-root': { color: 'red' },
//               // }}                             
//               label="email" 
//               variant='outlined'
//               type='email'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder='email'
//               // helperText={ hhh ? "Incorrect entry" : ''} 
//           />
                
//         <TextField 
//               label="password" 
//               variant="outlined"
//               type='password'
//               value={pass}
//               onChange={(e) => setPass(e.target.value)}
//               placeholder='password' 
//           />
//         {/* <FormControl>
//           <InputLabel htmlFor="my-input">email</InputLabel>
//           <Input id="my-input"/>
//           <FormHelperText id="my-helper-text">We'll never share your email</FormHelperText>
//         </FormControl> */}
//       </Box>
//       <Button disabled={false} onClick={() => handleClick(email, pass)}>{title}</Button> 
     
//     </>
//   );
// }

// export { Form };