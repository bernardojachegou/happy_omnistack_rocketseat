import React from 'react';
import { AppButton } from './styles.js'

interface ButtonProps extends React.HtmlHTMLAttributes<ButtonProps> {
    text: string,
    type?: 'submit' | 'reset' | 'button',
}

export default function Button(props: ButtonProps) {
    return (
        <AppButton type={props.type}>
            {props.text}
        </AppButton>
    )
}