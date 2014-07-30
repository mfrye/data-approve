
/* Quad auth module
// -----------------
- Dependencies - $sesssionStorage and URLS constant

- Checks session factory on run, then checks $sessionStorage
- If session exists redirect to dashboard, else go to login

- On login create new session and store var in $sessionStorage
- Broadcasts 'session' when state has changed to update the UI / scope
*/

angular.module('quad.auth', [])

.factory('Session', ['$rootScope', '$sessionStorage', function ($rootScope, $sessionStorage) {

  // Helper method to add hours to current time
  Date.prototype.addHours = function(h) {
      this.setHours(this.getHours() + h);
      return this;
  };

  this.setUser = function (user) {
    this.user = user;
  };
  
  // Create new session 
  this.create = function (user) {
    var date = new Date(),
    exp_date = date.addHours(4).toUTCString();

    this.user = user;

    // Set session storage - exp date is 4 hours from now
    $sessionStorage.quad = {
      user: user,
      session_exp_date: exp_date
    };
  };

  // Destroy session / logout
  this.destroy = function () {
    this.user = null;
    $sessionStorage.$reset();

    this.updateSessionState();
  };

  // alert that session has been updated - mainly for controller / dom handling
  this.updateSessionState = function () {
    $rootScope.$broadcast('session');
  };

  return this;
}])

// Auth actions - login / logout
.factory('AuthService', ['$rootScope', '$http', '$sessionStorage', 'Session', 'URLS', '$location', function ($rootScope, $http, $sessionStorage, Session, URLS, $location) {
  
  var BASE_URL = URLS.QUAD_API_BASE + '/v1';

  function checkStorage() {
    if (!$sessionStorage.quad) {
      return false;
    }

    // if current date / time is less than set expiration date
    if (new Date() < new Date($sessionStorage.quad.session_exp_date)) {
      // set user to stored user info
      Session.setUser($sessionStorage.quad.user);
      return true;
    }

    return false;
  }

  return {
    login: function (data) {
      return $http({
        method: 'POST',
        url: BASE_URL + '/auth/login',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        transformRequest: function(obj) {
          var str = [];
          for(var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          return str.join("&");
        },
        data: data
      });
    },

    logout: function () {
      Session.destroy();

      return $http({
        method: 'POST',
        url: BASE_URL + '/auth/logout',
      });
    },

    // Get user info after successful login (requires cookies to be set)
    getUserData: function () {
      return $http({
        method: 'GET',
        url: BASE_URL + '/exresolver/loggedinuserinfo'
      });
    },

    // check if session is set
    isAuthenticated: function () {
      if (Session.user) {
        return true;
      }
      else if (checkStorage()) {

        // Call controller callbacks to update 
        Session.updateSessionState('session');
        return true;
      }
 
      // Not authenticated
      return false;
    }

  };
}])

// intercept http response and handle unauthorized / session expired
.factory('APIFail', ['$q', '$location', 'Session', function($q, $location, Session) {
    var APIFail = {
      responseError: function(response) {
        // Session has expired
        if (response.status === 401) {

            Session.destroy();
            $location.path('/login');

        }
        return $q.reject(response);
      }
    };
    return APIFail;
}])

.run(['$rootScope', 'AuthService', '$location', function ($rootScope, AuthService, $location) {

  // Intercept on route change start
  $rootScope.$on('$stateChangeStart', function (event, next) {
    var state = next.name;

    // If not logged in - redirect to login
    if (!AuthService.isAuthenticated()) {
      $location.path("/login");
    } 
    // If logged in and login state is accessed - redirect to dashboard
    else if (state === 'login') {
      $location.path("/dashboard");
    }
  });

}]);