//Minecraft
//remove item from drop, not only recipe for totem and elitry
craftingTable.removeRecipe(<item:minecraft:elytra>);
craftingTable.removeRecipe(<item:minecraft:totem_of_undying>);
mods.jei.JEI.hideItem(<item:minecraft:elytra>);
mods.jei.JEI.hideItem(<item:minecraft:totem_of_undying>);

//Harvestcraft Food Core
craftingTable.removeRecipe(<item:pamhc2foodcore:friedchickenitem>);
mods.jei.JEI.hideItem(<item:pamhc2foodcore:friedchickenitem>);

//Harvestcraft Food Extended
craftingTable.removeRecipe(<item:pamhc2foodextended:hazelnutchocolateitem>);
craftingTable.removeRecipe(<item:pamhc2foodextended:theatreboxitem>);
mods.jei.JEI.hideItem(<item:pamhc2foodextended:hazelnutchocolateitem>);
mods.jei.JEI.hideItem(<item:pamhc2foodextended:theatreboxitem>);

//LivingThings
craftingTable.removeRecipe(<item:livingthings:lexicon>);
mods.jei.JEI.hideItem(<item:livingthings:lexicon>);

//FluidTank
craftingTable.removeRecipe(<item:fluidtank:tank_wood>);
craftingTable.removeRecipe(<item:fluidtank:tank_gold>);
craftingTable.removeRecipe(<item:fluidtank:tank_emerald>);
craftingTable.removeRecipe(<item:fluidtank:tank_star>);
craftingTable.removeRecipe(<item:fluidtank:tank_void>);
craftingTable.removeRecipe(<item:fluidtank:fluid_source>);
craftingTable.removeRecipe(<item:fluidtank:pipe>);
craftingTable.removeRecipe(<item:fluidtank:item_pipe>);
craftingTable.removeRecipe(<item:fluidtank:chest_as_tank>);
mods.jei.JEI.hideItem(<item:fluidtank:tank_wood>);
mods.jei.JEI.hideItem(<item:fluidtank:tank_gold>);
mods.jei.JEI.hideItem(<item:fluidtank:tank_emerald>);
mods.jei.JEI.hideItem(<item:fluidtank:tank_star>);
mods.jei.JEI.hideItem(<item:fluidtank:tank_void>);
mods.jei.JEI.hideItem(<item:fluidtank:fluid_source>);
mods.jei.JEI.hideItem(<item:fluidtank:pipe>);
mods.jei.JEI.hideItem(<item:fluidtank:item_pipe>);
mods.jei.JEI.hideItem(<item:fluidtank:chest_as_tank>);

craftingTable.removeRecipe(<item:fluidtank:tank_stone>);
craftingTable.addShaped("Stone tank", <item:fluidtank:tank_stone>, [
    [<tag:forge:glass>, <tag:forge:stone>, <tag:forge:glass>],
    [<tag:forge:stone>, <item:minecraft:air>, <tag:forge:stone>],
    [<tag:forge:glass>, <tag:forge:stone>, <tag:forge:glass>]
]);
craftingTable.removeRecipe(<item:fluidtank:tank_iron>);
craftingTable.addShaped("Iron tank", <item:fluidtank:tank_iron>, [
    [<tag:forge:glass>, <item:minecraft:gold_ingot>, <tag:forge:glass>],
    [<item:minecraft:gold_ingot>, <item:minecraft:air>, <item:minecraft:gold_ingot>],
    [<tag:forge:glass>, <item:minecraft:gold_ingot>, <tag:forge:glass>]
]);
craftingTable.removeRecipe(<item:fluidtank:tank_diamond>);
craftingTable.addShaped("Diamond tank", <item:fluidtank:tank_diamond>, [
    [<tag:forge:glass>, <item:minecraft:diamond>, <tag:forge:glass>],
    [<item:minecraft:diamond>, <item:minecraft:air>, <item:minecraft:diamond>],
    [<tag:forge:glass>, <item:minecraft:diamond>, <tag:forge:glass>]
]);

//Supplementaries
craftingTable.removeRecipe(<item:supplementaries:turn_table>);
craftingTable.removeRecipe(<item:supplementaries:wind_vane>);
craftingTable.removeRecipe(<item:supplementaries:planter>);
craftingTable.removeRecipe(<item:supplementaries:sconce_soul>);
craftingTable.removeRecipe(<item:supplementaries:sconce_ender>);
mods.jei.JEI.hideItem(<item:supplementaries:turn_table>);
mods.jei.JEI.hideItem(<item:supplementaries:wind_vane>);
mods.jei.JEI.hideItem(<item:supplementaries:planter>);
mods.jei.JEI.hideItem(<item:supplementaries:sconce_soul>);
mods.jei.JEI.hideItem(<item:supplementaries:sconce_ender>);

