/* Concepts:
* No Wild slimes allowed to spawn, unless they are in a list of whitelisted wild slimes.
* Slime added to player record on spawn, and the only way to spawn them is via Chrysalis.
* If the slime would be above player max slimes, the Slime is turned into item form.
* Registered Slimes can be numerous, but active ones are limited.
 */

// const SlimeCountList = Utils.server.persistentData.SlimeCountList;

ServerEvents.loaded(event => {
    // Player UUIDs are the keys of this.
    // event.server.persistentData.SoulboundBeeList = null ?? {}; // DO NOT USE. ALWAYS runs, clearing all data...
    if (!event.server.persistentData.SlimeCountList) {
    // This one works instead.
        event.server.persistentData.SlimeCountList = {};
    }

    // event.server.scheduleInTicks(60, () => {
    //     event.server.runCommandSilent("kill b51a5590-c639-45ee-8cea-88ded49cc5b8");
    // });

    // event.server.scheduleRepeatingInTicks(21600, () => {
    //     // Routine cleanup of dummy
    //     Utils.server.runCommandSilent("kill b51a5590-c639-45ee-8cea-88ded49cc5b8");
    // });
});


// Used for tooltip
global["getPlayerSlimeRecord"] = (playerUuid) => {    
    return Utils.server.persistentData.SlimeCountList[playerUuid];
}


