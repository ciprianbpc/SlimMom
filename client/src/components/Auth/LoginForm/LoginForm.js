import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.scss';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // TODO: Implement login logic with Redux
      console.log('Login data:', data);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-form">
      <h2 className="login-form__title">Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form__form">
        <div className="login-form__field">
          <label htmlFor="email" className="login-form__label">
            Email *
          </label>
          <input
            id="email"
            type="email"
            className={`login-form__input ${errors.email ? 'login-form__input--error' : ''}`}
            {...register('email')}
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="login-form__error">{errors.email.message}</span>
          )}
        </div>

        <div className="login-form__field">
          <label htmlFor="password" className="login-form__label">
            Password *
          </label>
          <input
            id="password"
            type="password"
            className={`login-form__input ${errors.password ? 'login-form__input--error' : ''}`}
            {...register('password')}
            placeholder="Enter your password"
          />
          {errors.password && (
            <span className="login-form__error">{errors.password.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="login-form__submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Signing in...' : 'Sign In'}
        </button>

        <p className="login-form__register">
          Don't have an account?{' '}
          <Link to="/register" className="login-form__link">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
