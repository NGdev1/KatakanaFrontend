(function ($) {
    // doesn't work without jquery
    if (!$) return;

    // treeView
    function TreeView(me) {
        // add treeview class name if not present
        me.addClass('treeview');
        // collapsable elements i.e. the li with a ul in it
        let $collapse = me.find('li>ul').parent();

        // generate tree from data
        function generateTree(data, root, options) {
            // create a node from a node object
            function createNode(nodeData, $target, options) {
                const li = $('<li>', {
                    'categoryId': nodeData.id,
                    'categoryName': nodeData.name
                }).appendTo($target);

                const span = $('<span>', {
                    text: nodeData.name,
                    css: {"pointer-events": "none"}
                });

                li.append(span);

                if (options.edit) {
                    let editButton = $('<button>', {
                        type: 'button',
                        class: 'tree-edit-button ' + options.edit.class,
                        css: {float: 'none'},
                        html: options.edit.html,
                        on: {click: options.edit.action}
                    });
                    li.append(editButton);
                }

                if (nodeData.childs != null && nodeData.childs.length > 0) {
                    const innerList = $('<ul>').appendTo(li);
                    for (let i = 0; i < nodeData.childs.length; i++) {
                        const child = nodeData.childs[i];
                        createNode(child, innerList, options);
                    }
                }

                return li;
            }

            for (let i = 0; i < data.childs.length; i++) {
                createNode(data.childs[i], root, options);
            }
        }

        return {
            //initialize control
            init: function (data) {
                // handle undefined error
                data = data || {};

                // default options
                const defaults = {
                    model: null, // treeview data model
                    expanded: false, // the tree is expanded
                    itemClicked: null,
                    edit: {
                        class: null,
                        html: "Edit",
                        action: null
                    }
                };
                // configuration
                let options = {};

                if (typeof data.concat != 'undefined') {
                    // concat is an array method, thus checks if data is array
                    // typeof array returns object otherwise
                    defaults.model = data;
                    // data has model only, which is transferred to defaults.model
                    // prevents wrong merge in $.extend
                    data = null;
                }
                // merge options
                options = $.extend(defaults, data);

                if (options.model != null) {
                    // generate the tree
                    generateTree(options.model, me, options);
                    // re assign var value for new dom structure
                    $collapse = me.find('li>ul').parent();
                }
                // all the collapsable items which have something
                $collapse.addClass('contains-items');
                // user config
                if (options.expanded) {
                    $collapse.addClass('items-expanded')
                } else {
                    me.find('ul').css('display', 'none');
                }
                // expand items which have something
                me.find('.contains-items').on('click', function (event) {
                    const item = $(event.target);
                    if (!item.hasClass('contains-items')) {
                        return
                    }
                    item.toggleClass('items-expanded');
                    // the inner list
                    const listInsideItem = item.find('>ul');
                    // slide effect
                    listInsideItem.slideToggle(210);
                    // stop propagation of inner elements
                    event.stopPropagation();
                });

                const allItems = me.find('li');
                allItems.on('click', options.itemClicked);
            },
            // expand all items
            expandAll: function () {
                const items = me.find('.contains-items');
                items.find('ul').slideDown();
                items.addClass('items-expanded');
            },
            // collapse all items
            collapseAll: function () {
                const items = me.find('.contains-items');
                items.find('ul').slideUp();
                items.removeClass('items-expanded');
            }
        }
    }

    // treeView jQuery plugin
    $.fn.treeView = function (options) {
        let instance = new TreeView($(this));
        instance.init(options);
    }

})(window.jQuery);