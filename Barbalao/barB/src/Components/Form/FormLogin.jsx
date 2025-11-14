import styles from '../Css/styles.formL.module.css';
import { useState } from 'react';
import eye from '../../assets/eye-fill.svg';
import closedEye from '../../assets/eye-slash-fill.svg';

export default function Form( props ){
    const [showPassword, setShowPassword] = useState(false);

    function togglePassword() {
    setShowPassword(prev => !prev);
    }

  return (
    <form className={styles.formCont} action={props.action} onSubmit={e => e.preventDefault()}>
      <h1 className={styles.formTitle}>{props.title}</h1>

      <input
        onChange={props.onInputChange}
        className={styles.inputs}
        placeholder="Nome"
        name="nome"
        type="text"
      />

      <div className={styles.passwordCont}>
        <input
          onChange={props.onInputChange}
          className={styles.inputs}
          placeholder="Senha"
          name="senha"
          type={showPassword ? 'text' : 'password'}
        />

        <img
          className={styles.bi}
          src={showPassword ? closedEye : eye}
          onClick={togglePassword}
          alt="ver senha"
        />
      </div>

      <button
        className={styles.formBtn}
        type="button"
        onClick={props.click}
      >
        {props.btn}
      </button>

      <h5 className={styles.error}>{props.aContent}</h5>
    </form>
  );
}