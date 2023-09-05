import Details from "./Details";
import Title from "./Title";

function HelloWorld() {

    const name = 'Alberto Fernandes Couto';
    const birth = '07/09/1995'; // mês/dia/ano
    const age = calculateAge(birth);

    // Função para calcular a idade com base na data de nascimento
    function calculateAge(birthday) {
        // Convertendo a string da data de nascimento em um objeto Date
        const birthDate = new Date(birthday);

        // Obtendo a data atual
        const today = new Date();

        // Calculando a idade subtraindo o ano de nascimento do ano atual
        let age = today.getFullYear() - birthDate.getFullYear();

        // Verificando se o aniversário deste ano já ocorreu
        if (
            today.getMonth() < birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
        ) {
            // Se o aniversário ainda não ocorreu este ano, subtrai 1 da idade
            age--;
        }

        // Retornando a idade calculada
        return age;
    }

    return (
        <>
            <h1 style={{ color: 'green', textAlign: 'center' }}>{name}</h1>
            <p>{`Age ${age}`}</p>
            <Title />
            <Details />
        </>
    )
}

export default HelloWorld;