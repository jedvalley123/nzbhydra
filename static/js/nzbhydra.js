var nzbhydraapp = angular.module('nzbhydraApp', ['angular-loading-bar', 'cgBusy', 'ngAnimate', 'ui.bootstrap', 'ipCookie', 'angular-growl', 'angular.filter', 'filters', 'ui.router', 'blockUI', 'mgcrea.ngStrap', 'angularUtils.directives.dirPagination', 'nvd3', 'formly', 'formlyBootstrap', 'frapontillo.bootstrap-switch', 'ui.select', 'ngSanitize', 'checklist-model', 'ngAria', 'ngMessages', 'ui.router.title', 'satellizer', 'LocalStorageModule']);

angular.module('nzbhydraApp').config(["$stateProvider", "$urlRouterProvider", "$locationProvider", "blockUIConfig", "$urlMatcherFactoryProvider", "$authProvider", "localStorageServiceProvider", "bootstrapped", function ($stateProvider, $urlRouterProvider, $locationProvider, blockUIConfig, $urlMatcherFactoryProvider, $authProvider, localStorageServiceProvider, bootstrapped) {

    blockUIConfig.autoBlock = false;
    $urlMatcherFactoryProvider.strictMode(false);

    $urlRouterProvider.otherwise("/");


    $stateProvider
        .state('root', {
            url: '',
            abstract: true,
            resolve: {
                //loginRequired: loginRequired
            },
            views: {
                'header': {
                    templateUrl: 'static/html/states/header.html',
                    controller: 'HeaderController'
                },
                'footer': {
                    templateUrl: 'footer.html'
                }
            }
        })
        .state("root.config", {
            url: "/config",
            views: {
                'container@': {
                    templateUrl: "static/html/states/config.html",
                    controller: "ConfigController",
                    controllerAs: 'ctrl',
                    resolve: {
                        loginRequired: loginRequiredAdmin,
                        config: ['loginRequired', 'ConfigService', function (loginRequired, ConfigService) {
                            return ConfigService.get();
                        }],
                        safeConfig: ['loginRequired', 'ConfigService', function (loginRequired, ConfigService) {
                            return ConfigService.getSafe();
                        }],
                        $title: function () {
                            return "Config"
                        }
                    }
                }
            }
        })
        .state("root.config.auth", {
            url: "/auth",
            views: {
                'container@': {
                    templateUrl: "static/html/states/config.html",
                    controller: "ConfigController",
                    resolve: {
                        loginRequired: loginRequiredAdmin,
                        config: ['loginRequired', 'ConfigService', function (loginRequired, ConfigService) {
                            return ConfigService.get();
                        }],
                        safeConfig: ['loginRequired', 'ConfigService', function (loginRequired, ConfigService) {
                            return ConfigService.getSafe();
                        }],
                        $title: function () {
                            return "Config (Auth)"
                        }
                    }
                }
            }
        })
        .state("root.config.searching", {
            url: "/searching",
            views: {
                'container@': {
                    templateUrl: "static/html/states/config.html",
                    controller: "ConfigController",
                    resolve: {
                        loginRequired: loginRequiredAdmin,
                        config: ['loginRequired', 'ConfigService', function (loginRequired, ConfigService) {
                            return ConfigService.get();
                        }],
                        safeConfig: ['loginRequired', 'ConfigService', function (loginRequired, ConfigService) {
                            return ConfigService.getSafe();
                        }],
                        $title: function () {
                            return "Config (Searching)"
                        }
                    }
                }
            }
        })
        .state("root.config.categories", {
            url: "/categories",
            views: {
                'container@': {
                    templateUrl: "static/html/states/config.html",
                    controller: "ConfigController",
                    resolve: {
                        loginRequired: loginRequiredAdmin,
                        config: ['loginRequired', 'ConfigService', function (loginRequired, ConfigService) {
                            return ConfigService.get();
                        }],
                        safeConfig: ['loginRequired', 'ConfigService', function (loginRequired, ConfigService) {
                            return ConfigService.getSafe();
                        }],
                        $title: function () {
                            return "Config (Categories)"
                        }
                    }
                }
            }
        })
        .state("root.config.downloader", {
            url: "/downloader",
            views: {
                'container@': {
                    templateUrl: "static/html/states/config.html",
                    controller: "ConfigController",
                    resolve: {
                        loginRequired: loginRequiredAdmin,
                        config: ['loginRequired', 'ConfigService', function (loginRequired, ConfigService) {
                            return ConfigService.get();
                        }],
                        safeConfig: ['loginRequired', 'ConfigService', function (loginRequired, ConfigService) {
                            return ConfigService.getSafe();
                        }],
                        $title: function () {
                            return "Config (Downloader)"
                        }
                    }
                }
            }
        })
        .state("root.config.indexers", {
            url: "/indexers",
            views: {
                'container@': {
                    templateUrl: "static/html/states/config.html",
                    controller: "ConfigController",
                    resolve: {
                        loginRequired: loginRequiredAdmin,
                        config: ['loginRequired', 'ConfigService', function (loginRequired, ConfigService) {
                            return ConfigService.get();
                        }],
                        safeConfig: ['loginRequired', 'ConfigService', function (loginRequired, ConfigService) {
                            return ConfigService.getSafe();
                        }],
                        $title: function () {
                            return "Config (Indexers)"
                        }
                    }
                }
            }
        })
        .state("root.config.system", {
            url: "/system",
            templateUrl: "static/html/states/config.html",
            views: {
                'container@': {
                    controller: "ConfigController",
                    resolve: {
                        loginRequired: loginRequiredAdmin,
                        config: ['loginRequired', 'ConfigService', function (loginRequired, ConfigService) {
                            return ConfigService.get();
                        }],
                        safeConfig: ['loginRequired', 'ConfigService', function (loginRequired, ConfigService) {
                            return ConfigService.getSafe();
                        }],
                        $title: function () {
                            return "System"
                        }
                    }
                }
            }
        })
        .state("root.config.log", {
            url: "/log",
            views: {
                'container@': {
                    templateUrl: "static/html/states/config.html",
                    controller: "ConfigController",
                    resolve: {
                        loginRequired: loginRequiredAdmin,
                        config: ['loginRequired', 'ConfigService', function (loginRequired, ConfigService) {
                            return ConfigService.get();
                        }],
                        safeConfig: ['loginRequired', 'ConfigService', function (loginRequired, ConfigService) {
                            return ConfigService.getSafe();
                        }],
                        $title: function () {
                            return "System (Log)"
                        }
                    }
                }
            }
        })
        .state("root.stats", {
            url: "/stats",
            abstract: true,
            views: {
                'container@': {
                    templateUrl: "static/html/states/stats.html",
                    controller: ["$scope", "$state", function($scope, $state) {
                        $scope.$state = $state;
                    }],
                    resolve: {
                        loginRequired: loginRequiredStats,
                        $title: function () {
                            return "Stats"
                        }
                    }
                    
                }
            }            
        })
        .state("root.stats.main", {
            url: "/stats",
            views: {
                'stats@root.stats': {
                    templateUrl: "static/html/states/main-stats.html",
                    controller: "StatsController",
                    resolve: {
                        loginRequired: loginRequiredStats,
                        stats: ['loginRequired', 'StatsService', function (loginRequired, StatsService) {
                            return StatsService.get();
                        }],
                        $title: function () {
                            return "Stats"
                        }
                    }
                }
            }
        })
        .state("root.stats.indexers", {
            url: "/indexers",
            views: {
                'stats@root.stats': {
                    templateUrl: "static/html/states/indexer-statuses.html",
                    controller: IndexerStatusesController,
                    resolve: {
                        loginRequired: loginRequiredStats,
                        statuses: ["$http", function($http) {
                            return $http.get("internalapi/getindexerstatuses").success(function (response) {
                                return response.indexerStatuses;
                            });
                        }],
                        $title: function () {
                            return "Stats (Indexers)"
                        }
                    }
                }
            }
        })
        .state("root.stats.searches", {
            url: "/searches",
            views: {
                'stats@root.stats': {
                    templateUrl: "static/html/states/search-history.html",
                    controller: SearchHistoryController,
                    resolve: {
                        loginRequired: loginRequiredStats,
                        history: ["StatsService", function(StatsService) {
                            return StatsService.getSearchHistory();
                        }],
                        $title: function () {
                            return "Stats (Searches)"
                        }
                    }
                }
            }
        })
        .state("root.stats.downloads", {
            url: "/downloads",
            views: {
                'stats@root.stats': {
                    templateUrl: 'static/html/states/download-history.html',
                    controller: DownloadHistoryController,
                    resolve: {
                        loginRequired: loginRequiredStats,
                        downloads: ["StatsService", function (StatsService) {
                            return StatsService.getDownloadHistory();
                        }],
                        $title: function () {
                            return "Stats (Downloads)"
                        }
                    }
                }
            }
        })
        .state("root.system", {
            url: "/system",
            views: {
                'container@': {
                    templateUrl: "static/html/states/system.html",
                    controller: "SystemController",
                    resolve: {
                        loginRequired: loginRequiredAdmin,
                        safeConfig: ['loginRequired', 'ConfigService', function (loginRequired, ConfigService) {
                            return ConfigService.getSafe();
                        }],
                        askAdmin: ['loginRequired', '$http', function (loginRequired, $http) {
                            return $http.get("internalapi/askadmin");
                        }],
                        $title: function () {
                            return "System"
                        }
                    }
                }
            }
        })
        .state("root.system.updates", {
            url: "/updates",
            views: {
                'container@': {
                    templateUrl: "static/html/states/system.html",
                    controller: "SystemController",
                    resolve: {
                        loginRequired: loginRequiredAdmin,
                        safeConfig: ['loginRequired', 'ConfigService', function (loginRequired, ConfigService) {
                            return ConfigService.getSafe();
                        }],
                        $title: function () {
                            return "System (Updates)"
                        }
                    }
                }
            }
        })
        .state("root.system.log", {
            url: "/log",
            views: {
                'container@': {
                    templateUrl: "static/html/states/system.html",
                    controller: "SystemController",
                    resolve: {
                        loginRequired: loginRequiredAdmin,
                        safeConfig: ['loginRequired', 'ConfigService', function (loginRequired, ConfigService) {
                            return ConfigService.getSafe();
                        }],
                        $title: function () {
                            return "System (Log)"
                        }
                    }
                }
            }
        })
        .state("root.system.backup", {
            url: "/backup",
            views: {
                'container@': {
                    templateUrl: "static/html/states/system.html",
                    controller: "SystemController",
                    resolve: {
                        loginRequired: loginRequiredAdmin,
                        safeConfig: ['loginRequired', 'ConfigService', function (loginRequired, ConfigService) {
                            return ConfigService.getSafe();
                        }],
                        $title: function () {
                            return "System (Backup)"
                        }
                    }
                }
            }
        })
        .state("root.system.about", {
            url: "/about",
            views: {
                'container@': {
                    templateUrl: "static/html/states/system.html",
                    controller: "SystemController",
                    resolve: {
                        loginRequired: loginRequiredAdmin,
                        safeConfig: ['loginRequired', 'ConfigService', function (loginRequired, ConfigService) {
                            return ConfigService.getSafe();
                        }],
                        $title: function () {
                            return "System (About)"
                        }
                    }
                }
            }
        })
        .state("root.system.bugreport", {
            url: "/bugreport",
            views: {
                'container@': {
                    templateUrl: "static/html/states/system.html",
                    controller: "SystemController",
                    resolve: {
                        loginRequired: loginRequiredAdmin,
                        safeConfig: ['loginRequired', 'ConfigService', function (loginRequired, ConfigService) {
                            return ConfigService.getSafe();
                        }],
                        $title: function () {
                            return "System (Bug report)"
                        }
                    }
                }
            }
        })
        .state("root.search", {
            url: "/?category&query&imdbid&tvdbid&title&season&episode&minsize&maxsize&minage&maxage&offsets&rid&mode&tmdbid&indexers",
            views: {
                'container@': {
                    templateUrl: "static/html/states/search.html",
                    controller: "SearchController",
                    resolve: {
                        loginRequired: loginRequiredSearch,
                        safeConfig: ['loginRequired', 'ConfigService', function (loginRequired, ConfigService) {
                            return ConfigService.getSafe();
                        }],
                        $title: function () {
                            return "Search"
                        }
                    }
                }
            }
        })
        .state("root.search.results", {
            views: {
                'results@root.search': {
                    templateUrl: "static/html/states/search-results.html",
                    controller: "SearchResultsController",
                    controllerAs: "srController",
                    options: {
                        inherit: true
                    },
                    resolve: {
                        loginRequired: loginRequiredSearch,
                        $title: function () {
                            return "Search results"
                        }
                    }
                }
            }
        })
        .state("root.login", {
            url: "/login",
            views: {
                'container@': {
                    templateUrl: "static/html/states/login.html",
                    controller: "LoginController",
                    resolve: {
                        loginRequired: function () {
                            return null;
                        },
                        $title: function () {
                            return "Login"
                        }
                    }
                }
            }
        })
    ;


    $locationProvider.html5Mode(true);

    $authProvider.httpInterceptor = function () {
        return true;
    };
    $authProvider.withCredentials = true;
    $authProvider.tokenRoot = null;
    $authProvider.baseUrl = bootstrapped.baseUrl;
    $authProvider.loginUrl = '/auth/login';
    $authProvider.signupUrl = '/auth/signup';
    $authProvider.unlinkUrl = '/unlink/';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'satellizer';
    $authProvider.authHeader = 'TokenAuthorization';
    $authProvider.authToken = 'Bearer';
    $authProvider.storageType = 'localStorage';


    //Because I don't know for what state the login is required / asked I have a function for each 

    function loginRequiredSearch($q, $timeout, $auth, $state, bootstrapped) {
        
        var deferred = $q.defer();

        if (bootstrapped.authType != "form" || $auth.isAuthenticated() || !bootstrapped.searchRestricted) {
            deferred.resolve();
        } else {
            $timeout(function () {
                // This code runs after the authentication promise has been rejected.
                // Go to the log-in page
                $state.go("root.login");
            })
        }
        return deferred.promise;
    }
    loginRequiredSearch.$inject = ["$q", "$timeout", "$auth", "$state", "bootstrapped"];

    function loginRequiredStats($q, $timeout, $auth, $state, bootstrapped) {
        var deferred = $q.defer();

        if (bootstrapped.authType != "form" || $auth.isAuthenticated() || !bootstrapped.statsRestricted) {
            deferred.resolve();
        } else {
            $timeout(function () {
                // This code runs after the authentication promise has been rejected.
                // Go to the log-in page
                $state.go("root.login");
            })
        }
        return deferred.promise;
    }
    loginRequiredStats.$inject = ["$q", "$timeout", "$auth", "$state", "bootstrapped"];

    function loginRequiredAdmin($q, $timeout, $auth, $state, bootstrapped) {
        var deferred = $q.defer();

        if (bootstrapped.authType != "form" || $auth.isAuthenticated() || !bootstrapped.adminRestricted) {
            deferred.resolve();
        } else {
            $timeout(function () {
                // This code runs after the authentication promise has been rejected.
                // Go to the log-in page
                $state.go("root.login");
            })
        }
        return deferred.promise;
    }
    loginRequiredAdmin.$inject = ["$q", "$timeout", "$auth", "$state", "bootstrapped"];

    localStorageServiceProvider
        .setPrefix('nzbhydra');
    localStorageServiceProvider
        .setNotify(true, false);
}]);


nzbhydraapp.config(["paginationTemplateProvider", function (paginationTemplateProvider) {
    paginationTemplateProvider.setPath('static/html/dirPagination.tpl.html');
}]);

nzbhydraapp.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.latencyThreshold = 100;
}]);

nzbhydraapp.config(['growlProvider', function (growlProvider) {
    growlProvider.globalTimeToLive(5000);
    growlProvider.globalPosition('bottom-right');
}]);

nzbhydraapp.directive('ngEnter', function () {
    return function (scope, element, attr) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$evalAsync(attr.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});

nzbhydraapp.filter('nzblink', function () {
    return function (resultItem) {
        var uri = new URI("internalapi/getnzb");
        uri.addQuery("searchResultId", resultItem.searchResultId);
        return uri.toString();
    }
});

nzbhydraapp.factory('focus', ["$rootScope", "$timeout", function ($rootScope, $timeout) {
    return function (name) {
        $timeout(function () {
            $rootScope.$broadcast('focusOn', name);
        });
    }
}]);

nzbhydraapp.run(["$rootScope", function ($rootScope) {
    $rootScope.$on('$stateChangeSuccess',
        function (event, toState, toParams, fromState, fromParams) {
            try {
                $rootScope.title = toState.views[Object.keys(toState.views)[0]].resolve.$title();
            } catch(e) {
                
            }
                
        });
}]);


nzbhydraapp.filter('unsafe', ["$sce", function ($sce) {
    return $sce.trustAsHtml;
}]);

nzbhydraapp.config(["$provide", function ($provide) {
    $provide.decorator("$exceptionHandler", ['$delegate', '$injector', function ($delegate, $injector) {
        return function (exception, cause) {
            $delegate(exception, cause);
            try {
                console.log(exception);
                var stack = exception.stack.split('\n').map(function (line) {
                    return line.trim();
                });
                stack = stack.join("\n");
                $injector.get("$http").put("internalapi/logerror", {error: stack, cause: angular.isDefined(cause) ? cause.toString() : "No known cause"});


            } catch (e) {
                console.error("Unable to log JS exception to server", e);
            }
        };
    }]);
}]);

_.mixin({
    isNullOrEmpty: function (string) {
        return (_.isUndefined(string) || _.isNull(string) || (_.isString(string) && string.length === 0))
    }
});

nzbhydraapp.factory('sessionInjector', ["$injector", function ($injector) {
    var sessionInjector = {
        response: function (response) {
            if (response.headers("Hydra-MaySeeAdmin") != null) {
                $injector.get("HydraAuthService").setLoggedInByBasic(response.headers("Hydra-MaySeeStats") == "True", response.headers("Hydra-MaySeeAdmin") == "True", response.headers("Hydra-Username"))
            }
            
            return response;
        }
    };
    return sessionInjector;
}]);

nzbhydraapp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('sessionInjector');
}]);

