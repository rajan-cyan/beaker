/**
 * @author Adam Meadows [@job13er](https://github.com/job13er)
 * @copyright 2015 Cyan, Inc. All rights reserved
*/

'use strict';

/**
 * The argv object returned by 'minimist'
 * @external MinimistArgv
 * @see {@link https://github.com/substack/minimist#example}
 * @return foobar
 */

/**
 * namespace for all cli modules
 */
module.exports = {
    argv: require('./argv'),
    github: require('./github'),
    help: require('./help'),
    init: require('./init'),
    newConfig: require('./new-config'),
    webdriverioTester: require('./webdriverio-tester'),
};
