/* Concepts + Admin Info:
* No Wild slimes allowed to spawn, unless they are in a list of whitelisted wild slimes.
* Each player has a counter of how many active slimes they have in the world.
* If a player-owned slime tries to spawn but the player is at max slime capacity, the Slime is turned into item form.
* splendid_slimes commands can be used to manage player counts:
* Add_slots and set_max_count can be used by Gamemaster (level 2) and above.
* Any player can use splendid_bees count command, but slime items will have a tooltip, and there will be other
* notifications when a slime fails to spawn for a player due to max capacity.
* The idea is to provide a way to balance the mod (if production is uncapped, renewable resources are inherently OP imo),
* while also adding a way to reward the player by increasing their max slime capacity, e.g. through Puffish Skills.
* TODO: Make whitelisted slimes NOT count toward owned active slimes?
 */

/* Add slimes here that can be allowed to spawn in the wild, without an owner.
* Meant for slimes who do not give problematic/OP resources. */
const whitelistedSlimes = [
    "splendid_slimes:slimy",
    "splendid_slimes:all_seeing"
]


ServerEvents.loaded(event => {
    // Player UUIDs are the keys of the pesistent data dictionary.
    // event.server.persistentData.SoulboundBeeList = null ?? {}; // DO NOT USE. ALWAYS runs, clearing all data...
    if (!event.server.persistentData.SlimeCountList) {    
        event.server.persistentData.SlimeCountList = {};
    }
});


// Used for tooltip in client script.
global["getPlayerSlimeRecord"] = (playerUuid) => {    
    return Utils.server.persistentData.SlimeCountList[playerUuid];
}


PlayerEvents.loggedIn(event => {  
    if (event.level.isClientSide()) {        
        return;
    }
    
    let serverSlimeCountList = Utils.server.persistentData.SlimeCountList;
    if (!serverSlimeCountList[event.player.uuid]) {
        serverSlimeCountList[event.player.uuid] = {};
    }    

    if (serverSlimeCountList[event.player.uuid]["MaxSlimeCount"] == null || serverSlimeCountList[event.player.uuid]["MaxSlimeCount"] < 6) {
        // Utils.server.tell("Initializing MaxSlimeCount");
        serverSlimeCountList[event.player.uuid]["MaxSlimeCount"] = 6;
    }
    
    if (serverSlimeCountList[event.player.uuid]["CurrentSlimeCount"] == null) {        
        // Utils.server.tell("Initializing CurrentSlimeCount");
        serverSlimeCountList[event.player.uuid]["CurrentSlimeCount"] = 0;
    }
    
    serverSlimeCountList[event.player.uuid]["PlayerName"] = event.player.name.getString();
});


ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(Commands.literal('splendid_slimes') // The name of the command
        // .requires(s => s.hasPermission(2)) // Check if the player has operator privileges
        .then(Commands.literal('count')
            .executes(context => slimeCountExec(context.source.player))
        )   
        .then(Commands.literal('set_max_count').requires(source => source.hasPermission(2))
        .then(Commands.argument('target', Arguments.PLAYER.create(event))
        .then(Commands.argument('amount', Arguments.INTEGER.create(event))
        .executes(context => setMaxSlotsExec(Arguments.PLAYER.getResult(context, 'target'), Arguments.INTEGER.getResult(context, 'amount')))))
        )
        .then(Commands.literal('add_slots').requires(source => source.hasPermission(2))
        .then(Commands.argument('target', Arguments.PLAYER.create(event))
        .then(Commands.argument('amount', Arguments.INTEGER.create(event))
        .executes(context => addSlotsExec(Arguments.PLAYER.getResult(context, 'target'), Arguments.INTEGER.getResult(context, 'amount')))))
        )
    );

    // Helper functions
    /** @param {Internal.Player} player */
    const slimeCountExec = (player) => {        
        const playerRecord = player.server.persistentData.SlimeCountList[player.uuid];
        player.sendSystemMessage(Text.of(`You have used ${playerRecord["CurrentSlimeCount"]} out of ${playerRecord["MaxSlimeCount"]} slime slots.`).color("gold"));
        return 1;
    }

    const setMaxSlotsExec = (targetPlayer, amount) => {
        const playerRecord = targetPlayer.server.persistentData.SlimeCountList[targetPlayer.uuid];
        playerRecord.MaxSlimeCount = amount;
        return 1;
    }

    const addSlotsExec = (targetPlayer, amount) => {     
        const playerRecord = targetPlayer.server.persistentData.SlimeCountList[targetPlayer.uuid];        
        playerRecord.MaxSlimeCount += amount;
        return 1;
    }
});


ServerEvents.recipes(event => {    
    serumRecipeA(event, "splendid_slimes:minty", "Translation_KEY");        
    event.custom(
        {
            "type": "biomancy:bio_brewing",
            "ingredients": [
                {
                "item": "minecraft:gunpowder"
                },
                {
                "item": "biomancy:nutrient_paste"
                },
                {
                "item": "minecraft:slime_ball"
                },
                {
                "item": "minecraft:cod"
                }
            ],
            "nutrientsCost": 6,
            "processingTime": 120,
            "reactant": {
                "item": "biomancy:genetic_compound"
            },
            "result": {
                "item": "splendid_slimes:slime_heart",
                "nbt" : "{slime:{id:\"splendid_slimes:boomcat\"}}"
            }
        }
    );
});