nzbhydraapp.directive('autoFocus', ["$timeout", function ($timeout) {
    return {
        restrict: 'AC',
        link: function (_scope, _element) {
            $timeout(function () {
                _element[0].focus();
            }, 0);
        }
    };
}]);
angular
    .module('nzbhydraApp')
    .directive('hydraupdates', hydraupdates);

function hydraupdates() {
    controller.$inject = ["$scope", "UpdateService", "$sce"];
    return {
        templateUrl: 'static/html/directives/updates.html',
        controller: controller
    };

    function controller($scope, UpdateService, $sce) {

        $scope.loadingPromise = UpdateService.getVersions().then(function (data) {
            $scope.currentVersion = data.data.currentVersion;
            $scope.repVersion = data.data.repVersion;
            $scope.updateAvailable = data.data.updateAvailable;
            $scope.changelog = data.data.changelog;
        });
        
        UpdateService.getVersionHistory().then(function(data) {
            $scope.versionHistory = $sce.trustAsHtml(data.data.versionHistory);
        });

        $scope.update = function () {
            UpdateService.update();
        };

        $scope.showChangelog = function () {
            UpdateService.showChanges($scope.changelog);
        };
        
        

    }
}


angular
    .module('nzbhydraApp')
    .directive('searchResult', searchResult);

function searchResult() {
    return {
        templateUrl: 'static/html/directives/search-result.html',
        require: '^titleGroup',
        scope: {
            titleGroup: "=",
            showDuplicates: "=",
            selected: "=",
            rowIndex: "="
        },
        controller: ['$scope', '$element', '$attrs', controller],
        multiElement: true
    };

    function controller($scope, $element, $attrs) {
        $scope.titleGroupExpanded = false;
        $scope.hashGroupExpanded = {};

        $scope.toggleTitleGroup = function () {
            $scope.titleGroupExpanded = !$scope.titleGroupExpanded;
            if (!$scope.titleGroupExpanded) {
                $scope.hashGroupExpanded[$scope.titleGroup[0][0].hash] = false; //Also collapse the first title's duplicates
            }
        };

        $scope.groupingRowDuplicatesToShow = groupingRowDuplicatesToShow;
        function groupingRowDuplicatesToShow() {
            if ($scope.showDuplicates &&  $scope.titleGroup[0].length > 1 && $scope.hashGroupExpanded[$scope.titleGroup[0][0].hash]) {
                return $scope.titleGroup[0].slice(1);
            } else {
                return [];
            }
        }

        //<div ng-repeat="hashGroup in titleGroup" ng-if="titleGroup.length > 0 && titleGroupExpanded"  class="search-results-row">
        $scope.otherTitleRowsToShow = otherTitleRowsToShow;
        function otherTitleRowsToShow() {
            if ($scope.titleGroup.length > 1 && $scope.titleGroupExpanded) {
                return $scope.titleGroup.slice(1);
            } else {
                return [];
            }
        }
        
        $scope.hashGroupDuplicatesToShow = hashGroupDuplicatesToShow;
        function hashGroupDuplicatesToShow(hashGroup) {
            if ($scope.showDuplicates && $scope.hashGroupExpanded[hashGroup[0].hash]) {
                return hashGroup.slice(1);
            } else {
                return [];
            }
        }
    }
}
angular
    .module('nzbhydraApp')
    .directive('otherColumns', otherColumns);

function otherColumns($http, $templateCache, $compile, $window) {
    controller.$inject = ["$scope", "$http", "$uibModal", "growl"];
    return {
        scope: {
            result: "="
        },
        multiElement: true,

        link: function (scope, element, attrs) {
            $http.get('static/html/directives/search-result-non-title-columns.html', {cache: $templateCache}).success(function (templateContent) {
                element.replaceWith($compile(templateContent)(scope));
            });

        },
        controller: controller
    };

    function controller($scope, $http, $uibModal, growl) {
        
        $scope.showNfo = showNfo;
        function showNfo(resultItem) {
            if (resultItem.has_nfo == 0) {
                return;
            }
            var uri = new URI("internalapi/getnfo");
            uri.addQuery("searchresultid", resultItem.searchResultId);
            return $http.get(uri.toString()).then(function (response) {
                if (response.data.has_nfo) {
                    $scope.openModal("lg", response.data.nfo)
                } else {
                    if (!angular.isUndefined(resultItem.message)) {
                        growl.error(resultItem.message);
                    } else {
                        growl.info("No NFO available");
                    }
                }
            });
        }

        $scope.openModal = openModal;

        function openModal(size, nfo) {
            var modalInstance = $uibModal.open({
                template: '<pre class="nfo"><span ng-bind-html="nfo"></span></pre>',
                controller: 'NfoModalInstanceCtrl',
                size: size,
                resolve: {
                    nfo: function () {
                        return nfo;
                    }
                }
            });

            modalInstance.result.then();
        }
        
        $scope.downloadNzb = downloadNzb;
        
        function downloadNzb(resultItem) {
            //href = "{{ result.link }}"
            $window.location.href = resultItem.link;
        }
    }
}
otherColumns.$inject = ["$http", "$templateCache", "$compile", "$window"];

angular
    .module('nzbhydraApp')
    .controller('NfoModalInstanceCtrl', NfoModalInstanceCtrl);

function NfoModalInstanceCtrl($scope, $modalInstance, nfo) {

    $scope.nfo = nfo;

    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss();
    };
}
NfoModalInstanceCtrl.$inject = ["$scope", "$modalInstance", "nfo"];
//Can be used in an ng-repeat directive to call a function when the last element was rendered
//We use it to mark the end of sorting / filtering so we can stop blocking the UI

angular
    .module('nzbhydraApp')
    .directive('onFinishRender', onFinishRender);

function onFinishRender($timeout) {
    function linkFunction(scope, element, attr) {
        
        if (scope.$last === true) {
                $timeout(function () {
                    scope.$evalAsync(attr.onFinishRender);
                });
            }
    }

    return {
        link: linkFunction
    }
}
onFinishRender.$inject = ["$timeout"];
angular
    .module('nzbhydraApp')
    .directive('hydralog', hydralog);

function hydralog() {
    controller.$inject = ["$scope", "$http", "$sce"];
    return {
        template: '<div cg-busy="{promise:logPromise,message:\'Loading log file\'}"><pre ng-bind-html="log" style="text-align: left; height: 65vh; overflow-y: scroll"></pre></div>',
        controller: controller
    };

    function controller($scope, $http, $sce) {
        $scope.logPromise = $http.get("internalapi/getlogs").success(function (data) {
            $scope.log = $sce.trustAsHtml(data.log);
        });

    }
}


angular
    .module('nzbhydraApp').directive("keepFocus", ['$timeout', function ($timeout) {
    /*
     Intended use:
     <input keep-focus ng-model='someModel.value'></input>
     */
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function ($scope, $element, attrs, ngModel) {

            ngModel.$parsers.unshift(function (value) {
                $timeout(function () {
                    $element[0].focus();
                });
                return value;
            });

        }
    };
}])
angular
    .module('nzbhydraApp')
    .directive('indexerInput', indexerInput);

function indexerInput() {
    controller.$inject = ["$scope"];
    return {
        templateUrl: 'static/html/directives/indexer-input.html',
        scope: {
            indexer: "=",
            model: "=",
            onClick: "="
        },
        replace: true,
        controller: controller
    };

    function controller($scope) {
        $scope.isFocused = false;
        
        $scope.onFocus = function() {
            $scope.isFocused = true;
        };

        $scope.onBlur = function () {
            $scope.isFocused = false;    
        };
        
    }
}


angular
    .module('nzbhydraApp').directive('focusOn', focusOn);

function focusOn() {
    return directive;
    function directive(scope, elem, attr) {
        scope.$on('focusOn', function (e, name) {
            if (name === attr.focusOn) {
                elem[0].focus();
            }
        });
    }
}

angular
    .module('nzbhydraApp')
    .directive('downloadNzbsButton', downloadNzbsButton);

function downloadNzbsButton() {
    controller.$inject = ["$scope", "NzbDownloadService", "growl"];
    return {
        templateUrl: 'static/html/directives/download-nzbs-button.html',
        require: ['^searchResults'],
        scope: {
            searchResults: "="
        },
        controller: controller
    };

    function controller($scope, NzbDownloadService, growl) {

        $scope.downloaders = NzbDownloadService.getEnabledDownloaders();

        $scope.download = function (downloader) {
            if (angular.isUndefined($scope.searchResults) || $scope.searchResults.length == 0) {
                growl.info("You should select at least one result...");
            } else {

                var values = _.map($scope.searchResults, function (value) {
                    return value.searchResultId;
                });

                NzbDownloadService.download(downloader, values).then(function (response) {
                    if (response.data.success) {
                        growl.info("Successfully added " + response.data.added + " of " + response.data.of + " NZBs");
                    } else {
                        growl.error("Error while adding NZBs");
                    }
                }, function () {
                    growl.error("Error while adding NZBs");
                });
            }
        }


    }
}


angular
    .module('nzbhydraApp')
    .directive('connectionTest', connectionTest);

function connectionTest() {
    controller.$inject = ["$scope"];
    return {
        templateUrl: 'static/html/directives/connection-test.html',
        require: ['^type', '^data'],
        scope: {
            type: "=",
            id: "=",
            data: "=",
            downloader: "="
        },
        controller: controller
    };

    function controller($scope) {
        $scope.message = "";
        console.log($scope);

        var testButton = "#button-test-connection";
        var testMessage = "#message-test-connection";

        function showSuccess() {
            angular.element(testButton).removeClass("btn-default");
            angular.element(testButton).removeClass("btn-danger");
            angular.element(testButton).addClass("btn-success");
        }

        function showError() {
            angular.element(testButton).removeClass("btn-default");
            angular.element(testButton).removeClass("btn-success");
            angular.element(testButton).addClass("btn-danger");
        }

        $scope.testConnection = function () {
            angular.element(testButton).addClass("glyphicon-refresh-animate");
            var myInjector = angular.injector(["ng"]);
            var $http = myInjector.get("$http");
            var url;
            var params;
            if ($scope.type == "downloader") {
                url = "internalapi/test_downloader";
                params = {name: $scope.downloader, username: $scope.data.username, password: $scope.data.password};
                if ($scope.downloader == "sabnzbd") {
                    params.apikey = $scope.data.apikey;
                    params.url = $scope.data.url;
                } else {
                    params.host = $scope.data.host;
                    params.port = $scope.data.port;
                    params.ssl = $scope.data.ssl;
                }
            } else if ($scope.data.type == "newznab") {
                url = "internalapi/test_newznab";
                params = {host: $scope.data.host, apikey: $scope.data.apikey};
            } else if ($scope.data.type == "omgwtf") {
                url = "internalapi/test_omgwtf";
                params = {username: $scope.data.username, apikey: $scope.data.apikey};
            }
            $http.get(url, {params: params}).success(function (result) {
                //Using ng-class and a scope variable doesn't work for some reason, is only updated at second click 
                if (result.result) {
                    angular.element(testMessage).text("");
                    showSuccess();
                } else {
                    angular.element(testMessage).text(result.message);
                    showError();
                }

            }).error(function () {
                angular.element(testMessage).text(result.message);
                showError();
            }).finally(function () {
                angular.element(testButton).removeClass("glyphicon-refresh-animate");
            })
        }

    }
}


angular
    .module('nzbhydraApp')
    .directive('cfgFormEntry', cfgFormEntry);

function cfgFormEntry() {
    return {
        templateUrl: 'static/html/directives/cfg-form-entry.html',
        require: ["^title", "^cfg"],
        scope: {
            title: "@",
            cfg: "=",
            help: "@",
            type: "@?",
            options: "=?"
        },
        controller: ["$scope", "$element", "$attrs", function ($scope, $element, $attrs) {
            $scope.type = angular.isDefined($scope.type) ? $scope.type : 'text';
            $scope.options = angular.isDefined($scope.type) ? $scope.$eval($attrs.options) : [];
        }]
    };
}
angular
    .module('nzbhydraApp')
    .directive('hydrabackup', hydrabackup);

function hydrabackup() {
    controller.$inject = ["$scope", "BackupService"];
    return {
        templateUrl: 'static/html/directives/backup.html',
        controller: controller
    };

    function controller($scope, BackupService) {
        BackupService.getBackupsList().then(function(backups) {
            $scope.backups = backups;
        });
        
    }
}


angular
    .module('nzbhydraApp')
    .directive('addableNzbs', addableNzbs);

function addableNzbs() {
    controller.$inject = ["$scope", "NzbDownloadService"];
    return {
        templateUrl: 'static/html/directives/addable-nzbs.html',
        require: ['^searchResultId'],
        scope: {
            searchResultId: "="
        },
        controller: controller
    };

    function controller($scope, NzbDownloadService) {
        $scope.downloaders = NzbDownloadService.getEnabledDownloaders();
    }
}

angular
    .module('nzbhydraApp')
    .directive('addableNzb', addableNzb);

function addableNzb() {
    controller.$inject = ["$scope", "NzbDownloadService", "growl"];
    return {
        templateUrl: 'static/html/directives/addable-nzb.html',
        scope: {
            searchResultId: "=",
            downloader: "="
        },
        controller: controller
    };

    function controller($scope, NzbDownloadService, growl) {
        if ($scope.downloader.iconCssClass) {
            $scope.cssClass = "fa fa-" + $scope.downloader.iconCssClass.replace("fa-","").replace("fa ", ""); 
        } else {
            $scope.cssClass = $scope.downloader.type == "sabnzbd" ? "sabnzbd" : "nzbget";
        }
            
        $scope.add = function () {
            $scope.cssClass = "nzb-spinning";
            NzbDownloadService.download($scope.downloader, [$scope.searchResultId]).then(function (response) {
                if (response.data.success) {
                    $scope.cssClass = $scope.downloader.type == "sabnzbd" ? "sabnzbd-success" : "nzbget-success";
                } else {
                    $scope.cssClass = $scope.downloader.type == "sabnzbd" ? "sabnzbd-error" : "nzbget-error";
                    growl.error("Unable to add NZB. Make sure the downloader is running and properly configured.");
                }
            }, function () {
                $scope.cssClass = $scope.downloader.type == "sabnzbd" ? "sabnzbd-error" : "nzbget-error";
                growl.error("An unexpected error occurred while trying to contact NZB Hydra or add the NZB.");
            })
        };
        
        

    }
}

angular
    .module('nzbhydraApp')
    .factory('UpdateService', UpdateService);

function UpdateService($http, growl, blockUI, RestartService) {

    var currentVersion;
    var repVersion;
    var updateAvailable;
    var changelog;
    var versionHistory;
    
    return {
        update: update,
        showChanges: showChanges,
        getVersions: getVersions,
        getChangelog: getChangelog,
        getVersionHistory: getVersionHistory
    };
    
    
    
    function getVersions() {
        return $http.get("internalapi/get_versions").then(function (data) {
            currentVersion = data.data.currentVersion;
            repVersion = data.data.repVersion;
            updateAvailable = data.data.updateAvailable;
            return data;
        });
    }

    function getChangelog() {
        return $http.get("internalapi/get_changelog", {currentVersion: currentVersion, repVersion: repVersion}).then(function (data) {
            changelog = data.data.changelog;
            return data;
        });
    }
    
    function getVersionHistory() {
        return $http.get("internalapi/get_version_history").then(function (data) {
            versionHistory = data.data.versionHistory;
            return data;
        });
    }

    function showChanges(changelog) {

        var myInjector = angular.injector(["ng", "ui.bootstrap"]);
        var $uibModal = myInjector.get("$uibModal");
        var params = {
            size: "lg",
            templateUrl: "static/html/changelog.html",
            resolve: {
                changelog: function () {
                    return changelog;
                }
            },
            controller: function ($scope, $sce, $uibModalInstance, changelog) {
                //I fucking hate that untrusted HTML shit
                changelog = $sce.trustAsHtml(changelog);
                $scope.changelog = changelog;
                console.log(changelog);
                $scope.ok = function () {
                    $uibModalInstance.dismiss();
                };
            }
        };

        var modalInstance = $uibModal.open(params);

        modalInstance.result.then();
    }
    

    function update() {
        blockUI.start("Updating. Please stand by...");
        $http.get("internalapi/update").then(function (data) {
                if (data.data.success) {
                    RestartService.countdownAndReload("Update complete.");
                } else {
                    blockUI.reset();
                    growl.info("An error occurred while updating. Please check the logs.");
                }
            },
            function () {
                blockUI.reset();
                growl.info("An error occurred while updating. Please check the logs.");
            });
    }
}
UpdateService.$inject = ["$http", "growl", "blockUI", "RestartService"];


angular
    .module('nzbhydraApp')
    .controller('UpdateFooterController', UpdateFooterController);

