
import urn_log, {LogLevel as URNLogLevel} from '../log/log';
// const urn_console = urn_log(URNLogLevel.FunctionDebug, "HH:MM:ss:l");
const urn_console = urn_log(URNLogLevel.FunctionDebug);

urn_console.error({error: 'this is an error'});
urn_console.warn({warning: 'this is a warning'});
urn_console.log({log: 'this is a log'});
// urn_console.log(false, 0, undefined, {name: 'an object name'});
// urn_console.log(0);
// urn_console.log(null);
// urn_console.log(undefined);
urn_console.debug({debug: 'this is a debug'});
urn_console.fndebug({fndebug: 'this is a fndebug'});

@urn_console.debug_constructor()
@urn_console.debug_methods()
class MyClass{
	
	public my_method(){
		return 3;
	}
	
}

const my_insta = new MyClass();
my_insta.my_method();
