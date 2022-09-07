import './styles.css';

const FuncionalComponent =({titulo, numero, booleano}) => {
    console.log(titulo);
    return (
<div className='test-css'>
    <h2 >
        Hola soy {titulo} {numero}
    </h2>
</div>
    );
}

export default FuncionalComponent;