PlayerEvents.loggedIn(event => {  
    if (event.level.isClientSide()) {
        // Utils.server.tell("CLIENT SIDE");
        return;
    }
    // Utils.server.tell("BEE SCRRIPT: LOGGED IN")
    let serverSlimeCountList = Utils.server.persistentData.SlimeCountList;
    if (!serverSlimeCountList[event.player.uuid]) {
        serverSlimeCountList[event.player.uuid] = {};
    }

    // let playerRecord = serverSoulboundBeeList[event.player.uuid]["BeeSlots"]

    if (serverSlimeCountList[event.player.uuid]["MaxSlimeCount"] == null || serverSlimeCountList[event.player.uuid]["MaxSlimeCount"] < 6) {
        // Utils.server.tell("Initializing MaxSlimeCount");
        serverSlimeCountList[event.player.uuid]["MaxSlimeCount"] = 6;
    }

    // The actual map of Slimes
    if (serverSlimeCountList[event.player.uuid]["CurrentSlimeCount"] == null) {        
        // Utils.server.tell("Initializing CurrentSlimeCount");
        serverSlimeCountList[event.player.uuid]["CurrentSlimeCount"] = 0;
    }

    // serverSoulboundBeeList[event.player.uuid]["PlayerName"] = event.player.displayName();
    serverSlimeCountList[event.player.uuid]["PlayerName"] = event.player.name.getString();
});


ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(Commands.literal('slimes') // The name of the command
        // .requires(s => s.hasPermission(2)) // Check if the player has operator privileges
        .then(Commands.literal('count')
            .executes(context => slimeCountExec(context.source.player))
        )
        // .then(Commands.literal('recall')
        //     .executes(context => {context.source.player.tell("Not implemented yet. Will teleport bees to you."); return 1;})
        //      // Toggle flight for the player that ran the command if the `target` argument isn't included
        // // .then(Commands.argument('target', Arguments.PLAYER.create(event))
        // // .executes(context => beeCountExec(Arguments.PLAYER.getResult(context, 'target'))) // Toggle flight for the player included in the `target` argument
        // )
        .then(Commands.literal('see-all').requires(source => source.hasPermission(2))
            .executes(context => seeAllExec(context))
        )
        .then(Commands.literal('reset-bees').requires(source => source.hasPermission(2))
        .then(Commands.argument('target', Arguments.PLAYER.create(event))
        .executes(context => resetBeesExec(Arguments.PLAYER.getResult(context, 'target'))))
        )
        .then(Commands.literal('recover')
            .then(Commands.argument('target-bee', Arguments.STRING.create(event))
            .suggests((context, builder) => {
                const SoulboundBeeList = Utils.server.persistentData.SoulboundBeeList;
                const playerRecord = SoulboundBeeList[context.source.player.getStringUuid()];
                // Utils.server.tell("log in suggestion = " + playerRecord);

                const beeList = playerRecord["Bees"];
                // Utils.server.tell("COMMAND BEE LIST: = " + beeList)
                for (const beeUUID in beeList) {
                    let beeRecord = beeList[beeUUID];
                    let customName = beeRecord["CustomNameString"];
                    // Utils.server.tell("COMMAND = " + beeUUID)
                    if (customName) {
                        // builder.suggest(`\"${customName}\"`);
                        // Utils.server.tell("custom name: " + customName)
                        builder.suggest(`\"${customName} - UUID:${beeUUID}\"`);
                    } else {                        
                        builder.suggest(`\"Unnamed ${beeRecord["BeeType"].split(':')[1].replace(/_/g, " ")} Bee - UUID:${beeUUID}\"`);
                    }
                }
                // builder.suggest(`\"bla bla bla\"`);                
                return builder.buildFuture();
            })
            .executes(context => recoverBeeExec(context, Arguments.STRING.getResult(context, 'target-bee'))))
        )
        .then(Commands.literal('unbind')
            .then(Commands.argument('target-bee', Arguments.STRING.create(event))
            .suggests((context, builder) => {
                const SoulboundBeeList = Utils.server.persistentData.SoulboundBeeList;
                const playerRecord = SoulboundBeeList[context.source.player.getStringUuid()];
                // Utils.server.tell("log in suggestion = " + playerRecord);

                const beeList = playerRecord["Bees"];
                // Utils.server.tell("COMMAND BEE LIST: = " + beeList)
                for (const beeUUID in beeList) {
                    let beeRecord = beeList[beeUUID];
                    let customName = beeRecord["CustomNameString"];
                    // Utils.server.tell("COMMAND = " + beeUUID)
                    if (customName) {
                        // builder.suggest(`\"${customName}\"`);
                        // Utils.server.tell("custom name: " + customName)
                        builder.suggest(`\"${customName} - UUID:${beeUUID}\"`);
                    } else {                        
                        builder.suggest(`\"Unnamed ${beeRecord["BeeType"].split(':')[1].replace(/_/g, " ")} Bee - UUID:${beeUUID}\"`);
                    }
                }                
                // builder.suggest(`\"bla bla bla\"`);
                return builder.buildFuture();
            })
            .executes(context => unbindBeeExec(context, Arguments.STRING.getResult(context, 'target-bee'))))
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
        .then(Commands.literal('insert-bee').requires(source => source.hasPermission(2))
        .then(Commands.argument('target', Arguments.PLAYER.create(event))
        .then(Commands.argument('uuid-string', Arguments.STRING.create(event))
        .executes(context => insertBeeExec(Arguments.PLAYER.getResult(context, 'target'), Arguments.STRING.getResult(context, 'uuid-string')))))
    )
    );

    // Helper function
    /** @param {Internal.Player} player */
    let slimeCountExec = (player) => {
        // player.displayClientMessage(Component.gold('Flying: ').append(Component.red('disabled')), true)        
        const playerRecord = player.server.persistentData.SlimeCountList[player.uuid];
        // const playerBeeList = playerRecord["Bees"];
        // player.tell(Text.of(`Your have used ${playerBeeList.size()} out of ${playerRecord["MaxBeeSlots"]} bee slots.`).color("gold"));
        player.tell(Text.of(`You have used ${playerRecord["CurrentSlimeCount"]} out of ${playerRecord["MaxSlimeCount"]} slime slots.`).color("gold"));
        return 1;
    }

    let seeAllExec = (context) => {
        Utils.server.tell(context.source.player.name.getString());
        context.source.player.tell("ALL Soulbound Bee List: " + context.source.server.persistentData.SoulboundBeeList);
        return 1;
    };

    /** @param {Internal.CommandContext<Internal.CommandSourceStack>} context */
    let recoverBeeExec = (context, beeUUIDOrName) => {
        // const acceptableBeePotionItems = ["potionofbees:splash_potion_of_bees", ]
        let potionOfBeesItemStack;
        const player = context.source.player;

        if (player.mainHandItem.id == "potionofbees:potion_of_bees") {
            // player.mainHandItem.count -= 1;
            potionOfBeesItemStack = player.mainHandItem;
        }


        if (!potionOfBeesItemStack) {
            player.tell(Text.of("You must be holding a Potion of Bees in your hand in order to use this command.").color("gold"));
            return 0;
        }

        // Utils.server.tell("item: " + context.source.player.mainHandItem.id);

        const SoulboundBeeList = Utils.server.persistentData.SoulboundBeeList;
        const playerRecord = SoulboundBeeList[context.source.player.getStringUuid()];

        if (!playerRecord) {
            console.log("No player Bee record found. Make sure command is run as a player.");
            return 0;
        }

        const beeList = playerRecord["Bees"];
        let beeRecord = null;
        
        let isolatedUuidString = beeUUIDOrName.split("UUID:")[1];
        // Utils.server.tell("full string :" + beeUUIDOrName);
        // Utils.server.tell("isolatedUuidString :" + isolatedUuidString);
        let beeUuid = UUID.fromString(isolatedUuidString);
        if (!beeUuid) {
            player.tell(Text.of("Bee UUID is not valid").color("red"));
            return 0;
        }

        beeRecord = beeList[beeUuid];
        // Utils.server.tell("beeRecord = " + beeRecord);

        if (!beeRecord) {
            // By this point, both UUID or name have failed to find the Bee.
            context.source.player.tell(Text.of("The Bee was not found. Use a Bee's name (e.g. the one given with a Name Tag) or their UUID.").color("red"));
            return 0;
        }

        potionOfBeesItemStack.count -= 1;
        player.give("minecraft:glass_bottle");

        let beeEntity;
        const s = context.source.server;    
        const levelKeys = s.levelKeys().toArray();
        const levelCount = s.levelKeys().size();
        // Utils.server.tell("Levelleys: " +levelKeys);    
        for (let i = 0; i < levelCount; i++) {
            let resourceLocation = levelKeys[i].location();
            let nextLevel = s.getLevel(resourceLocation);
            beeEntity = nextLevel.getEntity(beeUuid);
            // Utils.server.tell("Checked dimension: " + resourceLocation);
            // Utils.server.tell("TEST dimension: " + s.getLevel("minecraft:the_end").name);
            if (beeEntity) {            
                break;
            }
        }

        if (beeEntity) {        
            // beeEntity.setLevel(player.level);
            // beeEntity.setPos(player.x, player.y, player.z);            
            player.server.runCommandSilent(`execute in ${player.level.name.getString()} run tp ${beeUuid} ${player.x} ${player.y} ${player.z}`);            
            player.displayClientMessage(Text.of("Bee was teleported to you"), true);
            beeEntity.potionEffects.add("minecraft:glowing", 400, 0, true, false);
        } else {
            // player.tell("wtf");
            player.tell(Text.of("Bee was not found in a loaded chunk. You have received a chrysalis to rehatch your Bee.").color("gold"));
            player.tell(Text.of("WARNING: Your Bee's progress and stats will be lost when rehatched. Duplicates of your Bee will be removed.").color("gold"));
            
            const beeType = beeRecord["BeeType"];
            // Utils.server.tell("bee type: " + beeType)
            
            /** @type {Internal.CompoundTag} */
            let rehatchNBT =   NBT.toTagCompound(   {
                essence_data: {
                    name: "entity.splendid_slimes.splendid_slime",
                    // entity_uuid: UUID.fromString(beeUuid), // Must use specialized method.
                    entity_type: "splendid_slimes:splendid_slime",
                    bee_type: beeType
                },
                sounds: {
                    death: "minecraft:entity.bee.death",
                    hurt: "minecraft:entity.bee.hurt"
                },
                essence_tier: 2,
                colors: [15308410,16175814],
                display: {
                    Name: `{"text":"Soulbound Bee Rehatch Chrysalis","color":"dark_purple"}`
                }
            });        

            rehatchNBT.getCompound("essence_data").putUUID("entity_uuid", beeUuid);
            
            // Utils.server.tell("Rehatch nbt: " + rehatchNBT.getCompound("essence_data: "));
            // Utils.server.tell("Rehatch nbt: " + rehatchNBT.getCompound("essence_data"));
            
            const rehatchItem = Item.of(`vulpinian_skies:${beeType.split(':')[1]}_bee_chrysalis`, rehatchNBT);

            player.give(rehatchItem);
        }
        // context.source.player.tell(Text.of("Found the bee!").color("gold"));
        
        return 1;     
    }

    /** @param {Internal.CommandContext<Internal.CommandSourceStack>} context */
    let unbindBeeExec = (context, beeUUIDOrName) => {                
        let isolatedUuidString = beeUUIDOrName.split("UUID:")[1];        
        let beeUuid = UUID.fromString(isolatedUuidString);
        if (!beeUuid) {
            player.tell(Text.of("Bee UUID is not valid").color("red"));
            return 0;
        }

        const player = context.source.player;
        const SoulboundBeeList = player.server.persistentData.SoulboundBeeList;
        const playerRecord = SoulboundBeeList[player.getStringUuid()];
        const playerBeeList = playerRecord["Bees"];
        // let beeRecord = null;
        let isSouldBoundBee = false;
        for (const nextBeeUuid in playerBeeList) {
            if (nextBeeUuid == beeUuid) {
                isSouldBoundBee = true;                                
                // beeRecord = playerBeeList[nextBeeUuid];
                break;
            }
        }

        if (!isSouldBoundBee) {
            player.tell(Text.of("Bee to unbind was not found.").color("red"));
            return 0;
        }

        delete SoulboundBeeList[player.getStringUuid()]["Bees"][beeUuid];
        player.tell(Text.of("Bee has been unbinded! You have regained a Bee slot.").color("gold"));

        const s = player.server;    
        const levelKeys = s.levelKeys().toArray();
        const levelCount = s.levelKeys().size();
        // Utils.server.tell("Levelleys: " +levelKeys);
        // let foundBeeFlag = false;
        for (let i = 0; i < levelCount; i++) {
            let resourceLocation = levelKeys[i].location();
            let nextLevel = s.getLevel(resourceLocation);
            /** @type {Internal.Entity} */
            let mob = nextLevel.getEntity(beeUuid);            
            if (mob) {
                // const dummyUUID = "b51a5590-c639-45ee-8cea-88ded49cc5b8";
                // mob.setUUID(dummyUUID);

                // Effectively gets rid of the now-unbinded bee.            
                mob.mergeNbt(NBT.toTagCompound(
                    {
                        type:"",
                        Silent:true,                    
                        Tags:[]
                    }
                ));
                
                const newBee = mob.level.createEntity("minecraft:bee");                
                // newBee.x = mob.x;
                // newBee.y = mob.y;
                // newBee.z = mob.z;
                newBee.position = mob.position();
                newBee.setAge(-24000);
                // mob.level.addParticle("minecraft:cloud", mob.x, mob.y, mob.z, 1, 1, 1);
                Utils.server.runCommandSilent(`execute in ${mob.level.getName().getString()} run particle minecraft:cloud ${mob.x} ${mob.y} ${mob.z} 0.5 0.5 0.5 0.1 64 force`);
                mob.y -= 512;                
                mob.discard();

                newBee.spawn();
                // newBee.setUUID(beeUuid);
                break;
            }
        }
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

    let insertBeeExec = (targetPlayer, stringUuid) => {
        const SoulboundBeeList = targetPlayer.server.persistentData.SoulboundBeeList;
        const playerRecord = SoulboundBeeList[targetPlayer.uuid];
        playerRecord["Bees"][stringUuid] = {};        
        return 1;
    }
});


