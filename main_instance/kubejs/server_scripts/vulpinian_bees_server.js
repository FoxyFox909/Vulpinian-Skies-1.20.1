ServerEvents.loaded(event => {
    // Player UUIDs are the keys of this.
    event.server.persistentData.SoulboundBeeList = null ?? {};
});

PlayerEvents.loggedIn(event => {

    event.server.scheduleInTicks(80, () => {
        Utils.server.tell("LOGGED IN")
        let serverSoulboundBeeList = event.server.persistentData.SoulboundBeeList;
        if (!serverSoulboundBeeList[event.player.uuid]) {
            serverSoulboundBeeList[event.player.uuid] = {};
        }

        // let playerRecord = serverSoulboundBeeList[event.player.uuid]["BeeSlots"]

        if (!serverSoulboundBeeList[event.player.uuid]["MaxBeeSlots"] || serverSoulboundBeeList[event.player.uuid]["MaxBeeSlots"] < 0) {
            serverSoulboundBeeList[event.player.uuid]["MaxBeeSlots"] = 0;
        }

        // The actual map of bees
        if (!serverSoulboundBeeList[event.player.uuid]["Bees"]) {
            // serverSoulboundBeeList[event.player.uuid]["Bees"] = {"DummyBee1":{"test": "blah", "testprop2": "blahh"}, "DummyBee2":{"test": "blah", "testprop2": "blahh"}};
            serverSoulboundBeeList[event.player.uuid]["Bees"] = {};
        }


        // serverSoulboundBeeList[event.player.uuid]["PlayerName"] = event.player.displayName();
        serverSoulboundBeeList[event.player.uuid]["PlayerName"] = event.player.name.getString();
    });
    
});

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(Commands.literal('bees') // The name of the command
        // .requires(s => s.hasPermission(2)) // Check if the player has operator privileges
        .then(Commands.literal('count')
            .executes(context => beeCountExec(context.source.player))
        )
        .then(Commands.literal('recall')
            .executes(context => {context.source.player.tell("Not implemented yet. Will teleport bees to you."); return 1;})
             // Toggle flight for the player that ran the command if the `target` argument isn't included
        // .then(Commands.argument('target', Arguments.PLAYER.create(event))
        // .executes(context => beeCountExec(Arguments.PLAYER.getResult(context, 'target'))) // Toggle flight for the player included in the `target` argument
        )
        .then(Commands.literal('see-all').requires(source => source.hasPermission(2))
            .executes(context => seeAllExec(context))
        )
        .then(Commands.literal('reset-bees').requires(source => source.hasPermission(2))
            .then(Commands.argument('target', Arguments.PLAYER.create(event))
            .executes(context => resetBeesExec(Arguments.PLAYER.getResult(context, 'target'))))
        )
    );

    // Helper function
    /** @param {Internal.Player} player */
    let beeCountExec = (player) => {
        // console.log(player)
        // if (player.abilities.mayfly) {
        // player.abilities.mayfly = false
        // player.abilities.flying = false
        // player.displayClientMessage(Component.gold('Flying: ').append(Component.red('disabled')), true)
        // } else {
        // player.abilities.mayfly = true
        // player.displayClientMessage(Component.gold('Flying: ').append(Component.green('enabled')), true)
        // }
        // player.onUpdateAbilities()
        // player.tell("Hello World " + player);
        const playerRecord = player.server.persistentData.SoulboundBeeList[player.uuid];
        const playerBeeList = playerRecord["Bees"];
        player.tell(Text.of(`Your have used ${playerBeeList.size()} out of ${playerRecord["MaxBeeSlots"]} bee slots.`).color("gold"));
        return 1;
    }

    let seeAllExec = (context) => {
        Utils.server.tell(context.source.player.name.getString());
        context.source.player.tell("ALL Soulbound Bee List: " + context.source.server.persistentData.SoulboundBeeList);
        return 1;
    }

    let resetBeesExec = (targetPlayer) => {
        Utils.server.tell("Resetting bees for " + targetPlayer);
        targetPlayer.server.persistentData.SoulboundBeeList[targetPlayer.uuid]["Bees"] = {};
        return 1;
    }
});



