import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login, sendOTP, reset } from '../features/auth/authSlice';
import { toast } from 'react-hot-toast';

export function LoginPage() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { email, password } = values;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, isSuccess, message } = useSelector((state) => state.auth);

  function handleSubmit(evt) {
    evt.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  useEffect(() => {
    if (isError) {
      toast.error("El email o contraseña son incorrectas");
    }

    if (isSuccess) {
      dispatch(sendOTP({ email, password }));
      toast.success("Se ha enviado el otp a tu correo.");
      navigate('/OTP-verification', {
      state: { email, password }
    });
    }

    dispatch(reset());
  }, [isError, isSuccess, email, password, dispatch]);

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">
          CryptoTradeExpress
        </h1>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Usuario"
          className="text-black w-full border p-2 mb-4 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="Contraseña"
          className="text-black w-full border p-2 mb-4 rounded-md focus:outline-none focus:border-blue-500"
        />
        {/* Estilo para el enlace de restablecer contraseña */}
        <Link to="/reset-password" className="text-blue-500 text-sm mb-4 block">¿Olvidaste tu contraseña?</Link>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
          >
            Iniciar sesión
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
            <Link to="/">Inicio</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
