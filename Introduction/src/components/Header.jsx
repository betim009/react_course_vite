function Header() {
    const nomes = ['Alex', 'Adenil', 'Adriana']
    const idade = [22, 23, 24]

    return (
        <>
            <p>Alberto</p>
            <p>Cadu</p>

            {nomes.map((e, i) => (
                <div key={e}>
                    <p>{e} {idade[i]}</p>
                </div>
            ))}

        </>
    )
}

export default Header;