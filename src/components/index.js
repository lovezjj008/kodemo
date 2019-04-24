import ko from 'knockout'
import koselect from './koselect'

function register (Model) {
  ko.components.register(Model.name, {
    viewModel: {
      createViewModel: function (params, componentInfo) {
        params.$el = componentInfo.element
        params.$templateNodes = componentInfo.templateNodes
        return new Model.ViewModel(params)
      }
    },
    template: Model.template
  })
}

register(koselect)