function UpdateFooterController($scope, UpdateService, HydraAuthService, bootstrapped) {

    $scope.updateAvailable = false;
    $scope.checked = false;

    $scope.mayUpdate = HydraAuthService.getUserRights().maySeeAdmin || bootstrapped.maySeeAdmin;

    $scope.$on("user:loggedIn", function (event, data) {
        if (data.maySeeAdmin && !$scope.checked) {
            retrieveUpdateInfos();
        }
    });


    if ($scope.mayUpdate) {
        retrieveUpdateInfos();
    }

    function retrieveUpdateInfos() {
        $scope.checked = true;
        UpdateService.getVersions().then(function (data) {
            $scope.currentVersion = data.data.currentVersion;
            $scope.repVersion = data.data.repVersion;
            $scope.updateAvailable = data.data.updateAvailable;
            $scope.changelog = data.data.changelog;
        });
    }


    $scope.update = function () {
        UpdateService.update();
    };

    $scope.showChangelog = function () {
        UpdateService.showChanges($scope.changelog);
    }

}
UpdateFooterController.$inject = ["$scope", "UpdateService", "HydraAuthService", "bootstrapped"];

angular
    .module('nzbhydraApp')
    .controller('SystemController', SystemController);

function SystemController($scope, $state, $http, growl, RestartService, NzbHydraControlService) {


    $scope.shutdown = function () {
        NzbHydraControlService.shutdown().then(function () {
                growl.info("Shutdown initiated. Cya!");
            },
            function () {
                growl.info("Unable to send shutdown command.");
            })
    };

    $scope.restart = function () {
        RestartService.restart();
    };
    

    $scope.tabs = [
        {
            active: false,
            state: 'root.system'
        },
        {
            active: false,
            state: 'root.system.updates'
        },
        {
            active: false,
            state: 'root.system.log'
        },
        {
            active: false,
            state: 'root.system.backup'
        },
        {
            active: false,
            state: 'root.system.bugreport'
        },
        {
            active: false,
            state: 'root.system.about'
        }
    ];


    for (var i = 0; i < $scope.tabs.length; i++) {
        if ($state.is($scope.tabs[i].state)) {
            $scope.tabs[i].active = true;
        }
    }


    $scope.goToState = function (index) {
        $state.go($scope.tabs[index].state);
    
    };

    $scope.downloadDebuggingInfos = function() {
        $http({method: 'GET', url: '/internalapi/getdebugginginfos', responseType: 'arraybuffer'}).success(function (data, status, headers, config) {
            var a = document.createElement('a');
            var blob = new Blob([data], {'type': "application/octet-stream"});
            a.href = URL.createObjectURL(blob);
            var filename = "nzbhydra-debuginfo-" + moment().format("YYYY-MM-DD-HH-mm") + ".zip";
            a.download = filename;
            
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }).error(function (data, status, headers, config) {
            console.log("Error:" + status);
        });
    }
    
}
SystemController.$inject = ["$scope", "$state", "$http", "growl", "RestartService", "NzbHydraControlService"];

angular
    .module('nzbhydraApp')
    .factory('StatsService', StatsService);

function StatsService($http) {

    return {
        get: getStats,
        getSearchHistory: getSearchHistory,
        getDownloadHistory: getDownloadHistory
    };

    function getStats() {
        return $http.get("internalapi/getstats").success(function (response) {
            return response.data;
        });
    }

    function getSearchHistory(pageNumber, limit, type) {
        if (angular.isUndefined(pageNumber)) {
            pageNumber = 1;
        }
        if (angular.isUndefined(limit)) {
            limit = 100;
        }
        if (angular.isUndefined(type)) {
            type = "All";
        }
        return $http.get("internalapi/getsearchrequests", {params: {page: pageNumber, limit: limit, type: type}}).success(function (response) {
            return {
                searchRequests: response.searchRequests,
                totalRequests: response.totalRequests
            }
        });
    }
    
    function getDownloadHistory(pageNumber, limit, type) {
        if (angular.isUndefined(pageNumber)) {
            pageNumber = 1;
        }
        if (angular.isUndefined(limit)) {
            limit = 100;
        }
        if (angular.isUndefined(type)) {
            type = "All";
        }
        console.log(1);
        return $http.get("internalapi/getnzbdownloads", {params: {page: pageNumber, limit: limit, type: type}}).success(function (response) {
            console.log(2);
            return {
                nzbDownloads: response.nzbDownloads,
                totalDownloads: response.totalDownloads
            };
            
        });
    }

}
StatsService.$inject = ["$http"];
angular
    .module('nzbhydraApp')
    .controller('StatsController', StatsController);

function StatsController($scope, stats) {

    stats = stats.data;
    $scope.nzbDownloads = null;
    $scope.avgResponseTimes = stats.avgResponseTimes;
    $scope.avgIndexerSearchResultsShares = stats.avgIndexerSearchResultsShares;
    $scope.avgIndexerAccessSuccesses = stats.avgIndexerAccessSuccesses;
    $scope.indexerDownloadShares = stats.indexerDownloadShares;
    
}
StatsController.$inject = ["$scope", "stats"];

//
angular
    .module('nzbhydraApp')
    .factory('SearchService', SearchService);

function SearchService($http) {


    var lastExecutedQuery;
    var lastResults;

    return {
        search: search,
        getLastResults: getLastResults,
        loadMore: loadMore
    };
    

    function search(category, query, tmdbid, title, tvdbid, rid, season, episode, minsize, maxsize, minage, maxage, indexers, mode) {
        var uri;
        if (category.indexOf("Movies") > -1 || (category.indexOf("20") == 0) || mode == "movie") {
            console.log("Search for movies");
            uri = new URI("internalapi/moviesearch");
            if (angular.isDefined(tmdbid)) {
                console.log("moviesearch per tmdbid");
                uri.addQuery("tmdbid", tmdbid);
            } else {
                console.log("moviesearch per query");
                uri.addQuery("query", query);
            }

        } else if (category.indexOf("TV") > -1 || (category.indexOf("50") == 0) || mode == "tvsearch") {
            console.log("Search for shows");
            uri = new URI("internalapi/tvsearch");
            if (angular.isDefined(tvdbid)) {
                uri.addQuery("tvdbid", tvdbid);
            }
            if (angular.isDefined(rid)) {
                uri.addQuery("rid", rid);
            } else {
                console.log("tvsearch per query");
                uri.addQuery("query", query);
            }

            if (angular.isDefined(season)) {
                uri.addQuery("season", season);
            }
            if (angular.isDefined(episode)) {
                uri.addQuery("episode", episode);
            }
        } else {
            uri = new URI("internalapi/search");
            uri.addQuery("query", query);
        }
        if (angular.isDefined(title)) {
            uri.addQuery("title", title);
        }
        if (_.isNumber(minsize)) {
            uri.addQuery("minsize", minsize);
        }
        if (_.isNumber(maxsize)) {
            uri.addQuery("maxsize", maxsize);
        }
        if (_.isNumber(minage)) {
            uri.addQuery("minage", minage);
        }
        if (_.isNumber(maxage)) {
            uri.addQuery("maxage", maxage);
        }
        if (!angular.isUndefined(indexers)) {
            uri.addQuery("indexers", decodeURIComponent(indexers));
        }
        

        uri.addQuery("category", category);
        lastExecutedQuery = uri;
        return $http.get(uri.toString()).then(processData);

    }

    function loadMore(offset) {
        lastExecutedQuery.removeQuery("offset");
        lastExecutedQuery.addQuery("offset", offset);

        return $http.get(lastExecutedQuery.toString()).then(processData);
    }

    function processData(response) {
        var results = response.data.results;
        var indexersearches = response.data.indexersearches;
        var total = response.data.total;
        var resultsCount = results.length;


        //Sum up response times of indexers from individual api accesses
        //TODO: Move this to search result controller because we need to update it every time we loaded more results
        _.each(indexersearches, function (ps) {
            if (ps.did_search) {
                ps.averageResponseTime = _.reduce(ps.apiAccesses, function (memo, rp) {
                    return memo + rp.response_time;
                }, 0);
                ps.averageResponseTime = ps.averageResponseTime / ps.apiAccesses.length;
            }
        });
        
        lastResults = {"results": results, "indexersearches": indexersearches, "total": total, "resultsCount": resultsCount};
        return lastResults;
    }
    
    function getLastResults() {
        return lastResults;
    }
}
SearchService.$inject = ["$http"];
angular
    .module('nzbhydraApp')
    .controller('SearchResultsController', SearchResultsController);

//SearchResultsController.$inject = ['blockUi'];
function SearchResultsController($stateParams, $scope, $q, $timeout, blockUI, growl, localStorageService, SearchService, ConfigService) {

    
    if (localStorageService.get("sorting") != null) {
        var sorting = localStorageService.get("sorting");
        $scope.sortPredicate = sorting.predicate;
        $scope.sortReversed = sorting.reversed;
    } else {
        $scope.sortPredicate = "epoch";
        $scope.sortReversed = true;
    }
    $scope.limitTo = 100;
    $scope.offset = 0;
    //Handle incoming data
    
    $scope.indexersearches = SearchService.getLastResults().indexersearches;
    $scope.indexerDisplayState = []; //Stores if a indexer's results should be displayed or not
    $scope.indexerResultsInfo = {}; //Stores information about the indexer's results like how many we already retrieved
    $scope.groupExpanded = {};
    $scope.doShowDuplicates = ConfigService.getSafe().searching.alwaysShowDuplicates;
    $scope.selected = [];
    
    $scope.indexerStatusesExpanded = localStorageService.get("indexerStatusesExpanded") != null ? localStorageService.get("indexerStatusesExpanded") : false;
    
    $scope.countFilteredOut = 0;

    //Initially set visibility of all found indexers to true, they're needed for initial filtering / sorting
    _.forEach($scope.indexersearches, function (ps) {
        $scope.indexerDisplayState[ps.indexer.toLowerCase()] = true;
    });

    _.forEach($scope.indexersearches, function (ps) {
        $scope.indexerResultsInfo[ps.indexer.toLowerCase()] = {loadedResults: ps.loaded_results};
    });
    
    //Process results
    $scope.results = SearchService.getLastResults().results;
    $scope.total = SearchService.getLastResults().total;
    $scope.resultsCount = SearchService.getLastResults().resultsCount;
    $scope.filteredResults = sortAndFilter($scope.results);
    stopBlocking();

    //Returns the content of the property (defined by the current sortPredicate) of the first group element 
    $scope.firstResultPredicate = firstResultPredicate;
    function firstResultPredicate(item) {
        return item[0][$scope.sortPredicate];
    }

    //Returns the unique group identifier which allows angular to keep track of the grouped search results even after filtering, making filtering by indexers a lot faster (albeit still somewhat slow...)  
    $scope.groupId = groupId;
    function groupId(item) {
        return item[0][0].searchResultId;
    }

    //Block the UI and return after timeout. This way we make sure that the blocking is done before angular starts updating the model/view. There's probably a better way to achieve that?
    function startBlocking(message) {
        var deferred = $q.defer();
        blockUI.start(message);
        $timeout(function () {
            deferred.resolve();
        }, 100);
        return deferred.promise;
    }

    //Set sorting according to the predicate. If it's the same as the old one, reverse, if not sort by the given default (so that age is descending, name ascending, etc.)
    //Sorting (and filtering) are really slow (about 2 seconds for 1000 results from 5 indexers) but I haven't found any way of making it faster, apart from the tracking 
    $scope.setSorting = setSorting;
    function setSorting(predicate, reversedDefault) {
        startBlocking("Sorting / filtering...").then(function () {

            if (predicate == $scope.sortPredicate) {
                $scope.sortReversed = !$scope.sortReversed;
            } else {
                $scope.sortReversed = reversedDefault;
            }
            $scope.sortPredicate = predicate;
            $scope.filteredResults = sortAndFilter($scope.results);
            localStorageService.set("sorting", {predicate: predicate, reversed: $scope.sortReversed});
            blockUI.reset();
        });
    }


    
    function sortAndFilter(results) {
        $scope.countFilteredOut = 0;
        var safeConfig = ConfigService.getSafe();
        function filterByAgeAndSize(item) {
            var filterOut = !(_.isNumber($stateParams.minsize) && item.size / 1024 / 1024 < $stateParams.minsize)
                && !(_.isNumber($stateParams.maxsize) && item.size / 1024 / 1024 > $stateParams.maxsize)
                && !(_.isNumber($stateParams.minage) && item.age_days < $stateParams.minage)
                && !((_.isNumber($stateParams.maxage) && item.age_days > $stateParams.maxage)
                    || (_.isNumber(safeConfig.searching.maxAge) && item.age_days > safeConfig.searching.maxAge)
                        
                );
            if (!filterOut) {
                $scope.countFilteredOut++;
            }
            return filterOut;
        }
        
        
        function getItemIndexerDisplayState(item) {
            return $scope.indexerDisplayState[item.indexer.toLowerCase()];
        }

        function getCleanedTitle(element) {
            return element.title.toLowerCase().replace(/[\s\-\._]/ig, "");
        }

        function createSortedHashgroups(titleGroup) {

            function createHashGroup(hashGroup) {
                //Sorting hash group's contents should not matter for size and age and title but might for category (we might remove this, it's probably mostly unnecessary)
                var sortedHashGroup = _.sortBy(hashGroup, function (item) {
                    var sortPredicateValue = item[$scope.sortPredicate];
                    return $scope.sortReversed ? -sortPredicateValue : sortPredicateValue;
                });
                //Now sort the hash group by indexer score (inverted) so that the result with the highest indexer score is shown on top (or as the only one of a hash group if it's collapsed)
                sortedHashGroup = _.sortBy(sortedHashGroup, function (item) {
                    return item.indexerscore * -1;
                });
                return sortedHashGroup;
            }

            function getHashGroupFirstElementSortPredicate(hashGroup) {
                var sortPredicateValue = hashGroup[0][$scope.sortPredicate];
                return $scope.sortReversed ? -sortPredicateValue : sortPredicateValue;
            }

            return _.chain(titleGroup).groupBy("hash").map(createHashGroup).sortBy(getHashGroupFirstElementSortPredicate).value();
        }

        function getTitleGroupFirstElementsSortPredicate(titleGroup) {
            var sortPredicateValue;
            if ($scope.sortPredicate == "title") {
                sortPredicateValue = titleGroup[0][0].title.toLowerCase();
            } else {
                sortPredicateValue = titleGroup[0][0][$scope.sortPredicate];
            }
            
            return sortPredicateValue;
        }

        var filtered = _.chain(results)
            //Remove elements of which the indexer is currently hidden    
            .filter(getItemIndexerDisplayState)
            //Make groups of results with the same title    
            .groupBy(getCleanedTitle)
            //For every title group make subgroups of duplicates and sort the group    
            .map(createSortedHashgroups)
            //And then sort the title group using its first hashgroup's first item (the group itself is already sorted and so are the hash groups)    
            .sortBy(getTitleGroupFirstElementsSortPredicate)
            .value();
        if ($scope.sortReversed) {
            filtered = filtered.reverse();
        }
        if ($scope.countFilteredOut > 0) {
            growl.info("Filtered " + $scope.countFilteredOut + " of the retrieved results");
        }
        return filtered;

    }

    $scope.toggleTitlegroupExpand = function toggleTitlegroupExpand(titleGroup) {
        $scope.groupExpanded[titleGroup[0][0].title] = !$scope.groupExpanded[titleGroup[0][0].title];
        $scope.groupExpanded[titleGroup[0][0].hash] = !$scope.groupExpanded[titleGroup[0][0].hash];
    };


//Clear the blocking
    $scope.stopBlocking = stopBlocking;
    function stopBlocking() {
        blockUI.reset();
    }

    $scope.loadMore = loadMore;
    function loadMore() {
        startBlocking("Loading more results...").then(function () {
            SearchService.loadMore($scope.resultsCount).then(function (data) {
                $scope.results = $scope.results.concat(data.results);
                $scope.filteredResults = sortAndFilter($scope.results);
                $scope.total = data.total;
                $scope.resultsCount += data.resultsCount;
                stopBlocking();
            });
        });
    }


//Filters the results according to new visibility settings.
    $scope.toggleIndexerDisplay = toggleIndexerDisplay;
    function toggleIndexerDisplay(indexer) {
        $scope.indexerDisplayState[indexer.toLowerCase()] = $scope.indexerDisplayState[indexer.toLowerCase()]; 
        startBlocking("Filtering. Sorry...").then(function () {
            $scope.filteredResults = sortAndFilter($scope.results);
        }).then(function () {
            stopBlocking();
        });
    }

    $scope.countResults = countResults;
    function countResults() {
        return $scope.results.length;
    }
    
    
    $scope.invertSelection = function invertSelection() {
        $scope.selected = _.difference($scope.results, $scope.selected);
    };
    
    $scope.toggleIndexerStatuses = function() {
        $scope.indexerStatusesExpanded = !$scope.indexerStatusesExpanded;
        localStorageService.set("indexerStatusesExpanded", $scope.indexerStatusesExpanded);
    }

}
SearchResultsController.$inject = ["$stateParams", "$scope", "$q", "$timeout", "blockUI", "growl", "localStorageService", "SearchService", "ConfigService"];
angular
    .module('nzbhydraApp')
    .controller('SearchHistoryController', SearchHistoryController);


