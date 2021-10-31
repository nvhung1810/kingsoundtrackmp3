const app3 = {
    currentIndex:0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs3: [
        {
            name: "Thương",
            singer: "Karik, Uyên Pím",
            path: './karik/Thuong-KarikUyenPim-4318397.mp3',
            image: './img/1593412376912_600 (1).jpg',
            numberLike: "1.30M",
        },
        {
            name: "Từng Là Tất Cả",
            singer: "Karik",
            path: './karik/TungLaTatCa-Karik-4582366.mp3',
            image: './img/1593412376912_600 (1).jpg',
            numberLike: "1.31M",
        },
        {
            name: "Khóc Một Mình",
            singer: "Karik, Windy Quyên",
            path: './karik/KhocMotMinh-KarikWindyQuyen-4725531.mp3',
            image: './img/1593412376912_600 (1).jpg',
            numberLike: "1.32M",
        },
        {
            name: "Cạn cả nước mắt",
            singer: "Karik, Thái Trinh",
            path: './karik/CanCaNuocMat-KarikThaiTrinh-4452295.mp3',
            image: './img/1593412376912_600 (1).jpg',
            numberLike: "1.30M",
        },
        {
            name: "Anh Không Đòi Quà",
            singer: "Karik, Only C",
            path: './karik/AnhKhongDoiQua-KarikOnlyC-2855777.mp3',
            image: './img/1593412376912_600 (1).jpg',
            numberLike: "1.30M",
        },
        {
            name: "Ala Ela",
            singer: "Karik, G Ducky, Ricky Star",
            path: './karik/AlaElaFeatGduckyRickyStarKarik-RAPVIET-6821319.mp3',
            image: './img/1593412376912_600 (1).jpg',
            numberLike: "1.30M",
        },
        {
            name: "Đau Vậy Đủ Rồi",
            singer: "Karik, Vũ Phụng Tiên",
            path: './karik/DauVayDuRoi-KarikVuPhungTien-6289716.mp3',
            image: './img/1593412376912_600 (1).jpg',
            numberLike: "1.30M",
        },
        
    ],

    render: function () {
        const htmls = this.songs3.map((song, index) => {
            return `
            <div class="song__list-item-song-info" data-index = "${index}">
                <div class="song__list-des">${song.name}</div>
                <div class="song__list-des-listened">
                    <i class="song__list-icon fas fa-caret-right"></i>
                    <div class="song__list-des">${song.numberLike}</div>
                </div>
            </div>
            `
        })
        
        playList3.innerHTML = htmls.join('')
    },
    
   
    // định nghĩa thuộc tính
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs3[this.currentIndex]
            }
        })
    },

    // xử lý sự kiện
    handleEvent: function () {
        const _this = this
        // xử lý quay/ dừng cdThumb
        const cdThumbAnimate = cdThumb.animate([
            {
                transform: 'rotate(360deg)'
            }
        ], {
            duration: 10000,
            iterations: Infinity
        })

        cdThumbAnimate.pause()


        // xử lý click vô bài hát ở ul để chạy
        playList3.onclick = function (e) {
            const songNode = e.target.closest('.song__list-item-song-info')
            _this.render()
            if (songNode) {
                _this.currentIndex = Number(songNode.dataset.index)
                _this.loadCurrentSong()
                _this.render()
                audio.play()
                
                // khi song được pause 
                audio.onpause = function () {
                    _this.isPlaying = false
                    player.classList.remove("playing")
                    cdThumbAnimate.pause()
                }
    
                // khi song được play 
                audio.onplay = function () {
                    _this.isPlaying = true
                    player.classList.add('playing')
                    cdThumbAnimate.play()
                }
            }
            btnNext.onclick = function() {
                if (_this.isRandom) {
                    _this.playRandomSong()
                }   else {
                    _this.nextSong()
                }
                audio.play()
            }
    
            // lắng nghe nút quay lại
            btnPrev.onclick = function() {
                if (_this.isRandom) {
                    _this.playRandomSong()
                }   else {
                    _this.prevSong()
                }
                audio.play()
            }
           
        }

        // xử lý lấy phát nhạc
        playBtn.onclick = function () {
            if(_this.isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }

            // khi song được pause 
            audio.onpause = function () {
                _this.isPlaying = false
                player.classList.remove("playing")
                cdThumbAnimate.pause()
            }

            // khi song được play 
            audio.onplay = function () {
                _this.isPlaying = true
                player.classList.add('playing')
                cdThumbAnimate.play()
            }
        }

        // Xử lý khi tua nhạc
        progress.onchange = function (e) {
            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime
            console.log(currentTime)
        }

         // khi tiến độ bài hát thay đổi 
         audio.ontimeupdate = function () {
            if(audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }

        btnRandom.onclick = function() {
            _this.isRandom = !_this.isRandom
            btnRandom.classList.toggle('active', _this.isRandom)
        }
        
        //  xử lý khi hết bài hát
        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play()
            } else {
                btnNext.click()
            }
        }

        // xử lý lạp lại bài hát
        btnRepeat.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            btnRepeat.classList.toggle('active', _this.isRepeat)
        }
        

    },

    // load ra bài nhạc hiện tại
    loadCurrentSong: function () {
        nameSong.textContent = this.currentSong.name
        desSong.textContent = this.currentSong.singer
        imgSong.src = this.currentSong.image
        audio.src = this.currentSong.path
    },

    // next bài hát
    nextSong: function() {
        this.currentIndex++
        if (this.currentIndex >= this.songs3.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },

    // prev bài hát
    prevSong: function() {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs3.length - 1
        }
        this.loadCurrentSong()
    },

    // random bài hát
    playRandomSong: function() {
        let newIndex 
        do {
            newIndex = Math.floor(Math.random() * this.songs3.length)
        }   while (newIndex === this.currentIndex)

        this.currentIndex = newIndex
        this.loadCurrentSong()
    },

    start: function() {
        // định nghĩa các thuộc tính
        this.defineProperties()

        // xử lý sự kiện
        this.handleEvent()

        // load currentSong( trả về bài hát hiện tại)
        this.loadCurrentSong()

        // render list nhạc 1
        this.render()
    }
}

app3.start()