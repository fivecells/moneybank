var bank ={

    registermenu:function () {
        var _this = this;
        var defaultData = [
            {
                text: '父节点 1',
                href: '#parent1',
                selectable: false,
                tags: ['1'],
                nodes: [
                    {
                        text: '子节点 1',
                        href: '#child1',
                        selectable: false,
                        tags: ['2'],

                    },
                    {
                        text: '子节点 2',
                        href: '#child2',
                        tags: ['3']
                    }
                ]
            },
            {
                text: '展示页面',
                href: 'table-list',
                tags: ['4'],
            },
            {
                text: '新增页面',
                href: 'table-add',
                tags: ['5']
            },
            {
                text: '父节点 4',
                href: '#parent4',
                tags: ['6']
            },
            {
                text: '父节点 5',
                href: 'table-list',
                tags: ['7']
            }
        ];
        $('#treeview5').treeview({
            color: "#428bca",
            expandIcon: 'glyphicon glyphicon-chevron-right',
            collapseIcon: 'glyphicon glyphicon-chevron-down',
            nodeIcon: 'glyphicon glyphicon-bookmark',
            data: defaultData,
            onNodeSelected: function (event, node) {
                //从节点中获取node属性
                var id = node.tags;
                var text = node.text;
                var url = node.href;
                _this.addTab(id,text,url);
            }
        });
    },

    addTab:function (id,text,url) {

        if($('#'+id)[0]==null){
            $('#tabContainer').data("tabs").addTab({id: id, text: text, closeable: true, url: url});
        }else{
            $('#tabContainer').data("tabs").showTab(id);
        }

    },
    closeTab:function (id) {
        $('#tabContainer').data("tabs").remove(id);
    }
}