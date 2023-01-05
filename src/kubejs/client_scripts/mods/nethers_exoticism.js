//МБ в будущем выпилить что-то еще
JEIEvents.hideItems(event => {
    event.hide([
        /*
        'nethers_exoticism:kiwano_helmet',
        'nethers_exoticism:kiwano_chestplate',
        'nethers_exoticism:kiwano_leggings',
        'nethers_exoticism:kiwano_boots',
        'nethers_exoticism:kiwano_sword',
        'nethers_exoticism:kiwano_pickaxe',
        'nethers_exoticism:kiwano_axe',
        'nethers_exoticism:kiwano_shovel',
        'nethers_exoticism:kiwano_hoe',
        'nethers_exoticism:ramboutan_helmet',
        'nethers_exoticism:rambutan_shield',
        */

        'nethers_exoticism:moloch_in_a_bucket',
        'nethers_exoticism:moloch_spawn_egg',
    ])

    event.hide(
        Item.of('nethers_exoticism:kiwano_helmet').ignoreNBT(),
        Item.of('nethers_exoticism:kiwano_chestplate').ignoreNBT(),
        Item.of('nethers_exoticism:kiwano_leggings').ignoreNBT(),
        Item.of('nethers_exoticism:kiwano_boots').ignoreNBT(),
        Item.of('nethers_exoticism:kiwano_sword').ignoreNBT(),
        Item.of('nethers_exoticism:kiwano_pickaxe').ignoreNBT(),
        Item.of('nethers_exoticism:kiwano_axe').ignoreNBT(),
        Item.of('nethers_exoticism:kiwano_shovel').ignoreNBT(),
        Item.of('nethers_exoticism:kiwano_hoe').ignoreNBT(),
        Item.of('nethers_exoticism:ramboutan_helmet').ignoreNBT(),
        Item.of('nethers_exoticism:rambutan_shield').ignoreNBT()
    );
})