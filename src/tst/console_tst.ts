
import urn_log, {URNLogLevel, debug_constructor, debug_methods} from '../log/log';

import urn_return from '../return/return';

const urn_console = urn_log(URNLogLevel.FUNCTION_DEBUG, "HH:MM:ss:l");

const urn_res = urn_return(urn_console);

// urn_console.error({error: 'this is an error'});
// urn_console.warn({warning: 'this is a warning'});
// urn_console.log({log: 'this is a log'});
// urn_console.debug({debug: 'this is a debug'});
// urn_console.fndebug({fndebug: 'this is a fndebug'});

@debug_constructor(urn_console)
@debug_methods(urn_console)
class MyClass{
	
	public my_method(a:number,b:string){
		return urn_res.return_success('Valid', a + b);
	}
	
}

const my_insta = new MyClass();
my_insta.my_method(3,'AAA');