//Sophisticated Backpacks
craftingTable.removeRecipe(<item:sophisticatedbackpacks:iron_backpack>);
craftingTable.removeRecipe(<item:sophisticatedbackpacks:gold_backpack>);
craftingTable.removeRecipe(<item:sophisticatedbackpacks:diamond_backpack>);
craftingTable.removeRecipe(<item:sophisticatedbackpacks:pickup_upgrade>);
craftingTable.removeRecipe(<item:sophisticatedbackpacks:advanced_pickup_upgrade>);
craftingTable.removeRecipe(<item:sophisticatedbackpacks:filter_upgrade>);
craftingTable.removeRecipe(<item:sophisticatedbackpacks:advanced_filter_upgrade>);
craftingTable.removeRecipe(<item:sophisticatedbackpacks:magnet_upgrade>);
craftingTable.removeRecipe(<item:sophisticatedbackpacks:advanced_magnet_upgrade>);
craftingTable.removeRecipe(<item:sophisticatedbackpacks:feeding_upgrade>);
craftingTable.removeRecipe(<item:sophisticatedbackpacks:compacting_upgrade>);
craftingTable.removeRecipe(<item:sophisticatedbackpacks:advanced_compacting_upgrade>);
craftingTable.removeRecipe(<item:sophisticatedbackpacks:void_upgrade>);
craftingTable.removeRecipe(<item:sophisticatedbackpacks:advanced_void_upgrade>);
craftingTable.removeRecipe(<item:sophisticatedbackpacks:restock_upgrade>);
craftingTable.removeRecipe(<item:sophisticatedbackpacks:advanced_restock_upgrade>);
craftingTable.removeRecipe(<item:sophisticatedbackpacks:deposit_upgrade>);
craftingTable.removeRecipe(<item:sophisticatedbackpacks:advanced_deposit_upgrade>);
craftingTable.removeRecipe(<item:sophisticatedbackpacks:refill_upgrade>);
craftingTable.removeRecipe(<item:sophisticatedbackpacks:upgrade_base>);
craftingTable.removeRecipe(<item:sophisticatedbackpacks:inception_upgrade>);
craftingTable.removeRecipe(<item:sophisticatedbackpacks:everlasting_upgrade>);
craftingTable.removeRecipe(<item:sophisticatedbackpacks:smelting_upgrade>);
craftingTable.removeRecipe(<item:sophisticatedbackpacks:auto_smelting_upgrade>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:iron_backpack>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:gold_backpack>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:diamond_backpack>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:pickup_upgrade>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:advanced_pickup_upgrade>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:filter_upgrade>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:advanced_filter_upgrade>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:magnet_upgrade>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:advanced_magnet_upgrade>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:feeding_upgrade>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:compacting_upgrade>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:advanced_compacting_upgrade>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:void_upgrade>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:advanced_void_upgrade>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:restock_upgrade>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:advanced_restock_upgrade>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:deposit_upgrade>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:advanced_deposit_upgrade>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:refill_upgrade>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:upgrade_base>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:inception_upgrade>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:everlasting_upgrade>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:smelting_upgrade>);
mods.jei.JEI.hideItem(<item:sophisticatedbackpacks:auto_smelting_upgrade>);

//Refined Pipes
craftingTable.removeRecipe(<item:refinedpipes:elite_fluid_pipe>);
craftingTable.removeRecipe(<item:refinedpipes:ultimate_fluid_pipe>);
craftingTable.removeRecipe(<item:refinedpipes:elite_energy_pipe>);
craftingTable.removeRecipe(<item:refinedpipes:ultimate_energy_pipe>);
craftingTable.removeRecipe(<item:refinedpipes:elite_extractor_attachment>);
craftingTable.removeRecipe(<item:refinedpipes:ultimate_extractor_attachment>);
mods.jei.JEI.hideItem(<item:refinedpipes:elite_fluid_pipe>);
mods.jei.JEI.hideItem(<item:refinedpipes:ultimate_fluid_pipe>);
mods.jei.JEI.hideItem(<item:refinedpipes:elite_energy_pipe>);
mods.jei.JEI.hideItem(<item:refinedpipes:ultimate_energy_pipe>);
mods.jei.JEI.hideItem(<item:refinedpipes:elite_extractor_attachment>);
mods.jei.JEI.hideItem(<item:refinedpipes:ultimate_extractor_attachment>);
