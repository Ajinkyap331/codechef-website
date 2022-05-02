import os
from PIL import Image
for file in os.listdir("./src/Images"):
    if(file.split(".")[1] != "gif"):
        image = Image.open("./src/Images/" + file)
        image.convert('RGBA').save("./src/Images/" + file.split(".")[0] + ".webp", "webp")