currentDirectory=$(pwd);

# create config
python3 "${currentDirectory}"/src/config/create_config.py;
# cat config-user.json;
mv config-user.json src/config/config-user.json;

npm start