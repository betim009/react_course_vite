function Header() {
    const firstName = 'Alberto';
    const lastName = 'Couto';

    function luckyNumber() {
        const number = Math.floor(Math.random() * 60 + 1);
        return number;
    }

    return (
        <>
            <h1 className="greeting">
                Olá {`${firstName} ${lastName}`}
            </h1>
            <img src="https://i.imgur.com/rqvLd3q.png" alt="trevo" />

            <h2 className="subtitle">Seus números da sorte da Mega-Sena são:</h2>
            <ul>
                <li>{luckyNumber()}</li>
                <li>{luckyNumber()}</li>
                <li>{luckyNumber()}</li>
                <li>{luckyNumber()}</li>
                <li>{luckyNumber()}</li>
                <li>{luckyNumber()}</li>
            </ul>
        </>
    )
}

export default Header;