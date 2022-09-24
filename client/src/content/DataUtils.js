const getImages = () => {
    let images = [
        {
            src: `https://source.unsplash.com/random/500x500?sig=${Math.floor(Math.random() * 999)}`,
            height: 500,
            author: 'Awesome'
        }, {
            src: `https://source.unsplash.com/random/500x400?sig=${Math.floor(Math.random() * 999)}`,
            height: 400,
            author: 'Awesome'
        }, {
            src: `https://source.unsplash.com/random/500x700?sig=${Math.floor(Math.random() * 999)}`,
            height: 700,
            author: 'Awesome'
        }, {
            src: `https://source.unsplash.com/random/500x250?sig=${Math.floor(Math.random() * 999)}`,
            height: 250,
            author: 'Awesome'
        }, {
            src: `https://source.unsplash.com/random/500x800?sig=${Math.floor(Math.random() * 999)}`,
            height: 800,
            author: 'Awesome'
        }, {
            src: `https://source.unsplash.com/random/500x500?sig=${Math.floor(Math.random() * 999)}`,
            height: 500,
            author: 'Awesome'
        }, {
            src: `https://bafybeidge37zjygas54nhiadcnuhzmbzwpkqalqucjwinhm7g5sallxcd4.ipfs.nftstorage.link/1.png`,
            height: 500,
            author: 'Awesome'
        }
    ]
    return images;
}

export default getImages;

// tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/");