function SearchHistoryController($scope, $state, StatsService, history) {
    $scope.type = "All";
    $scope.limit = 100;
    $scope.pagination = {
        current: 1
    };
    $scope.isLoaded = true;
    $scope.searchRequests = history.data.searchRequests;
    $scope.totalRequests = history.data.totalRequests;


    $scope.pageChanged = function (newPage) {
        getSearchRequestsPage(newPage);
    };

    $scope.changeType = function (type) {
        $scope.type = type;
        getSearchRequestsPage($scope.pagination.current);
    };

    function getSearchRequestsPage(pageNumber) {
        StatsService.getSearchHistory(pageNumber, $scope.limit, $scope.type).then(function (history) {
            $scope.searchRequests = history.data.searchRequests;
            $scope.totalRequests = history.data.totalRequests;
            $scope.isLoaded = true;
        });
    }

    $scope.openSearch = function (request) {
        var stateParams = {};
        if (request.identifier_key == "imdbid") {
            stateParams.imdbid = request.identifier_value;
        } else if (request.identifier_key == "tvdbid" || request.identifier_key == "rid") {
            if (request.identifier_key == "rid") {
                stateParams.rid = request.identifier_value;
            } else {
                stateParams.tvdbid = request.identifier_value;
            }

            if (request.season != "") {
                stateParams.season = request.season;
            }
            if (request.episode != "") {
                stateParams.episode = request.episode;
            }
        }
        if (request.query != "") {
            stateParams.query = request.query;
        }
        if (request.type == "tv") {
            stateParams.mode = "tvsearch"
        } else if (request.type == "tv") {
            stateParams.mode = "movie"
        } else {
            stateParams.mode = "search"
        }

        if (request.movietitle != null) {
            stateParams.title = request.movietitle;
        }
        if (request.tvtitle != null) {
            stateParams.title = request.tvtitle;
        }

        if (request.category) {
            stateParams.category = request.category;
        }

        stateParams.category = request.category;

        $state.go("root.search", stateParams, {inherit: false});
    };

    $scope.formatQuery = function (request) {
        if (request.movietitle != null) {
            return request.movietitle;
        }
        if (request.tvtitle != null) {
            return request.tvtitle;
        }
        return request.query;
    }


}
SearchHistoryController.$inject = ["$scope", "$state", "StatsService", "history"];

angular
    .module('nzbhydraApp')
    .controller('SearchController', SearchController);

function SearchController($scope, $http, $stateParams, $state, SearchService, focus, ConfigService, CategoriesService, blockUI, $element) {
    
    function getNumberOrUndefined(number) {
        if (_.isUndefined(number) || _.isNaN(number) || number == "") {
            return undefined;
        }
        number = parseInt(number);
        if (_.isNumber(number)) {
            return number;
        } else {
            return undefined;
        }
    }

    //Fill the form with the search values we got from the state params (so that their values are the same as in the current url)
    $scope.mode = $stateParams.mode;
    $scope.categories = _.filter(CategoriesService.getAll(), function(c) { 
        return c.mayBeSelected && (c.ignoreResults == "never" || c.ignoreResults == "external"); 
    });
    if (angular.isDefined($stateParams.category) && $stateParams.category) {
        $scope.category = CategoriesService.getByName($stateParams.category);
    } else {
        $scope.category = CategoriesService.getDefault();
    }
    $scope.category = (_.isUndefined($stateParams.category) || $stateParams.category == "") ? CategoriesService.getDefault() : CategoriesService.getByName($stateParams.category);
    $scope.tmdbid = $stateParams.tmdbid;
    $scope.tvdbid = $stateParams.tvdbid;
    $scope.rid = $stateParams.rid;
    $scope.title = $stateParams.title;
    $scope.season = $stateParams.season;
    $scope.episode = $stateParams.episode;
    $scope.query = $stateParams.query;
    $scope.minsize = getNumberOrUndefined($stateParams.minsize);
    $scope.maxsize = getNumberOrUndefined($stateParams.maxsize);
    $scope.minage = getNumberOrUndefined($stateParams.minage);
    $scope.maxage = getNumberOrUndefined($stateParams.maxage);
    if (!_.isUndefined($scope.title) && _.isUndefined($scope.query)) {
        $scope.query = $scope.title;
    }
    if (!angular.isUndefined($stateParams.indexers)) {
        $scope.indexers = decodeURIComponent($stateParams.indexers).split("|");
    }

    $scope.showIndexers = {};

    var safeConfig = ConfigService.getSafe();


    $scope.typeAheadWait = 300;
    $scope.selectedItem = "";
    $scope.autocompleteLoading = false;
    $scope.isAskById = $scope.category.supportsById; 
    $scope.isById = {value: true}; //If true the user wants to search by id so we enable autosearch. Was unable to achieve this using a simple boolean
    $scope.availableIndexers = [];
    $scope.autocompleteClass = "autocompletePosterMovies";

    $scope.toggle = function (searchCategory) {
        $scope.category = searchCategory;

        //Show checkbox to ask if the user wants to search by ID (using autocomplete)
        $scope.isAskById = $scope.category.supportsById;

        focus('focus-query-box');
        
        //Hacky way of triggering the autocomplete loading
        var searchModel = $element.find("#searchfield").controller("ngModel");
        if (angular.isDefined(searchModel.$viewValue)) {
            searchModel.$setViewValue(searchModel.$viewValue + " ");
        }

        if (safeConfig.searching.enableCategorySizes) {
            var min = searchCategory.min;
            var max = searchCategory.max;
            if (_.isNumber(min)) {
                $scope.minsize = min;
            } else {
                $scope.minsize = "";
            }
            if (_.isNumber(max)) {
                $scope.maxsize = max;
            } else {
                $scope.maxsize = "";
            }
        }
    };


    // Any function returning a promise object can be used to load values asynchronously
    $scope.getAutocomplete = function (val) {
        $scope.autocompleteLoading = true;
        //Expected model returned from API:
        //label: What to show in the results
        //title: Will be used for file search
        //value: Will be used as extraInfo (ttid oder tvdb id)
        //poster: url of poster to show

        //Don't use autocomplete if checkbox is disabled
        if (!$scope.isById.value) {
            return {};
        }

        if ($scope.category.name.indexOf("movies") > -1) {
            return $http.get('internalapi/autocomplete?type=movie', {
                params: {
                    input: val
                }
            }).then(function (response) {
                $scope.autocompleteLoading = false;
                return response.data.results;
            });
        } else if ($scope.category.name.indexOf("tv") > -1) {

            return $http.get('internalapi/autocomplete?type=tv', {
                params: {
                    input: val
                }
            }).then(function (response) {
                $scope.autocompleteLoading = false;
                return response.data.results;
            });
        } else {
            return {};
        }
    };
    

    $scope.startSearch = function () {
        blockUI.start("Searching...");
        var indexers = angular.isUndefined($scope.indexers) ? undefined : $scope.indexers.join("|");
        SearchService.search($scope.category.name, $scope.query, $stateParams.tmdbid, $scope.title, $scope.tvdbid, $scope.rid, $scope.season, $scope.episode, $scope.minsize, $scope.maxsize, $scope.minage, $scope.maxage, indexers, $scope.mode).then(function () {
            $state.go("root.search.results", {
                minsize: $scope.minsize,
                maxsize: $scope.maxsize,
                minage: $scope.minage,
                maxage: $scope.maxage
            }, {
                inherit: true
            });
            $scope.tmdbid = undefined;
            $scope.tvdbid = undefined;
        });
    };
    
    function getSelectedIndexers() {
        var activatedIndexers = _.filter($scope.availableIndexers).filter(function (indexer) {
            return indexer.activated ;
        });
            return _.pluck(activatedIndexers, "name").join("|");
    }


    $scope.goToSearchUrl = function () {
        var stateParams = {};
        if ($scope.category.name.indexOf("movies") > -1) {
            stateParams.title = $scope.title;
            stateParams.mode = "movie";
        } else if ($scope.category.name.indexOf("tv") > -1) {
            stateParams.mode = "tvsearch";
            stateParams.title = $scope.title;
        } else if ($scope.category.name == "ebook") {
            stateParams.mode = "ebook";
        } else {
            stateParams.mode = "search";
        }
        
        stateParams.tmdbid = $scope.tmdbid;
        stateParams.tvdbid = $scope.tvdbid;
        stateParams.title = $scope.title;
        stateParams.season = $scope.season;
        stateParams.episode = $scope.episode;
        stateParams.query = $scope.query;
        stateParams.minsize = $scope.minsize;
        stateParams.maxsize = $scope.maxsize;
        stateParams.minage = $scope.minage;
        stateParams.maxage = $scope.maxage;
        stateParams.category = $scope.category.name;
        stateParams.indexers = encodeURIComponent(getSelectedIndexers());
        
        $state.go("root.search", stateParams, {inherit: false, notify: true, reload: true});
    };


    $scope.selectAutocompleteItem = function ($item) {
        $scope.selectedItem = $item;
        $scope.title = $item.title;
        if ($scope.category.name.indexOf("movies") > -1) {
            $scope.tmdbid = $item.value;
        } else if ($scope.category.name.indexOf("tv") > -1) {
            $scope.tvdbid = $item.value;
        }
        $scope.query = "";
        $scope.goToSearchUrl();
    };
    
    $scope.startQuerySearch = function() {
        //Reset values because they might've been set from the last search
        $scope.title = undefined;
        $scope.tmdbid = undefined;
        $scope.tvdbid = undefined;
        $scope.goToSearchUrl();
    };


    $scope.autocompleteActive = function () {
        return $scope.category.supportsById;
    };

    $scope.seriesSelected = function () {
        return $scope.category.name.indexOf("tv") > -1;
    };
    
    $scope.toggleIndexer = function(indexer) {
        $scope.indexers[indexer] = !$scope.indexers[indexer]
    };
    

    function isIndexerPreselected(indexer) {
        if (angular.isUndefined($scope.indexers)) {
            return indexer.preselect;
        } else {
            return _.contains($scope.indexers, indexer.name);
        }
        
    }

    
    $scope.availableIndexers = _.chain(safeConfig.indexers).filter(function (indexer) {
        return indexer.enabled && indexer.showOnSearch;
    }).sortBy("name")
        .map(function (indexer) {
        return {name: indexer.name, activated: isIndexerPreselected(indexer)};
    }).value();
    

    if ($scope.mode) {
        console.log("Starting search in newly loaded search controller");
        $scope.startSearch();
    }
    
}
SearchController.$inject = ["$scope", "$http", "$stateParams", "$state", "SearchService", "focus", "ConfigService", "CategoriesService", "blockUI", "$element"];

angular
    .module('nzbhydraApp')
    .factory('RestartService', RestartService);