/** Include the namespace in slimeBreed.
 *  @param {Internal.RecipesEventJS} event @param {Internal.ItemStack} auxiliaryItem @param {Internal.ItemStack} rawItem @param {string} slimeBreed */
function serumRecipeA(event, slimeBreed, nameTransKey) {    
    // Backup NBT format
    // `{
    //                 colors: [I; 15582019, 4400155],
    //                 essence_data: {
    //                     entity_type: "minecraft:bee",
    //                     name: "entity.minecraft.bee"
    //                 },
    //                 essence_tier: 3,
    //                 sounds: {
    //                     death: "minecraft:entity.bee.death",
    //                     hurt: "minecraft:entity.bee.hurt"
    //                 }
    //  }`

    event.shapeless(
        Item.of('biomancy:shrinking_serum', 1, NBT.toTagCompound({display:{Name:`{"text":"Slimification Shrinking Serum - Any Slime","color":"dark_purple"}`}})).strongNBT(),        
        [           
            // Item.of("biomancy:essence", NBT.toTagCompound(
            //     `{                      
            //         essence_data: {
            //             entity_type: "biomancy_flesh_blob",
            //             name: "entity.biomancy.flesh_blob"                    
            //         },
            //         essence_tier: 2,
            //         colors: [I; 15308410,16175814],
            //         sounds: {
            //             ambient: "biomancy:entity.flesh_blob.ambient",
            //             death: "biomancy:entity.flesh_blob.death",
            //             hurt: "biomancy:entity.flesh_blob.hurt"
            //         }
            //     }`
            // )).weakNBT(),
            Item.of("biomancy:shrinking_serum"),
            "splendid_slimes:slime_heart"
        ]
      ).modifyResult((grid, result) => {
        // const bio_essence_item = grid.findAll().find(item => (item.id == 'biomancy:essence'));
        // Utils.server.tell("Crafting Attempt!");

        // /** @type {Internal.CompoundTag} */
        // const nbt = bio_essence_item.nbt;
        // // Utils.server.tell("nbt = " + nbt);
        // if (!nbt) {
        //     // Utils.server.tell("Got here0")         
        //   return Item.of("minecraft:air");
        // }
            
        // const essence_data = nbt.getCompound("essence_data");        

        // Validation
        // if (!essence_data || !essence_data.getString("name")) {   
        //     // Utils.server.tell("Got here1")      
        //     return Item.of("minecraft:air");
        // }

        // const isValidEntityType = essence_data.getString("entity_type") == "biomancy:flesh_blob" || essence_data.getString("entity_type") == "splendid_slimes:splendid_slime";
        // // Utils.server.tell("isValidEntityType = " + isValidEntityType)

        // if (!isValidEntityType) {
        //     // Utils.server.tell("Got here2")
        //     return Item.of("minecraft:air");
        // }

        const slime_heart_item = grid.findAll().find(item => (item.id == 'splendid_slimes:slime_heart'));
        if (!slime_heart_item.nbt) {
            return Item.of("minecraft:air");
        }
        const breed_from_heart = slime_heart_item.nbt.slime.id;
        // const essence_data = NBT.toTagCompound(` {essence_data: {}}`);

        const itemNbtToMerge = NBT.toTagCompound({
            display:
            {
                Name:`[{"text":"Slimification Serum ","color":"dark_purple"}, ${slime_heart_item.displayName.toJson()}]`,
                // Lore: `[{"text":"UUID: ${(essence_data.getUUID("entity_uuid"))}","italic":false}]`
                // Lore: `[{"text":"Inject to a flesh blob or slime.","italic":true, "color":"light_purple"}]` // idk how to do this
            },
            essence_data: {
                    slime_breed: breed_from_heart
                }
        })
        return result.withNBT(itemNbtToMerge);
      }).id(`vulpinian_skies:slimification_serum_manual_only`);
}


EntityEvents.spawned("splendid_slimes:splendid_slime", event => {
    // Utils.server.tell("Hello Slime: " + event.entity);    
    if (!event.entity.nbt.hasUUID("Owner")) {
        // Utils.server.tell("Slime does not have an owner. Check Whitelist");        
        if (!(whitelistedSlimes.includes(event.entity.nbt.Breed))) {
            console.log("Breed: " + whitelistedSlimes)
            console.log("Non-whitelisted wild slime tried to spawn: " + event.entity)
            event.cancel();
            return;
        } else {
            // Slime allowed to spawn wild.
            return;
        }
    }
    const rawOwnerUUID = event.entity.nbt.getUUID("Owner");
    const SlimeCountList = event.entity.server.persistentData.SlimeCountList;
    const playerRecord = SlimeCountList[rawOwnerUUID];
    // Utils.server.tell("Spawned Slime's playerRecord: " + playerRecord.CurrentSlimeCount)

    if (!playerRecord) {
        console.log("Slime has an owner, but a record does not exist!");
        event.cancel();
        return;
    }

    if (playerRecord.CurrentSlimeCount >= playerRecord.MaxSlimeCount) {
        // console.log("Illegal Slime Spawn!");
        // Utils.server.tell(Text.of("Illegal Slime Spawn!").red());
        
        turnIntoItem(event);

        const onlinePlayer = event.server.getPlayer(rawOwnerUUID);
        if (onlinePlayer) {
            onlinePlayer.sendSystemMessage(Text.of(`One of your Splendid Slimes tried to spawn, but you are at maximum active slime capacity (${playerRecord.MaxSlimeCount}). The Slime was turned into an item at ${Math.trunc(event.entity.x)}, ${Math.trunc(event.entity.y)}, ${Math.trunc(event.entity.z)} in ${event.level.name.getString().split(':')[1].replace(/_/g, " ")}`).gray())
        }
        event.cancel();
        return;
    }

    playerRecord.CurrentSlimeCount += 1;
});


