
const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const processFolder = async(inputFolderPath, outputOptions) => {
    const files = fs.readdirSync(inputFolderPath);

    for (const file of files) {
        const inputFilePath = path.join(inputFolderPath, file);

        for (const option of outputOptions) {
            const outputFilePath = path.join(option.outputFolderPath, file);

            // Use Jimp to resize the image
            const image = await Jimp.read(inputFilePath);
            if(option.fit == "scaleToFit"){
                await image.scaleToFit(option.width, option.height).writeAsync(outputFilePath);
            } else if(option.fit == "contain"){
                await image.contain(option.width, option.height).writeAsync(outputFilePath);
            } else {
                await image.resize(option.width, option.height).writeAsync(outputFilePath);
            }

            console.log(`Resized and saved: ${outputFilePath}`);
        }
    }
}

processFolder("public/assets/images/covers/full", [
    { outputFolderPath: "public/assets/images/covers/medium", width:1000, height:1000, fit:"scaleToFit"},
    { outputFolderPath: "public/assets/images/covers/small", width:500, height:500, fit:"scaleToFit"}
])