ServerEvents.recipes(event => {
    // chrysalisRecipeA(event, Item.of("mna:rune_earth"), Item.of("minecraft:diamond"), "splendid_slimes:minty", "Translation_KEY");        
    chrysalisRecipeA(event, "splendid_slimes:minty", "Translation_KEY");        

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
function chrysalisRecipeA(event, slimeBreed, nameTransKey) {
    const split = slimeBreed.split(':');
    // const beeNamespace = split[0];
    const beeTypeNameOnly = split[1];
    const translatedName = Text.translate(nameTransKey).string;
    
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

        // Utils.server.tell("translated name: " + translated_name);   
        // Utils.server.tell("nbt: " + essence_data.getUUID("entity_uuid"));   

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
                Lore: `[{"text":"Inject to a flesh blob or slime.","italic":true, "color":"light_purple"}]` // idk how to do this
            },
            essence_data: {
                    slime_breed: breed_from_heart
                }
        })
        // essence_data.putString("slime_breed", breed_from_heart);

        // Utils.server.tell(slime_heart_item.displayName.component())
        // Utils.server.tell(slime_heart_item.displayName.getClass())
        // itemNbtToMerge.display.Name.append((slime_heart_item.displayName.toString()))        

        // nbt.merge(NBT.toTagCompound(
        //   itemNbtToMerge
        // ));
        return result.withNBT(itemNbtToMerge);
        // return Item.of("vulpinian_skies:chrysalis_arrow", nbt).strongNBT();
    //   }).id(`vulpinian_skies:${beeTypeNameOnly}_slime_chrysalis_manual_only`);
      }).id(`vulpinian_skies:slimification_serum_manual_only`);
}


