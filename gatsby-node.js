exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions
    const oldPage = Object.assign({}, page)

    page.context.language = page.context.intl.language;
    if (page.context.language !== oldPage.context.language) {
        // Replace new page with old page
        deletePage(oldPage)
        createPage(page)
    }
}