
const search = $('.search')
const btnSearch = $('.btn__search')
const searchHistory = $('.search__history')
// nút next và prev slider
const listItemAll = $$('.list__song-item')
const listItemAllLength = listItemAll.length
const btnClickNext = $('.btn__next')
const btnClickNext2 = $('.btn__next-2')

const btnClickPrev = $('.btn__prev')
const btnClickPrev2 = $('.btn__prev-2')

const songList = $('.list__song-one')
const songList2 = $('.list__song-two')

let positionX = 0
let prevX = 0
let index = 0;
const listSongWidth = songList.offsetWidth
const listSongWidth2 = songList2.offsetWidth


const cover = {
    isPlaying: false,
    handleEvent: function() {
        const _this = this

        searchHistory.onmousedown = function(e) {
            e.preventDefault()
        }
        // xử lý nút next, prev slide
        // xử lý nút next

        btnClickNext.onclick = function() {
            _this.handleChangeSong(1)
        }
        btnClickNext2.onclick = function() {
            _this.handleChangeSong(2)
        }

        // xử lý nút prev
        btnClickPrev.onclick = function() {
            _this.handleChangeSong(-1)
        }

        btnClickPrev2.onclick = function() {
            _this.handleChangeSong(-2)
        }
    },

    handleChangeSong: function(direction) {
        if(direction === 1) {
            index++
            console.log(index)
            if(index >= 5) {
                btnClickNext.classList.add("inactives")
            } 
            btnClickPrev.classList.remove("inactives")
            positionX = positionX - listSongWidth
            songList.style = `transform: translateX(${positionX}px)`
        }

        else if(direction === -1) {
            index--
            if(index <= 0) {
                index = 0;
                btnClickPrev.classList.add("inactives")
            } else if (index < 5) {
                btnClickNext.classList.remove("inactives")
            }
            console.log(index)  
            positionX = positionX + listSongWidth
            songList.style = `transform: translateX(${positionX}px)`
        }

        else if(direction === 2) {
            index++
            console.log(index)
            if(index >= 5) {
                btnClickNext2.classList.add("inactives")
            } 
            btnClickPrev2.classList.remove("inactives")
            positionX = positionX - listSongWidth2
            songList2.style = `transform: translateX(${positionX}px)`
        }

        else if(direction === -2) {
            index--
            if(index <= 0) {
                index = 0;
                btnClickPrev2.classList.add("inactives")
            } else if (index < 5) {
                btnClickNext2.classList.remove("inactives")
            }
            console.log(index)  
            positionX = positionX + listSongWidth2
            songList2.style = `transform: translateX(${positionX}px)`
        }
    },

    handleEventClick: function() {
        if(playList.onclick) {
            musicBar.classList.add()
        }
    },

    start: function() {
        this.handleEvent()
    }
}

cover.start()