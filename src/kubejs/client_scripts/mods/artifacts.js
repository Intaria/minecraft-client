//TODO: modify loot table for complete remove this items

onEvent('jei.hide.items', event => {
    event.hide([
        'artifacts:mimic_spawn_egg',
        'artifacts:umbrella',
        'artifacts:eternal_steak',
        'artifacts:everlasting_beef',
        'artifacts:novelty_drinking_hat',
        'artifacts:snorkel',
        'artifacts:scarf_of_invisibility',
        'artifacts:cloud_in_a_bottle',
        'artifacts:charm_of_sinking',
        'artifacts:obsidian_skull',
        'artifacts:universal_attractor',
        'artifacts:helium_flamingo',
        'artifacts:fire_gauntlet',
        'artifacts:vampiric_glove',
        'artifacts:whoopee_cushion',
    ])
});