function RestartService(blockUI, $timeout, $window, NzbHydraControlService) {

    return {
        restart: restart,
        countdownAndReload: countdownAndReload
    };

    function countdownAndReload(message) {
        message = angular.isUndefined ? "" : " ";

        blockUI.start(message + "Restarting. Will reload page in 5 seconds...");
        $timeout(function () {
            blockUI.start(message + "Restarting. Will reload page in 4 seconds...");
            $timeout(function () {
                blockUI.start(message + "Restarting. Will reload page in 3 seconds...");
                $timeout(function () {
                    blockUI.start(message + "Restarting. Will reload page in 2 seconds...");
                    $timeout(function () {
                        blockUI.start(message + "Restarting. Will reload page in 1 second...");
                        $timeout(function () {
                            blockUI.start("Reloading page...");
                            $window.location.reload();
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }

    function restart(message) {
        NzbHydraControlService.restart().then(countdownAndReload(message),
            function () {
                growl.info("Unable to send restart command.");
            }
        )
    }
}
RestartService.$inject = ["blockUI", "$timeout", "$window", "NzbHydraControlService"];

angular
    .module('nzbhydraApp')
    .factory('NzbHydraControlService', NzbHydraControlService);

function NzbHydraControlService($http) {

    return {
        restart: restart,
        shutdown: shutdown
    };

    function restart() {
        return $http.get("internalapi/restart");
    }

    function shutdown() {
        return $http.get("internalapi/shutdown");
    }
}
NzbHydraControlService.$inject = ["$http"];

angular
    .module('nzbhydraApp')
    .factory('NzbDownloadService', NzbDownloadService);

function NzbDownloadService($http, ConfigService, DownloaderCategoriesService) {

    var service = {
        download: download,
        getEnabledDownloaders: getEnabledDownloaders
    };

    return service;

    function sendNzbAddCommand(downloader, searchresultids, category) {
        return $http.put("internalapi/addnzbs", {downloader: downloader.name, searchresultids: angular.toJson(searchresultids), category: category});
    }
    
    function download(downloader, searchresultids) {
        
        var category = downloader.defaultCategory;
        
        if (_.isUndefined(category) || category == "" || category == null) {
            return DownloaderCategoriesService.openCategorySelection(downloader).then(function (category) {
                return sendNzbAddCommand(downloader, searchresultids, category)
            }, function (error) {
                throw error;
            });
        } else {
            return sendNzbAddCommand(downloader, searchresultids, category)
        }
    }
    
    function getEnabledDownloaders() {
        return _.filter(ConfigService.getSafe().downloaders, "enabled");
    }
}
NzbDownloadService.$inject = ["$http", "ConfigService", "DownloaderCategoriesService"];


angular
    .module('nzbhydraApp')
    .factory('ModalService', ModalService);

function ModalService($uibModal, $q) {
    
    return {
        open: open
    };
    
    function open(headline, message, params, size) {
        //params example:
        /*
        var p =
        {
            yes: {
                text: "Yes",    //default: Ok
                onYes: function() {}
            },
            no: {               //default: Empty
                text: "No",
                onNo: function () {
                }
            },
            cancel: {           
                text: "Cancel", //default: Cancel
                onCancel: function () {
                }
            }
        };
        */
        var modalInstance = $uibModal.open({
            templateUrl: 'static/html/modal.html',
            controller: 'ModalInstanceCtrl',
            size: angular.isDefined(size) ? size : "md",
            resolve: {
                headline: function () {
                    return headline;
                },
                message: function(){ 
                    return message;
                },
                params: function() {
                    return params;
                }
            }
        });

        modalInstance.result.then(function() {
            
        }, function() {
            
        });
    }
    
}
ModalService.$inject = ["$uibModal", "$q"];

angular
    .module('nzbhydraApp')
    .controller('ModalInstanceCtrl', ModalInstanceCtrl);

function ModalInstanceCtrl($scope, $uibModalInstance, headline, message, params) {

    $scope.message = message;
    $scope.headline = headline;
    $scope.params = params;
    $scope.showCancel = angular.isDefined(params) && angular.isDefined(params.cancel);
    $scope.showNo = angular.isDefined(params) && angular.isDefined(params.no);

    if (angular.isUndefined(params) || angular.isUndefined(params.yes)) {
        $scope.params = {
            yes: {
                text: "Ok"
            }
        }
    } else if (angular.isUndefined(params.yes.text)) {
        params.yes.text = "Yes";
    }
    
    if (angular.isDefined(params) && angular.isDefined(params.no) && angular.isUndefined($scope.params.no.text)) {
        $scope.params.no.text = "No";
    }
    
    if (angular.isDefined(params) && angular.isDefined(params.cancel) && angular.isUndefined($scope.params.cancel.text)) {
        $scope.params.cancel.text = "Cancel";
    }

    $scope.yes = function () {
        $uibModalInstance.close();
        if(angular.isDefined(params) && angular.isDefined(params.yes) && angular.isDefined($scope.params.yes.onYes)) {
            $scope.params.yes.onYes();
        }
    };

    $scope.no = function () {
        $uibModalInstance.close();
        if (angular.isDefined(params) && angular.isDefined(params.no) && angular.isDefined($scope.params.no.onNo)) {
            $scope.params.no.onNo();
        }
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss();
        if (angular.isDefined(params.cancel) && angular.isDefined($scope.params.cancel.onCancel)) {
            $scope.params.cancel.onCancel();
        }
    };

    $scope.$on("modal.closing", function (targetScope, reason, c) {
        if (reason == "backdrop click") {
            $scope.cancel();
        }
    });
}
ModalInstanceCtrl.$inject = ["$scope", "$uibModalInstance", "headline", "message", "params"];

angular
    .module('nzbhydraApp')
    .service('GeneralModalService', GeneralModalService);

function GeneralModalService() {
    
    
    this.open = function (msg, template, templateUrl, size, data) {
        
        //Prevent circular dependency
        var myInjector = angular.injector(["ng", "ui.bootstrap"]);
        var $uibModal = myInjector.get("$uibModal");
        var params = {};
        
        if(angular.isUndefined(size)) {
            params["size"] = size;
        }
        if (angular.isUndefined(template)) {
            if (angular.isUndefined(templateUrl)) {
                params["template"] = '<pre>' + msg + '</pre>';
            } else {
                params["templateUrl"] = templateUrl;
            }
        } else {
            params["template"] = template;
        }
        params["resolve"] = 
        {
            data: function () {
                return data;
            }
        };
        
        var modalInstance = $uibModal.open(params);

        modalInstance.result.then();

    };
    
   
}
angular
    .module('nzbhydraApp')
    .controller('LoginController', LoginController);

function LoginController($scope, RequestsErrorHandler, $state, HydraAuthService, $auth, growl) {
    $scope.user = {};
    $scope.login = function () {
        RequestsErrorHandler.specificallyHandled(function () {
            $auth.login($scope.user).then(function (data) {
                HydraAuthService.setLoggedInByForm();
                growl.info("Login successful!");
                $state.go("root.search");
            }, function () {
                growl.error("Login failed!")
            });
        });
    }
}
LoginController.$inject = ["$scope", "RequestsErrorHandler", "$state", "HydraAuthService", "$auth", "growl"];

angular
    .module('nzbhydraApp')
    .controller('IndexerStatusesController', IndexerStatusesController);

    function IndexerStatusesController($scope, $http, statuses) {
        $scope.statuses = statuses.data.indexerStatuses;
        
        $scope.isInPast = function (timestamp) {
            return timestamp * 1000 < (new Date).getTime();
        };
        
        $scope.enable = function(indexerName) {
            $http.get("internalapi/enableindexer", {params: {name: indexerName}}).then(function(response){
                $scope.statuses = response.data.indexerStatuses;
            });
        }

    }
    IndexerStatusesController.$inject = ["$scope", "$http", "statuses"];


angular
    .module('nzbhydraApp')
    .filter('formatDate', formatDate);

function formatDate(dateFilter) {
    return function(timestamp, hidePast) {
        if (timestamp) {
            if (timestamp * 1000 < (new Date).getTime() && hidePast) {
                return ""; //
            }
            
            var t = timestamp * 1000;
            t = dateFilter(t, 'yyyy-MM-dd HH:mm');
            return t;
        } else {
            return "";
        }
    }
}
formatDate.$inject = ["dateFilter"];

angular
    .module('nzbhydraApp')
    .filter('reformatDate', reformatDate);

function reformatDate() {
    return function (date) {
        //Date in database is saved as UTC without timezone information
        return moment.utc(date, "ddd, D MMM YYYY HH:mm:ss z").local().format("YYYY-MM-DD HH:mm");
        
    }
}
angular
    .module('nzbhydraApp')
    .controller('IndexController', IndexController);

function IndexController($scope, $http, $stateParams, $state) {
    console.log("Index");
    $state.go("root.search");
}
IndexController.$inject = ["$scope", "$http", "$stateParams", "$state"];

angular
    .module('nzbhydraApp')
    .factory('HydraAuthService', HydraAuthService);

function HydraAuthService($auth, $q, $rootScope, ConfigService, bootstrapped) {

    var loggedIn = false;
    var username;
    var maySeeAdmin = bootstrapped.maySeeAdmin;
    var maySeeStats = bootstrapped.maySeeStats;
    
    return {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        setLoggedInByForm: setLoggedInByForm,
        getUserRights: getUserRights,
        setLoggedInByBasic: setLoggedInByBasic,
        getUserName: getUserName
    };
    
    function isLoggedIn() {
        return loggedIn || (ConfigService.getSafe().authType == "form" && $auth.isAuthenticated()) || ConfigService.getSafe().authType == "none";
    }
    
    function setLoggedInByForm() {
        maySeeStats = $auth.getPayload().maySeeStats;
        maySeeAdmin = $auth.getPayload().maySeeAdmin;
        username = $auth.getPayload().username;
        loggedIn = true;
        $rootScope.$broadcast("user:loggedIn", {maySeeStats: maySeeStats, maySeeAdmin: maySeeAdmin});
    }

    function setLoggedInByBasic(_maySeeStats, _maySeeAdmin, _username) {
        maySeeAdmin = _maySeeAdmin;
        maySeeStats = _maySeeStats;
        username = _username;
        loggedIn = true;
        $rootScope.$broadcast("user:loggedIn", {maySeeStats: maySeeStats, maySeeAdmin: maySeeAdmin});
    }
    
    function login(user) {
        var deferred = $q.defer();
        $auth.login(user).then(function (data) {
            
            $rootScope.$broadcast("user:loggedIn", data);
           deferred.resolve();
        });
        return deferred;
    }
    
    function logout() {
        $auth.logout();
        loggedIn = false;
        $rootScope.$broadcast("user:loggedOut");
    }
    
    function getUserRights() {
        return {maySeeStats: maySeeStats, maySeeAdmin: maySeeAdmin};
    }
    
    function getUserName() {
        return username;
    }
    
    
    
   
}
HydraAuthService.$inject = ["$auth", "$q", "$rootScope", "ConfigService", "bootstrapped"];
angular
    .module('nzbhydraApp')
    .controller('HeaderController', HeaderController);

function HeaderController($scope, $state, $http, growl, HydraAuthService, ConfigService, bootstrapped) {

    $scope.showLoginout = false;

    if (ConfigService.getSafe().authType == "none") {
        $scope.showAdmin = true;
        $scope.showStats = true;
        $scope.showLoginout = false;
    } else {
        if (HydraAuthService.isLoggedIn()) {
            var rights = HydraAuthService.getUserRights();
            $scope.showAdmin = rights.maySeeAdmin;
            $scope.showStats = rights.maySeeStats;
            $scope.loginlogoutText = "Logout";
            $scope.showLoginout = true;
        } else {
            $scope.showAdmin = !bootstrapped.adminRestricted;
            $scope.showStats = !bootstrapped.statsRestricted;
            $scope.loginlogoutText = "Login";
            $scope.showLoginout = bootstrapped.adminRestricted || bootstrapped.statsRestricted || bootstrapped.searchRestricted;
        }
    }

    function onLogin(data) {
        $scope.showAdmin = data.maySeeAdmin;
        $scope.showStats = data.maySeeStats;
        $scope.showLoginout = true;
        $scope.loginlogoutText = "Logout";
    }

    $scope.$on("user:loggedIn", function (event, data) {
        onLogin(data);
    });

    function onLogout() {
        $scope.showAdmin = !bootstrapped.adminRestricted;
        $scope.showStats = !bootstrapped.statsRestricted;
        $scope.loginlogoutText = "Login";
        $scope.showLoginout = bootstrapped.adminRestricted || bootstrapped.statsRestricted || bootstrapped.searchRestricted;
    }

    $scope.$on("user:loggedOut", function (event, data) {
        onLogout();
    });

    $scope.loginout = function () {
        if (HydraAuthService.isLoggedIn()) {
            HydraAuthService.logout();

            if (ConfigService.getSafe().authType == "basic") {
                growl.info("Logged out. Close your browser to make sure session is closed.");
            }
            else if (ConfigService.getSafe().authType == "form") {
                growl.info("Logged out");
            }
            onLogout();
            $state.go("root.search");
        } else {
            if (ConfigService.getSafe().authType == "basic") {
                var params = {};
                if (HydraAuthService.getUserName()) {
                    params = {
                        old_username: HydraAuthService.getUserName()
                    }
                } 
                $http.get("internalapi/askforpassword", {params: params}).then(function () {
                    growl.info("Login successful!");
                    //onLogin();
                    $state.go("root.search");
                })
            } else if (ConfigService.getSafe().authType == "form") {
                $state.go("root.login");
            } else {
                growl.info("You shouldn't need to login but here you go!");
            }
        }
    }
}
HeaderController.$inject = ["$scope", "$state", "$http", "growl", "HydraAuthService", "ConfigService", "bootstrapped"];

var HEADER_NAME = 'MyApp-Handle-Errors-Generically';
var specificallyHandleInProgress = false;

nzbhydraapp.factory('RequestsErrorHandler',  ["$q", "growl", "blockUI", "GeneralModalService", function ($q, growl, blockUI, GeneralModalService) {
    return {
        // --- The user's API for claiming responsiblity for requests ---
        specificallyHandled: function (specificallyHandledBlock) {
            specificallyHandleInProgress = true;
            try {
                return specificallyHandledBlock();
            } finally {
                specificallyHandleInProgress = false;
            }
        },

        // --- Response interceptor for handling errors generically ---
        responseError: function (rejection) {
            blockUI.reset();
            var shouldHandle = (rejection && rejection.config && rejection.config.headers && rejection.config.headers[HEADER_NAME] && !rejection.config.url.contains("logerror"));
            if (shouldHandle) {
                var message = "An error occured :<br>" + rejection.status + ": " + rejection.statusText;

                if (rejection.data) {
                    message += "<br><br>" + rejection.data;
                }
                GeneralModalService.open(message);

            } else if (rejection && rejection.config && rejection.config.headers && rejection.config.headers[HEADER_NAME] && rejection.config.url.contains("logerror")) {
                console.log("Not handling connection error while sending exception to server");
            }

            return $q.reject(rejection);
        }
    };
}]);


nzbhydraapp.config(['$provide', '$httpProvider', function ($provide, $httpProvider) {
    $httpProvider.interceptors.push('RequestsErrorHandler');

    // --- Decorate $http to add a special header by default ---

    function addHeaderToConfig(config) {
        config = config || {};
        config.headers = config.headers || {};

        // Add the header unless user asked to handle errors himself
        if (!specificallyHandleInProgress) {
            config.headers[HEADER_NAME] = true;
        }

        return config;
    }

    // The rest here is mostly boilerplate needed to decorate $http safely
    $provide.decorator('$http', ['$delegate', function ($delegate) {
        function decorateRegularCall(method) {
            return function (url, config) {
                return $delegate[method](url, addHeaderToConfig(config));
            };
        }

        function decorateDataCall(method) {
            return function (url, data, config) {
                return $delegate[method](url, data, addHeaderToConfig(config));
            };
        }

        function copyNotOverriddenAttributes(newHttp) {
            for (var attr in $delegate) {
                if (!newHttp.hasOwnProperty(attr)) {
                    if (typeof($delegate[attr]) === 'function') {
                        newHttp[attr] = function () {
                            return $delegate.apply($delegate, arguments);
                        };
                    } else {
                        newHttp[attr] = $delegate[attr];
                    }
                }
            }
        }

        var newHttp = function (config) {
            return $delegate(addHeaderToConfig(config));
        };

        newHttp.get = decorateRegularCall('get');
        newHttp.delete = decorateRegularCall('delete');
        newHttp.head = decorateRegularCall('head');
        newHttp.jsonp = decorateRegularCall('jsonp');
        newHttp.post = decorateDataCall('post');
        newHttp.put = decorateDataCall('put');

        copyNotOverriddenAttributes(newHttp);

        return newHttp;
    }]);
}]);
hashCode = function (s) {
    return s.split("").reduce(function (a, b) {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a
    }, 0);
};

angular
    .module('nzbhydraApp').run(["formlyConfig", "formlyValidationMessages", function (formlyConfig, formlyValidationMessages) {
    formlyValidationMessages.addStringMessage('required', 'This field is required');
    formlyConfig.extras.errorExistsAndShouldBeVisibleExpression = 'fc.$touched || form.$submitted';

}]);

angular
    .module('nzbhydraApp')
    .config(["formlyConfigProvider", function config(formlyConfigProvider) {
        formlyConfigProvider.extras.removeChromeAutoComplete = true;
        formlyConfigProvider.extras.explicitAsync = true;
        formlyConfigProvider.disableWarnings = window.onProd;


        formlyConfigProvider.setWrapper({
            name: 'settingWrapper',
            templateUrl: 'setting-wrapper.html'
        });


        formlyConfigProvider.setWrapper({
            name: 'fieldset',
            template: [
                '<fieldset>',
                '<legend>{{options.templateOptions.label}}</legend>',
                '<formly-transclude></formly-transclude>',
                '</fieldset>'
            ].join(' ')
        });

        formlyConfigProvider.setType({
            name: 'help',
            template: [
                '<div class="panel panel-default">',
                '<div class="panel-body">',
                '<div ng-repeat="line in options.templateOptions.lines">{{ line }}</div>',
                '</div>',
                '</div>'
            ].join(' ')
        });


        formlyConfigProvider.setWrapper({
            name: 'logicalGroup',
            template: [
                '<formly-transclude></formly-transclude>'
            ].join(' ')
        });

        formlyConfigProvider.setType({
            name: 'horizontalInput',
            extends: 'input',
            wrapper: ['settingWrapper', 'bootstrapHasError']
        });

        formlyConfigProvider.setType({
            name: 'timeOfDay',
            extends: 'horizontalInput',
            controller: ['$scope', function ($scope) {
                var date = new Date($scope.model[$scope.options.key]);
                $scope.model[$scope.options.key] = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
            }]
        });

        formlyConfigProvider.setType({
            name: 'percentInput',
            template: [
                '<input type="number" class="form-control" placeholder="Percent" ng-model="model[options.key]" ng-pattern="/^[0-9]+(\.[0-9]{1,2})?$/" step="0.01" required />'
            ].join(' ')
        });

        formlyConfigProvider.setType({
            name: 'apiKeyInput',
            template: [
                '<div class="input-group">',
                '<input type="text" class="form-control" ng-model="model[options.key]"/>',
                '<span class="input-group-btn input-group-btn2">',
                '<button class="btn btn-default" type="button" ng-click="generate()"><span class="glyphicon glyphicon-refresh"></span></button>',
                '</div>'
            ].join(' '),
            controller: function ($scope) {
                $scope.generate = function () {
                    $scope.model[$scope.options.key] = (Math.random() * 1e32).toString(36);
                }
            }
        });

        formlyConfigProvider.setType({
            name: 'testConnection',
            templateUrl: 'button-test-connection.html'
        });


        formlyConfigProvider.setType({
            name: 'horizontalTestConnection',
            extends: 'testConnection',
            wrapper: ['settingWrapper', 'bootstrapHasError']
        });

        formlyConfigProvider.setType({
            name: 'checkCaps',
            templateUrl: 'button-check-caps.html',
            controller: function ($scope, ConfigBoxService) {
                $scope.message = "";
                $scope.uniqueId = hashCode($scope.model.name) + hashCode($scope.model.host);

                var testButton = "#button-check-caps-" + $scope.uniqueId;
                var testMessage = "#message-check-caps-" + $scope.uniqueId;

                function showSuccess() {
                    angular.element(testButton).removeClass("btn-default");
                    angular.element(testButton).removeClass("btn-danger");
                    angular.element(testButton).addClass("btn-success");
                }

                function showError() {
                    angular.element(testButton).removeClass("btn-default");
                    angular.element(testButton).removeClass("btn-success");
                    angular.element(testButton).addClass("btn-danger");
                }

                $scope.checkCaps = function () {
                    angular.element(testButton).addClass("glyphicon-refresh-animate");

                    var url = "internalapi/test_caps";
                    var params = {indexer: $scope.model.name, apikey: $scope.model.apikey, host: $scope.model.host};
                    ConfigBoxService.checkCaps(url, params).then(function (data) {
                        angular.element(testMessage).text("Supports: " + data.ids + "," + data.types);
                        $scope.model.search_ids = data.ids;
                        $scope.model.searchTypes = data.types;
                        showSuccess();
                    }, function (message) {
                        angular.element(testMessage).text(message);
                        showError();
                    }).finally(function () {
                        angular.element(testButton).removeClass("glyphicon-refresh-animate");
                    });
                }
            }
        });

        formlyConfigProvider.setType({
            name: 'horizontalCheckCaps',
            extends: 'checkCaps',
            wrapper: ['settingWrapper', 'bootstrapHasError']
        });


        formlyConfigProvider.setType({
            name: 'horizontalApiKeyInput',
            extends: 'apiKeyInput',
            wrapper: ['settingWrapper', 'bootstrapHasError']
        });

        formlyConfigProvider.setType({
            name: 'horizontalPercentInput',
            extends: 'percentInput',
            wrapper: ['settingWrapper', 'bootstrapHasError']
        });


        formlyConfigProvider.setType({
            name: 'switch',
            template: 
                '<div style="text-align:left"><input bs-switch type="checkbox" ng-model="model[options.key]"/></div>'
        });


        formlyConfigProvider.setType({
            name: 'duoSetting',
            extends: 'input',
            defaultOptions: {
                className: 'col-md-9',
                templateOptions: {
                    type: 'number',
                    noRow: true,
                    label: ''
                }
            }
        });

        formlyConfigProvider.setType({
            name: 'horizontalSwitch',
            extends: 'switch',
            wrapper: ['settingWrapper', 'bootstrapHasError']
        });

        formlyConfigProvider.setType({
            name: 'horizontalSelect',
            extends: 'select',
            wrapper: ['settingWrapper', 'bootstrapHasError']
        });

        formlyConfigProvider.setType({
            name: 'horizontalMultiselect',
            defaultOptions: {
                templateOptions: {
                    optionsAttr: 'bs-options',
                    ngOptions: 'option[to.valueProp] as option in to.options | filter: $select.search',
                    valueProp: 'id',
                    labelProp: 'label'
                }
            },
            templateUrl: 'ui-select-multiple.html',
            wrapper: ['settingWrapper', 'bootstrapHasError']
        });


        formlyConfigProvider.setType({
            name: 'label',
            template: '<label class="control-label">{{to.label}}</label>'
        });

        formlyConfigProvider.setType({
            name: 'duolabel',
            extends: 'label',
            defaultOptions: {
                className: 'col-md-2',
                templateOptions: {
                    label: '-'
                }
            }
        });

        formlyConfigProvider.setType({
            name: 'repeatSection',
            templateUrl: 'repeatSection.html',
            controller: function ($scope) {
                $scope.formOptions = {formState: $scope.formState};
                $scope.addNew = addNew;
                $scope.remove = remove;
                $scope.copyFields = copyFields;

                function copyFields(fields) {
                    fields = angular.copy(fields);
                    $scope.repeatfields = fields;
                    return fields;
                }

                $scope.clear = function (field) {
                    return _.mapObject(field, function (key, val) {
                        if (typeof val === 'object') {
                            return $scope.clear(val);
                        }
                        return undefined;

                    });
                };


                function addNew() {
                    $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
                    var repeatsection = $scope.model[$scope.options.key];
                    var newsection = angular.copy($scope.options.templateOptions.defaultModel);
                    repeatsection.push(newsection);
                }

                function remove($index) {
                    $scope.model[$scope.options.key].splice($index, 1);
                }
            }
        });

        formlyConfigProvider.setType({
            name: 'arrayConfig',
            templateUrl: 'arrayConfig.html',
            controller: function ($scope, $uibModal) {
                $scope.formOptions = {formState: $scope.formState};
                $scope._showBox = _showBox;
                $scope.showBox = showBox;
                $scope.isInitial = false;

                $scope.presets = $scope.options.data.presets;

                function _showBox(model, parentModel, isInitial, callback) {
                    var modalInstance = $uibModal.open({
                        templateUrl: 'configBox.html',
                        controller: 'ConfigBoxInstanceController',
                        size: 'lg',
                        resolve: {
                            model: function () {
                                return model;
                            },
                            fields: function () {
                                return $scope.options.data.fieldsFunction(model, parentModel, isInitial);
                            },
                            isInitial: function () {
                                return isInitial
                            },
                            parentModel: function () {
                                return parentModel;
                            },
                            data: function () {
                                return $scope.options.data;
                            }
                        }
                    });


                    modalInstance.result.then(function () {
                        $scope.form.$setDirty(true);
                        if (angular.isDefined(callback)) {
                            callback(true);
                        }
                    }, function () {
                        if (angular.isDefined(callback)) {
                            callback(false);
                        }
                    });
                }

                function showBox(model, parentModel) {
                    $scope._showBox(model, parentModel, false)
                }

                $scope.addEntry = function (entriesCollection, preset) {
                    var model = angular.copy($scope.options.data.defaultModel);
                    if (angular.isDefined(preset)) {
                        _.extend(model, preset);
                    }

                    $scope.isInitial = true;

                    $scope._showBox(model, entriesCollection, true, function (isSubmitted) {
                        if (isSubmitted) {
                            entriesCollection.push(model);
                        }
                    });
                };

            }

        });

    }]);


angular.module('nzbhydraApp').controller('ConfigBoxInstanceController', ["$scope", "$q", "$uibModalInstance", "$http", "model", "fields", "isInitial", "parentModel", "data", "growl", function ($scope, $q, $uibModalInstance, $http, model, fields, isInitial, parentModel, data, growl) {

    $scope.model = model;
    $scope.fields = fields;
    $scope.isInitial = isInitial;
    $scope.allowDelete = data.allowDeleteFunction(model);
    $scope.spinnerActive = false;
    $scope.needsConnectionTest = false;
    
    $scope.obSubmit = function () {
        console.log($scope);
        if ($scope.form.$valid) {
            
            var a = data.checkBeforeClose($scope, model).then(function() {
                $uibModalInstance.close($scope);
            });
        } else {
            growl.error("Config invalid. Please check your settings.");
            angular.forEach($scope.form.$error, function (error) {
                angular.forEach(error, function (field) {
                    field.$setTouched();
                });
            });
        }
    };

    $scope.reset = function () {
        $scope.reset();
    };

    $scope.deleteEntry = function () {
        parentModel.splice(parentModel.indexOf(model), 1);
        $uibModalInstance.close($scope);
    };

    $scope.reset = function () {
        if (angular.isDefined(data.resetFunction)) {
            data.resetFunction($scope);
        }
    };

    $scope.$on("modal.closing", function (targetScope, reason) {
        if (reason == "backdrop click") {
            $scope.reset($scope);
        }
    });
}]);

angular
    .module('nzbhydraApp')
    .factory('ConfigBoxService', ConfigBoxService);

function ConfigBoxService($http, $q) {

    return {
        checkConnection: checkConnection,
        checkCaps: checkCaps
    };

    function checkConnection(url, settings) {
        var deferred = $q.defer();

        $http.post(url, settings).success(function (result) {
            //Using ng-class and a scope variable doesn't work for some reason, is only updated at second click 
            if (result.result) {
                deferred.resolve();
            } else {
                deferred.reject({checked: true, message: result.message});
            }
        }).error(function (result) {
            deferred.reject({checked: false, message: result.message});
        });

        return deferred.promise;
    }

    function checkCaps(url, params) {
        var deferred = $q.defer();

        $http.post(url, params).success(function (result) {
            //Using ng-class and a scope variable doesn't work for some reason, is only updated at second click 
            if (result.success) {
                deferred.resolve({ids: result.ids, types: result.types});
            } else {
                deferred.reject(result.message);
            }
        }).error(function () {
            deferred.reject("Unknown error");
        });

        return deferred.promise;
    }

}
ConfigBoxService.$inject = ["$http", "$q"];





var filters = angular.module('filters', []);

filters.filter('bytes', function() {
	return function(bytes, precision) {
		if (isNaN(parseFloat(bytes)) || !isFinite(bytes) || bytes == 0) return '-';
		if (typeof precision === 'undefined') precision = 1;
		
		var units = ['b', 'kB', 'MB', 'GB', 'TB', 'PB'],
			number = Math.floor(Math.log(bytes) / Math.log(1024));
		return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) +   units[number];
	}
});

filters.filter('unsafe', 
	["$sce", function ($sce) {
		return function (value, type) {
			return $sce.trustAs(type || 'html', text);
		};
	}]
);
angular
    .module('nzbhydraApp')
    .factory('DownloaderCategoriesService', DownloaderCategoriesService);

function DownloaderCategoriesService($http, $q, $uibModal) {

    var categories = {};
    var selectedCategory = {};

    var service = {
        get: getCategories,
        invalidate: invalidate,
        select: select,
        openCategorySelection: openCategorySelection
    };

    var deferred;

    return service;


    function getCategories(downloader) {

        function loadAll() {
            if (angular.isDefined(categories) && angular.isDefined(categories.downloader)) {
                var deferred = $q.defer();
                deferred.resolve(categories.downloader);
                return deferred.promise;
            }
            
            return $http.get('internalapi/getcategories', {params: {downloader: downloader.name}})
                .then(function (categoriesResponse) {
                    
                    console.log("Updating downloader categories cache");
                    var categories = {downloader: categoriesResponse.data.categories};
                    return categoriesResponse.data.categories;

                }, function (error) {
                    throw error;
                });
        }

        return loadAll().then(function (categories) {
            return categories;
        }, function (error) {
            throw error;
        });
    }


    function openCategorySelection(downloader) {
        $uibModal.open({
            templateUrl: 'static/html/directives/addable-nzb-modal.html',
            controller: 'DownloaderCategorySelectionController',
            size: "sm",
            resolve: {
                categories: function () {
                    return getCategories(downloader)
                }
            }
        });
        deferred = $q.defer();
        return deferred.promise;
    }

    function select(category) {
        selectedCategory = category;
        console.log("Selected category " + category);
        deferred.resolve(category);
    }

    function invalidate() {
        console.log("Invalidating categories");
        categories = undefined;
    }
}
DownloaderCategoriesService.$inject = ["$http", "$q", "$uibModal"];

angular
    .module('nzbhydraApp').controller('DownloaderCategorySelectionController', ["$scope", "$uibModalInstance", "DownloaderCategoriesService", "categories", function ($scope, $uibModalInstance, DownloaderCategoriesService, categories) {
    console.log(categories);
    $scope.categories = categories;
    $scope.select = function (category) {
        DownloaderCategoriesService.select(category);
        $uibModalInstance.close($scope);
    }
}]);
angular
    .module('nzbhydraApp')
    .controller('DownloadHistoryController', DownloadHistoryController);


function DownloadHistoryController($scope, StatsService, downloads) {
    $scope.type = "All";
    $scope.limit = 100;
    $scope.pagination = {
        current: 1
    };

    $scope.nzbDownloads = downloads.data.nzbDownloads;
    $scope.totalDownloads = downloads.data.totalDownloads;

    $scope.changeType = function (type) {
        $scope.type = type;
        getDownloadsPage($scope.pagination.current);
    };


    $scope.pageChanged = function (newPage) {
        getDownloadsPage(newPage);
    };

    function getDownloadsPage(pageNumber) {
        StatsService.getDownloadHistory(pageNumber, $scope.limit, $scope.type).then(function(downloads) {
            $scope.nzbDownloads = downloads.data.nzbDownloads;
            $scope.totalDownloads = downloads.data.totalDownloads;
        });
        
    }


}
DownloadHistoryController.$inject = ["$scope", "StatsService", "downloads"];

angular
    .module('nzbhydraApp')
    .factory('ConfigService', ConfigService);

function ConfigService($http, $q, $cacheFactory) {

    var cache = $cacheFactory("nzbhydra");

    return {
        set: set,
        get: get,
        getSafe: getSafe,
        invalidateSafe: invalidateSafe,
        maySeeAdminArea: maySeeAdminArea
    };


    function set(newConfig) {
        $http.put('internalapi/setsettings', newConfig)
            .then(function (successresponse) {
                console.log("Settings saved. Updating cache");
                cache.put("config", newConfig);
            }, function (errorresponse) {
                console.log("Error saving settings: " + errorresponse);
            });
    }

    function get() {
        var config = cache.get("config");
        if (angular.isUndefined(config)) {
            config = $http.get('internalapi/getconfig').then(function (data) {
                return data.data;
            });
            cache.put("config", config);
        }

        return config;
    }

    function getSafe() {
        var safeconfig = cache.get("safeconfig");
        if (angular.isDefined(safeconfig)) {
            return safeconfig;
        }
        
        return $http.get('internalapi/getsafeconfig').then(function (data) {
            cache.put("safeconfig", data.data);
            return data.data;
        });


    }

    function invalidateSafe() {
        cache.remove("safeconfig");
    }

    function maySeeAdminArea() {
        console.log("MAYSEEADMINAREA IS SET TO TRUE FOR DEBUGGING");
        return true;
        function loadAll() {
            var maySeeAdminArea = cache.get("maySeeAdminArea");
            if (!angular.isUndefined(maySeeAdminArea)) {
                var deferred = $q.defer();
                deferred.resolve(maySeeAdminArea);
                return deferred.promise;
            }

            return $http.get('internalapi/mayseeadminarea')
                .then(function (configResponse) {
                    var config = configResponse.data;
                    cache.put("maySeeAdminArea", config);
                    return configResponse.data;
                });
        }

        return loadAll().then(function (maySeeAdminArea) {
            return maySeeAdminArea;
        });
    }
}
ConfigService.$inject = ["$http", "$q", "$cacheFactory"];
angular
    .module('nzbhydraApp')
    .factory('ConfigFields', ConfigFields);

function ConfigFields($injector) {

    var restartWatcher;

    return {
        getFields: getFields,
        setRestartWatcher: setRestartWatcher
    };

    function setRestartWatcher(restartWatcherFunction) {
        restartWatcher = restartWatcherFunction;
    }


    function restartListener(field, newValue, oldValue) {
        if (newValue != oldValue) {
            restartWatcher();
        }
    }


    function ipValidator() {
        return {
            expression: function ($viewValue, $modelValue) {
                var value = $modelValue || $viewValue;
                if (value) {
                    return /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test(value)
                        || /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(value);
                }
                return true;
            },
            message: '$viewValue + " is not a valid IP Address"'
        };
    }

    function authValidatorDontLockYourselfOut(rootModel) {
        return {
            expression: function ($viewValue, $modelValue, scope) {
                var value = $viewValue || $modelValue;
                if (value) {
                    return true;
                }
                if (rootModel.auth.users.length > 0) {
                    return _.any(rootModel.auth.users, function (user) {
                        return scope.model.username != user.username && user.maySeeAdmin;
                    })
                }
                return true;
            },
            message: '"If you have users at least one should have admin rights or you lock yourself out"'
        };
    }

    function regexValidator(regex, message, prefixViewValue) {
        return {
            expression: function ($viewValue, $modelValue) {
                var value = $modelValue || $viewValue;
                if (value) {
                    return regex.test(value);
                }
                return true;
            },
            message: (prefixViewValue ? '$viewValue + " ' : '" ') + message + '"'
        };
    }

    function getCategoryFields() {
        var fields = [];
        var ConfigService = $injector.get("ConfigService");
        var categories = ConfigService.getSafe().categories;
        fields.push({
            key: 'enableCategorySizes',
            type: 'horizontalSwitch',
            templateOptions: {
                type: 'switch',
                label: 'Category sizes',
                help: "Preset min and max sizes depending on the selected category"
            }
        });
        _.each(categories, function (category) {
                if (category.name != "all" && category.name != "na") {
                    var categoryFields = [
                        {
                            key: "categories." + category.name + '.requiredWords',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'Required words',
                                placeholder: 'separate, with, commas, like, this'
                            }
                        },
                        {
                            key: "categories." + category.name + '.forbiddenWords',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'Forbidden words',
                                placeholder: 'separate, with, commas, like, this'
                            }
                        }
                        ,
                        {
                            key: "categories." + category.name + '.applyRestrictions',
                            type: 'horizontalSelect',
                            templateOptions: {
                                label: 'Apply restrictions',
                                options: [
                                    {name: 'Internal searches', value: 'internal'},
                                    {name: 'API searches', value: 'external'},
                                    {name: 'All searches', value: 'both'}
                                ],
                                help: "For which type of search word restrictions will be applied"
                            }
                        }
                    ];
                    categoryFields.push({
                        wrapper: 'settingWrapper',
                        templateOptions: {
                            label: 'Size preset'
                        },
                        fieldGroup: [
                            {
                                key: "categories." + category.name + '.min',
                                type: 'duoSetting',
                                templateOptions: {
                                    addonRight: {
                                        text: 'MB'
                                    }
                                }
                            },
                            {
                                type: 'duolabel'
                            },
                            {
                                key: "categories." + category.name + '.max',
                                type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                            }
                        ]
                    });
                    categoryFields.push({
                        key: "categories." + category.name + '.newznabCategories',
                        type: 'horizontalInput',
                        templateOptions: {
                            type: 'text',
                            label: 'Newznab categories',
                            help: 'Map newznab categories to hydra categories',
                            required: true
                        },
                        parsers: [function(value) {
                            if (!value) {
                                return value;
                            }
                            var arr = [];
                            arr.push.apply(arr, value.split(",").map(Number));
                            return arr;
                            
                        }]
                    });
                    categoryFields.push({
                        key: "categories." + category.name + '.ignoreResults',
                        type: 'horizontalSelect',
                        templateOptions: {
                            label: 'Ignore results',
                            options: [
                                {name: 'For internal searches', value: 'internal'},
                                {name: 'For API searches', value: 'external'},
                                {name: 'Always', value: 'always'},
                                {name: 'Never', value: 'never'}
                            ],
                            help: "Ignore results from this category"
                        }
                    });

                    fields.push({
                        wrapper: 'fieldset',
                        templateOptions: {
                            label: category.pretty
                        },
                        fieldGroup: categoryFields

                    })
                }
            }
        );
        console.log(fields);
        return fields;
    }

    function getFields(rootModel) {
        return {
            main: [
                {
                    wrapper: 'fieldset',
                    templateOptions: {label: 'Hosting'},
                    fieldGroup: [
                        {
                            key: 'host',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'Host',
                                required: true,
                                placeholder: 'IPv4 address to bind to',
                                help: 'I strongly recommend using a reverse proxy instead of exposing this directly. Requires restart.'
                            },
                            validators: {
                                ipAddress: ipValidator()
                            },
                            watcher: {
                                listener: restartListener
                            }
                        },
                        {
                            key: 'port',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'number',
                                label: 'Port',
                                required: true,
                                placeholder: '5050',
                                help: 'Requires restart'
                            },
                            validators: {
                                port: regexValidator(/^\d{1,5}$/, "is no valid port", true)
                            },
                            watcher: {
                                listener: restartListener
                            }
                        },
                        {
                            key: 'urlBase',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'URL base',
                                placeholder: '/nzbhydra',
                                help: 'Set when using an external proxy. Call using a trailing slash, e.g. http://www.domain.com/nzbhydra/'
                            },
                            validators: {
                                urlBase: regexValidator(/^\/[\w\/]*$/, "Base URL needs to start with a slash and must not end with one")
                            }
                        },
                        {
                            key: 'externalUrl',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'External URL',
                                placeholder: 'https://www.somedomain.com/nzbhydra/',
                                help: 'Set to the full external URL so machines outside can use the generated NZB links.'
                            }
                        },
                        {
                            key: 'useLocalUrlForApiAccess',
                            type: 'horizontalSwitch',
                            hideExpression: '!model.externalUrl',
                            templateOptions: {
                                type: 'switch',
                                label: 'Use local address in API results',
                                help: 'Disable to make API results use the external URL in NZB links.'
                            }
                        },
                        {
                            key: 'ssl',
                            type: 'horizontalSwitch',
                            templateOptions: {
                                type: 'switch',
                                label: 'Use SSL',
                                help: 'I recommend using a reverse proxy instead of this. Requires restart.'
                            },
                            watcher: {
                                listener: restartListener
                            }
                        },
                        {
                            key: 'socksProxy',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'SOCKS proxy',
                                placeholder: '127.0.0.1:1080',
                                help: "IPv4 only"
                            },
                            watcher: {
                                listener: restartListener
                            }
                        },
                        {
                            key: 'sslcert',
                            hideExpression: '!model.ssl',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'SSL certificate file',
                                required: true,
                                help: 'Requires restart.'
                            },
                            watcher: {
                                listener: restartListener
                            }
                        },
                        {
                            key: 'sslkey',
                            hideExpression: '!model.ssl',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'SSL key file',
                                required: true,
                                help: 'Requires restart.'
                            },
                            watcher: {
                                listener: restartListener
                            }
                        }

                    ]
                },
                {
                    wrapper: 'fieldset',
                    templateOptions: {label: 'UI'},
                    fieldGroup: [

                        {
                            key: 'theme',
                            type: 'horizontalSelect',
                            templateOptions: {
                                type: 'select',
                                label: 'Theme',
                                help: 'Reload page after saving',
                                options: [
                                    {name: 'Default', value: 'default'},
                                    {name: 'Dark', value: 'dark'}
                                ]
                            }
                        }
                    ]
                },
                {
                    wrapper: 'fieldset',
                    templateOptions: {label: 'Security'},
                    fieldGroup: [

                        {
                            key: 'apikey',
                            type: 'horizontalApiKeyInput',
                            templateOptions: {
                                label: 'API key',
                                help: 'Remove to disable. Alphanumeric only'
                            },
                            validators: {
                                apikey: regexValidator(/^[a-zA-Z0-9]*$/, "API key must only contain numbers and digits", false)
                            }
                        }
                    ]
                },

                {
                    wrapper: 'fieldset',
                    key: 'logging',
                    templateOptions: {label: 'Logging'},
                    fieldGroup: [
                        {
                            key: 'logfilelevel',
                            type: 'horizontalSelect',
                            templateOptions: {
                                type: 'select',
                                label: 'Logfile level',
                                options: [
                                    {name: 'Critical', value: 'CRITICAL'},
                                    {name: 'Error', value: 'ERROR'},
                                    {name: 'Warning', value: 'WARNING'},
                                    {name: 'Info', value: 'INFO'},
                                    {name: 'Debug', value: 'DEBUG'}
                                ]
                            },
                            watcher: {
                                listener: restartListener
                            }
                        },
                        {
                            key: 'logfilename',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'Log file',
                                required: true
                            },
                            watcher: {
                                listener: restartListener
                            }
                        },
                        {
                            key: 'consolelevel',
                            type: 'horizontalSelect',
                            templateOptions: {
                                type: 'select',
                                label: 'Console log level',
                                options: [
                                    {name: 'Critical', value: 'CRITICAL'},
                                    {name: 'Error', value: 'ERROR'},
                                    {name: 'Warning', value: 'WARNING'},
                                    {name: 'Info', value: 'INFO'},
                                    {name: 'Debug', value: 'DEBUG'}
                                ]
                            },
                            watcher: {
                                listener: restartListener
                            }
                        },
                        {
                            key: 'logIpAddresses',
                            type: 'horizontalSwitch',
                            templateOptions: {
                                type: 'switch',
                                label: 'Log IP addresses'
                            }
                        }


                    ]
                },
                {
                    wrapper: 'fieldset',
                    templateOptions: {label: 'Updating'},
                    fieldGroup: [

                        {
                            key: 'gitPath',
                            type: 'horizontalInput',
                            templateOptions: {
                                label: 'Git executable',
                                help: 'Set if git is not in your path'
                            }
                        },
                        {
                            key: 'branch',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'Repository branch',
                                required: true,
                                help: 'Stay on master. Seriously...'
                            }
                        }
                    ]
                },

                {
                    wrapper: 'fieldset',
                    templateOptions: {label: 'Other'},
                    fieldGroup: [
                        {
                            key: 'keepSearchResultsForDays',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'number',
                                label: 'Store results for ...',
                                addonRight: {
                                    text: 'days'
                                },
                                help: 'Meta data from searches is stored in the database. When they\'re deleted links to hydra become invalid.'
                            }
                        },
                        {
                            key: 'debug',
                            type: 'horizontalSwitch',
                            templateOptions: {
                                type: 'switch',
                                label: 'Enable debugging',
                                help: "Only do this if you know what and why you're doing it"
                            }
                        },
                        {
                            key: 'runThreaded',
                            type: 'horizontalSwitch',
                            templateOptions: {
                                type: 'switch',
                                label: 'Run threaded server',
                                help: 'Requires restart'
                            },
                            watcher: {
                                listener: restartListener
                            }
                        },
                        {
                            key: 'startupBrowser',
                            type: 'horizontalSwitch',
                            templateOptions: {
                                type: 'switch',
                                label: 'Open browser on startup'
                            }
                        }
                    ]
                }
            ],

            searching: [
                {
                    wrapper: 'fieldset',
                    templateOptions: {
                        label: 'Indexer access'
                    },

                    fieldGroup: [
                        {
                            key: 'timeout',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'number',
                                label: 'Timeout when accessing indexers',
                                addonRight: {
                                    text: 'seconds'
                                }
                            }
                        },
                        {
                            key: 'ignoreTemporarilyDisabled',
                            type: 'horizontalSwitch',
                            templateOptions: {
                                type: 'switch',
                                label: 'Ignore temporarily disabled',
                                help: "If enabled access to indexers will never be paused after an error occurred"
                            }
                        },
                        {
                            key: 'ignorePassworded',
                            type: 'horizontalSwitch',
                            templateOptions: {
                                type: 'switch',
                                label: 'Ignore passworded releases',
                                help: "Not all indexers provide this information"
                            }
                        },
                        {
                            key: 'forbiddenWords',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'Forbidden words',
                                placeholder: 'separate, with, commas, like, this',
                                help: "Results with any of these words in the title will be ignored"
                            }
                        },
                        {
                            key: 'requiredWords',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'Required words',
                                placeholder: 'separate, with, commas, like, this',
                                help: "Only results with at least of these words in the title will be displayed"
                            }
                        },
                        {
                            key: 'maxAge',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'number',
                                label: 'Maximum results age',
                                help: 'Results older than this are ignored. Can be overwritten per search.',
                                addonRight: {
                                    text: 'days'
                                }
                            }
                        },
                        {
                            key: 'generate_queries',
                            type: 'horizontalMultiselect',
                            templateOptions: {
                                label: 'Generate queries',
                                options: [
                                    {label: 'Internal searches', id: 'internal'},
                                    {label: 'API searches', id: 'external'}
                                ],
                                help: "Generate queries for indexers which do not support ID based searches"
                            }
                        },
                        {
                            key: 'userAgent',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'User agent',
                                required: true
                            }
                        }

                    ]
                },
                {
                    wrapper: 'fieldset',
                    templateOptions: {
                        label: 'Result processing'
                    },
                    fieldGroup: [
                        {
                            key: 'htmlParser',
                            type: 'horizontalSelect',
                            templateOptions: {
                                type: 'select',
                                label: 'HTML parser',
                                options: [
                                    {name: 'Default BS (slow)', value: 'html.parser'},
                                    {name: 'LXML (faster, needs to be installed separately)', value: 'lxml'}
                                ]
                            }
                        },
                        {
                            key: 'duplicateSizeThresholdInPercent',
                            type: 'horizontalPercentInput',
                            templateOptions: {
                                type: 'text',
                                label: 'Duplicate size threshold',
                                required: true,
                                addonRight: {
                                    text: '%'
                                }

                            }
                        },
                        {
                            key: 'duplicateAgeThreshold',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'number',
                                label: 'Duplicate age threshold',
                                required: true,
                                addonRight: {
                                    text: 'seconds'
                                }
                            }
                        },
                        {
                            key: 'removeDuplicatesExternal',
                            type: 'horizontalSwitch',
                            templateOptions: {
                                type: 'switch',
                                label: 'Remove API duplicates',
                                help: 'Remove duplicates when searching via API'
                            }
                        },
                        {
                            key: 'alwaysShowDuplicates',
                            type: 'horizontalSwitch',
                            templateOptions: {
                                type: 'switch',
                                label: 'Always show duplicates',
                                help: 'Activate to show duplicates in search results by default'
                            }
                        },
                        {
                            key: 'nzbAccessType',
                            type: 'horizontalSelect',
                            templateOptions: {
                                type: 'select',
                                label: 'NZB access type',
                                options: [
                                    {name: 'Proxy NZBs from indexer', value: 'serve'},
                                    {name: 'Redirect to the indexer', value: 'redirect'}
                                ],
                                help: "How access to NZBs is provided when NZBs are downloaded (by the user or external tools). Redirecting is recommended."
                            }
                        }
                    ]
                }
            ],

            categories: getCategoryFields(),

            downloaders: [
                {
                    type: "arrayConfig",
                    data: {
                        defaultModel: {
                            enabled: true
                        },
                        entryTemplateUrl: 'downloaderEntry.html',
                        presets: getDownloaderPresets(),
                        presetsOnly: true,
                        addNewText: 'Add new downloader',
                        fieldsFunction: getDownloaderBoxFields,
                        allowDeleteFunction: function () {
                            return true;
                        },
                        checkBeforeClose: function (scope, model) {
                            var DownloaderCheckBeforeCloseService = $injector.get("DownloaderCheckBeforeCloseService");
                            return DownloaderCheckBeforeCloseService.check(scope, model);
                        },
                        resetFunction: function (scope) {
                            scope.options.resetModel();
                            scope.options.resetModel();
                        }

                    }
                }
            ],


            indexers: [
                {
                    type: "arrayConfig",
                    data: {
                        defaultModel: {
                            enabled: true,
                            host: null,
                            apikey: null,
                            hitLimit: null,
                            hitLimitResetTime: new Date(0),
                            timeout: null,
                            name: null,
                            showOnSearch: true,
                            score: 0,
                            username: null,
                            password: null,
                            preselect: true,
                            type: 'newznab',
                            accessType: "both",
                            search_ids: undefined, //["imdbid", "rid", "tvdbid"],
                            searchTypes: undefined //["tvsearch", "movie"]
                        },
                        addNewText: 'Add new indexer',
                        entryTemplateUrl: 'indexerEntry.html',
                        presets: getIndexerPresets(),
                        fieldsFunction: getIndexerBoxFields,
                        allowDeleteFunction: function (model) {
                            return model.type == 'newznab';
                        },
                        checkBeforeClose: function (scope, model) {
                            var IndexerCheckBeforeCloseService = $injector.get("IndexerCheckBeforeCloseService");
                            return IndexerCheckBeforeCloseService.check(scope, model);
                        },
                        resetFunction: function (scope) {
                            //Resetting causes some troubles with the date and the multiselects 

                            //So we save the reset time first
                            var date;
                            for (var i = 0; i < scope.fields.length; i++) {
                                var field = scope.fields[i];
                                if (field.key == "hitLimitResetTime") {
                                    date = new Date(field.initialValue);
                                    date = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
                                }
                            }

                            //Then reset the model twice (for some reason when we do it once the search types / ids fields are empty, resetting again fixes that... (wtf))
                            scope.options.resetModel();
                            scope.options.resetModel();

                            //and set the date back
                            scope.model.hitLimitResetTime = date;
                        }

                    }
                }
            ],

            auth: [
                {
                    key: 'authType',
                    type: 'horizontalSelect',
                    templateOptions: {
                        label: 'Auth type',
                        options: [
                            {name: 'None', value: 'none'},
                            {name: 'HTTP Basic auth', value: 'basic'},
                            {name: 'Login form', value: 'form'}
                        ]

                    }
                },
                {
                    key: 'restrictSearch',
                    type: 'horizontalSwitch',
                    templateOptions: {
                        type: 'switch',
                        label: 'Restrict searching',
                        help: 'Restrict access to searching'
                    },
                    hideExpression: function () {
                        return rootModel.auth.authType == "none";
                    }
                },
                {
                    key: 'restrictStats',
                    type: 'horizontalSwitch',
                    templateOptions: {
                        type: 'switch',
                        label: 'Restrict stats',
                        help: 'Restrict access to stats'
                    },
                    hideExpression: function () {
                        return rootModel.auth.authType == "none";
                    }
                },
                {
                    key: 'restrictAdmin',
                    type: 'horizontalSwitch',
                    templateOptions: {
                        type: 'switch',
                        label: 'Restrict admin',
                        help: 'Restrict access to admin functions'
                    },
                    hideExpression: function () {
                        return rootModel.auth.authType == "none";
                    }
                },
                {
                    type: 'repeatSection',
                    key: 'users',
                    model: rootModel.auth,
                    templateOptions: {
                        btnText: 'Add new user',
                        altLegendText: 'Authless',
                        fields: [
                            {
                                key: 'username',
                                type: 'horizontalInput',
                                templateOptions: {
                                    type: 'text',
                                    label: 'Username',
                                    required: true
                                }

                            },
                            {
                                key: 'password',
                                type: 'horizontalInput',
                                templateOptions: {
                                    type: 'password',
                                    label: 'Password',
                                    required: true
                                }
                            },
                            {
                                key: 'maySeeAdmin',
                                type: 'horizontalSwitch',
                                templateOptions: {
                                    type: 'switch',
                                    label: 'May see admin area'
                                }
                            },
                            {
                                key: 'maySeeStats',
                                type: 'horizontalSwitch',
                                templateOptions: {
                                    type: 'switch',
                                    label: 'May see stats'
                                },
                                hideExpression: 'model.maySeeAdmin'
                            }

                        ],
                        defaultModel: {
                            username: null,
                            password: null,
                            maySeeStats: true,
                            maySeeAdmin: true
                        }
                    }
                }
            ]
        };
    }
}
ConfigFields.$inject = ["$injector"];

