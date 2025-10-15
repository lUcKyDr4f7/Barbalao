import styles from '../Css/styles.formL.module.css'

export default function Form( props ){

    /* p definir quantos inputs o form vai ter ** passe um array {text, number, image, etc}
        quando for definir os tipos dos inputs
        inputsRange = quantidade de inputs
    */
    const inputList = []
    for(let i = 0; i <= props.inputsRange - 1; i++){

    inputList.push(
            <input key={i} 
                   className={styles.inputs} 
                   type={ props.types ? props.types[i] : "text" }
                   placeholder={ props.placeholders ? props.placeholders[i] : "Nome"} />

       )
    }
    return <>
            <form className={styles.formCont} action={ props.action }>
                <h1 className={styles.formTitle}>{ props.title }</h1>
                {inputList}

                <button className={styles.formBtn} 
                        type="button"
                        onClick={ props.click }>
                            { props.btn }

                </button>
            </form>

    </>
}