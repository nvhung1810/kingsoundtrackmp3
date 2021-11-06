const app2 = {
    currentIndex:0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs2: [
        {
            name: "Trái Đất Này",
            singer: "Dế CHoắt, BOkeh",
            path: '.song/song_rap/TraiDatNay-DeChoatBOkeh-6672839.mp3',
            image: './img/090513_rap_viet___thi_sinh_de_choat_va_bokeh.jpg'
        },
        {
            name: "Đây Là Rap Việt",
            singer: "Rhymastic, JustaTee, Wowy, Karik, Binz, Suboi",
            path: './song/song_rap/day_la_rap_viet.mp3',
            image: './img/1602236499800_640.jpg'
        },
        {
            name: "Đây Là Rap Việt 2",
            singer: "Rhymastic, JustaTee, Wowy, Karik, Binz, LK",
            path: './song/song_rap/day_la_rap_viet_2.mp3',
            image: './img/80c5df5d70eb495406f51c8886242a6f.500x500x1.jpg'
        },
        {
            name: "EYES",
            singer: "G Ducky",
            path: './song/song_rap/eyes.mp3',
            image: './img/doi_mat.jpg'
        },
        {
            name: "Anh Vẫn Okey",
            singer: "MCK",
            path: './song/song_rap/anh_van_okey.mp3',
            image: './img/1600736000_600.jpg'
        },
        {
            name: "Dân Chơi Xóm",
            singer: "MCK, JustaTee",
            path: './song/song_rap/dan_choi_xom.mp3',
            image: './img/maxresdefault (7).jpg'
        },
        {
            name: "Sài Gòn Có Em",
            singer: "Black Ka",
            path: './song/song_rap/sai_gon_dep_lam.mp3',
            image: './img/loi-bai-hat-sai-gon-co-em-700.jpg'
        },
        {
            name: "Giàu Vì Bạn Sang Vì Vợ",
            singer: "MCK",
            path: './song/song_rap/giau_vi_ban_sang_vi_vo.mp3',
            image: './img/maxresdefault (8).jpg'
        },
        {
            name: "Vì Em So Đẹp & Gu Của Anh Là Châu Á",
            singer: "Thành Draw, Yuno BigBoi",
            path: './song/song_rap/gu_cua_anh_la_chau_a_vi_em_so_dep.mp3',
            image: './img/maxresdefault (3).jpg'
        },
        {
            name: "Katy",
            singer: "Gonzo",
            path: './song/song_rap/katy.mp3',
            image: './img/gonzo-la-ai-tieu-su-su-nghiep-tinh-yeu-nam-sinh-cua-nam-rapper-0f32a562.jpg'
        },
        {
            name: "Mình Đồng da sắt",
            singer: "Tez",
            path: './song/song_rap/minh_dong_da_sat.mp3',
            image: './img/bfx7.jpg'
        },
        {
            name: "Tình... Hình Thời Tiết",
            singer: "Tlinh VS Ak49 VS Hà Quốc Hoàng",
            path: './song/song_rap/tinh_hinh_thoi_tiet.mp3',
            image: './img/artworks-dGbiuwPrIc9KqYAb-J3HyaQ-t500x500.jpg'
        },
        // Dế choắt : 9d61aa0485a7fd21b364f0ed97907a45.jpg
        {
            name: "Chú Bé Loắt Choắt",
            singer: "Dế Choắt",
            path: './song/song_rap/ChuBeLoatChoatFeatDeChoat-RAPVIET-6727146.mp3',
            image: './img/9d61aa0485a7fd21b364f0ed97907a45.jpg'
        },
        // TLinh : ltinh-16013108051571141895299.jpg
        {
            name: "Chú Chó Trên Ô Tô",
            singer: "TLinh",
            path: './song/song_rap/ChuChoTrenOToFeatTlinh-RAPVIET-6804703.mp3',
            image: './img/ltinh-16013108051571141895299.jpg'
        },
        // ricky star: ricky-star-p-16056801155631736637449.png
        {
            name: "Con Nhà Người Ta",
            singer: "Ricky Star",
            path: './song/song_rap/ConNhaNguoiTaFeatRickyStar-RAPVIET-6801872.mp3',
            image: './img/ricky-star-p-16056801155631736637449.png'
        },
        // yuno : 113964768-3366032790124319-158-6847-6904-.jpg
        {
            name: "Dám Hay Không Dám",
            singer: "Yuno BigBoi",
            path: './song/song_rap/DamHayKhongDamFeatYunoBigboi-RAPVIET-6727152.mp3',
            image: './img/113964768-3366032790124319-158-6847-6904-.jpg'
        },
        {
            name: "?",
            singer: "Ricky Star",
            path: './song/song_rap/FeatDeChoat-RAPVIET-6804708.mp3',
            image: './img/9d61aa0485a7fd21b364f0ed97907a45.jpg'
        },
        {
            name: "Hy Vọng",
            singer: "Ricky Star",
            path: './song/song_rap/HyVongFeatRptGonzo-RAPVIET-6804704.mp3',
            image: './img/gonzo-la-ai-tieu-su-su-nghiep-tinh-yeu-nam-sinh-cua-nam-rapper-0f32a562.jpg'
        },
        {
            name: "May",
            singer: "MCk, Yuno BigBoi, Duy Andy",
            path: './song/song_rap/MayFeatRptMckDuyAndyYunoBigboi-RAPVIET-6755783.mp3',
            image: './img/may.jpg'
        },
        {
            name: "Nhà Bao Việc",
            singer: "R-Tee",
            path: './song/song_rap/NhaBaoViecFeatRtee-RAPVIET-6747960.mp3',
            image: './img/rtee-p-16039487225551035203271.png'
        },
        {
            name: "Ở Nhà Quê Mới Lên",
            singer: "Lăng LD",
            path: './song/song_rap/ONhaQueMoiLenFeatLangLd-RAPVIET-6801873.mp3',
            image: './img/1614651534276_600.jpg'
        },
        {
            name: "Rằm Tháng 7",
            singer: "R-Tee",
            path: './song/song_rap/RamThang7FeatRtee-RAPVIET-6821163.mp3',
            image: './img/rtee-p-16039487225551035203271.png'
        },
        {
            name: "Rồng Rắn Lên Mây",
            singer: "Thành Draw",
            path: './song/song_rap/RongRanLenMayFeatThanhDraw-RAPVIET-6748044.mp3',
            image: './img/thanh-draw-c-1605531666245702737858.png'
        },
        {
            name: "Thành Thật",
            singer: "Thành Draw",
            path: './song/song_rap/ThanhThatFeatThanhDraw-RAPVIET-6804705.mp3',
            image: './img/thanh-draw-c-1605531666245702737858.png'
        },
        {
            name: "Tiền Nhiều Để Làm Gì",
            singer: "G Ducky",
            path: './song/song_rap/TienNhieuDeLamGi2-GDucky-6737970.mp3',
            image: './img/gducky-p-1605527150113946908577.png'
        },
        {
            name: "Va Vào Giai Điệu Này",
            singer: "MCK",
            path: './song/song_rap/VaVaoGiaiDieuNayFeatRptMck-RAPVIET-6804702.mp3',
            image: './img/1600736000_600.jpg'
        },
    ],

    render: function () {
        const htmls = this.songs2.map((song, index) => {
            return `
            <li class="list__song-item ${index === this.currentIndex ? 'playing' : ''}" data-index = "${index}">
                <div class="list__song-link">
                        <img src="${song.image}" 
                        alt="" class="list__song-item-img" >
                        <div class="list__song-click">
                        <div class = "click__toggle-song">  
                            <div class="click-toggle-play click" data-number = ${index}>
                                <i class="click__icon-pause fas fa-pause"></i>
                                <i class="click__icon-play fas fa-play"></i>
                            </div>
                        </div>
                            <i class="list__song-icon-like fas fa-heart"></i>
                            <i class="list__song-icon-property fas fa-ellipsis-h"></i>
                        </div>
                    <a href = "" class="list__song-item-name">${song.name}</a>
                <div>
                <span class="list__song-item-des">${song.singer}</span>
                <div class="icon__utilities-wrap">
                    <div class="icon__utilities">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyMHYyMEgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9InJnYigzNCwgMzQsIDM0KSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNCA5aDEwdjJINFY5em0wIDRoMTB2Mkg0di0yem0wLThoOHYySDRWNXptMTAtNGw0IDMtNCAzVjF6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=" 
                        alt="" class="icon__utilities-icon">
                        <span class="icon__utilities-text">Add to Next up</span>
                    </div>
                    <div class="icon__utilities icon__utilities-fix">
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyI+DQogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjAuMyAoNzg5MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+DQogICAgPHRpdGxlPkdyb3VwPC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZGVmcy8+DQogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+DQogICAgICAgIDxnIGlkPSJhZGQtdG8tcGxheWxpc3QiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIGZpbGw9InJnYigzNCwgMzQsIDM0KSI+DQogICAgICAgICAgICA8cGF0aCBkPSJNMTIsMyBMMTIsMSBMMTQsMSBMMTQsMyBMMTYsMyBMMTYsNSBMMTQsNSBMMTQsNyBMMTIsNyBMMTIsNSBMMTAsNSBMMTAsMyBMMTIsMyBaIE0wLDMgTDAsNSBMOCw1IEw4LDMgTDAsMyBaIE0wLDcgTDAsOSBMMTAsOSBMMTAsNyBMMCw3IFogTTAsMTEgTDAsMTMgTDEwLDEzIEwxMCwxMSBMMCwxMSBaIiBpZD0iUmVjdGFuZ2xlLTIwIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIi8+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4NCg=="
                        alt="" class="icon__utilities-icon">
                        <span class="icon__utilities-text">Add to Next up</span>
                    </div>
                </div>
            </li>
            `
        })
        
        playList2.innerHTML = htmls.join('')
    },
    
   
    // định nghĩa thuộc tính
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs2[this.currentIndex]
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
        playList2.onclick = function (e) {
            const songNode = e.target.closest('.click__icon-play')
            const itemSong = e.target.closest('.list__song-item')
            const btnClickToggle = e.target.closest('.click-toggle-play')
            console.log(btnClickToggle)
            _this.render()
            if (songNode || btnClickToggle || itemSong) {
                _this.currentIndex = Number(btnClickToggle.getAttribute('data-number'))
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

        // lắng nghe nút next

        // btnNext.onclick = function() {
        //     if (_this.isRandom) {
        //         _this.playRandomSong()
        //     }   else {
        //         _this.nextSong()
        //     }
        //     audio.play()
        // }

        // // lắng nghe nút quay lại
        // btnPrev.onclick = function() {
        //     if (_this.isRandom) {
        //         _this.playRandomSong()
        //     }   else {
        //         _this.prevSong()
        //     }
        //     audio.play()
        // }

        // lắng nghe nút random
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
        if (this.currentIndex >= this.songs2.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },

    // prev bài hát
    prevSong: function() {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs2.length - 1
        }
        this.loadCurrentSong()
    },

    // random bài hát
    playRandomSong: function() {
        let newIndex 
        do {
            newIndex = Math.floor(Math.random() * this.songs2.length)
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

app2.start()