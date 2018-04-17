import template from './app.html'
import appController from './app.controller'

export const appDirective = function () {
    return {
        template: template,
        controller: appController,
        restrict: 'E'
    }
}

// export { appDirective }