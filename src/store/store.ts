import { defineStore } from 'pinia'

export const useStore = defineStore('imgFileType', {
	state: () => {
		return {
			imgFileType: ''
		}
	},
	actions: {
		async initImgFileType() {
			await new Promise((resolve, reject) => {
				const avif: HTMLImageElement = new Image()
				avif.src =
					'data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAPBtZXRhAAAAAAAAAChoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAbGliYXZpZgAAAAAOcGl0bQAAAAAAAQAAAB5pbG9jAAAAAEQAAAEAAQAAAAEAAAEUAAAAFQAAAChpaW5mAAAAAAABAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAABoaXBycAAAAElpcGNvAAAAFGlzcGUAAAAAAAAAAQAAAAEAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAABNjb2xybmNseAABAAEAAQAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB1tZGF0EgAKBxgADlgICAkyCB/xgAAghQm0'

				avif.addEventListener('load', () => resolve(avif))
				avif.addEventListener('error', () => reject())
			})
				.then(() => (this.imgFileType = 'avif'))
				.catch(() => (this.imgFileType = 'png'))
		}
	}
})
