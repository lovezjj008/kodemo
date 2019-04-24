import template from './index.html'
import BaseView from '@/base/baseview'
import $ from 'jquery'
import ko from 'knockout'
import '@/components'
var mdata = [
  {'name': '张三1', id: 1},
  {'name': '张三2', id: 2},
  {'name': '张三3', id: 3},
  {'name': '张三4', id: 4}
]
class View extends BaseView {
  mounted () {
    var self = this
    $.ajax({
      url: '/equipmanage/Report/importCombined',
      type: 'get',
      dataType: 'json',
      success: function (data) {
        debugger
        data.forEach(element => {
          element.value = element.CITY_NAME
        })
        self.availableCountries(data)
        self.selectDatas(data)

      },
      error: function (err) {
        debugger
      }
    })
  }
  data () {
    this.vmdata = ko.observableArray(mdata)
    this.availableCountries = ko.observableArray([])
    this.selectedCountry = ko.observable()
    this.selectDatas =  ko.observableArray([])
    this.selectValue = ko.observable()
  }
}

export default {
  template,
  View
}
