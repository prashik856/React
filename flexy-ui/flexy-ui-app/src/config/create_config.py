import json
import os


def get_config(config_file):
    with open(config_file, 'r') as json_file:
        data: dict = json.load(json_file)
    return data


def write_config(config_file, config_data):
    with open(config_file, 'w') as json_file:
        json.dump(config_data, json_file, indent=4)


def main():
    config_file: str = "src/config/config.json"
    config_data: dict = get_config(config_file)

    videos_directory: str = config_data["videosDirectory"]
    model_directories: list = os.listdir(videos_directory)
    models: list = []
    rename: bool = False
    for i in range(len(model_directories)):
        model = model_directories[i]
        if('_' not in model and len(str(model).split('_')) > 1):
            print("Please rename: " + str(model))
            rename = True
        models.append(str(model).replace('_', ' '))
        model_directories[i] = videos_directory + "/" + model_directories[i]

    if rename:
        exit(1)


    # Update config_data
    config_data["models"] = []
    for i in range(len(models)):
        config_data['models'].append(models[i])
        config_data[models[i]] = {}
        config_data[models[i]]["dir"] = str(model_directories[i]).replace('/public/', '')

    # print(config_data)
    # print(model_directories)
    # print(models)

    for i in range(len(model_directories)):
        directory: str = model_directories[i]
        model_videos: list = os.listdir(directory)
        model = models[i]
        
        config_data[model]["videos"] = []
        model_id: str = str(model).replace(" ", '').lower() + str(len(model_videos))
        
        config_data[model]["id"] = model_id
        for j in range(len(model_videos)):
            video_name_original: str = model_videos[j]
            # print(video_name_original)
            video_name_new: str = video_name_original.replace(' ', '').replace('(', '').replace(')', '').replace('[', '').replace(']', '').replace(',', '').replace('-', '').replace('\'', '').replace('’', '').replace('&', '')
            if '.' not in video_name_new:
                # .mp4 not present
                video_name_new = video_name_new + ".mp4"
            # print(video_name_new)

            video_path_original: str = directory + "/" + video_name_original
            video_path_new: str = directory + "/" + video_name_new

            # print(video_path_original)
            # print(video_path_new)

            os.rename(video_path_original, video_path_new)
            video_info: dict = {}
            video_info["path"] = video_path_new.replace("public/", "")
            video_info["name"] = video_name_new
            config_data[models[i]]["videos"].append(video_info)

    write_config("config-user.json", config_data)


main()