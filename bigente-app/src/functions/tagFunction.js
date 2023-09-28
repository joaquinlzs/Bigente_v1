function randomTags() {
    const listaTags = ["PV", "Eólico", "Litio", "Gx", "Dx", "Tx", "ERNC", "SSCC", "EV"];
    const cantidad = Math.floor(Math.random() * 3) + 1;
    //const cantidad = 2;
    const tagsAleatorios = [];

    while (tagsAleatorios.length < cantidad) {
        const tagAleatorio = listaTags[Math.floor(Math.random() * listaTags.length)];
        if (!tagsAleatorios.includes(tagAleatorio)) {
            tagsAleatorios.push(tagAleatorio);
        }
    }

    return tagsAleatorios;
}

//console.log(randomTags())

export default randomTags;