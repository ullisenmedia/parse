// Type definitions for Parse v1.2.19
// Project: https://parse.com/
// Definitions by: Ullisen Media Group, LLC <[http://ullisenmedia.com]>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Parse {

    interface CallbackOptions {
        wait?: boolean;
        silent?: boolean;
        success?: Function;
        error?: Function;
        useMasterKey?: boolean;
    }

    class Promise {
        always(callback: Function);
        as(): Parse.Promise;
        done(callback: Function);
        error(): Parse.Promise;
        fail(callback: Function);
        is(): Parse.Promise;
        reject(error: any);
        resolve(result: any);
        then(resolvedCallback: Function, rejectedCallback: Function): Parse.Promise;
        static when(promises: Array<Parse.Promise>);
    }

    interface ACL {

    }

    interface Op {

    }

    class Object {
        add(attr: string, item: any);
        addUnique(attr: string, item: any);
        change(options: any);
        changedAttributes(diff: any);
        clear(options: any);
        clone(): Parse.Object;
        destroy(options: Parse.CallbackOptions): Parse.Promise;
        destroyAll(list: Array<Parse.Object>, options: CallbackOptions): Parse.Promise;
        dirty(attr: String): boolean;
        dirtyKeys(): Array<string>;
        escape(attr: string);
        existed(): boolean;
        static extend(className: string, protoProps: any, classProps: any): any;
        fetch(options: Parse.CallbackOptions): Parse.Promise;
        static fetchAll(list: Array<Parse.Object>, options: CallbackOptions): Parse.Promise;
        static fetchAllIfNeeded(list: Array<Parse.Object>, options: CallbackOptions): Parse.Promise;
        get(attr: string): any;
        getACL(): Parse.ACL;
        has(attr: string): boolean;
        hasChanged(attr: string): boolean;
        increment(attr: string, amount: number): Parse.Promise;
        initialize();
        isValid(): boolean;
        op(attr: string): Parse.Op;
        previous(attr: string);
        previousAttributes(): any;
        relation(attr: string);
        remove(attr: string, item: any);
        save(options: Parse.CallbackOptions, arg2: any, arg3: any): Parse.Promise;
        saveAll(list: Array<Parse.Object>, options: Parse.CallbackOptions): Parse.Promise;
        set(key: string, value: any, options: Parse.CallbackOptions): boolean;
        setACL(acl: Parse.ACL, options: Parse.CallbackOptions): boolean;
        toJSON(): any;
        unset(attr: string, options: any);
        validate(attrs: any, options: Parse.CallbackOptions): boolean;
        constructor(attributes: any, options: any);
    }

    class Events {
        static bind();
        static off(events: Array<string>, callback: Function, context: any);
        static on(events: Array<string>, callback: Function, context: any);
        static trigger(events: Array<string>);
        static unbind();
    }

    class User {
        static allowCustomUserClass(isAllowed: boolean);
        authenticated();
        static become(sessionToken: string, options: Parse.CallbackOptions): Parse.Promise;
        static current(): Parse.User;
        fetch(options: Parse.CallbackOptions): Parse.Promise;
        getEmail(): string;
        getSessionToken(): string;
        getUsername(): string;
        isCurrent(): boolean;
        static logIn(username: string, password: string, options: Parse.CallbackOptions): Parse.Promise;
        logIn(options: Parse.CallbackOptions): Parse.Promise;
        static logOut();
        requestPasswordReset(email: string, options: Parse.CallbackOptions): Parse.Promise;
        save(arg1: any, arg2: any, arg3: any): Parse.Promise;
        setEmail(email: string, options: Parse.CallbackOptions): boolean;
        setPassword(password: string, options: Parse.CallbackOptions): boolean;
        setUsername(username: string, options: Parse.CallbackOptions): boolean;
        static signUp(username: string, password: string, attrs: any, options: Parse.CallbackOptions): Parse.Promise;
        signUp(attrs: any, options: Parse.CallbackOptions): Parse.Promise;
    }

    class View {
        $(selector: any): any;
        delegateEvents(events: any);
        static extend(instanceProps, classProps): any;
        initialize();
        make(tagName: string, attributes: any, content: any);
        remove();
        render();
        setElement(element: any, delegate: any);
        undelegateEvents();
    }

    class FacebookUtils {
        static init(options: any);
        static isLinked(user: Parse.User): boolean;
        static link(user: Parse.User, permissions: any, options: Parse.CallbackOptions);
        static logIn(permissions: any, options: Parse.CallbackOptions);
        static unlink(user: Parse.User, options: Parse.CallbackOptions);
    }

    class Error {
//        /**
//         * Error code indicating some error other than those enumerated here.
//         * @constant
//         */
//        static OTHER_CAUSE: number = -1;
//
//        /**
//         * Error code indicating that something has gone wrong with the server.
//         * If you get this error code, it is Parse's fault. Contact us at
//         * https://parse.com/help
//         * @constant
//         */
//        static INTERNAL_SERVER_ERROR: number = 1;
//
//        /**
//         * Error code indicating the connection to the Parse servers failed.
//         * @constant
//         */
//        static CONNECTION_FAILED: number =  100;
//
//        /**
//         * Error code indicating the specified object doesn't exist.
//         * @constant
//         */
//        static OBJECT_NOT_FOUND: number =  101;
//
//        /**
//         * Error code indicating you tried to query with a datatype that doesn't
//         * support it, like exact matching an array or object.
//         * @constant
//         */
//        static INVALID_QUERY: number =  102;
//
//        /**
//         * Error code indicating a missing or invalid classname. Classnames are
//         * case-sensitive. They must start with a letter, and a-zA-Z0-9_ are the
//         * only valid characters.
//         * @constant
//         */
//        static INVALID_CLASS_NAME: number =  103;
//
//        /**
//         * Error code indicating an unspecified object id.
//         * @constant
//         */
//        static MISSING_OBJECT_ID: number =  104;
//
//        /**
//         * Error code indicating an invalid key name. Keys are case-sensitive. They
//         * must start with a letter; and a-zA-Z0-9_ are the only valid characters.
//         * @constant
//         */
//        static INVALID_KEY_NAME: number =  105;
//
//        /**
//         * Error code indicating a malformed pointer. You should not see this unless
//         * you have been mucking about changing internal Parse code.
//         * @constant
//         */
//        static INVALID_POINTER: number =  106;
//
//        /**
//         * Error code indicating that badly formed JSON was received upstream. This
//         * either indicates you have done something unusual with modifying how
//         * things encode to JSON, or the network is failing badly.
//         * @constant
//         */
//        static INVALID_JSON: number =  107;
//
//        /**
//         * Error code indicating that the feature you tried to access is only
//         * available internally for testing purposes.
//         * @constant
//         */
//        static COMMAND_UNAVAILABLE: number =  108;
//
//        /**
//         * You must call Parse.initialize before using the Parse library.
//         * @constant
//         */
//        static NOT_INITIALIZED: number =  109;
//
//        /**
//         * Error code indicating that a field was set to an inconsistent type.
//         * @constant
//         */
//        static INCORRECT_TYPE: number =  111;
//
//        /**
//         * Error code indicating an invalid channel name. A channel name is either
//         * an empty string (the broadcast channel) or contains only a-zA-Z0-9_
//         * characters and starts with a letter.
//         * @constant
//         */
//        static INVALID_CHANNEL_NAME: number =  112;
//
//        /**
//         * Error code indicating that push is misconfigured.
//         * @constant
//         */
//        static PUSH_MISCONFIGURED: number =  115;
//
//        /**
//         * Error code indicating that the object is too large.
//         * @constant
//         */
//        static OBJECT_TOO_LARGE: number =  116;
//
//        /**
//         * Error code indicating that the operation isn't allowed for clients.
//         * @constant
//         */
//        static OPERATION_FORBIDDEN: number =  119;
//
//        /**
//         * Error code indicating the result was not found in the cache.
//         * @constant
//         */
//        static CACHE_MISS: number =  120;
//
//        /**
//         * Error code indicating that an invalid key was used in a nested
//         * JSONObject.
//         * @constant
//         */
//        static INVALID_NESTED_KEY: number =  121;
//
//        /**
//         * Error code indicating that an invalid filename was used for ParseFile.
//         * A valid file name contains only a-zA-Z0-9_. characters and is between 1
//         * and 128 characters.
//         * @constant
//         */
//        static INVALID_FILE_NAME: number =  122;
//
//        /**
//         * Error code indicating an invalid ACL was provided.
//         * @constant
//         */
//        static INVALID_ACL: number =  123;
//
//        /**
//         * Error code indicating that the request timed out on the server. Typically
//         * this indicates that the request is too expensive to run.
//         * @constant
//         */
//        static TIMEOUT: number =  124;
//
//        /**
//         * Error code indicating that the email address was invalid.
//         * @constant
//         */
//        static INVALID_EMAIL_ADDRESS: number =  125;
//
//        /**
//         * Error code indicating a missing content type.
//         * @constant
//         */
//        static MISSING_CONTENT_TYPE: number =  126;
//
//        /**
//         * Error code indicating a missing content length.
//         * @constant
//         */
//        static MISSING_CONTENT_LENGTH: number =  127;
//
//        /**
//         * Error code indicating an invalid content length.
//         * @constant
//         */
//        static INVALID_CONTENT_LENGTH: number =  128;
//
//        /**
//         * Error code indicating a file that was too large.
//         * @constant
//         */
//        static FILE_TOO_LARGE: number =  129;
//
//        /**
//         * Error code indicating an error saving a file.
//         * @constant
//         */
//        static FILE_SAVE_ERROR: number =  130;
//
//        /**
//         * Error code indicating an error deleting a file.
//         * @constant
//         */
//        static FILE_DELETE_ERROR: number =  153;
//
//        /**
//         * Error code indicating that a unique field was given a value that is
//         * already taken.
//         * @constant
//         */
//        static DUPLICATE_VALUE: number =  137;
//
//        /**
//         * Error code indicating that a role's name is invalid.
//         * @constant
//         */
//        static INVALID_ROLE_NAME: number =  139;
//
//        /**
//         * Error code indicating that an application quota was exceeded.  Upgrade to
//         * resolve.
//         * @constant
//         */
//        static EXCEEDED_QUOTA: number =  140;
//
//        /**
//         * Error code indicating that a Cloud Code script failed.
//         * @constant
//         */
//        static SCRIPT_FAILED: number =  141;
//
//        /**
//         * Error code indicating that a Cloud Code validation failed.
//         * @constant
//         */
//        static VALIDATION_ERROR: number =  142;
//
//        /**
//         * Error code indicating that invalid image data was provided.
//         * @constant
//         */
//        static INVALID_IMAGE_DATA: number =  150;
//
//        /**
//         * Error code indicating an unsaved file.
//         * @constant
//         */
//        static UNSAVED_FILE_ERROR: number =  151;
//
//        /**
//         * Error code indicating an invalid push time.
//         */
//        static INVALID_PUSH_TIME_ERROR: number = 152;
//
//        /**
//         * Error code indicating that the username is missing or empty.
//         * @constant
//         */
//        static USERNAME_MISSING: number =  200;
//
//        /**
//         * Error code indicating that the password is missing or empty.
//         * @constant
//         */
//        static PASSWORD_MISSING: number =  201;
//
//        /**
//         * Error code indicating that the username has already been taken.
//         * @constant
//         */
//        static USERNAME_TAKEN: number =  202;
//
//        /**
//         * Error code indicating that the email has already been taken.
//         * @constant
//         */
//        static EMAIL_TAKEN: number =  203;
//
//        /**
//         * Error code indicating that the email is missing, but must be specified.
//         * @constant
//         */
//        static EMAIL_MISSING: number =  204;
//
//        /**
//         * Error code indicating that a user with the specified email was not found.
//         * @constant
//         */
//        static EMAIL_NOT_FOUND: number =  205;
//
//        /**
//         * Error code indicating that a user object without a valid session could
//         * not be altered.
//         * @constant
//         */
//        static SESSION_MISSING: number =  206;
//
//        /**
//         * Error code indicating that a user can only be created through signup.
//         * @constant
//         */
//        static MUST_CREATE_USER_THROUGH_SIGNUP: number =  207;
//
//        /**
//         * Error code indicating that an an account being linked is already linked
//         * to another user.
//         * @constant
//         */
//        static ACCOUNT_ALREADY_LINKED: number =  208;
//
//        /**
//         * Error code indicating that a user cannot be linked to an account because
//         * that account's id could not be found.
//         * @constant
//         */
//        static LINKED_ID_MISSING: number =  250;
//
//        /**
//         * Error code indicating that a user with a linked (e.g. Facebook) account
//         * has an invalid session.
//         * @constant
//         */
//        static INVALID_LINKED_SESSION: number =  251;
//
//        /**
//         * Error code indicating that a service being linked (e.g. Facebook or
//         * Twitter) is unsupported.
//         * @constant
//         */
//        static UNSUPPORTED_SERVICE: number =  252;
//
//        /**
//         * Error code indicating that there were multiple errors. Aggregate errors
//         * have an "errors" property; which is an array of error objects with more
//         * detail about each error that occurred.
//         * @constant
//         */
//        static AGGREGATE_ERROR: number = 600;
//
//        /**
//         * Error code indicating the client was unable to read an input file.
//         * @constant
//         */
//        static FILE_READ_ERROR: number = 601;
//
//        /**
//         * Error code indicating a real error code is unavailable because
//         * we had to use an XDomainRequest object to allow CORS requests in
//         * Internet Explorer, which strips the body from HTTP responses that have
//         * a non-2XX status code.
//         * @constant
//         */
//        static X_DOMAIN_REQUEST: number = 602;
    }

    /**
     * Call this method first to set up your authentication tokens for Parse.
     * You can get your keys from the Data Browser on parse.com.
     * @param {String} applicationId Your Parse Application ID.
     * @param {String} javaScriptKey Your Parse JavaScript Key.
     * @param {String} masterKey (optional) Your Parse Master Key. (Node.js only!)
     */
    function initialize(applicationId: string, javaScriptKey: string, masterKey?: string);
}

declare module "parse" {

    export = Parse;
}