EntityEvents.spawned(["productivebees:configurable_bee", "minecraft:bee"], event => {
    const stringUuid = event.entity.customName.getString();
    Utils.server.tell(" Hi bee UUID: " + event.entity.customName.getString());
    // event.entity.nbt.put("Passengers", NBT.toTagCollection(
    //     [{id:ArmorStand,Invisible:true,Marker:true}]
    // ));

    // Cursed shit, caused a crash
    // event.entity.nbt.merge(
    //     NBT.toTagCompound(
    //         {
    //             Passengers:[{id:"minecraft:armor_stand", marker: true}]
    //         }
    //     )
    // )

    if (stringUuid) {
        event.entity.setUUID(UUID.fromString(stringUuid));
    }
    // Utils.server.tell("UUID: " + event.entity.getStringUuid());
    
    const uuid = event.entity.uuid;
    // Utils.server.tell("UUID: " + uuid);
    const s = Utils.server;
    const levelKeys = s.levelKeys()
    let foundBeeFlag = false;
    for (let i = 0; i <levelKeys.size(); i++) {
        const nextLevel = Utils.server.getLevel(levelKeys[i].location());
        const mob = nextLevel.getEntity(uuid);

        if (mob) {
            foundBeeFlag = true;
            Utils.server.tell("Mob found in: " + levelKeys[i].location());
            break;
        }
    }

    if (foundBeeFlag) {
        Console.log("Bee tried to spawn with duplicate UUID of " + uuid + ". Cancelling spawn.");
        event.cancel("Bee already exists");
    }    
});

ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('minecraft:diamond', 3), // arg 1: output
        [
          'minecraft:bone_meal',
          'minecraft:yellow_dye', 	       // arg 2: the array of inputs
          '3x minecraft:ender_pearl'
        ]
      );


    event.shapeless(
        Item.of("minecraft:diamond", 1),
        [
            Item.of("biomancy:chrysalis"),
            Item.of("biomancy:essence").withNBT(NBT.toTagCompound(
                `{
                    colors: [I; 15582019, 4400155],
                    essence_data: {
                        entity_type: "minecraft:bee",
                        name: "entity.minecraft.bee"
                    },
                    essence_tier: 3,
                    sounds: {
                        death: "minecraft:entity.bee.death",
                        hurt: "minecraft:entity.bee.hurt"
                    }
                }`
            ))
        ]
      ).modifyResult((grid, result) => {
        let bio_essence_item = grid.findAll().find(item => (item.id == 'biomancy:essence'));

        /** @type {Internal.CompoundTag} */
        const nbt = bio_essence_item.nbt;
        // Utils.server.tell("nbt = " + nbt);
        // return result.withNBT(nbt);
        // return Item.of('minectaft:diamond', nbt)
        if (!nbt) {
          return Item.of("minecraft:air");
        }
            
        const essence_data = nbt.getCompound("essence_data");
        // Utils.server.tell("essence: " + essence_data);

        if (!essence_data || !essence_data.getString("name")) {            
            return Item.of("minecraft:air");
        } 

        // Validation
        const entity_type = essence_data.getString("entity_type");
        Utils.server.tell("entity_type = " + entity_type);

        const translated_name = Text.translate(essence_data.getString("name")).string;
        Utils.server.tell("translated name: " + translated_name);        
        nbt.merge(NBT.toTagCompound({display:{Name:`{"text":"Attuned ${translated_name} Chrysalis (empty)","color":"dark_purple"}`}}));
        return result.withNBT(nbt);
        // return Item.of("vulpinian_skies:chrysalis_arrow", nbt).strongNBT();
      }).id("vulpinian_skies:chrysalis_arrow_manual_only");
    
});


// Gives the placeable egg!
ItemEvents.entityInteracted("minecraft:diamond", event => {
    if (event.target.type != 'minecraft:bee') {
        return;
    }
    
    // Validation
    const itemNbt = event.item.nbt;
    if (!itemNbt) {
        return;
    }

    const essenceData = itemNbt.getCompound("essence_data");
    if (!essenceData) {
        return;
    }

    const essenceUuid = essenceData.getUUID("entity_uuid");
    if (!essenceUuid) {
        return
    }

    const entityUuid = event.target.getStringUuid();

    // Make sure the right and matching bee is clicked and is babee.
    if (entityUuid != essenceUuid.toString()) {
        event.entity.tell(Text.of("This is the wrong bee. This item is only compatible with the original bee whose essence was extracted.").color("dark_purple"))
        return;
    }

    // Utils.server.tell("are equal: " + (entityUuid == essenceUuid.toString()));
    // Utils.server.tell("essence dat: " + entityUuid.toString() + " " + essenceUuid.toString());
    const beeNbt = event.target.nbt;
    if (!beeNbt) {
        Console.log("Something is very wrong with a bee: " + event.target);
        return;
    }

    const isBabee = beeNbt.getInt("Age") < 0;

    if (!isBabee) {
        event.entity.tell(Text.of("This bee needs to be younger. An injection of Rejuvenation Serum should do the trick...").color("dark_purple"));
        return;
        // Utils.server.tell("essence dat: " + (isBabee < 0));
    }

    // Registration, last step.
    /** @type {Internal.Player} */
    const player = event.entity;
    const result = registerSoulboundBee(player, event.target);

    if (!result) {
        return;
    }
    
    // Success!
    const NbtCopy = event.item.nbt.copy()
    event.item.count -= 1;
    player.giveInHand(Item.of("vulpinian_skies:example_block", NbtCopy));

    
    // Utils.server.tell("essence dat: " + (isBabee < 0));
    
    // if itemNbt
    
});


