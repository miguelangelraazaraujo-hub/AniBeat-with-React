import * as XLSX from "xlsx";

export const exportToJSON = (playlist) => {
    const blob = new Blob(
        [JSON.stringify(playlist, null, 2)],
        { type: "application/json" }
    );

    downloadFile(blob, `${playlist.name}.json`);
};

export const exportToCSV = (playlist) => {
    const headers = ["id", "title", "autor", "album", "img", "duration"];

    const rows = playlist.songs.map(song =>
        [song.id, song.title, song.autor, song.album, song.img, song.duration].join(",")
    );

    const csv = [headers.join(","), ...rows].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    downloadFile(blob, `${playlist.name}.csv`);
};

export const exportToXML = (playlist) => {
    let xml = `<playlist><name>${playlist.name}</name><songs>`;

    playlist.songs.forEach(song => {
        xml += `
        <song>
            <id>${song.id}</id>
            <title>${song.title}</title>
            <autor>${song.autor}</autor>
            <album>${song.album}</album>
            <img>${song.img}</img>
            <duration>${song.duration}</duration>
        </song>`;
    });

    xml += "</songs></playlist>";

    const blob = new Blob([xml], { type: "application/xml" });
    downloadFile(blob, `${playlist.name}.xml`);
};

export const exportToXLSX = (playlist) => {
    const songs = playlist.songs || [];

    const worksheet = XLSX.utils.json_to_sheet(songs);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Songs");

    XLSX.writeFile(workbook, `${playlist.name}.xlsx`);
};

export const exportToODS = (playlist) => {
    const songs = playlist.songs || [];

    const worksheet = XLSX.utils.json_to_sheet(songs);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Songs");

    XLSX.writeFile(workbook, `${playlist.name}.ods`);
};

const downloadFile = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
};

export const readSpreadsheetFile = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: "array" });

                const sheet = workbook.Sheets[workbook.SheetNames[0]];
                const json = XLSX.utils.sheet_to_json(sheet, {
                    defval: ""
                });

                resolve(json);
            } catch (err) {
                reject(err);
            }
        };

        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
    });
};

export const importFromJSON = (data) => {
    if (typeof data === "string") {
        return JSON.parse(data);
    }
    return data;
};

export const importFromCSV = (text) => {
    const lines = text.split("\n").filter(Boolean);
    const headers = lines[0].split(",");

    const songs = lines.slice(1).map(line => {
        const values = line.split(",");
        const obj = {};

        headers.forEach((h, i) => {
            obj[h] = values[i] ?? "";
        });

        return obj;
    });

    return { name: "CSV Import", songs };
};

export const importFromXML = (text) => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "text/xml");

    const name =
        xml.getElementsByTagName("name")[0]?.textContent || "XML Import";

    const songs = [...xml.getElementsByTagName("song")].map(s => ({
        id: s.getElementsByTagName("id")[0]?.textContent || "",
        title: s.getElementsByTagName("title")[0]?.textContent || "",
        autor: s.getElementsByTagName("autor")[0]?.textContent || "",
        album: s.getElementsByTagName("album")[0]?.textContent || "",
        img: s.getElementsByTagName("img")[0]?.textContent || "",
        duration: s.getElementsByTagName("duration")[0]?.textContent || ""
    }));

    return { name, songs };
};

export const handleImport = async (file) => {
    if (!file) return null;

    let data;

    if (file.name.endsWith(".json")) {
        const text = await readSpreadsheetFile(file);
        data = importFromJSON(text);

    } else if (file.name.endsWith(".csv")) {
        const text = await readSpreadsheetFile(file);
        data = importFromCSV(text);

    } else if (file.name.endsWith(".xml")) {
        const text = await readSpreadsheetFile(file);
        data = importFromXML(text);

    } else if (file.name.endsWith(".xlsx") || file.name.endsWith(".ods")) {
        data = await readSpreadsheetFile(file);
    }

    // normalización única
    if (Array.isArray(data)) {
        return {
            name: "Imported playlist",
            songs: data
        };
    }

    return data;
};