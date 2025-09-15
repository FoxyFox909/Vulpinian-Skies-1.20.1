@echo off
echo Starting stupid Windows tasks.

robocopy ..\main_instance\kubejs\server_scripts  kubejs\server_scripts\robocopied_scripts /mir
robocopy ..\main_instance\kubejs\startup_scripts  kubejs\startup_scripts\robocopied_scripts /mir
echo Pushed main instance scripts to server_instance.

robocopy ..\main_instance\config config /mir
robocopy ..\main_instance\defaultconfigs defaultconfigs /mir
echo Pushed configurations to server_instance.

echo Finished stupid Windsows tasks.