/** Returns true if the bee was succesfully registered. */
/** @param {Internal.Player} player @param {Internal.Entity} bee @returns {boolean} */
function registerSoulboundBee(player, bee) {
    const beeUuid = bee.getStringUuid();
    const playerRecord = player.server.persistentData.SoulboundBeeList[player.uuid];
    const playerBeeList = playerRecord["Bees"];
    
    if (playerBeeList[beeUuid]) {
        player.tell(Text.of("Bee already exists in your list of soulbound bees. Cancelling bee attunement."));
        return false;
    }

    // OVERRIDE!
    // if (playerBeeList.size() >= playerRecord["MaxBeeSlots"]) {
    //     player.tell(Text.of("You do not have enough bee slots. Your slots are freed up when a soulbound bee dies. You can gain more slots by leveling up skills. Check your slots with '/bees count'").color("red"));
    //     return false;
    // }
    
    // We must store the UUID of the bee on the bee itself using CustomName (caps can't be edited), because it is lost when the bee pops in and out of a beehive

    bee.setCustomName(Text.of(bee.getStringUuid()).darkGray());
    Utils.server.tell("Custom name: " + bee.nbt.CustonName);

   

    playerBeeList[beeUuid] = {};
    Utils.server.tell("playerRecord = " + playerBeeList);

    return true;
}


// Iterate through all players to find out whose bee it was.
EntityEvents.death(["productivebees:configurable_bee", "minecraft:bee"], event => {
    Utils.server.tell("RIP BUZZY BUDDY");

    let wasPlayerBee = false;
    let playerUuid;

    const entityUuid = event.entity.getStringUuid();
    // UUID.NBT

    const SoulboundBeeList = event.entity.server.persistentData.SoulboundBeeList;

    for (const playerRecord in SoulboundBeeList) {
        // Utils.server.tell("player record = " + playerRecord);
        const nextRecordValue = SoulboundBeeList[playerRecord]
        // Utils.server.tell("player record value = " + nextRecordValue);
        const playerBeeList = nextRecordValue["Bees"];
        Utils.server.tell("player bees = " + playerBeeList);
        for (const nextBeeUuid in playerBeeList) {
            wasPlayerBee = true;
            playerUuid = playerRecord;
            break;
        }
    }

    if (wasPlayerBee) {
        delete SoulboundBeeList[playerUuid]["Bees"][entityUuid];
        // Utils.server.getPlayer()
    }


});

BlockEvents.placed("vulpinian_skies:example_block", event => {
    // const itemEssenceData = event.block.getItem().getNbt();
    // const itemEssenceData = event.block.item.getNbtString();
    // const itemEssenceData = event.entity.item

    const player = event.player;
    if (!player) {
        event.cancel(true);
        return;
    }

    // const itemEssenceData = Object.keys(event.block.item)
    // const itemEssenceData2 = event.block.
    
    /** @type {Internal.ItemStack} */
    let itemStack;
    if (event.block.item.id == player.mainHandItem.id) {
        itemStack = player.mainHandItem;
    } else if (event.block.item.id == player.offHandItem.id) {
        itemStack = player.offHandItem;
    } else {
        event.cancel()
        return;
    }
    const blockItemNbt = itemStack.nbt;

    if (!blockItemNbt) {
        event.cancel();
        return;
    }

    const blockItemEssenceData = blockItemNbt.getCompound("essence_data");

    if (!blockItemEssenceData) {
        event.cancel();
        return;
    }

    // Utils.server.tell("Bruh " + );
    // Utils.server.tell("Bruh " + itemEssenceData);
    // Utils.server.tell("Bruh2 " + blockItemEssenceData);
    // Utils.server.tell("Bruh3 " + event.block.entity.serializeNBT());
    // const blockEntityData = event.block.serializeNBT().getCompound("essence_data")
    const blockEntityData = event.block.entity.serializeNBT().data;
    // Utils.server.tell("Bruh4 " + blockEntityData);
    blockEntityData.essence_data = blockItemNbt;
    // Utils.server.tell("Bruh4 " + event.block.entity.serializeNBT());


    

    
});

// BlockEvents.rightClicked("vulpinian_skies:example_block", event => {
//     Utils.server.tell("right clicked: " + event.item.nbt);
// });