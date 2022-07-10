//TODO: отключить все генерируемые блоки мира
onEvent('jei.hide.items', event => {
    event.hide([
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
        'create:crafter_slot_cover',
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
        'create:speedometer',
        'create:stressometer',
        'create:wand_of_symmetry',
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


        'create:creative_crate',
        'create:creative_motor',
        'create:creative_blaze_cake',
        'create:creative_fluid_tank',
        'create:handheld_worldshaper',

        //Временно убираем, пока не придумаем, как внедрить роз кварц (мб из кварка)
        'create:rose_quartz_lamp',
        'create:rose_quartz_block',
        'create:rose_quartz_tiles',
        'create:small_rose_quartz_tiles',

        //Пока не появятся расцветки
        'create:tiled_glass',
        'create:framed_glass',
        'create:horizontal_framed_glass',
        'create:vertical_framed_glass',
        'create:tiled_glass_pane',
        'create:framed_tiled_glass',
        'create:horizontal_framed_tiled_glass',
        'create:vertical_framed_tiled_glass',
    ]);
});