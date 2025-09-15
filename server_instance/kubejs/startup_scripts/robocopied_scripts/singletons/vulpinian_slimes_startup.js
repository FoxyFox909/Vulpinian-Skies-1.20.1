// const $RemovalReason = Java.loadClass("net.minecraft.world.entity.Entity$RemovalReason");

// Slimes are subtracted from a player's active slimes as they are unloaded or killed.
EntityJSEvents.modifyEntity(event => {
    event.modify("splendid_slimes:splendid_slime", modifyBuilder => {
        modifyBuilder.onRemovedFromWorld(entity => {
            if (entity.level.isClientSide()) {
                return;
            }

            // if (entity.getRemovalReason() == "CHANGED_DIMENSION") {
            //     // Utils.server.tell("Changed dim")
            //     return;
            // }

            if (!entity.nbt.hasUUID("Owner")) {
                // Utils.server.tell("Slime does not have an owner.");
                return
            }
            const rawOwnerUUID = entity.nbt.getUUID("Owner");            
            const SlimeCountList = entity.server.persistentData.SlimeCountList;
            const playerRecord = SlimeCountList[rawOwnerUUID];
            playerRecord.CurrentSlimeCount -= 1;
            if (playerRecord.CurrentSlimeCount < 0) {
                playerRecord.CurrentSlimeCount = 0;
            }

            // Utils.server.tell("Slime Loaded: " + entity.isAlive());
            // Utils.server.tell("Slime Unloaded")            
        });
    });
});