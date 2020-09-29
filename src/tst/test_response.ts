// import {URNResponse} from '../mdlw/response';

import urn_return from '../mdlw/return';

// import './test_other_response';

function mylog(data:any){
	console.log('MYLOG', data);
}

function myerror(data:any){
	console.error('MYERR',data);
}

const urn_ret = urn_return(myerror, [mylog]);

// urn_ret.success_inject(mylog);
// urn_ret.fail_inject(myerror);

urn_ret.return_error(404,'This is a success', {resource: {name: 'name'}});

// console.log(my_res);

// function myasyncfunction ():Promise<boolean>{
//   return new Promise((_, reject) => {
//     setTimeout(() => reject(false), 2000);
//   });
// }


// async function run():Promise<URNResponse.Response<boolean>>{
//   return await urn_return.async_res( async () => {return await myasyncfunction();}, 'FUNCNAME')();
// }

// run().then((data) => {
//   console.log('FINALE', data);
// });

// urn_return.async_res('This is a success', {resource: {name: 'name'}});


