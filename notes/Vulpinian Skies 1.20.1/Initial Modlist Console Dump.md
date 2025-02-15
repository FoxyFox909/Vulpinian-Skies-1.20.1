Microsoft Windows [Version 10.0.19045.5371]
(c) Microsoft Corporation. All rights reserved.

C:\Users\me>D:

D:\>cd D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz init
Modpack name [Main Instance]: Vulpinian Skies
Author: Aurora_Luciri
Version [1.0.0]: B1
Minecraft version [1.21.4]: 1.20.1
Mod loader [quilt]: Forge
Forge version [47.3.29]: 47.3.93
Given Forge version cannot be found!

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz init --help
Initialise a packwiz modpack

Usage:
  packwiz init [flags]

Flags:
      --author string               The author of the modpack (omit to define interactively)
      --fabric-latest               Automatically select the latest version of Fabric loader
      --fabric-version string       The Fabric loader version to use (omit to define interactively)
      --forge-latest                Automatically select the latest version of Forge
      --forge-version string        The Forge version to use (omit to define interactively)
  -h, --help                        help for init
      --index-file string           The index file to use (default "index.toml")
  -l, --latest                      Automatically select the latest version of Minecraft
      --liteloader-latest           Automatically select the latest version of LiteLoader
      --liteloader-version string   The LiteLoader version to use (omit to define interactively)
      --mc-version string           The Minecraft version to use (omit to define interactively)
      --modloader string            The mod loader to use (omit to define interactively)
      --name string                 The name of the modpack (omit to define interactively)
      --neoforge-latest             Automatically select the latest version of NeoForge
      --neoforge-version string     The NeoForge version to use (omit to define interactively)
      --quilt-latest                Automatically select the latest version of Quilt loader
      --quilt-version string        The Quilt loader version to use (omit to define interactively)
  -r, --reinit                      Recreate the pack file if it already exists, rather than exiting
  -s, --snapshot                    Use the latest snapshot version with --latest
      --version string              The version of the modpack (omit to define interactively)