EntityEvents.spawned("splendid_slimes:splendid_slime", event => {
    // Utils.server.tell("Hello Slime: " + event.entity);
    // Utils.server.tell("Hello Slime!");
    if (!event.entity.nbt.hasUUID("Owner")) {
        Utils.server.tell("Slime does not have an owner. TODO: Whitelist");
            return
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

    // const currentSlimeCount = playerRecord.CurrentSlimeCount
    // const maxSlimeCount = playerRecord.MaxSlimeCount

    if (playerRecord.CurrentSlimeCount >= playerRecord.MaxSlimeCount) {
        console.log("Illegal Slime Spawn!");
        Utils.server.tell(Text.of("Illegal Slime Spawn!").red());
        // TODO: Turn slime into item here.
        // event.entity

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


const $SplendidSlime = Java.loadClass("io.github.chakyl.splendidslimes.entity.SplendidSlime");

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
    // $SplendidSlime["pickupSlime"](event.entity, newSlimeItem.item);
    // new $SplendidSlime.pick
    // $SplendidSlime.of(event.entity).pickupSlime(event.entity, newSlimeItem.item)
    // newSlimeItem.item.nbt = event.entity.nbt;
    // Utils.server.tell(Text.of("Target pos: " + event.entity.position).gold());
    // Utils.server.tell(Text.of("Target pos: ").gold)
    newSlimeItem.x = event.entity.getX();
    newSlimeItem.y = event.entity.getY();
    newSlimeItem.z = event.entity.getZ();
    // newSlimeItem.position = (event.entity.getPosition())
    newSlimeItem.spawn();
    // Utils.server.tell("Spawned Item: " + newSlimeItem);
    // Utils.server.tell("Spawned Item NBT: " + newSlimeItem.nbt);
}



// EntityEvents.death("splendid_slimes:splendid_slime", event => {
//     Utils.server.tell("Bye Slime: " + event.entity);
// });


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

    // Verify that the bee is legal, soulbound to a player. This check also happens on the bee's own spawn.
    // let isSouldBoundBee = false;
    // let playerUuid;

    const playerUuid = event.player.getUuid();
    // Utils.server.tell("playerUuid: " + playerUuid);
    if (!playerUuid) { // Very weird event of no-UUID player, possible?
        return;
    }
    const playerRecord = event.server.persistentData.SlimeCountList[playerUuid];
    // Utils.server.tell("playerRecord: " + playerRecord);

    // /** @type {Internal.CompoundTag} */
    // let beeRecord;
    // const SoulboundBeeList = Utils.server.persistentData.SoulboundBeeList;
    // for (const playerRecordUuid in SoulboundBeeList) {
    // // Utils.server.tell("player record = " + playerRecord);
    // const nextRecordValue = SoulboundBeeList[playerRecordUuid]
    // // Utils.server.tell("player record value = " + nextRecordValue);
    // const playerBeeList = nextRecordValue["Bees"];
    // // Utils.server.tell("player bees = " + playerBeeList);
    // for (const nextBeeUuid in playerBeeList) {
    //     if (nextBeeUuid == stringUuidFromSerum) {
    //         isSouldBoundBee = true;
    //         playerUuid = playerRecordUuid;
    //         beeRecord = playerBeeList[nextBeeUuid]
    //         // Utils.server.tell("Bee is legally soulbound to a player.");
    //         break;}
    // }
    // }

    // // Safeguard against potential cheese.
    // if (!isSouldBoundBee) {
    // // Utils.server.tell("Bee is not soulbound, and so cannot spawn from block");
    // console.log(`Bee is not soulbound, and so cannot spawn from block at ${entity.blockPos}`);
    // entity.level.destroyBlock(entity.blockPos, false);
    // return;
    // }

    const newSlime = event.target.level.createEntity("splendid_slimes:splendid_slime");
    // newBee.setCustomName(Text.of(stringUuidFromBlock).darkGray());
    // newBee.addTag("SoulBoundBeeUUID:" + stringUuidFromSerum);

    const slimeNbtToMerge = NBT.toTagCompound(
        {
            Breed: essenceData.getString("slime_breed")            
        }
    );
    slimeNbtToMerge.putUUID("Owner", playerUuid);
    // Utils.server.tell("slimeNbtToMerge = " + slimeNbtToMerge)

    newSlime.mergeNbt(slimeNbtToMerge);

    // newBee.nbt.putString("type", "productivebees:iron");
    // let uuidStringFromTag;
    // for (const tag of newSlime.tags) { 
    //     if (tag.startsWith("SoulBoundBeeUUID")) {
    //         uuidStringFromTag = tag.split(':')[1];
    //         // Utils.server.tell("Found the UUID: " + UUID.fromString(uuidStringFromTag));
    //         break;
    //     }
    // }

    // if (!uuidStringFromTag) {
    // // Something went wrong with Tags.
    //     newSlime.discard();
    //     entity.level.destroyBlock(entity.blockPos, false);
    //     return;
    // }

    // newSlime.setUUID(stringUuidFromSerum);
    // Utils.server.tell("Owner UUID: " + slimeOwnerUUID)
    
    // This is all handled on Slime's Spawn.
    // let slimeOwnerUUID;
    // if (event.target.nbt.hasUUID("Owner")) {
    //     slimeOwnerUUID = event.target.nbt.getUUID("Owner");   
    // }

    // if (playerUuid == slimeOwnerUUID) {
    //     Utils.server.tell("You own this slime!");
    //     // No addition needs to be done.
    // } else {
    // }

    newSlime.position = event.target.blockPosition();

    if (event.target.isAlive()) {
        event.target.discard();
    }

    // newSlime.setAge(-24000);

    // const customSlimeName = beeRecord["CustomNameString"];
    // if (customSlimeName) {
    // newSlime.setCustomName(Text.of(customSlimeName));
    // }

    newSlime.potionEffects.add("minecraft:glowing", 400, 0, true, false);

    // Utils.server.tell("Bee NBT: " + newBee.nbt);
    
    newSlime.spawn();
    
    Utils.server.runCommandSilent(`execute in ${newSlime.level.getName().getString()} run particle minecraft:cloud ${newSlime.x} ${newSlime.y} ${newSlime.z} 0.5 0.5 0.5 0.1 64 force`);
    Utils.server.runCommandSilent(`execute in ${newSlime.level.getName().getString()} run particle biomancy:falling_blood ${newSlime.x} ${newSlime.y} ${newSlime.z} 0.5 0.5 0.5 0.1 96 force`);
    Utils.server.runCommandSilent(`execute in ${newSlime.level.getName().getString()} run playsound biomancy:entity.flesh_blob.mew_purr master @a ${newSlime.x} ${newSlime.y} ${newSlime.z} 10.0 1.5`);
    Utils.server.runCommandSilent(`execute in ${newSlime.level.getName().getString()} run playsound biomancy:flesh_block.break master @a ${newSlime.x} ${newSlime.y} ${newSlime.z} 10.0 1.6`);
}