function getIndexerPresets() {
    return [
        {
            name: "6box",
            host: "https://6box.me",
            search_ids: ["imdbid"]
        },
        {
            name: "6box nzedb",
            host: "https://nzedb.6box.me",
            search_ids: ["rid", "imdbid"]
        },
        {
            name: "6box nntmux",
            host: "https://nn-tmux.6box.me",
            search_ids: ["tvdbid", "rid", "imdbid"]
        },
        {
            name: "DogNZB",
            host: "https://api.dognzb.cr",
            search_ids: ["tvdbid", "rid", "imdbid"]
        },
        {
            name: "Drunken Slug",
            host: "https://drunkenslug.com",
            search_ids: ["tvdbid", "imdbid", "tvmazeid", "traktid", "tmdbid"]
        },
        {
            name: "NZB Finder",
            host: "https://nzbfinder.ws",
            search_ids: ["tvdbid", "rid", "imdbid", "tvmazeid", "traktid", "tmdbid"]
        },
        {
            name: "NZBs.org",
            host: "https://nzbs.org",
            search_ids: ["tvdbid", "rid", "imdbid", "tvmazeid"]
        },
        {
            name: "nzb.su",
            host: "https://api.nzb.su",
            search_ids: ["rid", "imdbid"]
        },
        {
            name: "NZBGeek",
            host: "https://api.nzbgeek.info",
            search_ids: ["tvdbid", "rid", "imdbid"]
        },
        {
            name: "SimplyNZBs",
            host: "https://simplynzbs.com",
            search_ids: ["imdbid", "rid", "tmdbid", "tvdbid", "tvmazeid"],
            searchTypes: ["tvsearch", "movie"]

        }
    ];
}

