/// <reference types="express-session" />

import express = require('express');

declare module 'passport' {
    export interface AuthenticateOptions {
        callbackURL: string,
        prompt: string
    }
}

declare namespace passport_openidconnect {

    class AcpStrategy {

        constructor(options: StrategyOptions, callback: strategyCallBackFunction);

        authenticate(req: express.Request, options: StrategyOptions): any;

        authorizationParams(options: StrategyOptions): any;

        configure(identifier: Function, done: Function): any;

    }

    type strategyCallBackFunction = (req: express.Request,
                                     iss: any,
                                     sub: any,
                                     profile?: OICProfile,
                                     accessToken?: string,
                                     refreshToken?: string,
                                     params?: any,
                                     callback?: (err: string, user: any, info: string) => void) => void;

    interface OICProfile {
        id: string,
        displayName: string;
        name: ProfileName,
        _raw: string
        _json: any;
    }

    interface ProfileName {
        familyName: string,
        givenName: string,
        middleName: string
    }

    interface StrategyOptions {
        authorizationURL: string,
        tokenURL: string,
        userInfoURL: string,
        clientID: string,
        clientSecret: string,
        callbackURL?: string,
        scope: string,
        passReqToCallback?: boolean,
        prompt?: string
    }


    function config(fn: any): void;

    function disco(fn: any): void;

    function register(fn: any): void;

    function registration(options: any, save: any): any;
}
export = passport_openidconnect;

