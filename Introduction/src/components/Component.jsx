function Component() {
    const nomes = ['Alex', 'Adenil', 'Adriana', 'João', 'Flamengo',]
    const idade = [22, 23, 24]

    return (
        <>
            <p>Alberto</p>
            <p>Cadu</p>
            {nomes.map((e, i) => (
                <p key={i}>{e} {idade[i]}</p>
            ))}
        </>
    )
}

export default Component;