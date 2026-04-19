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
    const lines = text.split("\n").slice(1);

    const songs = lines.map(line => {
        const [id, title, autor, album, img, duration] = line.split(",");
        return { id, title, autor, album, img, duration };
    });

    return {
        name: "Import CSV",
        songs
    };
};

export const importFromXML = (text) => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "text/xml");

    const name = xml.getElementsByTagName("name")[0]?.textContent || "Import XML";

    const songs = [...xml.getElementsByTagName("song")].map(s => ({
        id: s.getElementsByTagName("id")[0]?.textContent,
        title: s.getElementsByTagName("title")[0]?.textContent,
        autor: s.getElementsByTagName("autor")[0]?.textContent,
        album: s.getElementsByTagName("album")[0]?.textContent,
        img: s.getElementsByTagName("img")[0]?.textContent,
        duration: s.getElementsByTagName("duration")[0]?.textContent
    }));

    return { name, songs };
};