function getIndexerBoxFields(model, parentModel, isInitial) {
    var fieldset = [];

    fieldset.push({
        key: 'enabled',
        type: 'horizontalSwitch',
        templateOptions: {
            type: 'switch',
            label: 'Enabled'
        }
    });

    if (model.type == 'newznab') {
        fieldset.push(
            {
                key: 'name',
                type: 'horizontalInput',
                templateOptions: {
                    type: 'text',
                    label: 'Name',
                    required: true,
                    help: 'Used for identification. Changing the name will lose all history and stats!'
                },
                validators: {
                    uniqueName: {
                        expression: function (viewValue) {
                            if (isInitial || viewValue != model.name) {
                                return _.pluck(parentModel, "name").indexOf(viewValue) == -1;
                            }
                            return true;
                        },
                        message: '"Indexer \\"" + $viewValue + "\\" already exists"'
                    }
                }
            })
    }
    if (model.type == 'newznab') {
        fieldset.push(
            {
                key: 'host',
                type: 'horizontalInput',
                templateOptions: {
                    type: 'text',
                    label: 'Host',
                    required: true,
                    placeholder: 'http://www.someindexer.com'
                },
                watcher: {
                    listener: function (field, newValue, oldValue, scope) {
                        if (newValue != oldValue) {
                            scope.$parent.needsConnectionTest = true;
                        }
                    }
                }
            }
        )
    }

    if (model.type == 'newznab' || model.type == 'omgwtf') {
        fieldset.push(
            {
                key: 'apikey',
                type: 'horizontalInput',
                templateOptions: {
                    type: 'text',
                    required: true,
                    label: 'API Key'
                },
                watcher: {
                    listener: function (field, newValue, oldValue, scope) {
                        if (newValue != oldValue) {
                            scope.$parent.needsConnectionTest = true;
                        }
                    }
                }
            }
        )
    }

    if (model.type == 'omgwtf') {
        fieldset.push(
            {
                key: 'username',
                type: 'horizontalInput',
                templateOptions: {
                    type: 'text',
                    required: true,
                    label: 'Username'
                },
                watcher: {
                    listener: function (field, newValue, oldValue, scope) {
                        if (newValue != oldValue) {
                            scope.$parent.needsConnectionTest = true;
                        }
                    }
                }
            }
        )
    }

    fieldset.push(
        {
            key: 'score',
            type: 'horizontalInput',
            templateOptions: {
                type: 'number',
                label: 'Priority',
                required: true,
                help: 'When duplicate search results are found the result from the indexer with the highest number will be selected'
            }
        });

    fieldset.push(
        {
            key: 'timeout',
            type: 'horizontalInput',
            templateOptions: {
                type: 'number',
                label: 'Timeout',
                help: 'Supercedes the general timeout in "Searching"'
            }
        });

    if (model.type == "newznab") {
        fieldset.push(
            {
                key: 'hitLimit',
                type: 'horizontalInput',
                templateOptions: {
                    type: 'number',
                    label: 'API hit limit',
                    help: 'Maximum number of API hits since "API hit reset time"'
                }
            }
        );
        fieldset.push(
            {
                key: 'hitLimitResetTime',
                type: 'timeOfDay',
                hideExpression: '!model.hitLimit',
                templateOptions: {
                    type: 'time',
                    label: 'API hit reset time',
                    help: 'UTC time at which the API hit counter is reset'
                }
            });
        fieldset.push(
            {
                key: 'username',
                type: 'horizontalInput',
                templateOptions: {
                    type: 'text',
                    required: false,
                    label: 'Username',
                    help: 'Only needed if indexer requires HTTP auth for API access (rare)'
                },
                watcher: {
                    listener: function (field, newValue, oldValue, scope) {
                        if (newValue != oldValue) {
                            scope.$parent.needsConnectionTest = true;
                        }
                    }
                }
            }
        );
        fieldset.push(
            {
                key: 'password',
                type: 'horizontalInput',
                hideExpression: '!model.username',
                templateOptions: {
                    type: 'text',
                    required: false,
                    label: 'Password',
                    help: 'Only needed if indexer requires HTTP auth for API access (rare)'
                }
            }
        )

    }


    if (model.type != "womble") {
        fieldset.push(
            {
                key: 'preselect',
                type: 'horizontalSwitch',
                hideExpression: 'model.accessType == "external"',
                templateOptions: {
                    type: 'switch',
                    label: 'Preselect',
                    help: 'Preselect this indexer on the search page'
                }
            }
        );
        fieldset.push(
            {
                key: 'accessType',
                type: 'horizontalSelect',
                templateOptions: {
                    label: 'Enable for...',
                    options: [
                        {name: 'Internal searches only', value: 'internal'},
                        {name: 'API searches only', value: 'external'},
                        {name: 'Internal and API searches', value: 'both'}
                    ]
                }
            }
        )
    }

    if (model.type == 'newznab') {
        fieldset.push(
            {
                key: 'search_ids',
                type: 'horizontalMultiselect',
                templateOptions: {
                    label: 'Search IDs',
                    options: [
                        {label: 'TVDB', id: 'tvdbid'},
                        {label: 'TVRage', id: 'rid'},
                        {label: 'IMDB', id: 'imdbid'},
                        {label: 'Trakt', id: 'traktid'},
                        {label: 'TVMaze', id: 'tvmazeid'},
                        {label: 'TMDB', id: 'tmdbid'}
                    ]
                }
            }
        );
        fieldset.push(
            {
                key: 'searchTypes',
                type: 'horizontalMultiselect',
                templateOptions: {
                    label: 'Search types',
                    options: [
                        {label: 'Movies', id: 'movie'},
                        {label: 'TV', id: 'tvsearch'},
                        {label: 'Ebooks', id: 'book'},
                        {label: 'Audio', id: 'audio'}
                    ]
                }
            }
        )
    }

    if (model.type == 'newznab') {
        fieldset.push(
            {
                type: 'horizontalCheckCaps',
                hideExpression: '!model.host || !model.apikey || !model.name || angular.isUndefined(model.searchTypes)',
                templateOptions: {
                    label: 'Check search types',
                    help: 'Find out what search types the indexer supports. Done automatically for new indexers.'
                }
            }
        )
    }

    if (model.type == 'nzbindex') {
        fieldset.push(
            {
                key: 'generalMinSize',
                type: 'horizontalInput',
                templateOptions: {
                    type: 'number',
                    label: 'Min size',
                    help: 'NZBIndex returns a lot of crap with small file sizes. Set this value and all smaller results will be filtered out no matter the category'
                }
            }
        );
    }

    return fieldset;
}


