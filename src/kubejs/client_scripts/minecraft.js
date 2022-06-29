onEvent('jei.hide.items', event => {   
    event.hide([
        'minecraft:elytra',
        'minecraft:bedrock',
        'minecraft:end_portal_frame',

        'minecraft:pufferfish_bucket',
        'minecraft:salmon_bucket',
        'minecraft:cod_bucket',
        'minecraft:tropical_fish_bucket',
        'minecraft:axolotl_bucket',
    ]);

    event.hide(
        Item.of('minecraft:enchanted_book').ignoreNBT()
    );
});

onEvent('jei.hide.fluids', event => {   
    //event.hide('minecraft:lava');
    //event.hide('minecraft:milk');
});