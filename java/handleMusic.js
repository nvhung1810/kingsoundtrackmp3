const player = $('.music__bar')
const nameSong = $('.music__bar-name')
const desSong = $('.music__bar-des')
const imgSong = $('.music__bar-img')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const cdThumb = $('.music__bar-img')
const btnNext = $('.btn-next')
const btnPrev = $('.btn-prev')
const btnRandom = $('.btn-random')
const btnRepeat = $('.btn-repeat')
const playList = $('.list__song-one')
const playList2 = $('.list__song-two')
const playList3 = $('.song__list-item-song')

const playClick = $('.list__song-item')
const playMusic = $('.list__song-item-img')
const songWrapHistory = $('.music__history-container')
const songWrap = $('.song-wrap')
const musicBar = $('.music__bar')


const app = {
    currentIndex:0,
    currentIndex1:0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            name: "Yang Chó",
            singer: "Yang xinh gái",
            path: './song/Yen-MyAnh-7113912.mp3',
            image: './img/yangcho.png'
        },
        {
            name: 'Vòng Suy Nghĩ',
            singer: 'Mai Âm Nhạc',
            path: './song/vong_suy_nghi.mp3',
            image: './img/photo-1-16344006808131550761637.png'
        },
        {
            name: 'Ái Nộ',
            singer: 'Khôi Vũ & Masiu',
            path: './song/AiNo1-MasewKhoiVu-7078913.mp3',
            image: './img/ai_no.jpg'
        },
        {
            name: 'Cưới Thôi',
            singer: 'Masew & Bray',
            path: './song/CuoiThoi-MasewMasiuBRayTAPVietNam-7085648.mp3',
            image: './img/cuoithoi.jpg'
        },
        {
            name: 'Nhất Thân',
            singer: 'Khôi Vũ & Masiu',
            path: './song/NhatThan-MasewKhoiVu-7060342.mp3',
            image: './img/nhat_than.jpg'
        },
        {
            name: 'Tay To',
            singer: 'MCK RPT RPTPhong Khin',
            path: './song/TayTo-MCKRPTRPTPhongKhin-6984700.mp3',
            image: './img/tay_to.jpg'
        },
        {
            name: 'Yêu Thầm(remix)',
            singer: 'Hoang Yen Chibi Tlinh TDKKado',
            path: './song/YeuLamRemix-HoangYenChibiTlinhTDKKado-7093260.mp3',
            image: './img/yeu_tham.jpg'
        },
        {
            name: 'Lạc',
            singer: 'Rhymastic',
            path: './song/Lac-Rhymastic-2729471.mp3',
            image: './img/maxresdefault.jpg'
        },
        {
            name: '3107 3',
            singer: ' W/n, Duongg, Nâu, Titie',
            path: './song/31073-WNDuonggNautitie-7059323.mp3',
            image: './img/1627913895076_640.jpg'
        },
        {
            name: 'EYES',
            singer: 'G Ducky',
            path: './song/doi_mat.mp3',
            image: './img/doi_mat.jpg'
        },
        {
            name: "Ôi Bạn Ơi",
            singer: "Khá Bảnh và Meme",
            path: './song/oiBanOi.mp3',
            image: './img/aa297a44f49140099ac6e987eebe2bf9_13_7188.jpg'
        },
        {
            name: "3107 2",
            singer: "DuonggNauWn",
            path: './song/31072LofiVersion-DuonggNauWn-6944268_hq.mp3',
            image: './img/3107_2.jpg'
        },
        {
            name: "Cưới đi",
            singer: "2TChangC",
            path: './song/CuoiDi-2TChangC-6560962.mp3',
            image:'./img/cuoi_di.jpg'
        },
        {
            name: "Độ Tộc 2",
            singer: "Phúc Du & Pháo & Mixigaming",
            path:'./song/DoToc2-MasewDoMixiPhucDuPhao-7064730.mp3',
            image:'./img/dotoc.jpg'
        },
        {
            name: "Thức Giấc",
            singer: "DALAB",
            path: './song/ThucGiac-DaLAB-7048212.mp3',
            image:'./img/thucgiac.jpg'
        },
        {
            name: "Tát Nước Đầu Đình(Cowvy Mix)",
            singer: " Lynk Lee ft.Binz",
            path: './song/ta_nuo_dau_dinh(remix).mp3',
            image:'./img/maxresdefault (4).jpg'
        },
        {
            name: "Lạ Quá",
            singer: "Bray & Karik",
            path: './song/LaQua-BRayKarik-7114874.mp3',
            image:'./img/1634807126106_300.jpg'
        },
        {
            name: "Trên Tình Bạn Dưới Tình Yêu",
            singer: "Min",
            path: './song/TrenTinhBanDuoiTinhYeu-MIN-6802163.mp3',
            image:'./img/1604574284072_500.jpg'
        },
        {
            name: "Trên Tình Bạn Dưới Tình Yêu",
            singer: "Min",
            path: './song/PhoDaLenDenCukakRemix-HuyenTamMon-7037466.mp3',
            image:'./img/maxresdefault (5).jpg'
        },
        {
            name: "Forget Me Now(CukCak remix)",
            singer: "Fisht & Trí Dũng",
            path: './song/ForgetMeNowCukakRemix-FishyTriDung-7080307.mp3',
            image:'./img/3d978881905e7fca9ce614095416a462.jpg'
        },
        {
            name: "Đường Tôi Chở Em Về (Cukak Remix)",
            singer: "Bùi Trường Linh",
            path: './song/duong_toi_tro_e_ve.mp3',
            image:'./img/1626754400112_500.jpg'
        },
        {
            name: "Kẻ Cắp Gặp Bà Già(LINH KU x DMIXX Remix )",
            singer: "Hoàng Thùy Linh & Binz",
            path: './song/ke_cap_gap_ba_gia.mp3',
            image:'./img/maxresdefault (6).jpg'
        },
        {
            name: "Răng Khôn(CukCak remix)",
            singer: "Phí Phương Anh & RIN9",
            path: './song/RangKhonCukakRemix-PhiPhuongAnhTheFaceRIN9-7040447.mp3',
            image:'./img/phi-phuong-anh-161916607236172669425.jpg'
        },
        {
            name: "Tháng Năm",
            singer: "Soobin Hoàng Sơn",
            path: './song/ThangNamSpecialPerformance-SoobinHoangSonSlimV-7020121.mp3',
            image:'./img/5cb27fd4c536a2274d267a53ac417b01.jpg'
        },
        {
            name: "Gu (Cukak Remix) ",
            singer: "Freaky, Seachainsz",
            path: './song/GuCukakRemix-FreakySeachainsCukak-7049773.mp3',
            image:'./img/artworks-kYLUsWz7xjpUYYHZ-yM38kQ-t500x500.jpg'
        },
        

    ],

    render: function () {
        const htmls = this.songs.map((song, index) => {
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
        
        playList.innerHTML = htmls.join('')
    },
    
    // render2: function () {
    //     const htmls2 = this.songs2.map((song, index) => {
    //         return `
    //         <li class="list__song-item ${index === this.currentIndex ? 'playing' : ''}" data-index = "${index}">
    //             <div class="list__song-link">
    //                     <img src="${song.image}" 
    //                     alt="" class="list__song-item-img" >
    //                     <div class="list__song-click">
    //                     <div class = "click__toggle-song">  
    //                         <div class="click-toggle-play click" data-number = ${index}>
    //                             <i class="click__icon-pause fas fa-pause"></i>
    //                             <i class="click__icon-play fas fa-play"></i>
    //                         </div>
    //                     </div>
    //                         <i class="list__song-icon-like fas fa-heart"></i>
    //                         <i class="list__song-icon-property fas fa-ellipsis-h"></i>
    //                     </div>
    //                 <a href = "" class="list__song-item-name">${song.name}</a>
    //             <div>
    //             <span class="list__song-item-des">${song.singer}</span>
    //             <div class="icon__utilities-wrap">
    //                 <div class="icon__utilities">
    //                     <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyMHYyMEgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9InJnYigzNCwgMzQsIDM0KSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNCA5aDEwdjJINFY5em0wIDRoMTB2Mkg0di0yem0wLThoOHYySDRWNXptMTAtNGw0IDMtNCAzVjF6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=" 
    //                     alt="" class="icon__utilities-icon">
    //                     <span class="icon__utilities-text">Add to Next up</span>
    //                 </div>
    //                 <div class="icon__utilities icon__utilities-fix">
    //                     <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyI+DQogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjAuMyAoNzg5MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+DQogICAgPHRpdGxlPkdyb3VwPC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZGVmcy8+DQogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+DQogICAgICAgIDxnIGlkPSJhZGQtdG8tcGxheWxpc3QiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIGZpbGw9InJnYigzNCwgMzQsIDM0KSI+DQogICAgICAgICAgICA8cGF0aCBkPSJNMTIsMyBMMTIsMSBMMTQsMSBMMTQsMyBMMTYsMyBMMTYsNSBMMTQsNSBMMTQsNyBMMTIsNyBMMTIsNSBMMTAsNSBMMTAsMyBMMTIsMyBaIE0wLDMgTDAsNSBMOCw1IEw4LDMgTDAsMyBaIE0wLDcgTDAsOSBMMTAsOSBMMTAsNyBMMCw3IFogTTAsMTEgTDAsMTMgTDEwLDEzIEwxMCwxMSBMMCwxMSBaIiBpZD0iUmVjdGFuZ2xlLTIwIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIi8+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4NCg=="
    //                     alt="" class="icon__utilities-icon">
    //                     <span class="icon__utilities-text">Add to Next up</span>
    //                 </div>
    //             </div>
    //         </li>
    //         `
    //     })
        
    //     playList2.innerHTML = htmls2.join('')
    // },

    renderHistorySong: function() {
        const htmlss = this.songs.map((song, index) => {
            return `
                <div class="song-wrap ${index === this.currentIndex ? 'playing' : ''}">
                    <div class="song-history">
                    <div href="" class="link-img">
                        <img src="${song.image}" alt="" class="img-song">
                        <div class="click-toggle-play-fix click" data-index = "${index}">
                            <i class="click__icon-pause-fix fas fa-pause"></i>
                            <i class="click__icon-play-fix fas fa-play"></i>
                        </div>
                    </div>
                    <div class="song-description-wrap">
                        <div class="song-description">
                            <a href="" class="link-name">${song.name}</a>
                            <a href="" class="link-actor">${song.singer}</a>
                        </div>
                        <div class="icon-song-description">
                            
                            <i class="icon-history fas fa-play">
                                <span class="text-icon">1.82M</span>
                            </i>
                            <a href="" class="link-like">
                                <i class="icon-history icon-history-has-hover fas fa-heart">
                                    <span class="text-icon">37.9K</span>
                                </i>
                            </a>
                            <a href="" class="link-report">
                                <i class="icon-history icon-history-has-hover fas fa-retweet">
                                    <span class="text-icon">947</span>
                                </i>
                            </a>
                            <a href="" class="link-comment">
                                <i class="icon-history icon-history-has-hover fas fa-comment-alt">
                                <span class="text-icon">586</span>
                                </i>
                            </a>
                        </div>
                    </div>
                    </div>              
                </div>
            `
        })
        songWrapHistory.innerHTML = htmlss.join('')
    },

    // định nghĩa thuộc tính
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex]
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
        playList.onclick = function (e) {
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

                // if(_this.isPlaying) {
                //     audio.play()
                // }

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

        songWrapHistory.onclick = function (e) {
            const songNode1 = e.target.closest('.click__icon-play-fix')
            const songWrap = e.target.closest('.song-wrap')
            const btnClickToggle1 = e.target.closest('.click-toggle-play-fix')
            // _this.renderHistorySong()
            if (songNode1 || songWrap || btnClickToggle1) {
                _this.currentIndex = Number(btnClickToggle1.dataset.index)
                _this.loadCurrentSong()
                _this.renderHistorySong()
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
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },

    // prev bài hát
    prevSong: function() {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },

    // random bài hát
    playRandomSong: function() {
        let newIndex 
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
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

        // render list nhạc 2
        // this.render2()

        this.renderHistorySong()
    }
}

app.start()