function getDownloaderBoxFields(model, parentModel, isInitial) {
    var fieldset = [];

    fieldset = _.union(fieldset, [
        {
            key: 'enabled',
            type: 'horizontalSwitch',
            templateOptions: {
                type: 'switch',
                label: 'Enabled'
            }
        },
        {
            key: 'name',
            type: 'horizontalInput',
            templateOptions: {
                type: 'text',
                label: 'Name',
                required: true
            },
            validators: {
                uniqueName: {
                    expression: function (viewValue) {
                        if (isInitial || viewValue != model.name) {
                            return _.pluck(parentModel, "name").indexOf(viewValue) == -1;
                        }
                        return true;
                    },
                    message: '"Downloader \\"" + $viewValue + "\\" already exists"'
                }
            }

        }]);

    if (model.type == "nzbget") {
        fieldset = _.union(fieldset, [{
            key: 'host',
            type: 'horizontalInput',
            templateOptions: {
                type: 'text',
                label: 'Host',
                required: true
            },
            watcher: {
                listener: function (field, newValue, oldValue, scope) {
                    if (newValue != oldValue) {
                        scope.$parent.needsConnectionTest = true;
                    }
                }
            }

        },
            {
                key: 'port',
                type: 'horizontalInput',
                templateOptions: {
                    type: 'number',
                    label: 'Port',
                    placeholder: '5050',
                    required: true
                },
                watcher: {
                    listener: function (field, newValue, oldValue, scope) {
                        if (newValue != oldValue) {
                            scope.$parent.needsConnectionTest = true;
                        }
                    }
                }
            }, {
                key: 'ssl',
                type: 'horizontalSwitch',
                templateOptions: {
                    type: 'switch',
                    label: 'Use SSL'
                }
            }]);
    } else if (model.type == "sabnzbd") {
        fieldset.push({
            key: 'url',
            type: 'horizontalInput',
            templateOptions: {
                type: 'text',
                label: 'URL',
                required: true
            },
            watcher: {
                listener: function (field, newValue, oldValue, scope) {
                    if (newValue != oldValue) {
                        scope.$parent.needsConnectionTest = true;
                    }
                }
            }
        });
    }
    fieldset = _.union(fieldset, [
        {
            key: 'username',
            type: 'horizontalInput',
            templateOptions: {
                type: 'text',
                label: 'Username'
            },
            watcher: {
                listener: function (field, newValue, oldValue, scope) {
                    if (newValue != oldValue) {
                        scope.$parent.needsConnectionTest = true;
                    }
                }
            }
        },
        {
            key: 'password',
            type: 'horizontalInput',
            templateOptions: {
                type: 'password',
                label: 'Password'
            },
            watcher: {
                listener: function (field, newValue, oldValue, scope) {
                    if (newValue != oldValue) {
                        scope.$parent.needsConnectionTest = true;
                    }
                }
            }
        }
    ]);


    if (model.type == "sabnzbd") {
        fieldset.push({
            key: 'apikey',
            type: 'horizontalInput',
            templateOptions: {
                type: 'text',
                label: 'API Key'
            },
            watcher: {
                listener: function (field, newValue, oldValue, scope) {
                    if (newValue != oldValue) {
                        scope.$parent.needsConnectionTest = true;
                    }
                }
            }
        })
    }

    fieldset = _.union(fieldset, [
        {
            key: 'defaultCategory',
            type: 'horizontalInput',
            templateOptions: {
                type: 'text',
                label: 'Default category',
                help: 'When adding NZBs this category will be used instead of asking for the category'
            }
        },
        {
            key: 'nzbaccesstype',
            type: 'horizontalSelect',
            templateOptions: {
                type: 'select',
                label: 'NZB access type',
                options: [
                    {name: 'Proxy NZBs from indexer', value: 'serve'},
                    {name: 'Redirect to the indexer', value: 'redirect'}
                ],
                help: "How external access to NZBs is provided. Redirecting is recommended."
            }
        },
        {
            key: 'nzbAddingType',
            type: 'horizontalSelect',
            templateOptions: {
                type: 'select',
                label: 'NZB adding type',
                options: [
                    {name: 'Send link', value: 'link'},
                    {name: 'Upload NZB', value: 'nzb'}
                ],
                help: "How NZBs are added to the downloader, either by sending a link to the NZB or by uploading the NZB data"
            }
        },
        {
            key: 'iconCssClass',
            type: 'horizontalInput',
            templateOptions: {
                type: 'text',
                label: 'Icon CSS class',
                help: 'Copy an icon name from http://fontawesome.io/examples/ (e.g. "film")'
            }
        }
    ]);

    return fieldset;
}

function getDownloaderPresets() {
    return [
        {
            host: "127.0.0.1",
            name: "NZBGet",
            password: "tegbzn6789x",
            port: 6789,
            ssl: false,
            type: "nzbget",
            username: "nzbgetx",
            nzbAddingType: "link",
            nzbaccesstype: "redirect",
            iconCssClass: ""
        },
        {
            url: "http://localhost:8086",
            type: "sabnzbd",
            name: "SABnzbd",
            nzbAddingType: "link",
            nzbaccesstype: "redirect",
            iconCssClass: ""
        }
    ];
}


function handleConnectionCheckFail(ModalService, data, model, whatFailed, deferred) {
    var message;
    var yesText;
    if (data.checked) {
        message = "The connection to the " + whatFailed + " failed: " + data.message + "<br>Do you want to add it anyway?";
        yesText = "I know what I'm doing";
    } else {
        message = "The connection to the " + whatFailed + " could not be tested, sorry";
        yesText = "I'll risk it";
    }
    ModalService.open("Connection check failed", message, {
        yes: {
            onYes: function () {
                deferred.resolve();
            },
            text: yesText
        },
        no: {
            onNo: function () {
                model.enabled = false;
                deferred.resolve();
            },
            text: "Add it, but disabled"
        },
        cancel: {
            onCancel: function () {
                deferred.reject();
            },
            text: "Aahh, let me try again"
        }
    });

}


angular
    .module('nzbhydraApp')
    .factory('IndexerCheckBeforeCloseService', IndexerCheckBeforeCloseService);

function IndexerCheckBeforeCloseService($q, ModalService, ConfigBoxService, blockUI, growl) {

    return {
        check: checkBeforeClose
    };

    function checkBeforeClose(scope, model) {
        var deferred = $q.defer();
        if (!scope.needsConnectionTest) {
            checkCaps(scope, model).then(function () {
                deferred.resolve();
            }, function () {
                deferred.reject();
            });
        } else {
            blockUI.start("Testing connection...");
            scope.spinnerActive = true;
            var url;
            var settings;
            if (model.type == "newznab") {
                url = "internalapi/test_newznab";
                settings = {host: model.host, apikey: model.apikey};
            } else if (model.type == "omgwtf") {
                url = "internalapi/test_omgwtf";
                settings = {username: model.username, apikey: model.apikey};
            }

            ConfigBoxService.checkConnection(url, JSON.stringify(settings)).then(function () {
                    checkCaps(scope, model).then(function () {
                        blockUI.reset();
                        scope.spinnerActive = false;
                        growl.info("Connection to the indexer tested successfully");
                        deferred.resolve();
                    }, function () {
                        blockUI.reset();
                        scope.spinnerActive = false;
                        deferred.reject();
                    });
                },
                function (data) {
                    blockUI.reset();
                    handleConnectionCheckFail(ModalService, data, model, "indexer", deferred);
                }).finally(function () {
                scope.spinnerActive = false;
                blockUI.reset();
            });
        }
        return deferred.promise;

    }

    function checkCaps(scope, model) {
        var deferred = $q.defer();
        var url = "internalapi/test_caps";
        var settings = {indexer: model.name, apikey: model.apikey, host: model.host};
        if (angular.isUndefined(model.search_ids) || angular.isUndefined(model.searchTypes)) {

            blockUI.start("New indexer found. Testing its capabilities. This may take a bit...");
            ConfigBoxService.checkCaps(url, JSON.stringify(settings)).then(
                function (data) {
                    blockUI.reset();
                    scope.spinnerActive = false;
                    growl.info("Successfully tested capabilites of indexer. Supports: " + data.ids + "," + data.types);
                    model.search_ids = data.ids;
                    model.searchTypes = data.types;
                    deferred.resolve();
                },
                function () {
                    blockUI.reset();
                    scope.spinnerActive = false;
                    model.search_ids = [];
                    model.searchTypes = [];
                    ModalService.open("Error testing capabilities", "The capabilities of the indexer could not be checked. The indexer won't be used for ID based searches (IMDB, TVDB, etc.). You may repeat the check manually at any time.");
                    deferred.resolve();
                }).finally(
                function () {
                    scope.spinnerActive = false;
                })
        } else {
            deferred.resolve();
        }
        return deferred.promise;

    }
}
IndexerCheckBeforeCloseService.$inject = ["$q", "ModalService", "ConfigBoxService", "blockUI", "growl"];


angular
    .module('nzbhydraApp')
    .factory('DownloaderCheckBeforeCloseService', DownloaderCheckBeforeCloseService);

function DownloaderCheckBeforeCloseService($q, ConfigBoxService, growl, ModalService, blockUI) {

    return {
        check: checkBeforeClose
    };

    function checkBeforeClose(scope, model) {
        var deferred = $q.defer();
        if (!scope.isInitial && !scope.needsConnectionTest) {
            deferred.resolve();
        } else {
            scope.spinnerActive = true;
            blockUI.start("Testing connection...");
            var url = "internalapi/test_downloader";
            ConfigBoxService.checkConnection(url, JSON.stringify(model)).then(function () {
                    blockUI.reset();
                    scope.spinnerActive = false;
                    growl.info("Connection to the downloader tested successfully");
                    deferred.resolve();
                },
                function (data) {
                    blockUI.reset();
                    scope.spinnerActive = false;
                    handleConnectionCheckFail(ModalService, data, model, "downloader", deferred);
                }).finally(function () {
                scope.spinnerActive = false;
                blockUI.reset();
            });
        }
        return deferred.promise;
    }

}
DownloaderCheckBeforeCloseService.$inject = ["$q", "ConfigBoxService", "growl", "ModalService", "blockUI"];
angular
    .module('nzbhydraApp')
    .factory('ConfigModel', function () {
        return {};
    });

angular
    .module('nzbhydraApp')
    .factory('ConfigWatcher', function () {
        var $scope;

        return {
            watch: watch
        };

        function watch(scope) {
            $scope = scope;
            $scope.$watchGroup(["config.main.host"], function () {
            }, true);
        }
    });


angular
    .module('nzbhydraApp')
    .controller('ConfigController', ConfigController);

function ConfigController($scope, $http, ConfigService, config, DownloaderCategoriesService, ConfigFields, ConfigModel, ModalService, RestartService, $state, growl, $rootScope) {
    $scope.config = config;
    $scope.submit = submit;
    $scope.activeTab = undefined;

    $scope.restartRequired = false;
    $scope.ignoreSaveNeeded = false;

    ConfigFields.setRestartWatcher(function () {
        $scope.restartRequired = true;
    });
    

    function submit() {
        if ($scope.form.$valid) {
            
            ConfigService.set($scope.config);
            ConfigService.invalidateSafe();
            $scope.form.$setPristine();
            DownloaderCategoriesService.invalidate();
            if ($scope.restartRequired) {
                ModalService.open("Restart required", "The changes you have made may require a restart to be effective.<br>Do you want to restart now?", {
                    yes: {
                        onYes: function () {
                            RestartService.restart();
                        }
                    },
                    no: {
                        onNo: function () {
                            $scope.restartRequired = false;
                        }
                    }
                });
            }
        } else {
            growl.error("Config invalid. Please check your settings.");
            
            //Ridiculously hacky way to make the error messages appear
            try {
                if (angular.isDefined(form.$error.required)) {
                    _.each(form.$error.required, function (item) {
                        if (angular.isDefined(item.$error.required)) {
                            _.each(item.$error.required, function (item2) {
                                item2.$setTouched();
                            });
                        } 
                    });
                }
                angular.forEach($scope.form.$error.required, function (field) {
                    field.$setTouched();
                });
            } catch(err) {
                //
            }
            
        }
    }

    ConfigModel = config;

    $scope.fields = ConfigFields.getFields($scope.config);
    
    $scope.allTabs = [
        {
            active: false,
            state: 'root.config',
            name: 'Main',
            model: ConfigModel.main,
            fields: $scope.fields.main
        },
        {
            active: false,
            state: 'root.config.auth',
            name: 'Authorization',
            model: ConfigModel.auth,
            fields: $scope.fields.auth
        },
        {
            active: false,
            state: 'root.config.searching',
            name: 'Searching',
            model: ConfigModel.searching,
            fields: $scope.fields.searching
        },
        {
            active: false,
            state: 'root.config.categories',
            name: 'Categories',
            model: ConfigModel.categories,
            fields: $scope.fields.categories
        },
        {
            active: false,
            state: 'root.config.downloader',
            name: 'Downloaders',
            model: ConfigModel.downloaders,
            fields: $scope.fields.downloaders
        },
        {
            active: false,
            state: 'root.config.indexers',
            name: 'Indexers',
            model: ConfigModel.indexers,
            fields: $scope.fields.indexers
        }
    ];

    for (var i = 0; i < $scope.allTabs.length; i++) {
        if ($state.is($scope.allTabs[i].state)) {
            $scope.allTabs[i].active = true;
            $scope.activeTab = $scope.allTabs[i];
        }
    }

    $scope.isSavingNeeded = function () {
        return $scope.form.$dirty && $scope.form.$valid && !$scope.ignoreSaveNeeded;
    };

    $scope.goToConfigState = function (index) {
        $state.go($scope.allTabs[index].state);
        $scope.activeTab = $scope.allTabs[index]; 
    };
    
    $scope.help = function() {
        $http.get("internalapi/gethelp", {params: {id: $scope.activeTab.name}}).then(function(result) {
                var html = '<span style="text-align: left;">' + result.data + "</span>";
                ModalService.open($scope.activeTab.name + " - Help", html, {}, "lg");
        },
        function() {
            growl.error("Error while loading help")
        })
    };

    $scope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState, fromParams) {
            if ($scope.isSavingNeeded()) {
                event.preventDefault();
                ModalService.open("Unsaved changed", "Do you want to save before leaving?", {
                    yes: {
                        onYes: function() {
                            $scope.submit();
                            $state.go(toState);
                        },
                        text: "Yes"
                    },
                    no: {
                        onNo: function () {
                            $scope.ignoreSaveNeeded = true;
                            $scope.ctrl.options.resetModel();
                            $state.go(toState);
                        },
                        text: "No"
                    },
                    cancel: {
                        onCancel: function () {
                            event.preventDefault();
                        },
                        text: "Cancel"
                    }
                });
            }            
        })
}
ConfigController.$inject = ["$scope", "$http", "ConfigService", "config", "DownloaderCategoriesService", "ConfigFields", "ConfigModel", "ModalService", "RestartService", "$state", "growl", "$rootScope"];



angular
    .module('nzbhydraApp')
    .factory('CategoriesService', CategoriesService);

function CategoriesService(ConfigService) {

    return {
        getByName: getByName,
        getAll: getAll,
        getDefault: getDefault
    };


    function getByName(name) {
        for (var category in ConfigService.getSafe().categories) {
            category = ConfigService.getSafe().categories[category];
            if (category.name == name || category.pretty == name) {
                return category;
            }
        }
    }
    
    function getAll() {
        return ConfigService.getSafe().categories;
    }
    
    function getDefault() {
        return getAll()[1];
    }

}
CategoriesService.$inject = ["ConfigService"];
angular
    .module('nzbhydraApp')
    .factory('BackupService', BackupService);

function BackupService($http) {

    return {
        getBackupsList: getBackupsList
    };
    

    function getBackupsList() {
        return $http.get('internalapi/getbackups').then(function (data) {
            return data.data.backups;
        });
    }

}
BackupService.$inject = ["$http"];
//# sourceMappingURL=nzbhydra.js.map
