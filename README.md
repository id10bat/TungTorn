# ThungTorn
การ run server react-native อาจเกิดปัญหา port 8081 ชนกับตัว android emulator 
วิธีแก้ 

ปิด server watchman

$ watchman watch-del-all

$ watchman shutdown-server

run set port

$ react-native start --port=8081