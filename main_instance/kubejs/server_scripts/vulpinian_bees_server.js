ServerEvents.loaded(event => {
    // Player UUIDs are the keys of this.
    // event.server.persistentData.SoulboundBeeList = null ?? {}; // DO NOT USE. ALWAYS runs, clearing all data...
    if (!event.server.persistentData.SoulboundBeeList) {
    // This one works instead.
        event.server.persistentData.SoulboundBeeList = {};
    }
});

PlayerEvents.loggedIn(event => {  
    if (event.level.isClientSide()) {
        Utils.server.tell("CLIENT SIDE");
        return;
    }
    Utils.server.tell("LOGGED IN")
    let serverSoulboundBeeList = Utils.server.persistentData.SoulboundBeeList;
    if (!serverSoulboundBeeList[event.player.uuid]) {
        serverSoulboundBeeList[event.player.uuid] = {};
    }

    // let playerRecord = serverSoulboundBeeList[event.player.uuid]["BeeSlots"]

    if (serverSoulboundBeeList[event.player.uuid]["MaxBeeSlots"] == null || serverSoulboundBeeList[event.player.uuid]["MaxBeeSlots"] < 0) {
        Utils.server.tell("Initializing Max Bee Slots");
        serverSoulboundBeeList[event.player.uuid]["MaxBeeSlots"] = 0;
    }

    // The actual map of bees
    if (serverSoulboundBeeList[event.player.uuid]["Bees"] == null) {
        // serverSoulboundBeeList[event.player.uuid]["Bees"] = {"DummyBee1":{"test": "blah", "testprop2": "blahh"}, "DummyBee2":{"test": "blah", "testprop2": "blahh"}};
        Utils.server.tell("Initializing Bee List");
        serverSoulboundBeeList[event.player.uuid]["Bees"] = {};
    }

    // serverSoulboundBeeList[event.player.uuid]["PlayerName"] = event.player.displayName();
    serverSoulboundBeeList[event.player.uuid]["PlayerName"] = event.player.name.getString();
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
        .then(Commands.literal('set-max-slots').requires(source => source.hasPermission(2))
        .then(Commands.argument('target', Arguments.PLAYER.create(event))
        .then(Commands.argument('amount', Arguments.INTEGER.create(event))
        .executes(context => setMaxSlotsExec(Arguments.PLAYER.getResult(context, 'target'), Arguments.INTEGER.getResult(context, 'amount')))))
        )
        .then(Commands.literal('add-slots').requires(source => source.hasPermission(2))
        .then(Commands.argument('target', Arguments.PLAYER.create(event))
        .then(Commands.argument('amount', Arguments.INTEGER.create(event))
        .executes(context => addSlotsExec(Arguments.PLAYER.getResult(context, 'target'), Arguments.INTEGER.getResult(context, 'amount')))))
    )
    );

    // Helper function
    /** @param {Internal.Player} player */
    let beeCountExec = (player) => {
        // player.displayClientMessage(Component.gold('Flying: ').append(Component.red('disabled')), true)        
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
        // Utils.server.tell("Resetting bees for " + targetPlayer);
        targetPlayer.server.persistentData.SoulboundBeeList[targetPlayer.uuid]["Bees"] = {};
        return 1;
    }

    let setMaxSlotsExec = (targetPlayer, amount) => {
        const SoulboundBeeList = targetPlayer.server.persistentData.SoulboundBeeList;
        const playerRecord = SoulboundBeeList[targetPlayer.uuid];
        playerRecord["MaxBeeSlots"] = amount;
        return 1;
    }

    let addSlotsExec = (targetPlayer, amount) => {
        const SoulboundBeeList = targetPlayer.server.persistentData.SoulboundBeeList;
        const playerRecord = SoulboundBeeList[targetPlayer.uuid];
        const prevSlots = playerRecord["MaxBeeSlots"];
        playerRecord["MaxBeeSlots"] = amount + prevSlots;
        return 1;
    }
});



