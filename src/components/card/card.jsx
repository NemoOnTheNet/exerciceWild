import './card.scss'

const Card = () => {
    return (
        <>
            <article>
                <img src="https://wikimon.net/images/9/93/Agumon_New_Century.png" alt="Agumon" />
                <h1>Agumon</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus numquam sed iure natus veritatis rerum blanditiis ipsum exercitationem! Minus, ratione beatae reprehenderit totam culpa blanditiis?</p>
                <section className='digivolution'>
                    <a href="https://static.wikia.nocookie.net/digimon/images/8/86/Greymon_t.gif/revision/latest/scale-to-width-down/184?cb=20090214125054">Greymon</a>
                    <a href="https://static.wikia.nocookie.net/digimon/images/b/b5/MetalGreymon_t.gif/revision/latest?cb=20131009105527">MetalGreymon</a>
                </section>
            </article>
        </>
    );
}

export default Card;