const ERROR_CODES = {
    EMAIL_NOT_FOUND: 'Пользователь с такам email на был найден',
    MISSING_CUSTOM_TOKEN: 'Отсутствует специальный токен',
    INVALID_PASSWORD: 'Неверный пароль'
}

export function error(code){
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка!'
}