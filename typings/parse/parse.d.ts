// Type definitions for Parse v1.2.19
// Project: https://parse.com/
// Definitions by: Ullisen Media Group, LLC <[http://ullisenmedia.com]>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../underscore/underscore.d.ts" />

declare module Parse {

    /**
     * Call this method first to set up your authentication tokens for Parse.
     * You can get your keys from the Data Browser on parse.com.
     * @param {String} applicationId Your Parse Application ID.
     * @param {String} javaScriptKey Your Parse JavaScript Key.
     * @param {String} masterKey (optional) Your Parse Master Key. (Node.js only!)
     */
    function initialize(applicationId: string, javaScriptKey: string, masterKey?: string);
    
    interface ParseDefaultOptions {
        wait?: boolean;
        silent?: boolean;
        success?: Function;
        error?: Function;
        useMasterKey?: boolean;
    }

    interface CollectionOptions {
        model?: Object;
        query?: Query;
        comparator?: string;
    }

    interface CollectionAddOptions {
        at?: number;
    }

    interface RouterOptions {
        routes: any;
    }

    interface NavigateOptions {
        trigger?: boolean;
    }

    interface ViewOptions {
        model?: any;
        collection?: any;
        el?: any;
        id?: string;
        className?: string;
        tagName?: string;
        attributes?: any[];
    }

    interface PushData {
        channels?: any[];
        push_time?: Date;
        expiration_time?: Date;
        expiration_interval?: number;
        where?: Query;
        data?: any;
    }

    interface Promise<T> {

        always(callback: Function): Promise<T>;
        as(): Promise<T>;
        done(callback: Function): Promise<T>;
        error(): Promise<T>;
        fail(callback: Function): Promise<T>;
        is(): Promise<T>;
        reject(error: any): void;
        resolve(result: any): void;
        then(resolvedCallback: Function, rejectedCallback: Function): Promise<T>;
        when(promises: Promise<T>[]): Promise<T>;
    }

    interface IJSONObject {
        toJSON(): any;
    }


    class Analytics {
        static track<T>(name: string, dimensions: any): Promise<T>;
    }

    class ACL extends JSONObject {
        getPublicReadAccess(): boolean;
        getPublicWriteAccess(): boolean;
        getReadAccess(userId: User): boolean;
        getReadAccess(userId: string): boolean;
        getRoleReadAccess(role: Role): boolean;
        getRoleReadAccess(role: string): boolean;
        getRoleWriteAccess(role: Role): boolean;
        getRoleWriteAccess(role: string): boolean;
        getWriteAccess(userId: User): boolean;
        getWriteAccess(userId: string): boolean;
        setPublicReadAccess(allowed: boolean);
        setPublicWriteAccess(allowed: boolean);
        setReadAccess(userId: User, allowed: boolean);
        setReadAccess(userId: string, allowed: boolean);
        setRoleReadAccess(role: Role, allowed: boolean);
        setRoleReadAccess(role: string, allowed: boolean);
        setRoleWriteAccess(role: Role, allowed: boolean);
        setRoleWriteAccess(role: string, allowed: boolean);
        setWriteAccess(userId: User, allowed: boolean);
        setWriteAccess(userId: string, allowed: boolean);
        constructor(arg1: any);
    }

    class JSONObject implements IJSONObject {
        toJSON(): any;
    }

    class Object extends JSONObject {

        constructor(attributes?: any, options?: any);
        static extend(className: string, protoProps: any, classProps: any): any;

        static fetchAll<T>(list: Object[], options: ParseDefaultOptions): Promise<T>;
        static fetchAllIfNeeded<T>(list: Object[], options: ParseDefaultOptions): Promise<T>;

        add(attr: string, item: any);
        addUnique(attr: string, item: any);
        change(options: any);
        changedAttributes(diff: any): any;
        clear(options: any): any;
        clone(): Object;
        destroy<T>(options: ParseDefaultOptions): Promise<T>;
        destroyAll<T>(list: Object[], options: ParseDefaultOptions): Promise<T>;
        dirty(attr: String): boolean;
        dirtyKeys(): string[];
        escape(attr: string);
        existed(): boolean;
        fetch<T>(options: ParseDefaultOptions): Promise<T>;
        get(attr: string): any;
        getACL(): ACL;
        has(attr: string): boolean;
        hasChanged(attr: string): boolean;
        increment(attr: string, amount?: number): any;
        initialize();
        isValid(): boolean;
        op(attr: string): any;
        previous(attr: string): any;
        previousAttributes(): any;
        relation(attr: string): Relation;
        remove(attr: string, item: any): any;
        save<T>(options?: ParseDefaultOptions, arg2?: any, arg3?: any): Promise<T>;
        saveAll<T>(list: Object[], options?: ParseDefaultOptions): Promise<T>;
        set(key: string, value: any, options: ParseDefaultOptions): boolean;
        setACL(acl: ACL, options: ParseDefaultOptions): boolean;
        unset(attr: string, options?: any): any;
        validate(attrs: any, options?: ParseDefaultOptions): boolean;

    }

