JEIEvents.hideItems(event => {
    event.hide([
        'create_confectionery:little_gingerbread_man_spawn_egg',
    ])

    //х3 почему, но не удаляет
    event.hide(
        Item.of('create_confectionery:the_bright_side')
    );
});
