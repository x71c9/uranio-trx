
/*
 * Interface for config object
 */
interface URNTRXConfig{
	
	/*
	 * The base URL for URANIO core
	 */
	base_url:string
	
}

interface URNResource {
	
	[key:string]: any
	
}

interface URNUser extends URNResource {
	first_name?: string;
	last_name?: string;
	email?: string;
	userame?: string
}

// interface IURNTRXResource<T> {
	
//   get(data:object):Promise<T>
	
// }


/*
 * A class for Uranio TRX Resources like Users, Products, ...
 *
 */
interface IURNTRXResource<T extends URNResource>{
	
	get():Promise<T>
	
}

abstract class URNTRXResource implements IURNTRXResource<URNResource> {
	
	public async get()
			:Promise<URNResource>{
		return new Promise((resolve) => {
			resolve({first_name: 'Andrea'});
		});
	}
	
}

class URNTRXUsers extends URNTRXResource implements IURNTRXResource<URNUser> {
	
	constructor(){
		super();
	}
	
	// public async get()
	//     :Promise<URNUser>{
	//   return new Promise((resolve) => {
	//     resolve({});
	//   })
	// }
	
}

class URNTRX {
	
	public base_url:string;
	
	public users:URNTRXUsers;
	
	// public products:URNTRXResource;
	
	constructor(config:URNTRXConfig){
		
		this.base_url = config.base_url;
		this.users = new URNTRXUsers();
		// this.products = new URNTRXResource();
		
	}
	
	
}

/*
 * Uranio TRX Factory
 * It has a method `create` that will return
 * a new URNTRX instance
 *
 */
const urn_trx_factory = {
	
	create(config:URNTRXConfig)
			:URNTRX{
		
		return new URNTRX(config);
		
	}
	
};

export default urn_trx_factory;


