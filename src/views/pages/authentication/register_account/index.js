import { useState } from "react";
import { z } from "zod";
import { TextField, Button, Box, FormControl, InputAdornment, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const registerSchema = z.object({
    name: z.string().nonempty({ message: 'O nome é requerido' }),
    email: z.string().email({ message: 'E-mail inválido' }),
    password: z.string().min(8, { message: 'Deve possuir no minimo 8 caracteres' }),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
});

function RegisterAccount() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [hasErrors, setHasErrors] = useState(true);

    const handleToggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleToggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            if (name === 'password') {
                return {
                    ...prev,
                    [name]: value,
                    confirmPassword: '',
                }
            }

            return {
                ...prev,
                [name]: value,
            }
        });

        const validation = registerSchema.safeParse({ ...formData, [name]: value });

        if (validation.success) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
            setHasErrors(false);
            console.log("sucess ", errors);
        } else {
            const newErrors = validation.error.flatten().fieldErrors;
            setErrors((prev) => ({ ...prev, [name]: newErrors[name]?.[0] || '' }));
            setHasErrors(true);
            console.log("error ", validation.error.issues);
        }
    };

    const handleClear = (field) => {
        setFormData((prev) => ({ ...prev, [field]: '' }));
        setErrors((prev) => ({ ...prev, [field]: '' }));
        handleChange({ target: { name: field, value: '' } });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validation = registerSchema.safeParse(formData);
        if (validation.success) {
            console.log('Form submitted successfully:', validation.data);
        } else {
            console.log('Form with errors:', errors);
        }
    }

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate>
            <div>
                <h1>Criar Conta</h1>
                <p>Insira suas informações de cadastro abaixo:</p>
            </div>
            <FormControl fullWidth error={!!errors.name} margin="normal">
                <TextField
                    label="Nome do usuário"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    fullWidth
                    InputProps={{
                        endAdornment: formData.name && (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="clear input"
                                    onClick={() => handleClear('name')}
                                    edge="end"
                                >
                                    <ClearIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </FormControl>

            <FormControl fullWidth error={!!errors.email} margin="normal">
                <TextField
                    label="E-mail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    fullWidth
                    InputProps={{
                        endAdornment: formData.email && (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="clear input"
                                    onClick={() => handleClear('email')}
                                    edge="end"
                                >
                                    <ClearIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </FormControl>

            <FormControl fullWidth error={!!errors.password} margin="normal">
                <TextField
                    label="Senha"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={!!errors.password}
                    helperText={errors.password}
                    fullWidth
                    InputProps={{
                        endAdornment: formData.password && (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Mostrar senha"
                                    onClick={handleToggleShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </FormControl>

            <FormControl fullWidth error={!!errors.confirmPassword} margin="normal">
                <TextField
                    label="Confirmar senha"
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
                    fullWidth
                    InputProps={{
                        endAdornment: formData.confirmPassword && (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Mostrar confirmação de senha"
                                    onClick={handleToggleShowConfirmPassword}
                                    edge="end"
                                >
                                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </FormControl>

            <Button type="submit" variant="contained" color="primary" fullWidth disabled={hasErrors}>
                Criar conta
            </Button>
        </Box>
    )
}


export default RegisterAccount;