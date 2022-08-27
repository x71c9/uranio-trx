#!/usr/bin/env node

/**
 * TRX binary for uranio-api web service
 *
 * @packageDocumentation
 */

import dotenv from 'dotenv';
const result = dotenv.config();

if(result.error){
	throw result.error;
}

export * from '../srv/register';

import uranio from '../server';
uranio.init();

const service = uranio.api.service.create();
service.listen();
