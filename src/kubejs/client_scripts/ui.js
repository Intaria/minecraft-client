onEvent('ui.main_menu', event => {
    event.replace(ui => {
        ui.background("intaria:textures/bg.png");
        ui.widgetTexture = "intaria:textures/widgets.png";

        //Singleplayer
        ui.button((b) => {
            b.name = Text.translate("menu.singleplayer");
            b.width = 150;
            b.x = 40;
            b.y = ui.height / 2 - 40;
            b.action = "minecraft:singleplayer";
            b.shadow = false;
        });

        //multiplayer
        ui.button((b) => {
            b.name = Text.translate("menu.multiplayer");
            b.width = 150;
            b.x = 40;
            b.y = ui.height / 2 - 14;
            b.action = "minecraft:multiplayer";
            b.shadow = false;
        });

        //Mods
        ui.button((b) => {
            b.name = Text.translate("fml.menu.mods");
            b.width = 150;
            b.x = 40;
            b.y = ui.height / 2 + 12;
            b.action = "forge:mod_list";
            b.shadow = false;
        });

        //Options
        ui.button((b) => {
            b.name = Text.translate("menu.options");
            b.width = 73;
            b.x = 40;
            b.y = ui.height / 2 + 64;
            b.action = "minecraft:options";
            b.shadow = false;
        });

        //Quit
        ui.button((b) => {
            b.name = Text.of("Quit");
            b.width = 73;
            b.x = 40 + b.width + 5;
            b.y = ui.height / 2 + 64;
            b.action = "minecraft:quit";
            b.shadow = false;
        });

        //Island
        ui.image((i) => {
            i.height = ui.width * 0.55;
            i.width = ui.width * 0.55;
            i.texture = "intaria:textures/island.png";
            i.y = ui.height - i.height + 8;
            i.x = ui.width - i.width;
        });

        //Forge version
        ui.label((l) => {
            l.height = 10;
            l.name = "Версия Forge: " + Platform.mods.forge.version;
            l.x = ui.width - l.width - 2;
            l.y = ui.height - 31;
        });

        //Mods loaded
        ui.label((l) => {
            l.height = 10;
            l.name = "Установлено модификаций: " + Platform.mods.size();
            l.x = ui.width - l.width - 2;
            l.y = ui.height - 21;
        });
    })
  })