EntityEvents.spawned(["productivebees:configurable_bee", "minecraft:bee"], event => {
    // First check if the bee even is a legal, (has a soulbound UUID) THEN check it is CUrRENTLY soulbound to a player. THEN check if it exists in the world already.
    // Utils.server.tell("spawned bee tags: " + event.entity.tags);
    let uuidStringFromTag;
      for (const tag of event.entity.tags) { 
        if (tag.startsWith("SoulBoundBeeUUID")) {
          uuidStringFromTag = tag.split(':')[1];
          // Utils.server.tell("Found the UUID: " + UUID.fromString(uuidStringFromTag));
          break;
        }
    }

    if (!uuidStringFromTag) {        
        event.cancel("Bee does not have a soulbound UUID.");
        return;
    }

    if (event.entity.uuid != uuidStringFromTag) {
        event.entity.setUUID(uuidStringFromTag);
    }

    // Check if bee is souldbound to a player
    const entityStringUuid = event.entity.getStringUuid();
    let isSouldBoundBee = false;
    const SoulboundBeeList = event.entity.server.persistentData.SoulboundBeeList;
    let playerUuid;
    for (const playerRecord in SoulboundBeeList) {
        // Utils.server.tell("player record = " + playerRecord);
        const nextRecordValue = SoulboundBeeList[playerRecord]
        // Utils.server.tell("player record value = " + nextRecordValue);
        const playerBeeList = nextRecordValue["Bees"];
        // Utils.server.tell("player bees = " + playerBeeList);
        for (const nextBeeUuid in playerBeeList) {
            if (nextBeeUuid == entityStringUuid) {
                isSouldBoundBee = true;
                playerUuid = playerRecord;
                // Utils.server.tell("bee = " + entityStringUuid + " playerBee = " + nextBeeUuid);
                // Utils.server.tell("HI BUZZY BUDDY");
                break;}
        }
    }

    // Utils.server.tell("isSouldBoundBee = " + isSouldBoundBee);

    if (!isSouldBoundBee) {
        // Utils.server.tell("Bee is not soulbound to any player.");
        event.cancel("Bee is not soulbound to any player, so it can't spawn.");
        return;
    }

    const uuid = event.entity.uuid;    
    const s = Utils.server;
    const levelKeys = s.levelKeys()
    let foundBeeFlag = false;
    for (let i = 0; i <levelKeys.size(); i++) {
        const nextLevel = Utils.server.getLevel(levelKeys[i].location());
        const mob = nextLevel.getEntity(uuid);
        if (mob) {
            foundBeeFlag = true;
            // Utils.server.tell("Mob found in: " + levelKeys[i].location());
            break;
        }
    }

    if (foundBeeFlag) {
        // Console.log("Bee tried to spawn with duplicate UUID of " + uuid + ". Cancelling spawn.");
        event.cancel("Bee already exists.");
        return;
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

    const entityStringUuid = event.target.getStringUuid();
    // Make sure the right and matching bee is clicked and is babee.
    if (entityStringUuid != essenceUuid.toString()) {
        event.entity.tell(Text.of("This is the wrong bee. This item is only compatible with the original bee whose essence was extracted.").color("dark_purple"))
        Utils.server.tell("essence dat: " + entityStringUuid.toString() + " " + essenceUuid.toString());
        return;
    }

    // Utils.server.tell("are equal: " + (entityUuid == essenceUuid.toString()));
    const beeNbt = event.target.nbt;
    if (!beeNbt) {
        Console.log("Something is very wrong with a bee: " + event.target);
        return;
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
});


/** Returns true if the bee was succesfully registered. */
/** @param {Internal.Player} player @param {Internal.Entity} bee @returns {boolean} */
function registerSoulboundBee(player, bee) {
    const beeUuid = bee.getStringUuid();
    const playerRecord = player.server.persistentData.SoulboundBeeList[player.uuid];
    const playerBeeList = playerRecord["Bees"];
    
    
    if (playerBeeList.size() >= playerRecord["MaxBeeSlots"]) {
        player.tell(Text.of("You do not have enough bee slots. Your slots are freed up when a soulbound bee dies. You can gain more slots by leveling up skills. Check your slots with '/bees count'").color("red"));
        return false;
    }

    const isBabee = bee.nbt.getInt("Age") < 0;
    if (!isBabee) {
        player.tell(Text.of("This bee needs to be younger. An injection of Rejuvenation Serum should do the trick...").color("dark_purple"));
        return false;
        // Utils.server.tell("essence dat: " + (isBabee < 0));
    }

    if (playerBeeList[beeUuid]) {
        player.tell(Text.of("Bee already exists in your list of soulbound bees. Cancelling bee attunement."));
        return false;
    }
    
    // We must store the UUID of the bee on the bee itself using CustomName (caps can't be edited), because it is lost when the bee pops in and out of a beehive

    bee.setCustomName(Text.of(bee.getStringUuid()).darkGray());
    // Utils.server.tell("Custom name: " + bee.nbt.CustonName);
    // bee.addTag(bee.getStringUuid());


    playerBeeList[beeUuid] = {};
    // Utils.server.tell("playerRecord = " + playerBeeList);

    return true;
}


// Iterate through all players to find out whose bee it was.
EntityEvents.death(["productivebees:configurable_bee", "minecraft:bee"], event => {
    // Utils.server.tell("RIP BUZZY BUDDY");
    let isSouldBoundBee = false;
    let playerUuid;

    const entityUuid = event.entity.getStringUuid();
    // UUID.NBT

    const SoulboundBeeList = event.entity.server.persistentData.SoulboundBeeList;
    for (const playerRecord in SoulboundBeeList) {
        // Utils.server.tell("player record = " + playerRecord);
        const nextRecordValue = SoulboundBeeList[playerRecord]
        // Utils.server.tell("player record value = " + nextRecordValue);
        const playerBeeList = nextRecordValue["Bees"];
        // Utils.server.tell("player bees = " + playerBeeList);
        for (const nextBeeUuid in playerBeeList) {
            if (nextBeeUuid == entityUuid) {
                isSouldBoundBee = true;
                playerUuid = playerRecord;
                Utils.server.tell("RIP BUZZY BUDDY");
                break;}
        }
    }

    if (isSouldBoundBee) {
        delete SoulboundBeeList[playerUuid]["Bees"][entityUuid];
        // Utils.server.getPlayer()
    }


});


BlockEvents.placed("vulpinian_skies:example_block", event => {
    const player = event.player;
    if (!player) {
        event.cancel(true);
        return;
    }

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

    const blockEntityData = event.block.entity.serializeNBT().data;
    blockEntityData.essence_data = blockItemNbt;
});