onEvent('jei.hide.items', event => {
    event.hide(
        Item.of('dynamictrees:staff').ignoreNBT()
    );
});
