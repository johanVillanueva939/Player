function replaceSpaces(url) {
    return url.replace(/ /g, '%20');
}
export const playList = [
    {
        title: 'Tavern',
        artist: 'Netherwalker',
        img: 'assets/images/tavern.png',
        song: 'assets/audio/Tavern.mp3'
    },
    {
        title: 'Ya no se que hacer conmigo',
        artist: 'Cuarteto de NOS',
        img: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/cc/ac/fa/ccacfabe-5ba1-a997-f5f6-7cf5bcc674d8/8445162449762.jpg/300x300bb.webp',
        song: replaceSpaces('assets/audio/Ya_no_s_qu_hacer_conmigo.mp3')
    },
    {
        title: 'Rosa pastel',
        artist: 'Belanova',
        img: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/47/33/9a/47339ae3-67ad-96c1-7410-311c89343eb0/06UMGIM53035.rgb.jpg/316x316bb.webp',
        song: replaceSpaces('assets/audio/Belanova  Rosa Pastel Lyric Video.mp3')
    },
    {
        title: 'Siege Tower',
        artist: 'Curta´n wall',
        img: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/3f/ad/87/3fad8787-2ca3-35ae-8711-d8ef1801d172/artwork.jpg/316x316bb.webp',
        song: replaceSpaces('assets/audio/Siege Tower.mp3')
    },
    {
        title: 'Du hast',
        artist: 'Rammstein',
        img: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/78/af/45/78af45f6-e4e6-5681-c1f6-a20e3949ab8c/18UMGIM31237.rgb.jpg/300x300bb.webp',
        song: replaceSpaces('assets/audio/Rammstein  Du Hast Official 4K Video.mp3')
    },
]