// const $SplendidSlime = Java.loadClass("io.github.chakyl.splendidslimes.entity.SplendidSlime");
/** @param {Internal.EntitySpawnedEventJS} event */
function turnIntoItem(event) {
    const newSlimeItem = event.level.createEntity("item");
    newSlimeItem.item = Item.of('splendid_slimes:slime_item');
    const entityNBT = event.entity.nbt
    const slimeItemNBT = NBT.toTagCompound(
        {
            EatingCooldown: entityNBT.EatingCooldown,
            Happiness: entityNBT.Happiness,
            LastAte: entityNBT.LastAte,
            TargetEntity: entityNBT.TargetEntity,
            slime: {
                id: entityNBT.Breed
            },
            entity: entityNBT
        }
    );

    if (entityNBT.hasUUID("Owner")) {
        slimeItemNBT.putUUID("Owner", entityNBT.getUUID("Owner"));
    }

    newSlimeItem.item.nbt = slimeItemNBT;
    // $SplendidSlime.pickupSlime(event.entity, newSlimeItem.item);
 
    newSlimeItem.x = event.entity.getX();
    newSlimeItem.y = event.entity.getY();
    newSlimeItem.z = event.entity.getZ();    
    newSlimeItem.spawn();    
    // Utils.server.tell("Spawned Item NBT: " + newSlimeItem.nbt);
}


ItemEvents.entityInteracted("biomancy:injector", event => {
    if (event.player.cooldowns.isOnCooldown(event.item)) {        
        return;
    }
    //  Utils.server.tell("Essence Data:")
    //  Utils.server.tell(event.item.nbt["inventory"]["Item"]["tag"].getCompound("essence_data"));

    if (event.target.type in ["biomancy:flesh_blob, splendid_slimes:splendid_slime, minecraft:slime"]) {        
        return;
    }

    const essenceData = event.item.nbt["inventory"]["Item"]["tag"].getCompound("essence_data");

    if (!essenceData || essenceData.size() == 0) {           
        return;
    }

    Utils.server.scheduleInTicks(8, () => {turnIntoSlime(event, essenceData)});
});


/** @param {Internal.ItemEntityInteractedEventJS} event */
function turnIntoSlime(event, essenceData) {
    // const stringUuidFromSerum = essenceData.getUUID("entity_uuid");

    // if (!stringUuidFromSerum) {    
    //     return;
    // }

    // Checks for slime legality happen on spawn event.

    const playerUuid = event.player.getUuid();
    // Utils.server.tell("playerUuid: " + playerUuid);
    if (!playerUuid) { // Very weird event of no-UUID player, possible?
        return;
    }
       
    const newSlime = event.target.level.createEntity("splendid_slimes:splendid_slime");

    const slimeNbtToMerge = NBT.toTagCompound(
        {
            Breed: essenceData.getString("slime_breed")            
        }
    );
    slimeNbtToMerge.putUUID("Owner", playerUuid);    

    newSlime.mergeNbt(slimeNbtToMerge);
    newSlime.position = event.target.blockPosition();

    if (event.target.isAlive()) {
        event.target.discard();
    }

    newSlime.potionEffects.add("minecraft:glowing", 270, 0, true, false);
    
    newSlime.spawn();
    
    Utils.server.runCommandSilent(`execute in ${newSlime.level.getName().getString()} run particle minecraft:cloud ${newSlime.x} ${newSlime.y} ${newSlime.z} 0.5 0.5 0.5 0.1 64 force`);
    Utils.server.runCommandSilent(`execute in ${newSlime.level.getName().getString()} run particle biomancy:falling_blood ${newSlime.x} ${newSlime.y} ${newSlime.z} 0.5 0.5 0.5 0.1 96 force`);
    Utils.server.runCommandSilent(`execute in ${newSlime.level.getName().getString()} run playsound biomancy:entity.flesh_blob.mew_purr master @a ${newSlime.x} ${newSlime.y} ${newSlime.z} 10.0 1.5`);
    Utils.server.runCommandSilent(`execute in ${newSlime.level.getName().getString()} run playsound biomancy:flesh_block.break master @a ${newSlime.x} ${newSlime.y} ${newSlime.z} 10.0 1.6`);
}