onEvent('jei.hide.items', event => {   
    event.hide([
        'minecraft:elytra',
    ]);

    event.hide(
        Item.of('minecraft:enchanted_book').ignoreNBT()
    );
});

onEvent('jei.hide.fluids', event => {   
    event.hide('minecraft:lava');
    event.hide('minecraft:milk');
});