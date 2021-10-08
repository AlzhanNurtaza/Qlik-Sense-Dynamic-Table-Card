define([
    "jquery",
    "qlik",
    "css!./css/root.css",
    "./initialproperties",
    "./properties",
    "text!./template.html",
    "./js/bootstrap/bootstrap.bundle.min",
    "./js/datatables/jquery.dataTables.min",
    "css!./js/datatables/jquery.dataTables.min.css"
],
    function ($, qlik, css, initprops, propfile, template, bootjs, datatables, dtcss) {
        "use strict";
        return {
            template: template,
            initialProperties: initprops,
            definition: propfile,
            support: {
                snapshot: true,
                export: true,
                exportData: true
            },

            paint: function ($element, layout) {
                var margin = {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                };

                var data = [];

                var width = $element.width() - margin.left - margin.right;
                var height = $element.height() - margin.top - margin.bottom;
                //Assign a unique ID to the $element wrapper
                var id = "ID_DBTC_" + layout.qInfo.qId;
                var idCss = '#' + id;
                $element.attr("id", id);
                $('#' + id).css('overflow', 'auto');


                //DataTables Init
                if (!$.fn.DataTable.isDataTable(idCss + " " + '.datatable_class')) {
                    $(idCss + " " + '.datatable_class').DataTable(
                        {
                            searching: false, paging: false, info: false, ordering: false
                        }
                    );
                }

                return qlik.Promise.resolve();
            }
        };
    });