    class Collection extends JSONObject {
        add(models: Object[], options?: CollectionAddOptions);
        at(index: number): Object;
        chain(): _Chain<Collection>;
        create(model: Object, options?: ParseDefaultOptions): Object;
        static extend(instanceProps: any, classProps: any): any;
        get(id: string): any;
        getByCid(cid: any): any;
        initialize();
        pluck(attr: string): any[];
        remove(models: Object[], options?: ParseDefaultOptions): Collection;
        reset(models: Object[], options?: ParseDefaultOptions): Collection;
        sort(options?: ParseDefaultOptions): Collection;
        constructor(models: Object[], options?: CollectionOptions);
    }

    class Events {
        static bind();
        static off(events: string[], callback?: Function, context?: any);
        static on(events: string[], callback?: Function, context?: any);
        static trigger(events: string[]);
        static unbind();
    }

    class Push {
        send<T>(data: PushData, options?: ParseDefaultOptions): Promise<T>;
    }

    class FacebookUtils {
        static init(options: any);
        static isLinked(user: User): boolean;
        static link(user: User, permissions: any, options: ParseDefaultOptions);
        static logIn(permissions: any, options: ParseDefaultOptions);
        static unlink(user: User, options: ParseDefaultOptions);
    }

    class File {
        name(): string;
        save(options?: ParseDefaultOptions);
        url(): string;
        constructor(name: string, data: any, type?: string);
    }

    class GeoPoint extends JSONObject {
        static current(options: ParseDefaultOptions): GeoPoint;
        kilometersTo(point: GeoPoint): number;
        milesTo(point: GeoPoint): number;
        radiansTo(point: GeoPoint): number;
        constructor(arg1: any, arg2: any);
    }

    class History {
        checkUrl(e?: any): void;
        getFragment(fragment?: string, forcePushState?: boolean): string;
        getHash(windowOverride: Window): string;
        loadUrl(fragmentOverride: any): boolean;
        navigate(fragment: string, options?: any): any;
        route(route: any, callback: Function): void;
        start(options: any): boolean;
        stop(): void;
    }

    class Query extends JSONObject {

        constructor(objectClass: any);
        constructor(className: string);

        static or(...var_args: Query[]): Query;

        addAscending(key: string): Query;
        addAscending(key: string[]): Query;
        addDescending(key: string): Query;
        addDescending(key: string[]): Query;
        ascending(key: string): Query;
        ascending(key: string[]): Query;
        collection(items: Object[], options?: ParseDefaultOptions): Collection;
        containedIn(key: string, values: any[]): Query;
        contains(key: string, substring: string): Query;
        containsAll(key: string, values: any[]): Query;
        count<T>(options?: ParseDefaultOptions): Promise<T>;
        descending(key: string): Query;
        descending(key: string[]): Query;
        doesNotExist(key: string): Query;
        doesNotMatchKeyInQuery(key: string, queryKey: string, query: Query): Query;
        doesNotMatchQuery(key: string, query: Query): Query;
        each<T>(callback: Function, options?: ParseDefaultOptions): Promise<T>;
        endsWith(key: string, suffix: string): Query;
        equalTo(key: string, value: any): Query;
        exists(key: string): Query;
        find<T>(options?: ParseDefaultOptions): Promise<T>;
        first<T>(options?: ParseDefaultOptions): Promise<T>;
        get(objectId: string, options?: ParseDefaultOptions): Promise<any>;
        greaterThan(key: string, value: any): Query;
        greaterThanOrEqualTo(key: string, value: any): Query;
        include(key: string): Query;
        lessThan(key: string, value: any): Query;
        lessThanOrEqualTo(key: string, value: any): Query;
        limit(n: number): Query;
        matches(key: string, regex: RegExp, modifiers: any): Query;
        matchesKeyInQuery(key: string, queryKey: string, query: Query): Query;
        matchesQuery(key: string, query: Query): Query;
        near(key: string, point: GeoPoint): Query;
        notContainedIn(key: string, values: any[]): Query;
        notEqualTo(key: string, value: any): Query;
        select(keys: string[]): Query;
        skip(n: number): Query;
        startsWith(key: string, prefix: string): Query;
        withinGeoBox(key: string, southwest: GeoPoint, northeast: GeoPoint): Query;
        withinKilometers(key: string, point: GeoPoint, maxDistance: number): Query;
        withinMiles(key: string, point: GeoPoint, maxDistance: number): Query;
        withinRadians(key: string, point: GeoPoint, maxDistance: number): Query;

    }

