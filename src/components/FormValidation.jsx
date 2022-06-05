import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({  
    email: yup
        .string()      
        .email('Неправильный email адрес')
        .required('Обязательное поле!'),
    password: yup
        .string()
        .required('Обязательное поле!')
        .min(4, 'Минимум 4 символа для заполнения')
  });

  
export const FormValidation = {
    defaultValues: {
        password: '',       
        email: '',          
      },
    resolver: yupResolver(schema),
    mode: 'onBlur'
}