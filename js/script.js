import { playList } from './songs';

const audio = document.getElementById('audio')
const forward = document.getElementById('forward')
const rewind = document.getElementById('rewind')
const stop = document.getElementById('stop')
const previus = document.getElementById('previus')
const next = document.getElementById('next')

let currentIndex = 0
window.addEventListener('DOMContentLoaded', makeplayList(playList[currentIndex]))

rewind.addEventListener('click', () => audio.currentTime -= 10)
forward.addEventListener('click', () => audio.currentTime += 10)
stop.addEventListener('click', () => {
    audio.pause()
    audio.currentTime = 0
})

previus.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + playList.length) % playList.length; 
    makeplayList(playList[currentIndex]);
});

next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % playList.length; 
    makeplayList(playList[currentIndex]);
});

function makeplayList(playList){

    const container_album = document.createElement('div')
    container_album.classList.add('container_album')

    const player_img = document.createElement('img')
    player_img.src = playList.img
    player_img.alt = playList.song

    const player_song = document.createElement('h2')
    player_song.classList.add('player_song')

    const player_artist = document.createElement('h3')
    player_artist.classList.add('player_artist')

    container_album.appendChild(player_img)
    container_album.appendChild(player_song)
    container_album.appendChild(player_artist)

    document.getElementById('sections').appendChild(container_player)

    const playerContainer = document.querySelector("h1")
    playerContainer.innerHTML = "" 
    playerContainer.appendChild(container)
}