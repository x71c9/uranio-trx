import * as urn_log from '../log/log';
import urn_return from '../return/return';

const urn_ret = urn_return(urn_log.response_injector);

// urn_log.error({name: 'this is an error'});
// urn_log.warn({name: 'this is a warning'});
// urn_log.log({name: 'this is a log'});
// urn_log.debug({name: 'this is a debug'});
// urn_log.fndebug({name: 'this is a fndebug'});

@urn_log.debug_constructor
@urn_log.debug_methods
class MyClass{
	
	public my_method(a:number,b:string){
		// return a + b;
		urn_ret.return_error(500, 'ERROR', null);
		return urn_ret.return_success('Valid', a + b);
	}
	
}
const my_insta = new MyClass();
my_insta.my_method(3,'AAA');


