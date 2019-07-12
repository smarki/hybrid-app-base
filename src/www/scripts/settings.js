module.exports = {
    loadJSON: (file, callback) => {
        console.info("loadJSON", file)
        resolveLocalFileSystemURL(`${file}`, (fileEntry) => {
            console.info("resolveLocalFS", fileEntry);
            fileEntry.file(file => {
                const reader = new FileReader();
                reader.onloadend = function() {
                    console.info("Read file", this.result);
                    callback(this.result);
                }
                reader.readAsText(file);
            });
        }, console.error);
    }
};
