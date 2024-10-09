import css from './ErrorMessage.module.css'
import React from 'react'

type Props = {
    error: string;
}

const ErrorMessage: React.FC<Props> = ({ error }) => <p className={css.error}>{error}</p>

export default ErrorMessage