import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";

export function useLoginForm() {

    const {handleSubmit, isSubmitting, submitCount} = useForm()

    const {value: email, errorMessage: eError, handleBlur: eBlur} = useField(
        'email',
        yup.string().trim().required('Введите email').email('Необходимо ввести коректный email')
    )
    const MIN_LENGTH = 6
    const {value: password, errorMessage: pError, handleBlur: pBlur} = useField(
        'password',
        yup.string().trim().required('Введите пароль').min(MIN_LENGTH, `Пароль не может быть меньше ${MIN_LENGTH} символов`)
    )

    const isTooManyAttempts = computed(() => submitCount.value >= 3)

    watch(isTooManyAttempts, value => {
        if (value) {
            setTimeout(() => submitCount.value = 0, 3000)
        }
    })

    const onSubmit = handleSubmit((values) => {
        console.log(values)

    })
    return {
        email,
        password,
        eError,
        pError,
        eBlur,
        pBlur,
        onSubmit,
        isSubmitting,
        isTooManyAttempts
    }
}