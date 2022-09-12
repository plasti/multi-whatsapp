class WppBtn {
	constructor(numbers = [], options = {}) {
		this.btn = null
		this.container = null
		this.numbers = numbers
		this.options = options
		this.status = false
		this.init()
	}

	createBtn() {
		this.btn = document.createElement('a')
		this.btn.classList.add('__WppBtn_fixed')

		if ("numbers" in this) {
			console.warn("Wppbtn: el array se encuentra nombrado correctamente" );
		}else{
			console.error("La propiedad number no se encontro en los parametros de la función")
		}
		if ("title" in this.options) {
			this.btn.setAttribute('title', this.options.title)
		}
		if ("y" in this.options || "x" in this.options) {
			let style = ("y" in this.options) ? ('bottom: ' + this.options.y + 'px;') : ''
			style += ("x" in this.options) ? ('right: ' + this.options.x + 'px;') : ''
			this.btn.setAttribute('style', style)
		}
		if (this.numbers.length > 1) {
			this.btn.setAttribute('href', '#')
			const open = () => this.openDialog()
			const close = () => this.closeDialog()
			this.btn.addEventListener('click', function (e) {
				e.preventDefault()
				if (this.classList.contains('__active')) {
					this.classList.remove('__active')
					close()
				} else {
					this.classList.add('__active')
					open()
				}
			})
		} else {
			let link = 'https://api.whatsapp.com/send?phone=' + this.numbers[0].number + (("message" in this.numbers[0]) ? ('&text=' + this.numbers[0].message) : '')
			this.btn.setAttribute('href', link)
			this.btn.setAttribute('target', 'blank')
		}
		document.body.appendChild(this.btn)
	}

	createDialog() {
		// container
		this.container = document.createElement('div')
		this.container.classList.add('__Box_BtnWpp_dialog')
		if ("y" in this.options || "x" in this.options) {
			let style = ("y" in this.options) ? ('bottom: ' + (this.options.y + 70) + 'px;') : ''
			style += ("x" in this.options) ? ('right: ' + (this.options.x) + 'px;') : ''
			style += 'display: none;'
			this.container.setAttribute('style', style)
		}
		let html = ''
		// header
		html += '<div class="__header_BtnWpp_dialig">'
		html += '<span>' + (("title" in this.options) ? this.options.title : 'Lineas de atención') + '</span>'
		html += '</div>'
		// body
		html += '<div class="__body_BtnWpp_dialog">'
		if ("subtitle" in this.options) {
			html += '<span class="__subtitle_">' + this.options.subtitle + '</span>'
		}
		// loop
		for (let wpp of this.numbers) {
			html += '<a target="blank" href="https://api.whatsapp.com/send?phone=' + wpp.number + (("message" in wpp) ? ('&text=' + wpp.message) : '') + '" class="__card_Btn_Wpp">'
			html += this.icon()
			html += '<span>' + wpp.title + '</span>'
			html += '</a>'
		}

		html += '</div>'
		this.container.innerHTML = html
		document.body.appendChild(this.container)
	}

	closeDialog = () => this.container.classList.remove('__active')
	openDialog = () => this.container.classList.add('__active')

	icon() {
		return '<svg width="48px" height="48px" class="nta-whatsapp-default-avatar" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <path style="fill:#EDEDED;" d="M0,512l35.31-128C12.359,344.276,0,300.138,0,254.234C0,114.759,114.759,0,255.117,0 S512,114.759,512,254.234S395.476,512,255.117,512c-44.138,0-86.51-14.124-124.469-35.31L0,512z"></path> <path style="fill:#55CD6C;" d="M137.71,430.786l7.945,4.414c32.662,20.303,70.621,32.662,110.345,32.662 c115.641,0,211.862-96.221,211.862-213.628S371.641,44.138,255.117,44.138S44.138,137.71,44.138,254.234 c0,40.607,11.476,80.331,32.662,113.876l5.297,7.945l-20.303,74.152L137.71,430.786z"></path> <path style="fill:#FEFEFE;" d="M187.145,135.945l-16.772-0.883c-5.297,0-10.593,1.766-14.124,5.297 c-7.945,7.062-21.186,20.303-24.717,37.959c-6.179,26.483,3.531,58.262,26.483,90.041s67.09,82.979,144.772,105.048 c24.717,7.062,44.138,2.648,60.028-7.062c12.359-7.945,20.303-20.303,22.952-33.545l2.648-12.359 c0.883-3.531-0.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-0.883-10.593,2.648l-22.069,28.248 c-1.766,1.766-4.414,2.648-7.062,1.766c-15.007-5.297-65.324-26.483-92.69-79.448c-0.883-2.648-0.883-5.297,0.883-7.062 l21.186-23.834c1.766-2.648,2.648-6.179,1.766-8.828l-25.6-57.379C193.324,138.593,190.676,135.945,187.145,135.945"></path></svg>'
	}

	css() {
		let css = document.createElement('link')
		css.setAttribute('rel', 'stylesheet')
		css.setAttribute('href', 'https://plastibucket.s3.us-east-2.amazonaws.com/btn-wpp/style.css')
		document.head.appendChild(css)
	}

	init() {
		if (this.numbers.length > 1) {
			this.createDialog()
		}
		this.css()
		this.createBtn()
		
	}
	
}
window.WppBtn = WppBtn
