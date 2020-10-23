class L {
	
	public fns:(() => void)[];
	
	constructor(){
		this.fns = [];
	}
	
	public log(){
		for(const n of this.fns)
			n();
	}
	
}

export default new L();
