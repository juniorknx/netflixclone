import { useState, useRef } from 'react';
import { FormContainer, FormTitle, FormGroup, FormButton, MessageContainer, Input } from './styles'

export function Subscribe({title}) {

    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('');
    const mailInput = useRef();

   async function handleSubmit(e){
        e.preventDefault();
        mailInput.current.value === '' ? setMessage('O email é obrigatório.') : setMessage('Mensagem Enviada com sucesso!');
        console.log(mail)
        setTimeout(()=>{
            setMessage('')
        }, 4000)
    }

    return (
        <FormContainer>
            <FormTitle>
                {title}
            </FormTitle>

            <FormGroup onSubmit={handleSubmit}>
                <Input
                    placeholder="E-mail"
                    type="email"
                    value={mail}
                    onChange={({ target }) => setMail(target.value)}
                    ref={mailInput}
                />

                <FormButton>
                    {'Vamos lá >'}
                </FormButton >
            </FormGroup>

            <MessageContainer>
                {message}
            </MessageContainer>
        </FormContainer>
    )
}