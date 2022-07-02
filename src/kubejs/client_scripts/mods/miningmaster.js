 //TODO: modify loot table for complete remove this items

 onEvent('jei.hide.items', event => {
    event.hide([
        'miningmaster:gem_forge',
    ])

    event.hide(Item.of('miningmaster:fire_ruby_sword').ignoreNBT())
    event.hide(Item.of('miningmaster:ice_sapphire_sword').ignoreNBT())
    event.hide(Item.of('miningmaster:spirit_garnet_sword').ignoreNBT())
    event.hide(Item.of('miningmaster:power_pyrite_sword').ignoreNBT())
    event.hide(Item.of('miningmaster:lucky_citrine_sword').ignoreNBT())
    event.hide(Item.of('miningmaster:kinetic_opal_sword').ignoreNBT())
    event.hide(Item.of('miningmaster:ultima_sword').ignoreNBT())

    event.hide(Item.of('miningmaster:spirit_garnet_axe').ignoreNBT())
    event.hide(Item.of('miningmaster:power_pyrite_axe').ignoreNBT())
    event.hide(Item.of('miningmaster:haste_peridot_axe').ignoreNBT())
    event.hide(Item.of('miningmaster:kinetic_opal_axe').ignoreNBT())
    event.hide(Item.of('miningmaster:ultima_axe').ignoreNBT())

    event.hide(Item.of('miningmaster:power_pyrite_pickaxe').ignoreNBT())
    event.hide(Item.of('miningmaster:lucky_citrine_pickaxe').ignoreNBT())
    event.hide(Item.of('miningmaster:haste_peridot_pickaxe').ignoreNBT())
    event.hide(Item.of('miningmaster:kinetic_opal_pickaxe').ignoreNBT())
    event.hide(Item.of('miningmaster:ultima_pickaxe').ignoreNBT())

    event.hide(Item.of('miningmaster:haste_peridot_shovel').ignoreNBT())
    event.hide(Item.of('miningmaster:kinetic_opal_shovel').ignoreNBT())
    event.hide(Item.of('miningmaster:ultima_shovel').ignoreNBT())

    event.hide(Item.of('miningmaster:haste_peridot_hoe').ignoreNBT())
    event.hide(Item.of('miningmaster:ultima_hoe').ignoreNBT())

    event.hide(Item.of('miningmaster:air_malachite_bow').ignoreNBT())

    event.hide(Item.of('miningmaster:paragon_helmet').ignoreNBT())
    event.hide(Item.of('miningmaster:paragon_chestplate').ignoreNBT())
    event.hide(Item.of('miningmaster:paragon_leggings').ignoreNBT())
    event.hide(Item.of('miningmaster:paragon_boots').ignoreNBT())
});
