//МБ в будущем выпилить что-то еще
onEvent('jei.hide.items', event => {
    event.hide([
        'alexsmobs:animal_dictionary',
        'alexsmobs:bear_fur',
        'alexsmobs:bone_serpent_tooth',
        'alexsmobs:centipede_leg',
        'alexsmobs:centipede_leggings',
        //'alexsmobs:ancient_dart',
        'alexsmobs:blood_sac',
        'alexsmobs:mosquito_proboscis',
        'alexsmobs:mosquito_larva',
        'alexsmobs:blood_sprayer',
        'alexsmobs:rattlesnake_rattle',
        'alexsmobs:komodo_spit',
        'alexsmobs:komodo_spit_bottle',
        'alexsmobs:poison_bottle',
        'alexsmobs:mimicream',
        'alexsmobs:maraca',
        'alexsmobs:cockroach_wing_fragment',
        'alexsmobs:cockroach_wing',
        'alexsmobs:cockroach_ootheca',
        'alexsmobs:guster_eye',
        'alexsmobs:pocket_sand',
        'alexsmobs:warped_muscle',
        'alexsmobs:hemolymph_sac',
        'alexsmobs:hemolymph_blaster',
        'alexsmobs:straddlite',
        'alexsmobs:stradpole_bucket',
        'alexsmobs:straddleboard',
        'alexsmobs:dropbear_claw',
        'alexsmobs:enderiophage_rocket',
        'alexsmobs:tarantula_hawk_wing_fragment',
        'alexsmobs:tarantula_hawk_wing',
        'alexsmobs:tarantula_hawk_elytra',
        'alexsmobs:mysterious_worm',
        'alexsmobs:void_worm_mandible',
        'alexsmobs:void_worm_eye',
        'alexsmobs:void_worm_beak',
        'alexsmobs:void_worm_effigy',
        'alexsmobs:dimensional_carver',
        'alexsmobs:serrated_shark_tooth',
        'alexsmobs:frilled_shark_bucket',
        'alexsmobs:mimic_octopus_bucket',
        'alexsmobs:straddle_helmet',
        'alexsmobs:straddle_saddle',
        'alexsmobs:straddlite_block',
        'alexsmobs:shed_snake_skin',
        'alexsmobs:novelty_hat',
        'alexsmobs:skelewag_sword',
        'alexsmobs:pupfish_locator',

        'alexsmobs:gustmaker',
        'alexsmobs:capsid',
        'alexsmobs:chorus_on_a_stick',
        'alexsmobs:rainbow_jelly',
        'alexsmobs:rainbow_glass',
        'alexsmobs:maggot',
        'alexsmobs:shrimp_fried_rice',
        'alexsmobs:falconry_hood',
        'alexsmobs:squid_grapple',


        //убрать до замены рецепта
        'alexsmobs:shield_of_the_deep',
        'alexsmobs:vine_lasso',
        'alexsmobs:rocky_chestplate',

        //убрать до замены рецепта из волоса другого медведя
        'alexsmobs:falconry_glove',

        'alexsmobs:lobster_bucket',
        'alexsmobs:blobfish_bucket',
        'alexsmobs:platypus_bucket',
        'alexsmobs:terrapin_bucket',
        'alexsmobs:comb_jelly_bucket',
        'alexsmobs:cosmic_cod_bucket',
        'alexsmobs:devils_hole_pupfish_bucket',
        'alexsmobs:small_catfish_bucket',
        'alexsmobs:medium_catfish_bucket',
        'alexsmobs:large_catfish_bucket',
        'alexsmobs:flying_fish_bucket',

        'alexsmobs:spawn_egg_grizzly_bear',
        'alexsmobs:spawn_egg_roadrunner',
        'alexsmobs:spawn_egg_bone_serpent',
        'alexsmobs:spawn_egg_gazelle',
        'alexsmobs:spawn_egg_crocodile',
        'alexsmobs:spawn_egg_fly',
        'alexsmobs:spawn_egg_hummingbird',
        'alexsmobs:spawn_egg_orca',
        'alexsmobs:spawn_egg_sunbird',
        'alexsmobs:spawn_egg_gorilla',
        'alexsmobs:spawn_egg_crimson_mosquito',
        'alexsmobs:spawn_egg_rattlesnake',
        'alexsmobs:spawn_egg_endergrade',
        'alexsmobs:spawn_egg_hammerhead_shark',
        'alexsmobs:spawn_egg_lobster',
        'alexsmobs:spawn_egg_komodo_dragon',
        'alexsmobs:spawn_egg_capuchin_monkey',
        'alexsmobs:spawn_egg_centipede',
        'alexsmobs:spawn_egg_warped_toad',
        'alexsmobs:spawn_egg_moose',
        'alexsmobs:spawn_egg_mimicube',
        'alexsmobs:spawn_egg_raccoon',
        'alexsmobs:spawn_egg_blobfish',
        'alexsmobs:spawn_egg_seal',
        'alexsmobs:spawn_egg_cockroach',
        'alexsmobs:spawn_egg_shoebill',
        'alexsmobs:spawn_egg_elephant',
        'alexsmobs:spawn_egg_soul_vulture',
        'alexsmobs:spawn_egg_snow_leopard',
        'alexsmobs:spawn_egg_spectre',
        'alexsmobs:spawn_egg_crow',
        'alexsmobs:spawn_egg_alligator_snapping_turtle',
        'alexsmobs:spawn_egg_mungus',
        'alexsmobs:spawn_egg_mantis_shrimp',
        'alexsmobs:spawn_egg_guster',
        'alexsmobs:spawn_egg_warped_mosco',
        'alexsmobs:spawn_egg_straddler',
        'alexsmobs:spawn_egg_stradpole',
        'alexsmobs:spawn_egg_emu',
        'alexsmobs:spawn_egg_platypus',
        'alexsmobs:spawn_egg_dropbear',
        'alexsmobs:spawn_egg_tasmanian_devil',
        'alexsmobs:spawn_egg_kangaroo',
        'alexsmobs:spawn_egg_cachalot_whale',
        'alexsmobs:spawn_egg_leafcutter_ant',
        'alexsmobs:spawn_egg_enderiophage',
        'alexsmobs:spawn_egg_bald_eagle',
        'alexsmobs:spawn_egg_tiger',
        'alexsmobs:spawn_egg_tarantula_hawk',
        'alexsmobs:spawn_egg_void_worm',
        'alexsmobs:spawn_egg_frilled_shark',
        'alexsmobs:spawn_egg_mimic_octopus',
        'alexsmobs:spawn_egg_seagull',
        'alexsmobs:spawn_egg_froststalker',
        'alexsmobs:spawn_egg_tusklin',
        'alexsmobs:spawn_egg_laviathan',
        'alexsmobs:spawn_egg_cosmaw',
        'alexsmobs:spawn_egg_toucan',
        'alexsmobs:spawn_egg_maned_wolf',
        'alexsmobs:spawn_egg_anaconda',
        'alexsmobs:spawn_egg_anteater',
        'alexsmobs:spawn_egg_rocky_roller',
        'alexsmobs:spawn_egg_flutter',
        'alexsmobs:spawn_egg_gelada_monkey',
        'alexsmobs:spawn_egg_jerboa',
        'alexsmobs:spawn_egg_terrapin',
        'alexsmobs:spawn_egg_comb_jelly',
        'alexsmobs:spawn_egg_cosmic_cod',
        'alexsmobs:spawn_egg_bunfungus',
        'alexsmobs:spawn_egg_bison',
        'alexsmobs:spawn_egg_giant_squid',
        'alexsmobs:spawn_egg_devils_hole_pupfish',
        'alexsmobs:spawn_egg_catfish',
        'alexsmobs:spawn_egg_flying_fish',
        'alexsmobs:spawn_egg_skelewag',
    ]);
});
