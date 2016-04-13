/*****************************************************************************/
/* <%= name %>: Event Handlers */
/*****************************************************************************/
Template.<%= name %>.events({
});

/*****************************************************************************/
/* <%= name %>: Helpers */
/*****************************************************************************/
Template.<%= name %>.helpers({
});

/*****************************************************************************/
/* <%= name %>: WebComponent
 * This web component allows the use of the browser's native Shadow DOM
 * thus allowing all content external to be
/*****************************************************************************/
Template.<%= name %>.registerElement('app-<%= name %>', {
    css: `h1 { color: red; }`,
    cssLinks: ['./<%= name %>.css']
});

/*****************************************************************************/
/* <%= name %>: Lifecycle Hooks */
/*****************************************************************************/
Template.<%= name %>.onCreated(function () {
});

Template.<%= name %>.onRendered(function () {
});

Template.<%= name %>.onDestroyed(function () {
});