    class Relation extends JSONObject {

        constructor(parent?: Object, key?: string);

        add(object: Object): void;
        query(): Query;
        remove(object: Object): void;
    }

    class Role extends Object {

        constructor(name: string, acl: ACL);

        getRoles(): Relation;
        getUsers(): Relation;

        getName(): string;
        setName(name: string, options?: ParseDefaultOptions);
    }

    class Router extends Events {

        private static extend(instanceProps: any, classProps: any): any;

        constructor(options?: RouterOptions);

        initialize(): void;
        navigate(fragment: string, options?: NavigateOptions): Router;
        navigate(fragment: string, trigger?: boolean): Router;
        route(route: string, name: string, callback: Function): Router;
    }

    class User extends Object {

        static current(): User;
        static signUp<T>(username: string, password: string, attrs: any, options?: ParseDefaultOptions): Promise<T>;
        static logIn<T>(username: string, password: string, options?: ParseDefaultOptions): Promise<T>;
        static logOut(): void;
        static allowCustomUserClass(isAllowed: boolean): void;
        static become<T>(sessionToken: string, options: ParseDefaultOptions): Promise<T>;

        signUp<T>(attrs: any, options?: ParseDefaultOptions): Promise<T>;
        logIn<T>(options?: ParseDefaultOptions): Promise<T>;
        fetch<T>(options: ParseDefaultOptions): Promise<T>;
        requestPasswordReset<T>(email: string, options?: ParseDefaultOptions): Promise<T>;
        save<T>(arg1: any, arg2: any, arg3: any): Promise<T>;
        authenticated(): boolean;
        isCurrent(): boolean;

        getEmail(): string;
        setEmail(email: string, options: ParseDefaultOptions): boolean;

        setPassword(password: string, options?: ParseDefaultOptions): boolean;

        getUsername(): string;
        setUsername(username: string, options?: ParseDefaultOptions): boolean;

        getSessionToken(): string;
    }

    class View extends Events {

        private static extend(properties: any, classProperties?: any): any;

        constructor(options?: ViewOptions);

        $(selector: string): JQuery;
        model: any;
        collection: any;
        setElement(element: HTMLElement, delegate?: boolean): View;
        setElement(element: JQuery, delegate?: boolean): View;
        id: string;
        cid: string;
        className: string;
        tagName: string;

        el: any;
        $el: JQuery;
        setElement(element: any): View;
        attributes: any;
        $(selector: any): JQuery;
        render(): View;
        remove(): View;
        make(tagName: any, attributes?: any, content?: any): any;
        delegateEvents(events?: any): any;
        undelegateEvents(): any;

        _configure(options: ViewOptions);
        _ensureElement(): void;
    }

    class Error {
        constructor(code: number, message: string);

        /**
         * Error code indicating some error other than those enumerated here.
         * @constant
         */
        static OTHER_CAUSE: number;

        /**
         * Error code indicating that something has gone wrong with the server.
         * If you get this error code, it is Parse's fault. Contact us at
         * https://parse.com/help
         * @constant
         */
        static INTERNAL_SERVER_ERROR: number;

        /**
         * Error code indicating the connection to the Parse servers failed.
         * @constant
         */
        static CONNECTION_FAILED: number;

        /**
         * Error code indicating the specified object doesn't exist.
         * @constant
         */
        static OBJECT_NOT_FOUND: number;

        /**
         * Error code indicating you tried to query with a datatype that doesn't
         * support it, like exact matching an array or object.
         * @constant
         */
        static INVALID_QUERY: number;

        /**
         * Error code indicating a missing or invalid classname. Classnames are
         * case-sensitive. They must start with a letter, and a-zA-Z0-9_ are the
         * only valid characters.
         * @constant
         */
        static INVALID_CLASS_NAME: number;

        /**
         * Error code indicating an unspecified object id.
         * @constant
         */
        static MISSING_OBJECT_ID: number;

        /**
         * Error code indicating an invalid key name. Keys are case-sensitive. They
         * must start with a letter; and a-zA-Z0-9_ are the only valid characters.
         * @constant
         */
        static INVALID_KEY_NAME: number;

        /**
         * Error code indicating a malformed pointer. You should not see this unless
         * you have been mucking about changing internal Parse code.
         * @constant
         */
        static INVALID_POINTER: number;

