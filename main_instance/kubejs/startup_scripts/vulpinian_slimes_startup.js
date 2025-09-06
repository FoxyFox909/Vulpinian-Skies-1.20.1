const $RemovalReason = Java.loadClass("net.minecraft.world.entity.Entity$RemovalReason");

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
            // Utils.server.tell("Raw Slime Owner UUID: ");
            // Utils.server.tell(rawOwnerUUID);

            // const ownerUUID = UUID.toString(rawOwnerUUID);
            // Utils.server.tell("Processed Slime Owner UUID: " + ownerUUID)

            // if (!ownerUUID) {
            //     Utils.server.tell("Slime does not have an owner.");
            //     return;
            // }
            
            const SlimeCountList = entity.server.persistentData.SlimeCountList;
            const playerRecord = SlimeCountList[rawOwnerUUID];
            playerRecord.CurrentSlimeCount -= 1;
            if (playerRecord.CurrentSlimeCount < 0) {
                playerRecord.CurrentSlimeCount = 0;
            }

            Utils.server.tell("playerRecord: " + playerRecord.CurrentSlimeCount)

            // Utils.server.tell("Slime Removed: " + entity.getRemovalReason() + " UUID:" + entity.getUuid());
            // Utils.server.tell("Slime Removed: " + entity.getRemovalReason() + " UUID:" + entity.getUuid());
            // Utils.server.tell("Slime Changed Dimension2: " + (entity.getRemovalReason() == "CHANGED_DIMENSION"))            
            // Utils.server.tell("Slime Loaded: " + entity.isAlive());
            Utils.server.tell("Slime Unloaded")            
        });
    });
});