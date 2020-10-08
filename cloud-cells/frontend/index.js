define(["require", "base/js/namespace", "./modal"], function (require) {
    "use strict";

    const Jupyter = require('base/js/namespace');
    const modal = require('./modal');

    return {
        load_ipython_extension: () => {
            const action = {
                icon: 'fa-comment-o', // a font-awesome class used on buttons, etc
                help: 'Launch the cloud-cells wizard',
                help_index: 'zz',
                handler: modal.openFormHandler
            };
            const prefix = 'cloud-cells';
            const action_name = 'show-alert';
        
            const actionName = Jupyter.actions.register(action, action_name, prefix); // returns 'my_extension:show-alert'
            Jupyter.toolbar.add_buttons_group([actionName]);
            
            console.log('cloud-cells front-end loaded')
        }
    }
});