Global Flags:
      --cache string              The directory where packwiz will cache downloaded mods (default "C:\\Users\\me\\AppData\\Local\\packwiz\\cache")
      --config string             The config file to use (default "C:\Users\me\AppData\Roaming\packwiz\.packwiz.toml")
      --meta-folder string        The folder in which new metadata files will be added, defaulting to a folder based on the category (mods, resourcepacks, etc; if the category is unknown the current directory is used)
      --meta-folder-base string   The base folder from which meta-folder will be resolved, defaulting to the current directory (so you can put all mods/etc in a subfolder while still using the default behaviour) (default ".")
      --pack-file string          The modpack metadata file to use (default "pack.toml")
  -y, --yes                       Accept all prompts with the default or "yes" option (non-interactive mode) - may pick unwanted options in search results

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz init --forge-latest
Modpack name [Main Instance]: Vulpinian Skies
Author: Aurora_Luciri
Version [1.0.0]: 0.0.1b
Minecraft version [1.21.4]: 1.20.1
Mod loader [quilt]: Forge
index.toml created!
Refreshing index... 0 % [------------------------------------------------------------------------------] done
pack.toml created!

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/additional-banners/download/4773936
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
Bookshelf
Would you like to add them? [Y/n]: Y
Dependency "Bookshelf" successfully added! (Bookshelf-Forge-1.20.1-20.2.13.jar)
Project "Additional Banners" successfully added! (AdditionalBanners-Forge-1.20.1-14.0.4.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/advanced-peripherals/files/5830600
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
CC: Tweaked
Would you like to add them? [Y/n]: Y
Dependency "CC: Tweaked" successfully added! (cc-tweaked-1.20.1-forge-1.113.1.jar)
Project "Advanced Peripherals" successfully added! (AdvancedPeripherals-1.20.1-0.7.41r.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/alternate-current/download/4721662
Looking up CurseForge slug...
Project "Alternate Current" successfully added! (alternate_current-mc1.20-1.7.0.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/amplified-nether/download/5351602
Looking up CurseForge slug...
Project "Amplified Nether" successfully added! (Amplified_Nether_1.20.x_v1.2.5.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz modrinth install https://modrinth.com/mod/antique-atlas-4/version/2.11.1+1.20
Finding dependencies...
Failed to get latest version of dependency Fabric API: no valid versions found
        Use the 'packwiz settings acceptable-versions' command to accept more game versions
        To use datapacks, add a datapack loader mod and specify the datapack-folder option with the folder this mod loads datapacks from
Failed to get latest version of dependency Fabric API: no valid versions found
        Use the 'packwiz settings acceptable-versions' command to accept more game versions
        To use datapacks, add a datapack loader mod and specify the datapack-folder option with the folder this mod loads datapacks from
Dependencies found:
Surveyor Map Framework
Would you like to add them? [Y/n]: Y
Dependency "Surveyor Map Framework" successfully added! (surveyor-0.6.26+1.20.jar)
Project "Antique Atlas 4" successfully added! (antique-atlas-2.11.1+1.20.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/appleskin/files/4770828
Looking up CurseForge slug...
Project "AppleSkin" successfully added! (appleskin-forge-mc1.20.1-2.5.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/aquaculture/download/5919146
Looking up CurseForge slug...
Project "Aquaculture 2" successfully added! (Aquaculture-1.20.1-2.5.3.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/attributefix/download/4911084
Looking up CurseForge slug...
Project "AttributeFix" successfully added! (AttributeFix-Forge-1.20.1-21.0.4.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/ars-creo/download/5171755
Looking up CurseForge slug...
Project "Ars Creo" successfully added! (ars_creo-1.20.1-4.1.0.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/ars-nouveau/download/5894609
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
GeckoLib
Just Enough Items (JEI)
Curios API (Forge/NeoForge)
Would you like to add them? [Y/n]: Y
Dependency "GeckoLib" successfully added! (geckolib-forge-1.20.1-4.7.jar)
Dependency "Just Enough Items (JEI)" successfully added! (jei-1.20.1-forge-15.20.0.106.jar)
Dependency "Curios API (Forge/NeoForge)" successfully added! (curios-forge-5.11.1+1.20.1.jar)
Project "Ars Nouveau" successfully added! (ars_nouveau-1.20.1-4.12.6-all.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/ars-elemental/download/5902462
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Ars Elemental" successfully added! (ars_elemental-1.20.1-0.6.7.7.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/artifacts/download/5693342
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
Cloth Config API (Fabric/Forge/NeoForge)
Architectury API
Would you like to add them? [Y/n]: Y
Dependency "Cloth Config API (Fabric/Forge/NeoForge)" successfully added! (cloth-config-11.1.136-forge.jar)
Dependency "Architectury API" successfully added! (architectury-9.2.14-forge.jar)
Project "Artifacts" successfully added! (artifacts-forge-9.5.13.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/bedspreads/files/4597918
Looking up CurseForge slug...
Project "Bedspreads (Fabric/Forge/Quilt)" successfully added! (bedspreads-forge-6.2.0+1.20.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/nff-girls/download/6182144
Looking up CurseForge slug...
Project "NFF: Girls (Previous Days with Monster Girls)" successfully added! (nffgirls-1.20.1-0.2.28.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/better-combat-by-daedelus/download/5625757
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
playerAnimator
Would you like to add them? [Y/n]: y
Dependency "playerAnimator" successfully added! (player-animation-lib-forge-1.0.2-rc1+1.20.jar)
Project "Better Combat [Fabric & Forge]" successfully added! (bettercombat-forge-1.8.6+1.20.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/better-hurt-timer/download/5036868
Looking up CurseForge slug...
Project "Better Hurt Timer" successfully added! (BetterHurtTimer-1.20.1-8.5.2.8.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/born-in-chaos/download/6053249
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Born in Chaos" successfully added! (born_in_chaos_[Forge]1.20.1_1.6.2_chilling-horror-event.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/botany-pots/download/6002825
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Botany Pots" successfully added! (BotanyPots-Forge-1.20.1-13.0.40.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/botany-trees/download/6002883
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Botany Trees" successfully added! (BotanyTrees-Forge-1.20.1-9.0.18.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/buildersaddition/download/4772826
Looking up CurseForge slug...
Project "Builders Crafts & Additions" successfully added! (buildersaddition-1.20.1-20230928a.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/bygone-nether/download/4747444
Looking up CurseForge slug...
Project "Bygone Nether" successfully added! (bygonenether-1.3.2-1.20.x.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/canary/download/5089991
Looking up CurseForge slug...
Project "Canary" successfully added! (canary-mc1.20.1-0.3.3.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/capsule/download/5032489
Looking up CurseForge slug...
Project "Capsule" successfully added! (Capsule-1.20.1-8.0.105.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/cccbridge/download/4864664
Looking up CurseForge slug...
Project "CC:C Bridge" successfully added! (cccbridge-mc1.20.1-forge-1.6.3.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/choicetheorems-overhauled-village/download/6080449
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
Lithostitched
Would you like to add them? [Y/n]: Y
Dependency "Lithostitched" successfully added! (lithostitched-forge-1.20.1-1.4.4.jar)
Project "ChoiceTheorem's Overhauled Village" successfully added! ([forge]ctov-3.4.11.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/clumps/download/5278538
Looking up CurseForge slug...
Project "Clumps" successfully added! (Clumps-forge-1.20.1-12.0.0.4.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/collectibles/download/6170963
Looking up CurseForge slug...
Project "Collectibles" successfully added! (Collectibles-1.20.x-(v.1.4.9).jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/comforts/download/5503516
Looking up CurseForge slug...
Project "Comforts (Fabric/Forge/Quilt)" successfully added! (comforts-forge-6.4.0+1.20.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/configured/download/5180900
Looking up CurseForge slug...
Project "Configured" successfully added! (configured-forge-1.20.1-2.2.3.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/controlling/download/4646682
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
Searchables
Would you like to add them? [Y/n]: Y
Dependency "Searchables" successfully added! (Searchables-forge-1.20.1-1.0.3.jar)
Project "Controlling" successfully added! (Controlling-forge-1.20.1-12.0.2.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/cooking-for-blockheads/download/6119301
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
Balm
Would you like to add them? [Y/n]: Y
Dependency "Balm" successfully added! (balm-forge-1.20.1-7.3.14-all.jar)
Project "Cooking for Blockheads" successfully added! (cookingforblockheads-forge-1.20.1-16.0.10.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/create/download/5838779
Looking up CurseForge slug...
Project "Create" successfully added! (create-1.20.1-0.5.1.j.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/createaddition/download/6084982
Looking up CurseForge slug...
Project "Create Crafts & Additions" successfully added! (createaddition-1.20.1-1.2.5.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/create-big-cannons/download/6064368
Looking up CurseForge slug...
Finding dependencies...
Error retrieving dependency data: mod not available for the configured Minecraft version(s) (use the 'packwiz settings acceptable-versions' command to accept more) or loader
All dependencies are already added!
Project "Create Big Cannons" successfully added! (createbigcannons-5.8.2-mc.1.20.1-forge.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/create-cafe/download/5237090
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Create Cafe" successfully added! (createcafe-1.2.4-1.20.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/create-central-kitchen/download/5232178
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Create Central Kitchen" successfully added! (create_central_kitchen-1.20.1-for-create-0.5.1.f-1.3.12.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/create-confectionery/download/4835793
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Create Confectionery" successfully added! (create-confectionery1.20.1_v1.1.0.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/create-crystal-clear/download/5402291
Looking up CurseForge slug...
Project "Create: Crystal Clear" successfully added! (Crystal-Clear-2.1-Beta-forge.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/create-deco/download/5293982
Looking up CurseForge slug...
Project "Create Deco" successfully added! (createdeco-2.0.2-1.20.1-forge.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/create-diesel-generators/download/5401010
Looking up CurseForge slug...
Project "Create: Diesel Generators" successfully added! (createdieselgenerators-1.20.1-1.2i.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/create-enchantment-industry/download/5331908
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Create Enchantment Industry" successfully added! (create_enchantment_industry-1.20.1-for-create-0.5.1.f-1.2.9.d.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/create-extended-cogs/download/5229925
Looking up CurseForge slug...
Project "Create: Extended Cogwheels " successfully added! (extendedgears-2.1.1-1.20.1-0.5.1.f-forge.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/create-factory/download/5454843
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Create: Factory" successfully added! (create_factory-0.4b-1.20.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/create-misc-and-things/download/4735326
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Create : Misc & Things" successfully added! (create_misc_and_things_ 1.20.1_4.0A.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/create-steam-n-rails/download/5840017
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Create: Steam 'n' Rails" successfully added! (Steam_Rails-1.6.7+forge-mc1.20.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/culllessleaves-reforged/download/4917082
Looking up CurseForge slug...
Project "CullLessLeaves Reforged (Unofficial)" successfully added! (CullLessLeaves-Reforged-1.20.1-1.0.5.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/delightful/download/6168851
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
Farmer's Delight
Would you like to add them? [Y/n]: y
Dependency "Farmer's Delight" successfully added! (FarmersDelight-1.20.1-1.2.7.jar)
Project "Delightful" successfully added! (Delightful-1.20.1-3.7.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/do-a-barrel-roll/download/5326142
Looking up CurseForge slug...
Project "Do a Barrel Roll" successfully added! (do_a_barrel_roll-forge-3.5.6+1.20.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/dramatic-doors/download/6115857
Looking up CurseForge slug...
Project "Dramatic Doors" successfully added! (DramaticDoors-QuiFabrge-1.20.1-3.2.9_1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/ecologics/download/4857272
Looking up CurseForge slug...
Project "Ecologics" successfully added! (ecologics-forge-1.20.1-2.2.0.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/enchantment-descriptions/download/5855251
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Enchantment Descriptions" successfully added! (EnchantmentDescriptions-Forge-1.20.1-17.1.19.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/ends-delight/download/6180421
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "End's Delight" successfully added! (ends_delight-2.5.1+forge.1.20.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/enlightend/download/4880586
Looking up CurseForge slug...
Project "Enlightend" successfully added! (enlightend-5.0.14-1.20.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/etched/download/5999495
Looking up CurseForge slug...
Project "Etched" successfully added! (etched-3.0.4.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/every-compat/download/6177360
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
Moonlight Lib
Would you like to add them? [Y/n]: Y
Dependency "Moonlight Lib" successfully added! (moonlight-1.20-2.13.61-forge.jar)
Project "Every Compat (Wood Good)" successfully added! (everycomp-1.20-2.7.16.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/exotic-birds/download/4706199
Looking up CurseForge slug...
Project "Exotic Birds" successfully added! (exoticbirds-1.20.1-1.0.0.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/expandability/download/5301414
Looking up CurseForge slug...
Project "ExpandAbility" successfully added! (expandability-9.0.4.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/fairy-lights/download/4961775
Looking up CurseForge slug...
Project "Fairy Lights" successfully added! (fairylights-7.0.0-1.20.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/fancymenu/download/6186995
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
Melody
Konkrete [Forge/NeoForge]
Would you like to add them? [Y/n]: Y
Dependency "Melody" successfully added! (melody_forge_1.0.3_MC_1.20.1-1.20.4.jar)
Dependency "Konkrete [Forge/NeoForge]" successfully added! (konkrete_forge_1.8.0_MC_1.20-1.20.1.jar)
Project "FancyMenu" successfully added! (fancymenu_forge_3.4.4_MC_1.20.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/farmers-respite/download/5543547
Looking up CurseForge slug...
Project "Farmer's Respite" successfully added! (farmersrespite-1.20.1-2.1.2.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/fastfurnace/download/5181098
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
Placebo
Would you like to add them? [Y/n]: Y
Dependency "Placebo" successfully added! (Placebo-1.20.1-8.6.2.jar)
Project "FastFurnace" successfully added! (FastFurnace-1.20.1-8.0.2.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/fastsuite/download/4711435
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "FastSuite" successfully added! (FastSuite-1.20.1-5.0.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/fastworkbench/download/5101229
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "FastWorkbench" successfully added! (FastWorkbench-1.20.1-8.0.4.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/ferritecore/download/4810975
Looking up CurseForge slug...
Project "FerriteCore ((Neo)Forge)" successfully added! (ferritecore-6.0.1-forge.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/framedblocks/download/5629578
Looking up CurseForge slug...
Project "FramedBlocks" successfully added! (FramedBlocks-9.3.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/friends-and-foes-forge/files/6104454
Looking up CurseForge slug...
Project "Friends&Foes (Forge/NeoForge) (Copper Golem,Glare,Crab,Moobloom,Iceologer,Rascal,Tuff Golem,Wildfire,Illusioner)" successfully added! (friendsandfoes-forge-mc1.20.1-3.0.7.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/gateways-to-eternity/download/5703251
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
Apothic Attributes (AttributesLib)
Would you like to add them? [Y/n]: Y
Dependency "Apothic Attributes (AttributesLib)" successfully added! (ApothicAttributes-1.20.1-1.3.7.jar)
Project "Gateways to Eternity" successfully added! (GatewaysToEternity-1.20.1-4.2.6.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/gems-jewels/download/5930265
Looking up CurseForge slug...
Project "Gems & Jewels" successfully added! (gemsnjewels-1.20.1-1.3.5.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/get-it-together-drops/download/4578649
Looking up CurseForge slug...
Project "Get It Together, Drops!" successfully added! (getittogetherdrops-forge-1.20-1.3.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/goblin-traders/files/4802505
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
Framework
Would you like to add them? [Y/n]: Y
Dependency "Framework" successfully added! (framework-forge-1.20.1-0.7.12.jar)
Project "Goblin Traders" successfully added! (goblintraders-forge-1.20.1-1.9.3.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/grappling-hook-mod/download/4645812
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Grappling Hook Mod" successfully added! (grappling_hook_mod-1.20.1-1.20.1-v13.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/grimoire-of-gaia/download/5678610
Looking up CurseForge slug...
Project "Grimoire of Gaia" successfully added! (GrimoireOfGaia4-1.20.1-4.0.0-alpha.11.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/gui-clock/download/5572449
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
Collective
Would you like to add them? [Y/n]: Y
Dependency "Collective" successfully added! (collective-1.20.1-7.91.jar)
Project "GUI Clock" successfully added! (guiclock-1.20.1-4.6.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/gui-compass/files/5572441
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "GUI Compass" successfully added! (guicompass-1.20.1-4.8.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/hexcasting/download/5937033
Looking up CurseForge slug...
Project "Hex Casting" successfully added! (hexcasting-forge-1.20.1-0.11.2.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/hostile-mobs-and-girls/download/6174368
Looking up CurseForge slug...
Project "Hostile Mobs and Girls (HMaG)" successfully added! (hmag-forge-mc1.20.1-9.0.26.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/ice-and-fire-dragons/download/5633453
Looking up CurseForge slug...
Project "Ice and Fire: Dragons" successfully added! (iceandfire-2.1.13-1.20.1-beta-5.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/immersive-paintings/download/4789114
Looking up CurseForge slug...
Project "Immersive Paintings [Fabric/Forge]" successfully added! (immersive_paintings-0.6.7+1.20.1-forge.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/infinitybuttons/download/5330420
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Infinity Buttons" successfully added! (infinitybuttons-1.20.1-4.0.4.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/it-takes-a-pillage/download/4981343
Looking up CurseForge slug...
Project "It Takes a Pillage" successfully added! (takesapillage-1.0.3-1.20.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/jade/download/6106101
Looking up CurseForge slug...
Project "Jade 🔍" successfully added! (Jade-1.20.1-Forge-11.12.3.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/jade-addons/download/5693124
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Jade Addons (Neo/Forge)" successfully added! (JadeAddons-1.20.1-Forge-5.3.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/jei/download/6075247
Looking up CurseForge slug...
Project "Just Enough Items (JEI)" successfully added! (jei-1.20.1-forge-15.20.0.106.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/jei-integration/download/4999754
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "JEI Integration" successfully added! (jeiintegration_1.20.1-10.0.0.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/joy-of-painting/download/5591990
Looking up CurseForge slug...
Project "Joy of Painting" successfully added! (xercapaint-1.20.1-1.0.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/just-enough-effect-descriptions-jeed/download/6172935
Looking up CurseForge slug...
Project "Just Enough Effect Descriptions (JEED)" successfully added! (jeed-1.20-2.2.5.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/kotlin-for-forge/download/5402061
Looking up CurseForge slug...
Project "Kotlin for Forge" successfully added! (kotlinforforge-4.11.0-all.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/kubejs/download/5853326
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
Rhino
Would you like to add them? [Y/n]: Y
Dependency "Rhino" successfully added! (rhino-forge-2001.2.3-build.10.jar)
Project "KubeJS" successfully added! (kubejs-forge-2001.6.5-build.16.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/kubejs-additions/download/5817338
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "KubeJS Additions" successfully added! (kubejsadditions-forge-4.3.3.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/kubejs-create/download/4884096
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "KubeJS Create" successfully added! (kubejs-create-forge-2001.2.5-build.2.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/lendercataclysm/download/6174508
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
Lionfish API
Would you like to add them? [Y/n]: Y
Dependency "Lionfish API" successfully added! (lionfishapi-2.4-Fix.jar)
Project "L_Ender 's Cataclysm" successfully added! (L_Enders_Cataclysm-2.53- 1.20.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/level-text-fix/download/4714763
Looking up CurseForge slug...
Project "Level Text Fix" successfully added! (LevelTextFix-Forge-1.20.1-7.0.2.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/lmft/download/4892299
Looking up CurseForge slug...
Project "Load My F***ing Tags" successfully added! (lmft-1.0.4+1.20.1-forge.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/lootjs/download/5404565
Looking up CurseForge slug...
Project "LootJS: KubeJS Addon" successfully added! (lootjs-forge-1.20.1-2.12.0.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/miners-delight-plus/download/5038950
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Miner's Delight +" successfully added! (miners_delight-1.20.1-1.2.3.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/mmmmmmmmmmmm/download/5737040
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "MmmMmmMmmMmm (Target Dummy)" successfully added! (dummmmmmy-1.20-2.0.2.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/mouse-tweaks/download/5338457
Looking up CurseForge slug...
Project "Mouse Tweaks" successfully added! (MouseTweaks-forge-mc1.20.1-2.25.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/mowzies-mobs/download/6159423
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Mowzie's Mobs" successfully added! (mowziesmobs-1.7.0.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/my-server-is-compatible/download/4580511
Looking up CurseForge slug...
Project "My Server Is Compatible" successfully added! (MyServerIsCompatible-1.20-1.0.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/netherportalfix/download/4939735
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "NetherPortalFix" successfully added! (netherportalfix-forge-1.20-13.0.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/nethers-delight/download/4736227
Looking up CurseForge slug...
Project "Nether's Delight" successfully added! (nethersdelight-1.20.1-4.0.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/nethers-exoticism/download/5825956
Looking up CurseForge slug...
Project "Nether's Exoticism" successfully added! (nether-s-exoticism-1.20.1-1.2.9.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/notenoughrecipebook/download/5760231
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
OctoLib
Would you like to add them? [Y/n]: Y
Dependency "OctoLib" successfully added! (OctoLib-FORGE-0.4.2+1.20.1.jar)
Project "Not Enough Recipe Book [NERB]" successfully added! (Not Enough Recipe Book-FORGE-0.4.1+1.20.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/ob-aquamirae/download/4616373
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
Obscure API (Forge)
Would you like to add them? [Y/n]: Y
Dependency "Obscure API (Forge)" successfully added! (obscure_api-15.jar)
Project "Aquamirae (Forge)" successfully added! (aquamirae-6.API15.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/oh-the-biomes-weve-gone/download/6148394
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
Oh The Trees You'll Grow
CorgiLib
TerraBlender (Forge)
Would you like to add them? [Y/n]: Y
Dependency "Oh The Trees You'll Grow" successfully added! (Oh-The-Trees-Youll-Grow-forge-1.20.1-1.3.4.jar)
Dependency "CorgiLib" successfully added! (Corgilib-Forge-1.20.1-4.0.3.3.jar)
Dependency "TerraBlender (Forge)" successfully added! (TerraBlender-forge-1.20.1-3.0.1.7.jar)
Project "Oh The Biomes We've Gone" successfully added! (Oh-The-Biomes-Weve-Gone-Forge-1.5.4.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-food-core/download/5097798
Looking up CurseForge slug...
Project "Pam's HarvestCraft 2 - Food Core" successfully added! (pamhc2foodcore-1.20.4-1.0.5.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-crops/download/4687624
Looking up CurseForge slug...
Project "Pam's HarvestCraft 2 - Crops" successfully added! (pamhc2crops-1.20-1.0.3.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-trees/download/4625518
Looking up CurseForge slug...
Project "Pam's HarvestCraft 2 - Trees" successfully added! (pamhc2trees-1.20-1.0.2.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-trees/download/4625518
Looking up CurseForge slug...
Project "Pam's HarvestCraft 2 - Trees" successfully added! (pamhc2trees-1.20-1.0.2.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-food-extended/download/5147171
Looking up CurseForge slug...
Project "Pam's HarvestCraft 2 - Food Extended" successfully added! (pamhc2foodextended-1.20.4-1.0.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/patchouli/download/6164575
Looking up CurseForge slug...
Project "Patchouli" successfully added! (Patchouli-1.20.1-84.1-FORGE.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/polymorph/download/5995253
Looking up CurseForge slug...
Project "Polymorph (Fabric/Forge/Quilt)" successfully added! (polymorph-forge-0.49.8+1.20.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/potion-bundles/download/5089759
Looking up CurseForge slug...
Project "Potion Bundles" successfully added! (potionbundles-1.20-1.8.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/quark/download/5594847
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
Zeta
Would you like to add them? [Y/n]: Y
Dependency "Zeta" successfully added! (Zeta-1.0-24.jar)
Project "Quark" successfully added! (Quark-4.0-460.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/quark-oddities/download/5070502
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Quark Oddities" successfully added! (QuarkOddities-1.20.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/rubidium/download/4952685
Looking up CurseForge slug...
Project "Rubidium" successfully added! (rubidium-mc1.20.1-0.7.1a.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/scorched-guns/download/6003683
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "~SCORCHED GUNS 2~  ANIMATION UPDATE ~~~" successfully added! (ScorchedGuns-0.4.1-1.20.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/ranged-wireless-redstone/download/4594334
Looking up CurseForge slug...
Project "Ranged Wireless Redstone" successfully added! (rangedwirelessredstone-1.20-4.0.0.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/regions-unexplored/download/5558225
Looking up CurseForge slug...
Project "Regions Unexplored (forge/fabric)" successfully added! (RegionsUnexploredForge-0.5.6+1.20.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/reliquary-reincarnations/files/all?page=1&pageSize=20&version=1.20.1&gameVersionTypeId=1
Looking up CurseForge slug...
Project "Reliquary Reincarnations" successfully added! (reliquary-1.20.1-2.0.45.1248.jar)
'pageSize' is not recognized as an internal or external command,
operable program or batch file.
'version' is not recognized as an internal or external command,
operable program or batch file.
'gameVersionTypeId' is not recognized as an internal or external command,
operable program or batch file.

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/seamless/files/4980590
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Seamless" successfully added! (seamless-2.2.2-forge-1.20.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/separatedleaves/download/5641682
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Separated Leaves" successfully added! (separatedleaves-2.5.0-forge-1.20.4.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz modrinth install https://modrinth.com/mod/experimental-settings-disabler/version/3.0
Project "Experimental Settings Disabler" successfully added! (experimentalsettingsdisabler-1.20.1-3.0.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz modrinth install https://www.curseforge.com/minecraft/mc-mods/simple-backups/download/5695009
Searching Modrinth...
1) Cancel
2) *UnifiedOptions
3) Animated and Alive
4) CreRaces
5) Armor Statues Companion
6) MattPack
Choose a number:
0
Failed to add project: project selection cancelled

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/simple-backups/download/5695009
Looking up CurseForge slug...
Project "Simple Backups" successfully added! (SimpleBackups-1.20.1-3.1.8.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/slice-and-dice/download/5736627
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Create Slice & Dice" successfully added! (sliceanddice-forge-3.3.0.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/the-graveyard-forge/download/5114579
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "The Graveyard (FORGE/NEOFORGE)" successfully added! (The_Graveyard_3.1_(FORGE)_for_1.20.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/nyctophobia-forge/download/4593078
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Nyctophobia (FORGE)" successfully added! (Nyctophobia_1.6_(FORGE)_for_1.20+.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/the-undergarden/download/5182632
Looking up CurseForge slug...
Project "The Undergarden" successfully added! (The_Undergarden-1.20.1-0.8.14.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/tinkers-construct/download/6111032
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
Mantle
Would you like to add them? [Y/n]: Y
Dependency "Mantle" successfully added! (Mantle-1.20.1-1.11.36.jar)
Project "Tinkers Construct" successfully added! (TConstruct-1.20.1-3.9.1.19.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/tiny-redstone/download/5704248
Looking up CurseForge slug...
Project "Tiny Redstone" successfully added! (tinyredstone-1.20-5.0.3.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/tips/download/5547510
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Tips" successfully added! (Tips-Forge-1.20.1-12.1.8.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/toast-control/download/4711316
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Toast Control" successfully added! (ToastControl-1.20.1-8.0.3.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/too-many-glyphs/download/4813803
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Too Many Glyphs" successfully added! (toomanyglyphs-1.20.1-2.3.2.12345.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/torchmaster/download/5849456
Looking up CurseForge slug...
Project "Torchmaster" successfully added! (torchmaster-20.1.9.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/towns-and-towers/download/4923828
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
Cristel Lib
Would you like to add them? [Y/n]: Y
Dependency "Cristel Lib" successfully added! (cristellib-1.1.6-forge.jar)
Project "Towns and Towers" successfully added! (Towns-and-Towers-1.12-Fabric+Forge.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/travlers-titles/download/5065825
Looking up CurseForge slug...
No projects found!

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/travelers-titles/download/5065825
Looking up CurseForge slug...
Finding dependencies...
Dependencies found:
YUNG's API (Forge)
Would you like to add them? [Y/n]: Y
Dependency "YUNG's API (Forge)" successfully added! (YungsApi-1.20-Forge-4.0.6.jar)
Project "Traveler's Titles (Forge)" successfully added! (TravelersTitles-1.20-Forge-4.0.2.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/tumbleweed/download/4891607
Looking up CurseForge slug...
Project "Tumbleweed" successfully added! (Tumbleweed-forge-1.20.1-0.5.5.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/unusual-end/download/5933123
Looking up CurseForge slug...
Project "Unusual End" successfully added! (unusualend-2.2.3-forge-1.20.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/waystones/download/6156671
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "Waystones" successfully added! (waystones-forge-1.20.1-14.1.9.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/weather-storms-tornadoes/download/5244118
Looking up CurseForge slug...
Project "Weather, Storms & Tornadoes" successfully added! (weather2-1.20.1-2.8.3.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/when-dungeons-arise/download/4983862
Looking up CurseForge slug...
Project "When Dungeons Arise - Forge!" successfully added! (DungeonsArise-1.20.x-2.1.58-release.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/xl-packets/download/4426828
Looking up CurseForge slug...
Project "XL Packets" successfully added! (xlpackets-1.18.2-2.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/yungs-better-dungeons/download/5271360
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "YUNG's Better Dungeons (Forge)" successfully added! (YungsBetterDungeons-1.20-Forge-4.0.4.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/yungs-better-jungle-temples/download/5331760
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "YUNG's Better Jungle Temples (Forge)" successfully added! (YungsBetterJungleTemples-1.20-Forge-2.0.5.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/yungs-better-mineshafts-forge/download/5812192
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "YUNG's Better Mineshafts (Forge)" successfully added! (YungsBetterMineshafts-1.21.1-Forge-5.1.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/yungs-better-nether-fortresses/download/5193465
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "YUNG's Better Nether Fortresses (Forge)" successfully added! (YungsBetterNetherFortresses-1.20-Forge-2.0.6.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/yungs-better-strongholds/download/4769083
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "YUNG's Better Strongholds (Forge)" successfully added! (YungsBetterStrongholds-1.20-Forge-4.0.3.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/yungs-better-ocean-monuments/download/4883003
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "YUNG's Better Ocean Monuments (Forge)" successfully added! (YungsBetterOceanMonuments-1.20-Forge-3.0.4.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/yungs-better-end-island/download/5193815
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "YUNG's Better End Island (Forge)" successfully added! (YungsBetterEndIsland-1.20-Forge-2.0.6.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/yungs-better-witch-huts/download/4769489
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "YUNG's Better Witch Huts (Forge)" successfully added! (YungsBetterWitchHuts-1.20-Forge-3.0.3.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/yungs-better-desert-temples/download/4769439
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "YUNG's Better Desert Temples (Forge)" successfully added! (YungsBetterDesertTemples-1.20-Forge-3.0.3.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/yungs-bridges/download/4769518
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "YUNG's Bridges (Forge)" successfully added! (YungsBridges-1.20-Forge-4.0.3.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz curseforge install https://www.curseforge.com/minecraft/mc-mods/yungs-extras/download/4769514
Looking up CurseForge slug...
Finding dependencies...
All dependencies are already added!
Project "YUNG's Extras (Forge)" successfully added! (YungsExtras-1.20-Forge-4.0.3.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>packwiz modrinth install https://modrinth.com/mod/zombified-player/version/1.2.2-Forge-mc1.20.1
Project "Zombified Player - Kill Your Inner Zombie" successfully added! (ZombifiedPlayer-1.2.2-Forge-mc1.20.1.jar)

D:\Minecraft Stuff\Vulpinian Skies\Vulpinian-Skies-1.20.1\main_instance>