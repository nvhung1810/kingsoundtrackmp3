const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// lấy tất cả element của tabs
const  tabs = $$('.tab-item')
const panes = $$('.tab-pane')
const tabActions = $('.tab-item.active')
const line = $('.tabs .line')
console.log(line)

line.style.left = tabActions.offsetLeft + 'px'
line.style.width = tabActions.offsetWidth + 'px'

// muốn lắng nghe sự kiện ta dùng lòng lặp foreach
tabs.forEach((tab, index) => {
      const pane = panes[index]

    // index sẽ dùng để lấy panes
    tab.onclick = function() {
        // lấy pane
        
        // kiêm tra xem có cái nào active thì xóa đi
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')


        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'
        // add class đang hoạt động cho cái được onclick
        this.classList.add('active')
        pane.classList.add('active')
        // làm đường line
        // xét có line bằng cái avtive

    }
})