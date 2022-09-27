// Use Antv
import * as Antv from 'ant-design-vue';

// Use Antv Icons
import * as Icons from '@ant-design/icons-vue';

// Use TinyMCE
import Editor from '@tinymce/tinymce-vue';

/**
 * Scaffold by Joenix
 * ========== ========== ==========
 */
export default ({ app, util, route, store, style, i18n, $http, md, custom }, next) => {
  // Extension Antv
  app.use(Antv);

  // Use TinyMce
  app.component('editor', Editor);

  // Set Route Mode
  route.proxy.config = settings => {
    return {
      mode: 'hash',
    };
  };

  // Register Icons
  util.get().foreach(Icons, (icon, key) => app.component(key, icon));

  // Extension Icons
  app.config.globalProperties.$icons = Icons;

  // Route Interceptor
  route.proxy.extension = instance => {
    instance.beforeEach((to, from, next) => {
      next();
    });
  };

  // Http Interceptor Request
  $http.interceptor.bodyParse = params => {
    return JSON.stringify(params);
  };

  // Http Interceptor Response
  $http.interceptor.resultParse = result => {
    // Success if Status is 200
    if (result.status === 200) {
      return result.data;
    }

    // Errors
    // Antv.message(result.message);

    // Any
    return result;
  };

  // Running
  next();

  // Special Console
  console.log(`🅅🅄🄴 ­­🅂🄲🄰🄵🄵`);
};
