
import template from './index.html'
import ko from 'knockout'

function ViewModel (params) {
  var self = this;
  this.selectedValue = params.value || ko.observable('')
  this.selectData = params.data || ko.observableArray([])
  this.selectFn = function (row) {
    debugger
    self.selectedValue(row)
  }
}

export default {
  name: 'ko-select',
  ViewModel,
  template
}
