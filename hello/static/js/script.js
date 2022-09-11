$(document).ready(function() {

    function format(d) {
        return '<p style="text-align:left;">'+'Full Team Address: ' + d.team_address + ' ' + '<br>' +'Team Score: '+ d.ranking + '<br>' +
            'Team Benefits: ' + 'Contact us to add information @Peter_DRIP' + '<br>' +
            'Other Information you can add telegram, picture link contact us for more information @Peter_DRIP';
    }

    $.fn.dataTable.render.ellipsis = function() {
        return function(data, type, row) {
            return type === 'display' && data.length > 10 ?
                data.substr(0, 4) + '…' + data.substr(-4) :
                '<a class="dt-body-nowrap">'+ data +'</a>';
        }
    };

    // Array to track the ids of the details displayed rows
    var detailRows = [];

    $('#data tbody').on('click', 'tr td.details-control', function() {
        var tr = $(this).closest('tr');
        var row = dt.row(tr);
        var idx = $.inArray(tr.attr('id'), detailRows);

        if (row.child.isShown()) {
            tr.removeClass('details');
            row.child.hide();

            // Remove from the 'open' array
            detailRows.splice(idx, 1);
        } else {
            tr.addClass('details');
            row.child(format(row.data())).show();

            // Add to the 'open' array
            if (idx === -1) {
                detailRows.push(tr.attr('id'));
            }
        }
    });




    var dt = $('#data').DataTable({
        "pageLength": 25,
        responsive:true,
        ajax: "/data/json/",
        dataSrc:'',
        columns: [{
                data: 'null',
                "class": 'details-control',
                orderable: false,
                "defaultContent": ''
            },
            {
                data: 'Ranking',
                searchable: false,
                responsivePriority: 1, targets: 0
            },
            {
                data: 'Team_address',
                orderable: false,
                render: $.fn.dataTable.render.ellipsis(),
                responsivePriority: 1, targets: 0
            },
            {
                data: 'Team_name',
                orderable: false,
                searchable: false,
                "render": function ( data, type, row ) { return '<a class="font-weight-bold">' +data +' '+ '<a class="small"></a>'; }
            },
            {
                data: 'Referrals',
                searchable: false
            },
            {
                data: 'Total_structure',
                searchable: false
            },
            {
                data: 'Total_deposits',
                searchable: false,
                responsivePriority: 10001, targets: 4 
            },
            {
                data: 'Total_payouts',
                searchable: false
            },
            {
                data: 'Airdrops_total',
                searchable: false
            },
            {
                data: 'Airdrops_received',
                searchable: false
            },
            {
                data: 'Team_address',
                "mRender": function(data, type, full) {
                    return '<a class="btn btn-info btn-sm" href=https://drip.community/faucet?buddy=' + data + '>' + 'Join team' + '</a>';
                }
            }
        ],
        "order": [
            [1, 'dsc']
        ]
    });
    
    // On each draw, loop over the `detailRows` array and show any child rows
    dt.on('draw', function() {
        $.each(detailRows, function(i, id) {
            $('#' + id + ' td.details-control').trigger('click');
        });
    });    
    
});
