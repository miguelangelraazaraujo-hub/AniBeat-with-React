export const exportToJSON = (data) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json"
    });
    downloadFile(blob, "datos.json");
};

export const exportToCSV = (data) => {
    const headers = Object.keys(data[0]).join(",");
    const rows = data.map(obj =>
        Object.values(obj).join(",")
    );

    const csv = [headers, ...rows].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    downloadFile(blob, "datos.csv");
};

export const exportToXML = (data) => {
    let xml = "<playlists>";

    data.forEach(item => {
        xml += "<playlist>";
        Object.keys(item).forEach(key => {
            xml += `<${key}>${item[key]}</${key}>`;
        });
        xml += "</playlist>";
    });

    xml += "</playlists>";

    const blob = new Blob([xml], { type: "application/xml" });
    downloadFile(blob, "datos.xml");
};

const downloadFile = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
};

export const readFile = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = reject;
        reader.readAsText(file);
    });
};

export const importFromJSON = (text) => {
    return JSON.parse(text);
};

export const importFromCSV = (text) => {
    const lines = text.split("\n");
    const headers = lines[0].split(",");

    return lines.slice(1).map(line => {
        const values = line.split(",");
        let obj = {};
        headers.forEach((h, i) => {
            obj[h] = values[i];
        });
        return obj;
    });
};

export const importFromXML = (text) => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "text/xml");

    const items = xml.getElementsByTagName("playlist");

    return Array.from(items).map(item => {
        let obj = {};
        Array.from(item.children).forEach(child => {
            obj[child.tagName] = child.textContent;
        });
        return obj;
    });
};

const handleImport = async (file) => {
    const text = await readFile(file);

    let data = [];

    if (file.name.endsWith(".json")) {
        data = importFromJSON(text);
    } else if (file.name.endsWith(".csv")) {
        data = importFromCSV(text);
    } else if (file.name.endsWith(".xml")) {
        data = importFromXML(text);
    }

    // GUARDAR EN FIREBASE
    for (let item of data) {
        await addPlaylist(item);
    }
};