        /**
         * Error code indicating that badly formed JSON was received upstream. This
         * either indicates you have done something unusual with modifying how
         * things encode to JSON, or the network is failing badly.
         * @constant
         */
        static INVALID_JSON: number;

        /**
         * Error code indicating that the feature you tried to access is only
         * available internally for testing purposes.
         * @constant
         */
        static COMMAND_UNAVAILABLE: number;

        /**
         * You must call Parse.initialize before using the Parse library.
         * @constant
         */
        static NOT_INITIALIZED: number;

        /**
         * Error code indicating that a field was set to an inconsistent type.
         * @constant
         */
        static INCORRECT_TYPE: number;

        /**
         * Error code indicating an invalid channel name. A channel name is either
         * an empty string (the broadcast channel) or contains only a-zA-Z0-9_
         * characters and starts with a letter.
         * @constant
         */
        static INVALID_CHANNEL_NAME: number;

        /**
         * Error code indicating that push is misconfigured.
         * @constant
         */
        static PUSH_MISCONFIGURED: number;

        /**
         * Error code indicating that the object is too large.
         * @constant
         */
        static OBJECT_TOO_LARGE: number;

        /**
         * Error code indicating that the operation isn't allowed for clients.
         * @constant
         */
        static OPERATION_FORBIDDEN: number;

        /**
         * Error code indicating the result was not found in the cache.
         * @constant
         */
        static CACHE_MISS: number ;

        /**
         * Error code indicating that an invalid key was used in a nested
         * JSONObject.
         * @constant
         */
        static INVALID_NESTED_KEY: number;

        /**
         * Error code indicating that an invalid filename was used for ParseFile.
         * A valid file name contains only a-zA-Z0-9_. characters and is between 1
         * and 128 characters.
         * @constant
         */
        static INVALID_FILE_NAME: number;

        /**
         * Error code indicating an invalid ACL was provided.
         * @constant
         */
        static INVALID_ACL: number;

        /**
         * Error code indicating that the request timed out on the server. Typically
         * this indicates that the request is too expensive to run.
         * @constant
         */
        static TIMEOUT: number;

        /**
         * Error code indicating that the email address was invalid.
         * @constant
         */
        static INVALID_EMAIL_ADDRESS: number;

        /**
         * Error code indicating a missing content type.
         * @constant
         */
        static MISSING_CONTENT_TYPE: number;

        /**
         * Error code indicating a missing content length.
         * @constant
         */
        static MISSING_CONTENT_LENGTH: number;

        /**
         * Error code indicating an invalid content length.
         * @constant
         */
        static INVALID_CONTENT_LENGTH: number;

        /**
         * Error code indicating a file that was too large.
         * @constant
         */
        static FILE_TOO_LARGE: number;

        /**
         * Error code indicating an error saving a file.
         * @constant
         */
        static FILE_SAVE_ERROR: number;

        /**
         * Error code indicating an error deleting a file.
         * @constant
         */
        static FILE_DELETE_ERROR: number;

        /**
         * Error code indicating that a unique field was given a value that is
         * already taken.
         * @constant
         */
        static DUPLICATE_VALUE: number;

        /**
         * Error code indicating that a role's name is invalid.
         * @constant
         */
        static INVALID_ROLE_NAME: number;

        /**
         * Error code indicating that an application quota was exceeded.  Upgrade to
         * resolve.
         * @constant
         */
        static EXCEEDED_QUOTA: number;

        /**
         * Error code indicating that a Cloud Code script failed.
         * @constant
         */
        static SCRIPT_FAILED: number;

        /**
         * Error code indicating that a Cloud Code validation failed.
         * @constant
         */
        static VALIDATION_ERROR: number;

        /**
         * Error code indicating that invalid image data was provided.
         * @constant
         */
        static INVALID_IMAGE_DATA: number;

        /**
         * Error code indicating an unsaved file.
         * @constant
         */
        static UNSAVED_FILE_ERROR: number;

        /**
         * Error code indicating an invalid push time.
         */
        static INVALID_PUSH_TIME_ERROR: number;

        /**
         * Error code indicating that the username is missing or empty.
         * @constant
         */
        static USERNAME_MISSING: number;

        /**
         * Error code indicating that the password is missing or empty.
         * @constant
         */
        static PASSWORD_MISSING: number;

        /**
         * Error code indicating that the username has already been taken.
         * @constant
         */
        static USERNAME_TAKEN: number;

        /**
         * Error code indicating that the email has already been taken.
         * @constant
         */
        static EMAIL_TAKEN: number;

