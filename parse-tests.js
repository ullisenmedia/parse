/// <reference path="parse.d.ts" />
Parse.initialize('test', 'test');
var acl = new Parse.ACL('test');

acl.getPublicReadAccess();
acl.toJSON();

Parse.Analytics.track('test', '');
Parse.Collection.extend({}, {});

var model = new Parse.Object({}, {});
var models = [model];

var collection = new Parse.Collection(models);
collection.at(1);

Parse.Events.bind();
var user = Parse.User.current();
user.getEmail();

var error = new Parse.Error(Parse.Error.ACCOUNT_ALREADY_LINKED, "test");

var query = new Parse.Query('test');
var query1 = new Parse.Query('test');
var quer2 = new Parse.Query('test');

Parse.Query.or(query1, quer2);
//# sourceMappingURL=parse-tests.js.map
