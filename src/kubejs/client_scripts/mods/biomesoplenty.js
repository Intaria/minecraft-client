onEvent('jei.hide.items', event => {
    event.hide([
        'biomesoplenty:blood_bucket',
        'biomesoplenty:hair',
        'biomesoplenty:flesh',
        'biomesoplenty:porous_flesh',
        'biomesoplenty:flesh_tendons',
        'biomesoplenty:origin_grass_block',
        'biomesoplenty:origin_sapling',
        'biomesoplenty:origin_leaves',
        'biomesoplenty:origin_leaf_carpet',
        'biomesoplenty:origin_hedge',
    ])
})

onEvent('jei.hide.fluids', event => {   
    event.hide('biomesoplenty:blood');
});