        /**
         * Error code indicating that the email is missing, but must be specified.
         * @constant
         */
        static EMAIL_MISSING: number;

        /**
         * Error code indicating that a user with the specified email was not found.
         * @constant
         */
        static EMAIL_NOT_FOUND: number;

        /**
         * Error code indicating that a user object without a valid session could
         * not be altered.
         * @constant
         */
        static SESSION_MISSING: number;

        /**
         * Error code indicating that a user can only be created through signup.
         * @constant
         */
        static MUST_CREATE_USER_THROUGH_SIGNUP: number;

        /**
         * Error code indicating that an an account being linked is already linked
         * to another user.
         * @constant
         */
        static ACCOUNT_ALREADY_LINKED: number;

        /**
         * Error code indicating that a user cannot be linked to an account because
         * that account's id could not be found.
         * @constant
         */
        static LINKED_ID_MISSING: number;

        /**
         * Error code indicating that a user with a linked (e.g. Facebook) account
         * has an invalid session.
         * @constant
         */
        static INVALID_LINKED_SESSION: number;

        /**
         * Error code indicating that a service being linked (e.g. Facebook or
         * Twitter) is unsupported.
         * @constant
         */
        static UNSUPPORTED_SERVICE: number;

        /**
         * Error code indicating that there were multiple errors. Aggregate errors
         * have an "errors" property; which is an array of error objects with more
         * detail about each error that occurred.
         * @constant
         */
        static AGGREGATE_ERROR: number;

        /**
         * Error code indicating the client was unable to read an input file.
         * @constant
         */
        static FILE_READ_ERROR: number;

        /**
         * Error code indicating a real error code is unavailable because
         * we had to use an XDomainRequest object to allow CORS requests in
         * Internet Explorer, which strips the body from HTTP responses that have
         * a non-2XX status code.
         * @constant
         */
        static X_DOMAIN_REQUEST: number;
    }

    module Cloud {

        interface CookieOptions {
            domain?: string;
            expires?: Date;
            httpOnly?: boolean;
            maxAge?: number;
            path?: string;
            secure?: boolean;
        }

        interface HttpOptions {
            body?: any;
            error?: Function;
            headers?: any;
            method?: string;
            params?: any;
            success?: Function;
            url?: string;
        }

        interface HttpResponse {
            buffer?: Buffer;
            cookies?: any;
            data?: any;
            headers?: any;
            status?: number;
            text?: string;
        }

        interface JobRequest {
            params: any;
        }

        interface JobStatus {
            error?: Function;
            message?: Function;
            success?: Function;
        }

        interface FunctionRequest {
            installationId?: String;
            master?: boolean;
            params?: any;
            user?: User;
        }

        interface FunctionResponse {
            success?: (response: HttpResponse) => void;
            error?: (response: HttpResponse) => void;
        }

        interface Cookie {
            name?: string;
            options?: CookieOptions;
            value?: string;
        }

        interface AfterSaveRequest extends FunctionRequest {}
        interface AfterDeleteRequest extends FunctionRequest {}
        interface AfterDeleteResponse extends FunctionResponse {}
        interface BeforeDeleteRequest extends FunctionRequest {}
        interface BeforeDeleteResponse extends FunctionResponse {}
        interface BeforeSaveRequest extends FunctionRequest {}
        interface BeforeSaveResponse extends FunctionResponse {}

        function afterDelete(arg1: any, func?: (request: AfterDeleteRequest) => void);
        function afterSave(arg1: any, func?: (request: AfterSaveRequest) => void);
        function beforeDelete(arg1: any, func?: (request: BeforeDeleteRequest, response: BeforeDeleteResponse) => void);
        function beforeSave(arg1: any, func?: (request: BeforeSaveRequest, response: BeforeSaveResponse) => void);
        function define(name: string, func?: (request: FunctionRequest, response: FunctionResponse) => void);
        function httpRequest<T>(options: ParseDefaultOptions): Promise<HttpResponse>;
        function job(name: string, func?: (request: JobRequest, status: JobStatus) => void): HttpResponse;
        function run<T>(name: string, data: any, options: Promise<T>);
        function useMasterKey();
    }

    module Op {

        interface BaseOperation extends IJSONObject {
            objects(): any[];
        }

        interface Add extends BaseOperation {}

        interface AddUnique extends BaseOperation {}

        interface Increment extends IJSONObject {
            amount: number;
        }

        interface Relation extends IJSONObject {
            added(): Object[];
            removed: Object[];
        }

        interface Set extends IJSONObject {
            value(): any;
        }

        interface Unset extends IJSONObject {}

    }
}

declare module "parse" {

    export = Parse;
}