import * as yup from "yup";
import React from "react";

import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";
import { Link as NodeLink } from "react-router-dom";

import SendIcon from "@mui/icons-material/Send";

import Form from "../../components/Form";
import Input from "../../components/Input";
import usePostAPI from "../../hooks/usePostAPI";
import InputPass from "../../components/InputPass";
import ButtonCommon from "../../components/ButtonCommon";
import InputIdentityDocument from "../../components/InputIdentityDocument";
import DatePickerForm from "../../components/DatePickerForm";

const FormCustom = styled(Form)(({ theme }) => ({
  width: "100%",
  maxWidth: 370,
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    maxWidth: "auto",
  },
}));

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(3, "debe tener al menos 6 caracteres")
    .required("El campo es requerido"),
  password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("El campo es requerido"),
  email: yup
    .string()
    .trim()
    .email("Este email es invalido")
    .required("El campo es requerido"),
  lastName: yup
    .string()
    .trim()
    .min(3, "debe tener al menos 3 caracteres")
    .required("El campo es requerido"),
  identityDocument: yup
    .number()
    .positive("el valor ingresado debe de ser positivo")
    .required("El campo es requerido"),
  birthdate: yup.date().required("El campo es requerido"),
});

const FormSignup = ({ onSave, token, ...props }) => {
  const { request, loading, status, error } = usePostAPI({
    url: "/users",
    headers: { Authorization: `Bearer ${token}` },
    method: "POST",
  });

  const onSubmit = async function (values) {
    const res = await request(values);
    if (!res) {
      return;
    }

    if (onSave) {
      onSave(res);
    }
  };
  return (
    <FormCustom disabled={loading} schema={schema} onSubmit={onSubmit}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            Registrar Usuario Administrador
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Input
            name="name"
            label="Nombre"
            type="text"
            errors={status === 422 && error.errors}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            name="lastName"
            label="Apellido"
            type="text"
            errors={status === 422 && error.errors}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            name="email"
            type="email"
            label="Correo electronico"
            errors={status === 422 && error.errors}
          />
        </Grid>
        <Grid item xs={12}>
          <InputIdentityDocument
            name="identityDocument"
            label="Cédula de Identidad"
            errors={status === 422 && error.errors}
          />
        </Grid>
        <Grid item xs={12}>
          <InputPass
            name="password"
            label="Contraseña"
            errors={status === 422 && error.errors}
          />
        </Grid>
        <Grid item xs={12}>
          <DatePickerForm
            name="birthdate"
            label="Fecha de Nacimiento"
            errors={status === 422 && error.errors}
          />
        </Grid>
        {status === 401 && error && (
          <Grid item xs={12}>
            <Typography variant="body2" color="error">
              Lo siento no tienes los permisos necesarios para poder registrar
              un usuario
            </Typography>
          </Grid>
        )}
        {status == 500 && error && (
          <Grid item xs={12}>
            <Typography variant="body2" color="error">
              Ha ocurrido un error inhesperado, por favor contacte al proveedor
            </Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <ButtonCommon type="submit" fullWidth endIcon={<SendIcon />}>
            Crear Usuario
          </ButtonCommon>
        </Grid>
      </Grid>
    </FormCustom>
  );
};

export default FormSignup;
