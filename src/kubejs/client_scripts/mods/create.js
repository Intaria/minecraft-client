//TODO: отключить все генерируемые блоки мира
onEvent('jei.hide.items', event => {
    event.hide([
        'create:adjustable_chain_gearshift',
        'create:andesite_funnel',
        'create:andesite_tunnel',
        'create:attribute_filter',
        'create:belt_connector',
        'create:blaze_burner',
        'create:blaze_cake',
        'create:blaze_cake_base',
        'create:blaze_casing',
        'create:brass_hand',
        'create:brass_funnel',
        'create:brass_tunnel',
        'create:brass_sheet',
        'create:brass_nugget',
        'create:brass_ingot',
        'create:brass_casing',
        'create:brass_block',
        'create:brass_lantern',
        'create:brass_ladder',
        'create:crafter_slot_cover',
        'create:crushed_zinc_ore',
        'create:deployer',
        'create:empty_blaze_burner',
        'create:empty_schematic',
        'create:extendo_grip',
        'create:haunted_bell',
        'create:item_vault',
        'create:linked_controller',
        'create:mechanical_arm',
        'create:mechanical_drill',
        'create:mechanical_crafter',
        'create:mechanical_harvester',
        'create:mechanical_plough',
        'create:mechanical_saw',
        'create:peculiar_bell',
        'create:potato_cannon',
        'create:polished_rose_quartz',
        'create:precision_mechanism',
        'create:pulse_repeater',
        'create:pulse_extender',
        'create:raw_zinc',
        'create:redstone_link',
        'create:red_sand_paper',
        'create:rose_quartz',
        'create:rotation_speed_controller',
        'create:sand_paper',
        'create:sequenced_gearshift',
        'create:schematicannon',
        'create:schematic_and_quill',
        'create:schematic_table',
        'create:smart_chute',
        'create:smart_fluid_pipe',
        'create:speedometer',
        'create:stressometer',
        'create:wand_of_symmetry',
        'create:zinc_nugget',
        'create:zinc_ingot',
        'create:zinc_ore',
        'create:deepslate_zinc_ore',
        'create:raw_zinc_block',
        'create:zinc_block',
        'create:display_link',
        'create:display_board',

        'create:cut_granite',
        'create:cut_granite_stairs',
        'create:cut_granite_slab',
        'create:cut_granite_wall',
        'create:polished_cut_granite',
        'create:polished_cut_granite_stairs',
        'create:polished_cut_granite_slab',
        'create:polished_cut_granite_wall',
        'create:cut_granite_bricks',
        'create:cut_granite_brick_stairs',
        'create:cut_granite_brick_slab',
        'create:cut_granite_brick_wall',
        'create:small_granite_bricks',
        'create:small_granite_stairs',
        'create:small_granite_slab',
        'create:small_granite_wall',
        'create:layered_granite',
        'create:granite_pillar',
        'create:cut_diorite',
        'create:cut_diorite_stairs',
        'create:cut_diorite_slab',
        'create:cut_diorite_wall',
        'create:polished_cut_diorite',
        'create:polished_cut_diorite_stairs',
        'create:polished_cut_diorite_slab',
        'create:polished_cut_diorite_wall',
        'create:cut_diorite_bricks',
        'create:cut_diorite_brick_stairs',
        'create:cut_diorite_brick_slab',
        'create:cut_diorite_brick_wall',
        'create:small_diorite_bricks',
        'create:small_diorite_stairs',
        'create:small_diorite_slab',
        'create:small_diorite_wall',
        'create:layered_diorite',
        'create:diorite_pillar',
        'create:cut_andesite',
        'create:cut_andesite_stairs',
        'create:cut_andesite_slab',
        'create:cut_andesite_wall',
        'create:polished_cut_andesite',
        'create:polished_cut_andesite_stairs',
        'create:polished_cut_andesite_slab',
        'create:polished_cut_andesite_wall',
        'create:cut_andesite_bricks',
        'create:cut_andesite_brick_stairs',
        'create:cut_andesite_brick_slab',
        'create:cut_andesite_brick_wall',
        'create:small_andesite_bricks',
        'create:small_andesite_stairs',
        'create:small_andesite_slab',
        'create:small_andesite_wall',
        'create:layered_andesite',
        'create:andesite_pillar',
        'create:cut_calcite',
        'create:cut_calcite_stairs',
        'create:cut_calcite_slab',
        'create:cut_calcite_wall',
        'create:polished_cut_calcite',
        'create:polished_cut_calcite_stairs',
        'create:polished_cut_calcite_slab',
        'create:polished_cut_calcite_wall',
        'create:cut_calcite_bricks',
        'create:cut_calcite_brick_stairs',
        'create:cut_calcite_brick_slab',
        'create:cut_calcite_brick_wall',
        'create:small_calcite_bricks',
        'create:small_calcite_stairs',
        'create:small_calcite_slab',
        'create:small_calcite_wall',
        'create:layered_calcite',
        'create:calcite_pillar',
        'create:cut_dripstone',
        'create:cut_dripstone_stairs',
        'create:cut_dripstone_slab',
        'create:cut_dripstone_wall',
        'create:polished_cut_dripstone',
        'create:polished_cut_dripstone_stairs',
        'create:polished_cut_dripstone_slab',
        'create:polished_cut_dripstone_wall',
        'create:cut_dripstone_bricks',
        'create:cut_dripstone_brick_stairs',
        'create:cut_dripstone_brick_slab',
        'create:cut_dripstone_brick_wall',
        'create:small_dripstone_bricks',
        'create:small_dripstone_stairs',
        'create:small_dripstone_slab',
        'create:small_dripstone_wall',
        'create:layered_dripstone',
        'create:dripstone_pillar',
        'create:cut_deepslate',
        'create:cut_deepslate_stairs',
        'create:cut_deepslate_slab',
        'create:cut_deepslate_wall',
        'create:polished_cut_deepslate',
        'create:polished_cut_deepslate_stairs',
        'create:polished_cut_deepslate_slab',
        'create:polished_cut_deepslate_wall',
        'create:cut_deepslate_bricks',
        'create:cut_deepslate_brick_stairs',
        'create:cut_deepslate_brick_slab',
        'create:cut_deepslate_brick_wall',
        'create:small_deepslate_bricks',
        'create:small_deepslate_stairs',
        'create:small_deepslate_slab',
        'create:small_deepslate_wall',
        'create:layered_deepslate',
        'create:deepslate_pillar',
        'create:cut_tuff',
        'create:cut_tuff_stairs',
        'create:cut_tuff_slab',
        'create:cut_tuff_wall',
        'create:polished_cut_tuff',
        'create:polished_cut_tuff_stairs',
        'create:polished_cut_tuff_slab',
        'create:polished_cut_tuff_wall',
        'create:cut_tuff_bricks',
        'create:cut_tuff_brick_stairs',
        'create:cut_tuff_brick_slab',
        'create:cut_tuff_brick_wall',
        'create:small_tuff_bricks',
        'create:small_tuff_stairs',
        'create:small_tuff_slab',
        'create:small_tuff_wall',
        'create:layered_tuff',
        'create:tuff_pillar',
        'create:asurine',
		'create:cut_asurine',
        'create:cut_asurine_stairs',
        'create:cut_asurine_slab',
        'create:cut_asurine_wall',
        'create:polished_cut_asurine',
        'create:polished_cut_asurine_stairs',
        'create:polished_cut_asurine_slab',
        'create:polished_cut_asurine_wall',
        'create:cut_asurine_bricks',
        'create:cut_asurine_brick_stairs',
        'create:cut_asurine_brick_slab',
        'create:cut_asurine_brick_wall',
        'create:small_asurine_bricks',
        'create:small_asurine_stairs',
        'create:small_asurine_slab',
        'create:small_asurine_wall',
        'create:layered_asurine',
        'create:asurine_pillar',
        'create:crimsite',
		'create:cut_crimsite',
        'create:cut_crimsite_stairs',
        'create:cut_crimsite_slab',
        'create:cut_crimsite_wall',
        'create:polished_cut_crimsite',
        'create:polished_cut_crimsite_stairs',
        'create:polished_cut_crimsite_slab',
        'create:polished_cut_crimsite_wall',
        'create:cut_crimsite_bricks',
        'create:cut_crimsite_brick_stairs',
        'create:cut_crimsite_brick_slab',
        'create:cut_crimsite_brick_wall',
        'create:small_crimsite_bricks',
        'create:small_crimsite_stairs',
        'create:small_crimsite_slab',
        'create:small_crimsite_wall',
        'create:layered_crimsite',
        'create:crimsite_pillar',
        'create:limestone',
		'create:cut_limestone',
        'create:cut_limestone_stairs',
        'create:cut_limestone_slab',
        'create:cut_limestone_wall',
        'create:polished_cut_limestone',
        'create:polished_cut_limestone_stairs',
        'create:polished_cut_limestone_slab',
        'create:polished_cut_limestone_wall',
        'create:cut_limestone_bricks',
        'create:cut_limestone_brick_stairs',
        'create:cut_limestone_brick_slab',
        'create:cut_limestone_brick_wall',
        'create:small_limestone_bricks',
        'create:small_limestone_stairs',
        'create:small_limestone_slab',
        'create:small_limestone_wall',
        'create:layered_limestone',
        'create:limestone_pillar',
        'create:ochrum',
		'create:cut_ochrum',
        'create:cut_ochrum_stairs',
        'create:cut_ochrum_slab',
        'create:cut_ochrum_wall',
        'create:polished_cut_ochrum',
        'create:polished_cut_ochrum_stairs',
        'create:polished_cut_ochrum_slab',
        'create:polished_cut_ochrum_wall',
        'create:cut_ochrum_bricks',
        'create:cut_ochrum_brick_stairs',
        'create:cut_ochrum_brick_slab',
        'create:cut_ochrum_brick_wall',
        'create:small_ochrum_bricks',
        'create:small_ochrum_stairs',
        'create:small_ochrum_slab',
        'create:small_ochrum_wall',
        'create:layered_ochrum',
        'create:ochrum_pillar',
        'create:scoria',
		'create:cut_scoria',
        'create:cut_scoria_stairs',
        'create:cut_scoria_slab',
        'create:cut_scoria_wall',
        'create:polished_cut_scoria',
        'create:polished_cut_scoria_stairs',
        'create:polished_cut_scoria_slab',
        'create:polished_cut_scoria_wall',
        'create:cut_scoria_bricks',
        'create:cut_scoria_brick_stairs',
        'create:cut_scoria_brick_slab',
        'create:cut_scoria_brick_wall',
        'create:small_scoria_bricks',
        'create:small_scoria_stairs',
        'create:small_scoria_slab',
        'create:small_scoria_wall',
        'create:layered_scoria',
        'create:scoria_pillar',
        'create:scorchia',
		'create:cut_scorchia',
        'create:cut_scorchia_stairs',
        'create:cut_scorchia_slab',
        'create:cut_scorchia_wall',
        'create:polished_cut_scorchia',
        'create:polished_cut_scorchia_stairs',
        'create:polished_cut_scorchia_slab',
        'create:polished_cut_scorchia_wall',
        'create:cut_scorchia_bricks',
        'create:cut_scorchia_brick_stairs',
        'create:cut_scorchia_brick_slab',
        'create:cut_scorchia_brick_wall',
        'create:small_scorchia_bricks',
        'create:small_scorchia_stairs',
        'create:small_scorchia_slab',
        'create:small_scorchia_wall',
        'create:layered_scorchia',
        'create:scorchia_pillar',
        'create:veridium',
		'create:cut_veridium',
        'create:cut_veridium_stairs',
        'create:cut_veridium_slab',
        'create:cut_veridium_wall',
        'create:polished_cut_veridium',
        'create:polished_cut_veridium_stairs',
        'create:polished_cut_veridium_slab',
        'create:polished_cut_veridium_wall',
        'create:cut_veridium_bricks',
        'create:cut_veridium_brick_stairs',
        'create:cut_veridium_brick_slab',
        'create:cut_veridium_brick_wall',
        'create:small_veridium_bricks',
        'create:small_veridium_stairs',
        'create:small_veridium_slab',
        'create:small_veridium_wall',
        'create:layered_veridium',
        'create:veridium_pillar',
        'create:small_granite_brick_stairs',
        'create:small_granite_brick_slab',
        'create:small_granite_brick_wall',
        'create:small_diorite_brick_stairs',
        'create:small_diorite_brick_slab',
        'create:small_diorite_brick_wall',
        'create:small_andesite_brick_stairs',
        'create:small_andesite_brick_slab',
        'create:small_andesite_brick_wall',
        'create:small_calcite_brick_stairs',
        'create:small_calcite_brick_slab',
        'create:small_calcite_brick_wall',
        'create:small_dripstone_brick_stairs',
        'create:small_dripstone_brick_slab',
        'create:small_dripstone_brick_wall',
        'create:small_deepslate_brick_stairs',
        'create:small_deepslate_brick_slab',
        'create:small_deepslate_brick_wall',
        'create:small_tuff_brick_stairs',
        'create:small_tuff_brick_slab',
        'create:small_tuff_brick_wall',
        'create:small_asurine_brick_stairs',
        'create:small_asurine_brick_slab',
        'create:small_asurine_brick_wall',
        'create:small_crimsite_brick_stairs',
        'create:small_crimsite_brick_slab',
        'create:small_crimsite_brick_wall',
        'create:small_limestone_brick_stairs',
        'create:small_limestone_brick_slab',
        'create:small_limestone_brick_wall',
        'create:small_ochrum_brick_stairs',
        'create:small_ochrum_brick_slab',
        'create:small_ochrum_brick_wall',
        'create:small_scoria_brick_stairs',
        'create:small_scoria_brick_slab',
        'create:small_scoria_brick_wall',
        'create:small_scorchia_brick_stairs',
        'create:small_scorchia_brick_slab',
        'create:small_scorchia_brick_wall',
        'create:small_veridium_brick_stairs',
        'create:small_veridium_brick_slab',
        'create:small_veridium_brick_wall',


        'create:creative_crate',
        'create:creative_motor',
        'create:creative_blaze_cake',
        'create:creative_fluid_tank',
        'create:handheld_worldshaper',

        //Временно убираем, пока не появятся законченные поезда
        'create:track',
        'create:railway_casing',
        'create:schedule',
        'create:track_station',
        'create:track_signal',
        'create:track_observer',
        'create:controls',
        'create:train_door',
        'create:train_trapdoor',

        //Временно убираем, пока не придумаем, как внедрить роз кварц (мб из кварка)
        'create:rose_quartz_lamp',
        'create:rose_quartz_block',
        'create:rose_quartz_tiles',
        'create:small_rose_quartz_tiles',
    ]);
});