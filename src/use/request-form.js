import {useField, useForm} from "vee-validate";
import * as yup from "yup";

export function useRequestForm(submitForm){
    const {handleSubmit, isSubmitting} = useForm({
        initialValues:{
            status: 'active'
        }
    })

    const {value: fullName, errorMessage: fError, handleBlur: fBlur} = useField(
        'fullName',
        yup.string().trim().required('Введите ФИО клиента')
    )
    const {value: phone, errorMessage: pError, handleBlur: pBlur} = useField(
        'phone',
        yup.string().trim().required('Введите номер телефона')
    )
    const {value: amount, errorMessage: aError, handleBlur: aBlur} = useField(
        'amount',
        yup.number().required('Введите сумму').min(0,'Сумма не может быть меньше 0')
    )
    const {value: status, errorMessage: statusError, handleBlur: statusBlur} = useField(
        'status',
        yup.string().trim().required()
    )


    const onSubmit = handleSubmit(submitForm)

    return {
        fullName, fError, fBlur,
        phone, pError, pBlur,
        amount, aError, aBlur,
        status, statusError, statusBlur,
        onSubmit,
        isSubmitting
    }
}