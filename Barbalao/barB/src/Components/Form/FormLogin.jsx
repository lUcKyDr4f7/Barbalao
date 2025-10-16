import styles from '../Css/styles.formL.module.css'

export default function Form( props ){

    /* p definir quantos inputs o form vai ter
        passar um array no props.type{[text, number, image, etc]}
        quando for definir os tipos dos inputs
        inputsRange = quantidade de inputs

        props.types = {["text", "password", ...]}
        props.placeholders = {["text", "password", ...]}
    */
    const inputList = []
    for(let i = 0; i <= props.inputsRange - 1; i++){

    inputList.push(
            <input key={i} 
                   className={styles.inputs} 
                   type={ props.types ? props.types[i] : "text" }
                   placeholder={ props.placeholders ? props.placeholders[i] : "Nome"}
                    onChange={e => props.onInputChange(i, e.target.value)} 
                   />
                 
       )
    }
    return <>
            <form className={styles.formCont} action={ props.action } onSubmit={e => e.preventDefault()}>
                <h1 className={styles.formTitle}>{ props.title }</h1>
                
                {inputList}

                <button className={styles.formBtn} 
                        type="button"
                        onClick={ props.click }>
                        { props.btn }

                </button>
                <a href={props.aLink}>{props.aContent}</a>
            </form>

    </>
}