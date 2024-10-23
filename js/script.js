import { playList } from './songs.js'

const audio = document.getElementById('audio')
const forward = document.getElementById('forward')
const rewind = document.getElementById('rewind')
const stop = document.getElementById('stop')
const previous = document.getElementById('previous')
const next = document.getElementById('next')
let currentIndex = 0

window.addEventListener('DOMContentLoaded', () => makePlayList(playList[currentIndex]))

rewind.addEventListener('click', () => audio.currentTime -= 10)
forward.addEventListener('click', () => audio.currentTime += 10)
stop.addEventListener('click', () => {
    audio.pause()
    audio.currentTime = 0
})
previous.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + playList.length) % playList.length
    makePlayList(playList[currentIndex])
    audio.play()
})

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % playList.length
    makePlayList(playList[currentIndex])
    audio.play()
})

audio.addEventListener('ended', () => {
    currentIndex = (currentIndex + 1) % playList.length
    makePlayList(playList[currentIndex])
    audio.play()
})

function makePlayList(song) {
    const container_album = document.createElement('div')
    container_album.classList.add('container_album')

    const player_img = document.createElement('img')
    player_img.src = song.img
    player_img.alt = song.song

    const player_song = document.createElement('h2')
    player_song.classList.add('player_song')
    player_song.innerText = song.title

    const player_artist = document.createElement('h3')
    player_artist.classList.add('player_artist')
    player_artist.innerText = song.artist

    container_album.appendChild(player_img)
    container_album.appendChild(player_song)
    container_album.appendChild(player_artist)

    const h1 = document.querySelector('h1')
    h1.innerHTML = ''
    h1.appendChild(container_album)

    audio.src = song.song; 
    audio.load
}
